import Link from 'next/link'

const links = {
  서비스: [
    { label: 'AI Product Development', href: '/services' },
    { label: 'AI Automation', href: '/services' },
    { label: 'Data & AI Engineering', href: '/services' },
    { label: 'AI Consulting', href: '/services' },
  ],
  회사: [
    { label: 'About Us', href: '/about' },
    { label: 'Case Studies', href: '/cases' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Blog', href: '/blog' },
  ],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <span className="logo-mark">iA</span>
            <span className="logo-text">Ideal <b>AI</b></span>
          </Link>
          <p className="footer-desc">
            RAG, LLM, AI Agent, 업무 자동화 —<br />
            기획부터 배포까지 평균 8주.<br />
            한양대 AI 석사 연구진이 만드는<br />
            엔터프라이즈 AI 솔루션.
          </p>
          <a href="mailto:hello@ideal-ai.co.kr" className="footer-email">
            hello@ideal-ai.co.kr
          </a>
        </div>

        <nav className="footer-nav">
          {Object.entries(links).map(([group, items]) => (
            <div key={group} className="footer-nav-group">
              <p className="footer-nav-title">{group}</p>
              <ul>
                {items.map(item => (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Ideal AI. All rights reserved.</span>
        <span>hello@ideal-ai.co.kr</span>
      </div>
    </footer>
  )
}
