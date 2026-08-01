'use client'
import { useState, useRef, useEffect } from 'react'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '안녕하세요! Ideal AI 상담 어시스턴트입니다. 무엇이든 물어보세요 😊' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function send() {
    const text = input.trim()
    if (!text || loading) return
    setInput('')

    const userMsg = { role: 'user', content: text }
    const next = [...messages, userMsg]
    setMessages(next)
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next.slice(1) }),
      })

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let reply = ''
      setMessages(m => [...m, { role: 'assistant', content: '' }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        reply += decoder.decode(value)
        setMessages(m => {
          const copy = [...m]
          copy[copy.length - 1] = { role: 'assistant', content: reply }
          return copy
        })
      }
    } catch {
      setMessages(m => [...m, { role: 'assistant', content: '죄송합니다, 일시적인 오류가 발생했습니다. 010-3541-9798로 연락해주세요.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Chat window */}
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">AI</div>
              <div>
                <p className="chat-header-name">Ideal AI 상담봇</p>
                <p className="chat-header-status">● 온라인</p>
              </div>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg ${m.role}`}>
                {m.role === 'assistant' && <div className="chat-msg-avatar">AI</div>}
                <div className="chat-bubble">{m.content}</div>
              </div>
            ))}
            {loading && messages[messages.length - 1]?.content === '' && (
              <div className="chat-msg assistant">
                <div className="chat-msg-avatar">AI</div>
                <div className="chat-bubble chat-typing"><span /><span /><span /></div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="chat-input-row">
            <input
              className="chat-input"
              placeholder="무엇이든 물어보세요..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              disabled={loading}
            />
            <button className="chat-send" onClick={send} disabled={loading}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button className="chat-fab" onClick={() => setOpen(o => !o)} aria-label="상담 챗봇 열기">
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
        {!open && <span className="chat-fab-label">AI 상담</span>}
      </button>
    </>
  )
}
