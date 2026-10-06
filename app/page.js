import Image from 'next/image'
import Link from 'next/link'
import HeroVisual from '@/components/HeroVisual'

const homeTitle = 'Ideal AI | AI 제품 개발·업무 자동화·AI 컨설팅'
const homeDescription = 'Ideal AI는 기업의 아이디어를 실제 AI 제품으로 만듭니다. RAG 챗봇과 AI 에이전트 개발, 업무 자동화, 데이터 엔지니어링, AI 컨설팅을 기획부터 배포·운영까지 함께합니다.'
const siteUrl = 'https://ideal-tech.co.kr'

const siteStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Ideal AI',
      url: siteUrl,
      logo: `${siteUrl}/assets/logo_color.png`,
      description: homeDescription,
      email: 'esunbest@gmail.com',
      telephone: '+82-10-3541-9798',
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'Ideal AI',
      alternateName: '아이디얼 AI',
      url: siteUrl,
      inLanguage: 'ko-KR',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
  ],
}

export const metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  alternates: { canonical: 'https://ideal-tech.co.kr' },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: siteUrl,
    images: [{ url: '/assets/logo_color.png', width: 1208, height: 248, alt: 'Ideal AI' }],
  },
}

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteStructuredData).replace(/</g, '\\u003c') }}
      />
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="hero-badge">
            <Image src="/assets/hanyang-signature.svg" alt="한양대학교" className="hanyang-logo" width={110} height={32} />
            <span>공학대학원 AI 석사 연구진</span>
            <Image src="/assets/verify-badge.png" alt="인증" className="verify-badge" width={20} height={20} />
          </div>
          <p className="eyebrow">AI SOLUTIONS FOR THE IDEAL FUTURE</p>
          <h1>
            From Idea<br />
            to <span>Ideal AI</span>
          </h1>
          <h2>AI 제품 개발부터 업무 자동화까지, 아이디어를 실제 서비스로 만듭니다.</h2>
          <p className="description">
            Ideal AI는 RAG 챗봇과 AI 에이전트 개발, 업무 자동화, 데이터 엔지니어링,
            AI 컨설팅을 기획부터 배포·운영까지 함께하는 기술 회사입니다.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#services">Our Services <span>→</span></a>
            <a className="btn btn-secondary" href="#cases">View Case Studies <span>→</span></a>
            <a className="btn btn-phone" href="tel:+821035419798">📞 전화 문의</a>
          </div>
        </div>

        <HeroVisual />
        <div className="mesh" aria-hidden="true"></div>
      </section>

      {/* TECH BAND */}
      <section className="tech-band">
        <span className="tech-label">TECH STACK</span>
        <div className="tech-list">
          <span>RAG</span>
          <span className="dot">·</span>
          <span>LLM Fine-tuning</span>
          <span className="dot">·</span>
          <span>AI Agent</span>
          <span className="dot">·</span>
          <span>Vector DB</span>
          <span className="dot">·</span>
          <span>Prompt Engineering</span>
          <span className="dot">·</span>
          <span>LangChain</span>
          <span className="dot">·</span>
          <span>OpenAI / Claude</span>
          <span className="dot">·</span>
          <span>FastAPI</span>
          <span className="dot">·</span>
          <span>Automation RPA</span>
          <span className="dot">·</span>
          <span>LoRA / QLoRA</span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="section-intro reveal">
          <p className="eyebrow">WHAT WE DO</p>
          <h3>모든 <span>AI 아이디어</span>를<br />현실로 만드는 기술</h3>
          <p>
            아이디어 구상부터 기획, 개발, 배포, 운영까지<br />
            AI 제품의 전 과정을 함께합니다.
          </p>
          <a href="/solutions">Learn More <span>→</span></a>
        </div>

        <div className="service-grid">
          <Link className="service-card" href="/services#ai-product">
            <div className="icon-img"><Image src="/assets/button1.png" alt="" width={64} height={64} style={{objectFit:'contain'}} /></div>
            <h4>AI Product<br />Development</h4>
            <p>챗봇, RAG, Agent 등<br />다양한 AI 제품을 개발합니다.</p>
            <span className="service-card-arrow" aria-hidden="true">→</span>
          </Link>

          <Link className="service-card" href="/services#ai-automation">
            <div className="icon-img"><Image src="/assets/button2.png" alt="" width={64} height={64} style={{objectFit:'contain'}} /></div>
            <h4>AI Automation</h4>
            <p>업무 자동화와 프로세스 혁신으로<br />비즈니스 효율을 극대화합니다.</p>
            <span className="service-card-arrow" aria-hidden="true">→</span>
          </Link>

          <Link className="service-card" href="/services#data-ai-engineering">
            <div className="icon-img"><Image src="/assets/button3.png" alt="" width={64} height={64} style={{objectFit:'contain'}} /></div>
            <h4>Data & AI<br />Engineering</h4>
            <p>데이터 수집, 가공, 모델링까지<br />안정적인 AI 인프라를 구축합니다.</p>
            <span className="service-card-arrow" aria-hidden="true">→</span>
          </Link>

          <Link className="service-card" href="/services#ai-consulting">
            <div className="icon-img"><Image src="/assets/button4.png" alt="" width={64} height={64} style={{objectFit:'contain'}} /></div>
            <h4>AI Consulting</h4>
            <p>전략 수립부터 기술 도입까지<br />AI 전환을 함께 설계합니다.</p>
            <span className="service-card-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta reveal" id="contact">
        <div>
          <p className="eyebrow">BUILD YOUR NEXT AI PRODUCT</p>
          <h3>아이디어가 있다면,<br />Ideal AI와 시작하세요.</h3>
        </div>
        <a href="mailto:esunbest@gmail.com">Start a Project <span>→</span></a>
      </section>
    </main>
  )
}
