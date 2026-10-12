import './globals.css'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollObserver from '@/components/ScrollObserver'
import { OG_IMAGE, SITE_URL as BASE } from '@/lib/seo'

const GA_MEASUREMENT_ID = 'G-VZGF5EVHZH'

export const metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'Ideal AI: AI 솔루션 전문 기업',
    template: '%s | Ideal AI',
  },
  description: 'RAG, LLM, AI Agent, 업무 자동화. 기획부터 배포까지 평균 8주. 한양대 AI 석사 연구진이 만드는 엔터프라이즈 AI 솔루션.',
  keywords: ['RAG', 'LLM', 'AI 개발', 'AI 솔루션', '업무 자동화', 'AI 컨설팅', 'ChatGPT 도입', 'AI 에이전트', 'LoRA 파인튜닝', '한양대 AI'],
  authors: [{ name: 'Ideal AI', url: BASE }],
  creator: 'Ideal AI',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: BASE,
    siteName: 'Ideal AI',
    title: 'Ideal AI: 비즈니스를 바꾸는 AI, 직접 만듭니다',
    description: 'RAG, LLM, AI Agent, 업무 자동화. 기획부터 배포까지 평균 8주. 수치로 증명된 AI 개발 파트너.',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ideal AI: 비즈니스를 바꾸는 AI',
    description: 'RAG, LLM, AI Agent, 업무 자동화 전문. 기획부터 배포까지 평균 8주.',
    images: [OG_IMAGE.url],
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
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PF74594Z');`,
          }}
        />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_MEASUREMENT_ID}');`,
          }}
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
      </head>
      <body>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PF74594Z" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        <div className="site-shell">
          <ScrollObserver />
          <Header />
          {children}
          <Footer />
        </div>
        <Script
          src="https://chatbot.sdk.eunseon.com/chatbot-widget.js"
          data-bot-id="8f3656de-94a4-4175-9b7f-2912baeb25c4"
          data-bot-token="ibt-8322dd52865789969f5905cf2843522d"
          data-endpoint="https://chatbot.sdk.eunseon.com"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
