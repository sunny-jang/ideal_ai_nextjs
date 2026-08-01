import HeroVisual from '@/components/HeroVisual'

export const metadata = {
  title: 'Ideal AI — AI Solutions for the Ideal Future',
  description: 'Ideal AI는 RAG, LLM, Agent, Automation 등 혁신 AI 기술로 당신의 아이디어를 AI 제품으로 실현합니다. 기획부터 배포까지 평균 8주.',
  alternates: { canonical: 'https://ideal-ai.co.kr' },
  openGraph: {
    title: 'Ideal AI — 비즈니스를 바꾸는 AI, 직접 만듭니다',
    description: 'RAG, LLM, AI Agent, 업무 자동화 — 기획부터 배포까지 평균 8주. 수치로 증명된 AI 개발 파트너.',
    url: 'https://ideal-ai.co.kr',
  },
}

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="hero-badge">
            <img src="/assets/hanyang-signature.svg" alt="한양대학교" className="hanyang-logo" />
            <span>공학대학원 AI 석사 연구진</span>
            <img src="/assets/verify-badge.png" alt="인증" className="verify-badge" />
          </div>
          <p className="eyebrow">AI SOLUTIONS FOR THE IDEAL FUTURE</p>
          <h1>
            From Idea<br />
            to <span>Ideal AI</span>
          </h1>
          <h2>당신의 아이디어를 가장 이상적인 AI 제품으로 실현합니다.</h2>
          <p className="description">
            Ideal AI는 RAG, LLM, Agent, Automation 등 혁신 AI 기술을 기반으로
            어떤 AI 프로젝트도 만들어낼 수 있는 기술 회사입니다.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#services">Our Services <span>→</span></a>
            <a className="btn btn-secondary" href="#cases">View Case Studies <span>→</span></a>
            <a className="btn btn-phone" href="tel:+821000000000">📞 전화 문의</a>
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
        <div className="section-intro">
          <p className="eyebrow">WHAT WE DO</p>
          <h3>모든 <span>AI 아이디어</span>를<br />현실로 만드는 기술</h3>
          <p>
            아이디어 구상부터 기획, 개발, 배포, 운영까지<br />
            AI 제품의 전 과정을 함께합니다.
          </p>
          <a href="#solutions">Learn More <span>→</span></a>
        </div>

        <div className="service-grid">
          <article className="service-card">
            <div className="icon-img"><img src="/assets/button1.png" alt="" /></div>
            <h4>AI Product<br />Development</h4>
            <p>챗봇, RAG, Agent 등<br />다양한 AI 제품을 개발합니다.</p>
            <a href="#">→</a>
          </article>

          <article className="service-card">
            <div className="icon-img"><img src="/assets/button2.png" alt="" /></div>
            <h4>AI Automation</h4>
            <p>업무 자동화와 프로세스 혁신으로<br />비즈니스 효율을 극대화합니다.</p>
            <a href="#">→</a>
          </article>

          <article className="service-card">
            <div className="icon-img"><img src="/assets/button3.png" alt="" /></div>
            <h4>Data & AI<br />Engineering</h4>
            <p>데이터 수집, 가공, 모델링까지<br />안정적인 AI 인프라를 구축합니다.</p>
            <a href="#">→</a>
          </article>

          <article className="service-card">
            <div className="icon-img"><img src="/assets/button4.png" alt="" /></div>
            <h4>AI Consulting</h4>
            <p>전략 수립부터 기술 도입까지<br />AI 전환을 함께 설계합니다.</p>
            <a href="#">→</a>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contact">
        <div>
          <p className="eyebrow">BUILD YOUR NEXT AI PRODUCT</p>
          <h3>아이디어가 있다면,<br />Ideal AI와 시작하세요.</h3>
        </div>
        <a href="mailto:hello@ideal-ai.co.kr">Start a Project <span>→</span></a>
      </section>
    </main>
  )
}
