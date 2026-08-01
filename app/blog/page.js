import BlogList from './BlogList'

export const metadata = {
  title: 'Blog — AI 실무자가 쓰는 진짜 기술 블로그',
  description: '마케팅 글이 아닙니다. RAG, LLM, AI Agent, 업무 자동화 프로젝트에서 실제로 부딪힌 문제, 실험 결과, 실패 경험 — 현장에서 배운 것을 그대로 씁니다.',
  alternates: { canonical: 'https://ideal-ai.co.kr/blog' },
  openGraph: {
    title: 'Ideal AI Blog — AI 실무 인사이트',
    description: 'RAG, LLM 파인튜닝, 멀티에이전트, 자동화 워크플로우 — AI 실무자의 진짜 기술 블로그.',
    url: 'https://ideal-ai.co.kr/blog',
  },
}

export default function BlogPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero blog-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">INSIGHTS & KNOWLEDGE</p>
          <h1>AI 실무자가 쓰는<br /><span>진짜 기술 블로그</span></h1>
          <p className="lead">
            마케팅 글이 아닙니다. 프로젝트에서 실제로 부딪힌 문제, 실험 결과, 실패 경험 — 현장에서 배운 것을 그대로 씁니다.
          </p>
        </div>
        <div className="page-hero-visual" style={{position:'absolute', right:'3%', top:'5%', bottom:'-5%', width:'48%', height:'100%', WebkitMaskImage:'linear-gradient(to right, transparent 0%, black 18%, black 80%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)', WebkitMaskComposite:'destination-in', maskImage:'linear-gradient(to right, transparent 0%, black 18%, black 80%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)', maskComposite:'intersect'}} aria-hidden="true">
          <img src="/assets/blog_hero2.png" alt="" className="hero-service-img w-full h-full object-contain object-right" />
        </div>
      </section>

      <BlogList />

      {/* CTA */}
      <section className="cta" id="contact">
        <div>
          <p className="eyebrow">STAY UPDATED</p>
          <h3>AI 실무 인사이트를<br />가장 먼저 받아보세요.</h3>
        </div>
        <a href="mailto:hello@ideal-ai.co.kr">뉴스레터 구독 <span>→</span></a>
      </section>
    </main>
  )
}
