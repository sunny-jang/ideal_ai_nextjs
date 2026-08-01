import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollObserver from '@/components/ScrollObserver'
import ChatWidget from '@/components/ChatWidget'

const BASE = 'https://ideal-ai.co.kr'

export const metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'Ideal AI — AI 솔루션 전문 기업',
    template: '%s — Ideal AI',
  },
  description: 'RAG, LLM, AI Agent, 업무 자동화 — 기획부터 배포까지 평균 8주. 한양대 AI 석사 연구진이 만드는 엔터프라이즈 AI 솔루션.',
  keywords: ['RAG', 'LLM', 'AI 개발', 'AI 솔루션', '업무 자동화', 'AI 컨설팅', 'ChatGPT 도입', 'AI 에이전트', 'LoRA 파인튜닝', '한양대 AI'],
  authors: [{ name: 'Ideal AI', url: BASE }],
  creator: 'Ideal AI',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: BASE,
    siteName: 'Ideal AI',
    title: 'Ideal AI — 비즈니스를 바꾸는 AI, 직접 만듭니다',
    description: 'RAG, LLM, AI Agent, 업무 자동화 — 기획부터 배포까지 평균 8주. 수치로 증명된 AI 개발 파트너.',
    images: [{ url: '/assets/og-image.png', width: 1200, height: 630, alt: 'Ideal AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ideal AI — 비즈니스를 바꾸는 AI',
    description: 'RAG, LLM, AI Agent, 업무 자동화 전문. 기획부터 배포까지 평균 8주.',
    images: ['/assets/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
      </head>
      <body>
        <div className="site-shell">
          <ScrollObserver />
          <Header />
          {children}
          <Footer />
          <ChatWidget />
        </div>
      </body>
    </html>
  )
}
