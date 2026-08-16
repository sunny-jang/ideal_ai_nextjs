import OpenAI from 'openai'
import { SYSTEM_PROMPT } from '@/lib/knowledge'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

async function sendSms(text) {
  const apiKey = process.env.SOLAPI_API_KEY
  const apiSecret = process.env.SOLAPI_API_SECRET
  const from = process.env.SMS_FROM
  const to = process.env.SMS_TO
  if (!apiKey || !apiSecret || !from || !to) return

  const date = new Date().toISOString()
  const salt = Math.random().toString(36).slice(2, 18)
  const enc = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw', enc.encode(apiSecret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  )
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(date + salt))
  const signature = Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, '0')).join('')

  const res = await fetch('https://api.solapi.com/messages/v4/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `HMAC-SHA256 apiKey=${apiKey}, date=${date}, salt=${salt}, signature=${signature}`,
    },
    body: JSON.stringify({ message: { to, from, text } }),
  })
  const resJson = await res.json().catch(() => ({}))
  console.log('[Solapi]', res.status, JSON.stringify(resJson))
}

async function logToSheets(userMessage, botResponse, sessionId) {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK
  if (!url) return
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'chat',
        sessionId,
        contactPhone: '-',
        userMessage,
        botResponse,
        source: 'Ideal',
      }),
    })
  } catch {}
}

export async function POST(req) {
  const { messages, sessionId } = await req.json()
  const lastUser = [...messages].reverse().find(m => m.role === 'user')?.content || ''

  // 첫 번째 메시지일 때만 SMS 발송
  if (messages.length === 1) {
    sendSms(`[Ideal AI 상담] 새 문의\n"${lastUser.slice(0, 60)}"`).catch(() => {})
  }

  const stream = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    stream: true,
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages,
    ],
    max_tokens: 600,
    temperature: 0.4,
  })

  let fullReply = ''
  const encoder = new TextEncoder()

  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content || ''
        if (text) {
          fullReply += text
          controller.enqueue(encoder.encode(text))
        }
      }
      controller.close()
      logToSheets(lastUser, fullReply, sessionId || '-')
    },
  })

  return new Response(readable, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
