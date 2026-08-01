import Image from 'next/image'

export const metadata = {
  title: 'About — 한양대 AI 석사 출신 전문가 팀',
  description: '한양대학교 AI 공학대학원 출신 석사 전문가들이 모여 만든 Ideal AI. NLP, RAG, LLM 파인튜닝, MLOps 전공 연구 경험을 실무에 직접 적용합니다.',
  alternates: { canonical: 'https://ideal-ai.co.kr/about' },
  openGraph: {
    title: 'Ideal AI 팀 소개 — 연구실에서 프로덕션까지 끝까지 책임지는 팀',
    description: '한양대 AI 공학대학원 출신 석사 전문가 팀. NLP · RAG · LLM 파인튜닝 · MLOps 전공.',
    url: 'https://ideal-ai.co.kr/about',
  },
}

const PersonIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

const GlobeIcon = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="globeGrad" cx="40%" cy="35%" r="60%">
        <stop offset="0%" stopColor="#c4b5fd"/>
        <stop offset="50%" stopColor="#7c3aed"/>
        <stop offset="100%" stopColor="#1e1b4b"/>
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="88" fill="url(#globeGrad)" opacity="0.9"/>
    <ellipse cx="100" cy="100" rx="88" ry="30" stroke="rgba(167,139,250,0.4)" strokeWidth="1.5" fill="none"/>
    <ellipse cx="100" cy="100" rx="60" ry="88" stroke="rgba(167,139,250,0.3)" strokeWidth="1.5" fill="none"/>
    <ellipse cx="100" cy="68" rx="88" ry="44" stroke="rgba(167,139,250,0.25)" strokeWidth="1" fill="none"/>
    <ellipse cx="100" cy="132" rx="88" ry="44" stroke="rgba(167,139,250,0.25)" strokeWidth="1" fill="none"/>
    <line x1="12" y1="100" x2="188" y2="100" stroke="rgba(167,139,250,0.3)" strokeWidth="1"/>
    <line x1="100" y1="12" x2="100" y2="188" stroke="rgba(167,139,250,0.3)" strokeWidth="1"/>
    <circle cx="100" cy="100" r="90" stroke="rgba(167,139,250,0.2)" strokeWidth="1.5" fill="none"/>
    <circle cx="148" cy="56" r="6" fill="rgba(240,84,193,0.9)"/>
    <circle cx="60" cy="130" r="4" fill="rgba(120,87,255,0.8)"/>
    <circle cx="140" cy="148" r="5" fill="rgba(74,102,245,0.9)"/>
  </svg>
)

const BuildingIcon = () => (
  <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="60" width="120" height="100" rx="4" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none"/>
    <rect x="50" y="20" width="80" height="45" rx="4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none"/>
    <line x1="90" y1="20" x2="90" y2="160" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
    <line x1="30" y1="60" x2="150" y2="60" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
    <rect x="42" y="72" width="18" height="20" rx="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none"/>
    <rect x="72" y="72" width="18" height="20" rx="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none"/>
    <rect x="102" y="72" width="18" height="20" rx="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none"/>
    <rect x="42" y="104" width="18" height="20" rx="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none"/>
    <rect x="72" y="104" width="18" height="20" rx="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none"/>
    <rect x="102" y="104" width="18" height="20" rx="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none"/>
    <rect x="75" y="136" width="30" height="24" rx="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none"/>
    <line x1="20" y1="160" x2="160" y2="160" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
    <rect x="62" y="30" width="12" height="12" rx="1" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none"/>
    <rect x="82" y="30" width="12" height="12" rx="1" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none"/>
    <rect x="102" y="30" width="12" height="12" rx="1" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none"/>
    <polygon points="90,4 130,20 50,20" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none"/>
  </svg>
)

