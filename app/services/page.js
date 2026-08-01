import Image from 'next/image'
import CountUp from '@/components/CountUp'

export const metadata = {
  title: 'Services — AI 개발 · 자동화 · 컨설팅',
  description: 'AI Product Development, Process Automation, Data Engineering, AI Consulting — 기획부터 배포까지 평균 8주, 도입 후 업무 효율 평균 60% 향상.',
  alternates: { canonical: 'https://ideal-ai.co.kr/services' },
  openGraph: {
    title: 'Ideal AI 서비스 — 비즈니스를 바꾸는 4가지 AI 솔루션',
    description: 'AI 개발, 업무 자동화, 데이터 엔지니어링, AI 컨설팅. 기획부터 배포까지 평균 8주.',
    url: 'https://ideal-ai.co.kr/services',
  },
}

export default function ServicesPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">WHAT WE DO</p>
          <h1>비즈니스를 바꾸는<br /><span>AI, 직접 만듭니다</span></h1>
          <p className="lead">
            기획부터 배포까지 평균 8주. 도입 후 업무 효율 평균 60% 향상 —
            수치로 증명된 AI 개발 파트너가 당신의 비즈니스 문제를 함께 해결합니다.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">프로젝트 시작하기 <span>→</span></a>
            <a className="btn btn-secondary" href="/cases">사례 보기 <span>→</span></a>
          </div>
        </div>
        <div className="page-hero-visual" style={{position:'absolute', right:'5%', top:'2%', bottom:'-8%', width:'66%', height:'110%'}} aria-hidden="true">
          <Image src="/assets/service_top.png" alt="" fill style={{objectFit:'contain', objectPosition:'center right'}} sizes="60vw" priority />
        </div>
      </section>

      {/* 4-COLUMN SERVICE CARDS */}
      <section className="inner-section" id="service-detail">
        <div className="section-header">
          <p className="eyebrow">CORE SERVICES</p>
          <h2>4가지 핵심 <span>서비스 영역</span></h2>
          <p>각 서비스는 독립적으로 제공되거나, 통합 AI 전환 패키지로 결합됩니다. 어디서 시작해야 할지 모르겠다면 — 컨설팅부터 시작하세요.</p>
        </div>

        <div className="svc-card-grid" data-stagger="80">
          {/* 01 */}
          <div className="svc-card">
            <div className="svc-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
            <p className="svc-num-tag"><span className="svc-num">01</span> AI PRODUCT DEVELOPMENT</p>
            <h3>고객 응대 자동화,<br />CS 비용을 절반으로</h3>
            <p className="svc-desc">챗봇, RAG, LLM Agent — 기술이 아닌 결과로 말합니다. 24시간 무중단 AI가 고객 응대를 대신하고, 팀은 진짜 중요한 일에 집중합니다.</p>
            <ul className="svc-list">
              <li>RAG 기반 사내 지식 챗봇 구축</li>
              <li>LLM Agent — 멀티스텝 업무 수행</li>
              <li>개인화 추천 엔진 — 고객 경험 향상</li>
            </ul>
            <span className="svc-arrow">자세히 알아보기 →</span>
          </div>

          {/* 02 */}
          <div className="svc-card">
            <div className="svc-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
            <p className="svc-num-tag"><span className="svc-num">02</span> PROCESS AUTOMATION</p>
            <h3>반복 업무 90% 자동화,<br />사람은 고부가가치에만</h3>
            <p className="svc-desc">매일 똑같이 반복되는 작업은 AI에게. 분류, 추출, 생성, 발송 — 사람이 했던 루틴을 자동화 파이프라인이 대신합니다.</p>
            <ul className="svc-list">
              <li>문서 분류 · 데이터 추출 · 리포트 자동 생성</li>
              <li>RPA + AI 하이브리드 자동화</li>
              <li>알림/발송 자동화 (Slack, Notion 연동)</li>
            </ul>
            <span className="svc-arrow">자세히 알아보기 →</span>
          </div>

          {/* 03 */}
          <div className="svc-card">
            <div className="svc-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <ellipse cx="12" cy="5" rx="9" ry="3"/>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
              </svg>
            </div>
            <p className="svc-num-tag"><span className="svc-num">03</span> DATA &amp; AI ENGINEERING</p>
            <h3>흩어진 데이터를<br />AI가 쓸 수 있는 자산으로</h3>
            <p className="svc-desc">좋은 AI는 좋은 데이터에서 나옵니다. 사내에 쌓인 데이터가 AI 모델의 원료가 되도록 파이프라인과 인프라를 설계합니다.</p>
            <ul className="svc-list">
              <li>데이터 수집 · 정제 · 가공 파이프라인 구축</li>
              <li>벡터 DB 기반 시맨틱 검색 구축</li>
              <li>LLM 파인튜닝 · LoRA 등 모델 최적화</li>
            </ul>
            <span className="svc-arrow">자세히 알아보기 →</span>
          </div>

          {/* 04 */}
          <div className="svc-card">
            <div className="svc-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <p className="svc-num-tag"><span className="svc-num">04</span> AI CONSULTING</p>
            <h3>AI 도입 실패율 70% —<br />전략 없이 시작하면 돈만 낭비</h3>
            <p className="svc-desc">AI 도입의 가장 큰 리스크는 기술이 아닌 방향입니다. 조직 현황을 진단하고, ROI를 정확히 계산하고, 실패 없는 로드맵을 설계합니다.</p>
            <ul className="svc-list">
              <li>AI 도입 타당성 분석 &amp; ROI 설계</li>
              <li>기술 스택 선정 · 아키텍처 설계</li>
              <li>PoC 기획 &amp; 실행 지원</li>
            </ul>
            <span className="svc-arrow">자세히 알아보기 →</span>
          </div>
        </div>

        {/* SERVICE IMAGES */}
        <div className="svc-img-strip">
          <div className="svc-img-item" style={{position:'relative'}}>
            <Image src="/assets/service_01.png" alt="AI Product Development" fill style={{objectFit:'cover'}} sizes="25vw" />
          </div>
          <div className="svc-img-item" style={{position:'relative'}}>
            <Image src="/assets/service_02.png" alt="AI Automation" fill style={{objectFit:'cover'}} sizes="25vw" />
          </div>
          <div className="svc-img-item" style={{position:'relative'}}>
            <Image src="/assets/service_03.png" alt="Data & AI Engineering" fill style={{objectFit:'cover'}} sizes="25vw" />
          </div>
          <div className="svc-img-item" style={{position:'relative'}}>
            <Image src="/assets/service_04.png" alt="AI Consulting" fill style={{objectFit:'cover'}} sizes="25vw" />
          </div>
        </div>
      </section>

      {/* PROCESS — TIMELINE */}
      <section className="inner-section pt-0">
        <div className="section-header">
          <p className="eyebrow">HOW WE WORK</p>
          <h2>첫 미팅부터 <span>프로덕션까지 8주</span></h2>
          <p>불필요한 단계 없이, 결과에 직결되는 4단계만 운영합니다. 각 단계마다 명확한 산출물과 승인 기준이 있습니다.</p>
        </div>

        <div className="process-timeline">
          <div className="process-node">
            <div className="p-circle">01</div>
            <h4>Discovery &amp; Scoping</h4>
            <p>비즈니스 목표, 데이터 현황, 기술 요건 정의의 문제점과 우선순위 도출</p>
          </div>
          <div className="process-node">
            <div className="p-circle">02</div>
            <h4>Design &amp; PoC</h4>
            <p>AI 아키텍처 설계 및 PoC 프로토타입 구축 핵심 기능 검증 및 피드백 반영</p>
          </div>
          <div className="process-node">
            <div className="p-circle">03</div>
            <h4>Build &amp; Iterate</h4>
            <p>본 개발 및 통합, 반복적 개선 성능 최적화 및 안정화</p>
          </div>
          <div className="process-node">
            <div className="p-circle">04</div>
            <h4>Deploy &amp; Scale</h4>
            <p>프로덕션 배포 및 모니터링 체계 구축 지속적 개선 및 고도화</p>
          </div>
        </div>
      </section>

      {/* STATS WITH ICONS */}
      <section className="inner-section pt-0 pb-20">
        <div className="svc-stats">
          <div className="svc-stat">
            <div className="svc-stat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                <path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
              </svg>
            </div>
            <span className="s-num"><CountUp to={3} suffix="명+" /></span>
            <span className="s-label">한양대 AI 석사팀</span>
          </div>
          <div className="svc-stat">
            <div className="svc-stat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <span className="s-num"><CountUp to={8} suffix="주" /></span>
            <span className="s-label">기획~배포 평균 기간</span>
          </div>
          <div className="svc-stat">
            <div className="svc-stat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
            </div>
            <span className="s-num"><CountUp to={60} suffix="%" /></span>
            <span className="s-label">평균 업무 효율 향상</span>
          </div>
          <div className="svc-stat">
            <div className="svc-stat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <span className="s-num"><CountUp to={100} suffix="%" /></span>
            <span className="s-label">석사급 직접 참여</span>
          </div>
        </div>
      </section>

      {/* CTA DARK */}
      <div className="cta-dark" id="contact">
        <div>
          <p className="eyebrow">BUILD YOUR NEXT AI PRODUCT</p>
          <h3>아이디어가 있다면,<br />Ideal AI와 시작하세요.</h3>
        </div>
        <div className="cta-dark-visual" aria-hidden="true">
          <Image src="/assets/service_bototm.png" alt="" width={400} height={300} style={{width:'100%', height:'auto'}} />
        </div>
        <a href="mailto:hello@ideal-ai.co.kr">Start a Project <span>→</span></a>
      </div>
    </main>
  )
}
