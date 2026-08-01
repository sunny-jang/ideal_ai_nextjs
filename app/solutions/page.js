export const metadata = {
  title: 'Solutions — Ideal AI',
  description: 'Ideal AI 솔루션 — 산업별 AI 솔루션과 기술 스택',
}

export default function SolutionsPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero solution-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">INDUSTRY AI SOLUTIONS</p>
          <h1>당신의 산업에 맞는<br /><span>AI, 이미 검증됐습니다</span></h1>
          <p className="lead">
            금융, 제조, 유통, 의료, 법률, 교육 — 각 산업의 실제 페인포인트를 해결한 경험이 있습니다.
            도메인 지식 없이 기술만 아는 팀과는 처음부터 다릅니다.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#industries">산업별 솔루션 <span>→</span></a>
            <a className="btn btn-secondary" href="#tech-stack">기술 스택 보기 <span>→</span></a>
          </div>
        </div>
      </section>

      {/* INDUSTRY SOLUTIONS */}
      <section className="inner-section" id="industries">
        <div className="section-header">
          <p className="eyebrow">BY INDUSTRY</p>
          <h2>산업별 <span>맞춤 AI 솔루션</span></h2>
          <p>산업마다 문제의 구조가 다릅니다. 도메인을 이해한 팀이 설계한 AI는 결과가 다릅니다.</p>
        </div>

        <div className="industry-grid" data-stagger="80">
          <div className="industry-card">
            <div className="ind-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <div className="ind-sub">Finance</div>
            <h3>금융</h3>
            <p>여신 심사 3일에서 3분으로, 이상거래 감지 정확도 99.2% — 규제 환경을 지키면서도 속도와 정확도를 동시에 잡습니다.</p>
            <ul className="use-cases">
              <li>AI 여신 심사 자동화 — 심사 시간 90% 단축, 오심율 최소화</li>
              <li>실시간 이상거래 탐지 — 패턴 기반 금융 사기 방지 시스템</li>
              <li>계약서 · 보고서 자동 분석 — 컴플라이언스 리스크 즉시 감지</li>
            </ul>
          </div>

          <div className="industry-card">
            <div className="ind-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                <line x1="12" y1="12" x2="12" y2="16"/>
                <line x1="10" y1="14" x2="14" y2="14"/>
              </svg>
            </div>
            <div className="ind-sub">Manufacturing</div>
            <h3>제조</h3>
            <p>설비 고장을 예측해 다운타임 제로, 비전 AI로 불량률 40% 감소 — 사람의 눈을 AI가 대신합니다.</p>
            <ul className="use-cases">
              <li>컴퓨터 비전 불량 탐지 — 수작업 검사보다 15배 빠르고 99% 정확</li>
              <li>예지 보전 AI — 고장 나기 전에 미리 알리는 설비 모니터링</li>
              <li>생산 라인 최적화 — AI 시뮬레이션으로 병목 구간 사전 제거</li>
            </ul>
          </div>

          <div className="industry-card">
            <div className="ind-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            </div>
            <div className="ind-sub">Retail &amp; E-Commerce</div>
            <h3>유통 · 이커머스</h3>
            <p>개인화 추천으로 전환율 3배, AI 수요 예측으로 재고 과잉 30% 감소 — 데이터가 매출이 됩니다.</p>
            <ul className="use-cases">
              <li>개인화 추천 엔진 — 클릭 한 번의 이면을 읽는 AI</li>
              <li>AI 수요 예측 · 재고 최적화 — 팔릴 것만 채우는 스마트 재고 관리</li>
              <li>24시간 CS 챗봇 · VOC 자동 분석 — 고객의 말을 놓치지 않는 AI</li>
            </ul>
          </div>

          <div className="industry-card">
            <div className="ind-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <div className="ind-sub">Healthcare</div>
            <h3>의료 · 헬스케어</h3>
            <p>의사의 행정 업무 70% 감소, 진료에만 집중 — AI가 서류를 처리하는 동안 의사는 환자를 봅니다.</p>
            <ul className="use-cases">
              <li>의료 영상(X-ray, MRI) AI 보조 분석 — 놓치기 쉬운 소견을 먼저 포착</li>
              <li>EMR 기반 진료 기록 자동 요약 — 진료 준비 시간 70% 단축</li>
              <li>처방전 · 의료 문서 자동 분류 — 행정 업무 부담 없는 진료 환경</li>
            </ul>
          </div>

          <div className="industry-card">
            <div className="ind-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
            <div className="ind-sub">Legal</div>
            <h3>법률</h3>
            <p>계약서 검토 시간 80% 단축, 리스크 조항 자동 감지 — 변호사는 전략에, AI는 검토에.</p>
            <ul className="use-cases">
              <li>계약서 리스크 조항 자동 탐지 — 수백 페이지를 3분 안에 검토</li>
              <li>RAG 기반 판례 · 법령 검색 — 10년치 판례도 즉시 검색</li>
              <li>법률 문서 초안 자동 생성 — 표준 계약서 작성 시간 90% 단축</li>
            </ul>
          </div>

          <div className="industry-card">
            <div className="ind-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <div className="ind-sub">Education</div>
            <h3>교육</h3>
            <p>학습자 1:1 맞춤 커리큘럼, 완주율 2배 향상 — 30명 강의실에서 30개의 맞춤 학습이 가능합니다.</p>
            <ul className="use-cases">
              <li>학습자 수준별 맞춤 콘텐츠 추천 — 이탈 전에 먼저 개입하는 AI</li>
              <li>24시간 AI 튜터 · 질의응답 챗봇 — 강사 없이도 막히지 않는 학습</li>
              <li>서술형 답안 자동 채점 · 피드백 — 즉각적인 학습 루프 구현</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="inner-section pt-0" id="tech-stack">
        <div className="tech-section">
          <div className="section-header mb-10">
            <p className="eyebrow">TECHNOLOGY</p>
            <h2>핵심 <span>기술 스택</span></h2>
            <p>유행이 아닌 검증을 기준으로 선택합니다. 각 기술이 왜 필요한지, 어디서 효과가 나는지 정확히 알고 씁니다.</p>
          </div>

          <div className="tech-categories">
            <div className="tech-category">
              <h4>LLM &amp; Foundation Models</h4>
              <div className="pills-row">
                {['GPT-4o', 'Claude 3.5', 'Gemini', 'Llama 3', 'Fine-tuning', 'LoRA / QLoRA'].map(t => (
                  <span key={t} className="tech-pill-v2"><span className="pill-dot purple"></span>{t}</span>
                ))}
              </div>
            </div>
            <div className="tech-category">
              <h4>RAG &amp; Vector Retrieval</h4>
              <div className="pills-row">
                {['RAG', 'Hybrid Search', 'Re-ranking', 'Pinecone', 'Weaviate', 'pgvector', 'Chroma'].map(t => (
                  <span key={t} className="tech-pill-v2"><span className="pill-dot pink"></span>{t}</span>
                ))}
              </div>
            </div>
            <div className="tech-category">
              <h4>AI Agent &amp; Automation</h4>
              <div className="pills-row">
                {['LangChain', 'LangGraph', 'AutoGen', 'n8n', 'Multi-Agent', 'Tool Use', 'MCP'].map(t => (
                  <span key={t} className="tech-pill-v2"><span className="pill-dot blue"></span>{t}</span>
                ))}
              </div>
            </div>
            <div className="tech-category">
              <h4>MLOps &amp; Infrastructure</h4>
              <div className="pills-row">
                {['AWS / GCP', 'Docker', 'Kubernetes', 'MLflow', 'FastAPI', 'Airflow'].map(t => (
                  <span key={t} className="tech-pill-v2"><span className="pill-dot green"></span>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="inner-section pt-0 pb-20">
        <div className="section-header">
          <p className="eyebrow">OUR APPROACH</p>
          <h2>Ideal AI만의 <span>접근 방식</span></h2>
          <p>기술은 수단입니다. 우리가 집착하는 것은 기술이 아닌 당신의 비즈니스 성과입니다.</p>
        </div>

        <div className="approach-grid">
          <div className="approach-card">
            <div className="ap-num">01</div>
            <h4>Research-Driven</h4>
            <p>한양대 석사 연구원들이 최신 AI 논문을 직접 프로젝트에 적용합니다. 시장에 나온 지 6개월 된 기술을 실무에 씁니다.</p>
          </div>
          <div className="approach-card">
            <div className="ap-num">02</div>
            <h4>Business-First</h4>
            <p>모든 기술 결정은 KPI로 정당화합니다. ROI가 계산되지 않는 AI는 제안하지 않습니다.</p>
          </div>
          <div className="approach-card">
            <div className="ap-num">03</div>
            <h4>Agile Delivery</h4>
            <p>2주 단위로 작동하는 결과물을 납품합니다. 3개월 후 데모가 아닌, 2주 후 실제 동작하는 AI를 봅니다.</p>
          </div>
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