export default function AboutPage() {
  const team = [
    { name: '장은선', role: 'AI Engineer', degree: '한양대 AI 공학 석사', spec: 'RAG 챗봇 구축 전문', degreeImg: '/assets/degree_eunseon.png' },
    { name: '홍유정', role: 'AI Engineer', degree: '한양대 AI 공학 석사', spec: '개인화 AI·추천 시스템 전문', degreeImg: '/assets/degree_youjung.png' },
    { name: '김준규', role: 'AI Engineer', degree: '한양대 AI 공학 석사', spec: '강화학습·에이전트 시스템 전문', degreeImg: null },
  ]

  const expertise = [
    {
      label: 'LLM & Foundation Models',
      desc: 'GPT-4o, Claude 3.5, Gemini, Llama 3 — 목적에 맞는 모델 선택부터 파인튜닝·LoRA·QLoRA까지',
      svg: <><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v4M7.5 17.5l-2 1.5M16.5 17.5l2 1.5"/><path d="M12 11L7.5 17.5M12 11l4.5 6.5"/></>,
    },
    {
      label: 'RAG & Vector Retrieval',
      desc: '단순 벡터 검색을 넘어 Hybrid Search, Re-ranking, Multi-hop 추론까지 — 정확도와 속도를 동시에',
      svg: <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>,
    },
    {
      label: 'AI Agent & Automation',
      desc: 'LangGraph, AutoGen, n8n 기반 멀티에이전트 시스템 — 복잡한 업무를 자율적으로 처리하는 AI',
      svg: <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></>,
    },
    {
      label: 'Computer Vision',
      desc: 'CNN, Transformer 기반 실시간 비전 AI — 불량 탐지, 의료 영상 분석, 객체 인식',
      svg: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>,
    },
    {
      label: 'MLOps & Infrastructure',
      desc: 'AWS · GCP, Docker, Kubernetes, Airflow — 실험실 AI가 아닌 프로덕션에서 살아남는 인프라',
      svg: <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></>,
    },
    {
      label: 'Data Engineering',
      desc: '데이터 수집 · 정제 · Feature Store, ETL/ELT 및 데이터 파이프라인 구축',
      svg: <><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>,
    },
    {
      label: 'Research & Innovation',
      desc: '최신 AI 논문 연구 및 기술 검증, 프로토타입 개발 및 PoC 진행',
      svg: <><circle cx="12" cy="12" r="1"/><circle cx="12" cy="12" r="5"/><line x1="12" y1="2" x2="12" y2="7"/><line x1="12" y1="17" x2="12" y2="22"/><line x1="2" y1="12" x2="7" y2="12"/><line x1="17" y1="12" x2="22" y2="12"/></>,
    },
    {
      label: 'Business Applications',
      desc: '업무 흐름과 데이터에 최적화된 AI 솔루션 개발 및 배포',
      svg: <><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M8 21h8M12 17v4"/><line x1="7" y1="8" x2="7" y2="13"/><line x1="12" y1="6" x2="12" y2="13"/><line x1="17" y1="10" x2="17" y2="13"/></>,
    },
  ]

  return (
    <main>
      {/* PAGE HERO — dark */}
      <section className="page-hero about-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">WHO WE ARE</p>
          <h1>연구실에서 프로덕션까지,<br /><span>끝까지 책임지는 팀</span></h1>
          <p className="lead">
            한양대학교 AI 석사 연구원들이 창업했습니다. 논문을 쓰는 연구자이자,
            실제 비즈니스 문제를 푸는 엔지니어로서 — 이론과 실무 사이의 간극을 없앱니다.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">프로젝트 문의하기 <span>→</span></a>
            <a className="btn btn-secondary" href="/cases">성공 사례 보기 <span>→</span></a>
          </div>
        </div>
        <div className="page-hero-visual" style={{position:'absolute', right:'-4%', top:'5%', bottom:'-5%', width:'50%', height:'100%'}} aria-hidden="true">
          <Image src="/assets/about top.png" alt="" fill style={{objectFit:'contain', objectPosition:'center right'}} sizes="50vw" priority />
        </div>
      </section>

      {/* STATS ROW */}
      <section className="inner-section pt-8 pb-8">
        <div className="about-stats-v2">
          <div className="astat-item">
            <div className="astat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div><div className="astat-num">2019</div><div className="astat-lbl">창립 연도</div></div>
          </div>
          <div className="astat-item">
            <div className="astat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div><div className="astat-num">50+</div><div className="astat-lbl">전문 엔지니어</div></div>
          </div>
          <div className="astat-item">
            <div className="astat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
            </div>
            <div><div className="astat-num">20+</div><div className="astat-lbl">기업 고객</div></div>
          </div>
          <div className="astat-item">
            <div className="astat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <div><div className="astat-num">12개국</div><div className="astat-lbl">인프라 운영</div></div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="inner-section pt-0" id="team">
        <div className="team-hdr-row">
          <div>
            <p className="eyebrow">OUR TEAM</p>
            <h2>AI를 <span>만드는 사람들</span></h2>
          </div>
          <p style={{color:'var(--muted)', fontSize:14.5, lineHeight:1.75, marginTop:8}}>
            각 분야의 전문가들이 하나의 팀으로 움직입니다.<br />
            연구와 실무, 기술과 비즈니스 — 두 세계를 모두 이해합니다.
          </p>
        </div>

        <div className="team-grid-v2">
          {team.map((member) => (
            <div className="tcv2" key={member.name}>
              <div className="tcv2-avatar"><PersonIcon /></div>
              <div className="tcv2-name">{member.name}</div>
              <div className="tcv2-role">{member.role}</div>
              <div className="tcv2-bio">{member.degree}<br />{member.spec}</div>
              <div className="tcv2-degree-placeholder" style={{position:'relative'}}>
                {member.degreeImg
                  ? <Image src={member.degreeImg} alt={`${member.name} 학위증`} fill style={{objectFit:'cover', borderRadius:10}} sizes="200px" />
                  : <span>학위증</span>
                }
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="inner-section pt-0">
        <div className="mission-intro-row">
          <div>
            <p className="eyebrow">MISSION &amp; VISION</p>
            <h2 style={{fontSize:'clamp(36px, 4vw, 58px)', marginBottom:20}}>우리가 <span>존재하는 이유</span></h2>
            <p style={{color:'var(--muted)', fontSize:18, lineHeight:1.85}}>
              AI는 더 나은 비즈니스와 세상을 만드는 강력한 도구입니다.<br />
              우리는 그 가능성을 현실로 만듭니다.
            </p>
          </div>
          <div className="mission-globe-wrap">
            <Image src="/assets/aboutmiddle.png" alt="" width={520} height={400} style={{width:'90%', maxWidth:520, height:'auto', objectFit:'contain'}} />
          </div>
        </div>

        <div className="mission-grid-v2">
          <div className="mc2">
            <div className="mc2-icon" style={{background:'linear-gradient(135deg,#4a66f5,#7049f6)'}}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <p className="mc2-label">MISSION</p>
            <h3 className="mc2-title">모든 조직이 AI로<br />더 잘할 수 있는 세상</h3>
            <p className="mc2-desc">복잡한 기술을 단순화하고, 더 많은 조직이 AI를 통해 성장할 수 있도록 돕습니다.</p>
          </div>
          <div className="mc2">
            <div className="mc2-icon" style={{background:'linear-gradient(135deg,#7049f6,#9b5de5)'}}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <p className="mc2-label">VISION</p>
            <h3 className="mc2-title">아시아 최고의<br />AI 프로덕트 빌더</h3>
            <p className="mc2-desc">2030년까지 아시아에서 가장 신뢰받는 AI 제품 개발사가 되는 것이 목표입니다.</p>
          </div>
          <div className="mc2">
            <div className="mc2-icon" style={{background:'linear-gradient(135deg,#ef47bc,#c026d3)'}}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <p className="mc2-label">VALUES</p>
            <h3 className="mc2-title">진짜 결과만<br />인정합니다</h3>
            <p className="mc2-desc">데이터와 기술을 중심으로 한 성과, 투명한 커뮤니케이션, 지속 가능한 가치를 만듭니다.</p>
          </div>
        </div>
      </section>

      {/* HANYANG DARK */}
      <section className="inner-section pt-0">
        <div className="hanyang-dark">
          <div className="h-logo-col">
            <Image src="/assets/HYU_initial_basic.svg" alt="한양대학교" width={44} height={44} />
            <span>HANYANG<br />UNIVERSITY</span>
          </div>
          <div className="h-content">
            <h3>한양대학교 출신 AI 석사 전문가 팀</h3>
            <p>
              Ideal AI는 한양대학교 AI 공학대학원 출신들이 모여 만든 팀입니다.
              대학원에서 쌓은 연구 역량을 바탕으로, 실제 비즈니스 문제를 함께 해결합니다.
            </p>
            <div className="h-checks">
              <div className="h-check"><span className="h-check-dot">✓</span> AI 공학대학원 출신 멤버 중심 구성</div>
              <div className="h-check"><span className="h-check-dot">✓</span> NLP · 컴퓨터 비전 · MLOps 전공 연구 경험</div>
              <div className="h-check"><span className="h-check-dot">✓</span> 연구실 수준의 기술력을 실무에 직접 적용</div>
            </div>
          </div>
          <div className="h-building-col">
            <Image src="/assets/hanyang.png" alt="" width={500} height={400} style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'center'}} />
          </div>
        </div>
      </section>

      {/* EXPERTISE 4x2 */}
      <section className="inner-section pt-0 pb-20">
        <div className="team-hdr-row">
          <div>
            <p className="eyebrow">EXPERTISE</p>
            <h2>핵심 <span>전문 역량</span></h2>
          </div>
          <p style={{color:'var(--muted)', fontSize:14.5, lineHeight:1.75, marginTop:8}}>
            우리가 가진 핵심 기술과 경험으로 문제를 해결합니다.
          </p>
        </div>

        <div className="expertise-grid-v2">
          {expertise.map((item) => (
            <div className="ecv2" key={item.label}>
              <div className="ecv2-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {item.svg}
                </svg>
              </div>
              <div className="ecv2-title">{item.label}</div>
              <div className="ecv2-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA DARK */}
      <div className="about-cta-dark" id="contact">
        <div>
          <p className="eyebrow">LET&apos;S BUILD THE FUTURE</p>
          <h3>함께 성장할<br />팀원과 파트너를 찾습니다.</h3>
        </div>
        <a className="btn-cta-outline" href="mailto:hello@ideal-ai.co.kr">연락하기 <span>→</span></a>
      </div>
    </main>
  )
}
