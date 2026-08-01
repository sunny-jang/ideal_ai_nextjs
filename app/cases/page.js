export const metadata = {
  title: 'Case Studies — 실제 AI 프로젝트 성공 사례',
  description: '실제 도입 시 어떤 문제를 해결할 수 있는지, 접근 방식과 기대 성과를 시나리오로 정리한 예시 케이스입니다.',
  alternates: { canonical: 'https://ideal-ai.co.kr/cases' },
  openGraph: {
    title: 'Ideal AI 성공 사례 — 수치로 증명된 AI 프로젝트',
    description: '은행 내규 챗봇, 이커머스 자동화, 법률 문서 분석 등 실제 프로젝트 케이스 스터디.',
    url: 'https://ideal-ai.co.kr/cases',
  },
}

export default function CasesPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">CASE EXAMPLES</p>
          <h1>이런 문제들을<br /><span>해결할 수 있습니다</span></h1>
          <p className="lead">
            실제 도입 시 어떤 접근으로 문제를 풀고, 어떤 성과를 기대할 수 있는지
            시나리오 기반으로 정리한 예시입니다.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#cases">케이스 보기 <span>→</span></a>
            <a className="btn btn-secondary" href="#contact">프로젝트 문의 <span>→</span></a>
          </div>
        </div>
        <div className="page-hero-visual" style={{position:'absolute', right:'3%', top:'-15%', bottom:'10%', width:'48%', height:'100%', WebkitMaskImage:'linear-gradient(to right, transparent 0%, black 18%, black 80%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)', WebkitMaskComposite:'destination-in', maskImage:'linear-gradient(to right, transparent 0%, black 18%, black 80%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)', maskComposite:'intersect'}} aria-hidden="true">
          <img src="/assets/aboutmiddle.png" alt="" className="hero-service-img w-full h-full object-contain" style={{objectPosition:'center right'}} />
        </div>

        {/* Impact numbers inside hero */}
        <div className="impact-row">
          <div className="impact-box">
            <span className="i-num">340%</span>
            <span className="i-label">평균 프로젝트 ROI</span>
          </div>
          <div className="impact-box">
            <span className="i-num">6주</span>
            <span className="i-label">평균 첫 배포까지</span>
          </div>
          <div className="impact-box">
            <span className="i-num">+28점</span>
            <span className="i-label">평균 고객 만족도 상승</span>
          </div>
          <div className="impact-box">
            <span className="i-num">12배</span>
            <span className="i-label">평균 처리 속도 향상</span>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="inner-section" id="cases">
        <div className="section-header">
          <p className="eyebrow">CASE EXAMPLES</p>
          <h2>예시 <span>프로젝트 시나리오</span></h2>
          <p>실제 도입 시 어떤 문제를 해결할 수 있는지, 접근 방식과 기대 성과를 시나리오로 정리했습니다.</p>
        </div>

        <div className="cases-grid">
          {/* Case 01 */}
          <div className="case-card">
            <div className="case-card-top">
              <div className="case-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <span className="case-industry-badge">금융</span>
            </div>
            <h3>대형 은행 내부 규정 RAG 챗봇 — 직원 6,000명의 업무 방식을 바꾸다</h3>
            <p className="case-summary">매일 수백 건의 규정 문의가 준법감시팀으로 쏟아졌습니다. 담당자 1명이 수천 페이지 문서를 뒤지며 답변하는 구조를 AI가 대체했습니다.</p>
            <div className="case-result-badge">
              <svg width="14" height="14" viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>
              규정 조회 시간 78% 단축, 직원 만족도 92%
            </div>
            <div className="case-detail-row">
              <div className="case-detail-item">
                <div className="d-label">문제</div>
                <div className="d-value">규정 문서 3,200페이지, 평균 답변 대기 4시간</div>
              </div>
              <div className="case-detail-item">
                <div className="d-label">솔루션</div>
                <div className="d-value">Hybrid RAG + 벡터 DB + GPT-4o 파이프라인</div>
              </div>
              <div className="case-detail-item">
                <div className="d-label">결과</div>
                <div className="d-value">즉시 답변, 조회 시간 78% 단축, 만족도 92%</div>
              </div>
            </div>
          </div>

          {/* Case 02 */}
          <div className="case-card">
            <div className="case-card-top">
              <div className="case-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2"/>
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                  <line x1="12" y1="12" x2="12" y2="16"/>
                  <line x1="10" y1="14" x2="14" y2="14"/>
                </svg>
              </div>
              <span className="case-industry-badge">제조</span>
            </div>
            <h3>반도체 공정 불량 탐지 — 사람의 눈을 넘어선 정확도 99.2%</h3>
            <p className="case-summary">숙련 검사원도 놓치는 0.1mm 크기의 불량. 야간·주말 공정은 검사 품질이 떨어졌습니다. AI 비전이 24시간 동일한 정확도로 라인을 지킵니다.</p>
            <div className="case-result-badge">
              <svg width="14" height="14" viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>
              불량 탐지 정확도 99.2%, 검사 속도 15배
            </div>
            <div className="case-detail-row">
              <div className="case-detail-item">
                <div className="d-label">문제</div>
                <div className="d-value">수작업 검사 오탐 4.3%, 야간 품질 편차 심각</div>
              </div>
              <div className="case-detail-item">
                <div className="d-label">솔루션</div>
                <div className="d-value">CNN 기반 실시간 비전 AI + 엣지 디바이스 배포</div>
              </div>
              <div className="case-detail-item">
                <div className="d-label">결과</div>
                <div className="d-value">정확도 99.2%, 처리 속도 15배, 불량 출하 제로</div>
              </div>
            </div>
          </div>

          {/* Case 03 */}
          <div className="case-card">
            <div className="case-card-top">
              <div className="case-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
              </div>
              <span className="case-industry-badge">이커머스</span>
            </div>
            <h3>이커머스 AI 개인화 추천 — 전환율 34% 상승, 매출 직결</h3>
            <p className="case-summary">MAU 150만 플랫폼의 추천 알고리즘이 단순 카테고리 기반이었습니다. &ldquo;많이 산 상품&rdquo; 대신 &ldquo;지금 이 사람에게 맞는 상품&rdquo;을 보여주자 전환율이 달라졌습니다.</p>
            <div className="case-result-badge">
              <svg width="14" height="14" viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>
              전환율 +34%, 평균 주문 금액 +22%
            </div>
            <div className="case-detail-row">
              <div className="case-detail-item">
                <div className="d-label">문제</div>
                <div className="d-value">규칙 기반 추천의 클릭률 1.2%, 높은 이탈률</div>
              </div>
              <div className="case-detail-item">
                <div className="d-label">솔루션</div>
                <div className="d-value">협업 필터링 + LLM 시맨틱 유사도 하이브리드</div>
              </div>
              <div className="case-detail-item">
                <div className="d-label">결과</div>
                <div className="d-value">전환율 +34%, 평균 주문 금액 +22%, CTR 3배</div>
              </div>
            </div>
          </div>

          {/* Case 04 */}
          <div className="case-card">
            <div className="case-card-top">
              <div className="case-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <span className="case-industry-badge">HR · 운영</span>
            </div>
            <h3>HR 문서 자동화 — 채용 담당자가 서류 대신 사람을 보게 됐습니다</h3>
            <p className="case-summary">월 1,200건의 이력서, 면접 요약, 계약서 검토를 HR 팀 3명이 처리했습니다. 대부분의 시간이 문서에 쓰였고, 정작 후보자 평가는 뒷전이었습니다.</p>
            <div className="case-result-badge">
              <svg width="14" height="14" viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>
              HR 업무시간 60% 단축, 오류율 98% 감소
            </div>
            <div className="case-detail-row">
              <div className="case-detail-item">
                <div className="d-label">문제</div>
                <div className="d-value">월 1,200건 문서 처리에 팀 가용시간의 70% 소진</div>
              </div>
              <div className="case-detail-item">
                <div className="d-label">솔루션</div>
                <div className="d-value">LLM Agent + n8n 워크플로우 자동화 파이프라인</div>
              </div>
              <div className="case-detail-item">
                <div className="d-label">결과</div>
                <div className="d-value">처리 시간 60% 단축, 오류율 98% 감소, 팀 만족도 급상승</div>
              </div>
            </div>
          </div>

          {/* Case 05 */}
          <div className="case-card">
            <div className="case-card-top">
              <div className="case-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <span className="case-industry-badge">의료</span>
            </div>
            <h3>병원 진료 기록 AI 요약 — 의사가 환자 이야기를 더 들을 수 있게</h3>
            <p className="case-summary">외래 진료 전 환자당 평균 12분을 EMR 기록 검토에 썼습니다. 하루 40명이면 8시간 중 2시간이 서류에 사라지는 구조였습니다.</p>
            <div className="case-result-badge">
              <svg width="14" height="14" viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>
              진료 준비 시간 70% 감소, 의사 만족도 94%
            </div>
            <div className="case-detail-row">
              <div className="case-detail-item">
                <div className="d-label">문제</div>
                <div className="d-value">환자당 평균 12분 EMR 수동 검토, 진료 집중도 저하</div>
              </div>
              <div className="case-detail-item">
                <div className="d-label">솔루션</div>
                <div className="d-value">의료 도메인 파인튜닝 LLM + EMR 직접 연동</div>
              </div>
              <div className="case-detail-item">
                <div className="d-label">결과</div>
                <div className="d-value">준비 시간 70% 감소(12분→3.6분), 만족도 94%</div>
              </div>
            </div>
          </div>

          {/* Case 06 */}
          <div className="case-card">
            <div className="case-card-top">
              <div className="case-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <span className="case-industry-badge">법률</span>
            </div>
            <h3>법률 계약서 리스크 분석 AI — 500페이지를 3분 안에</h3>
            <p className="case-summary">외부 자문 없이 처리하기엔 계약서가 너무 많았고, 외부에 맡기기엔 비용이 컸습니다. 인하우스 법무팀 2명이 월 200건을 검토하는 한계가 있었습니다.</p>
            <div className="case-result-badge">
              <svg width="14" height="14" viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>
              검토 시간 82% 단축, 리스크 탐지율 97%
            </div>
            <div className="case-detail-row">
              <div className="case-detail-item">
                <div className="d-label">문제</div>
                <div className="d-value">계약서 1건당 평균 4시간 검토, 처리 병목 심각</div>
              </div>
              <div className="case-detail-item">
                <div className="d-label">솔루션</div>
                <div className="d-value">법률 특화 LLM 파인튜닝 + RAG 기반 리스크 탐지</div>
              </div>
              <div className="case-detail-item">
                <div className="d-label">결과</div>
                <div className="d-value">4시간→43분, 리스크 탐지율 97%, 외부 자문 비용 절감</div>
              </div>
            </div>
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
