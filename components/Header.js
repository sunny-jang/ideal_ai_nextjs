'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/cases', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="header">
      <Link className="logo" href="/" aria-label="Ideal AI 홈">
        <span className="logo-mark">iA</span>
        <span className="logo-text">Ideal <b>AI</b></span>
      </Link>

      <button
        className="menu-toggle"
        aria-label="메뉴 열기"
        aria-expanded={String(menuOpen)}
        onClick={() => setMenuOpen(prev => !prev)}
      >
        <span></span><span></span><span></span>
      </button>

      <nav className={`nav${menuOpen ? ' open' : ''}`}>
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <a className="contact-btn" href="#contact">Contact Us <span>→</span></a>
    </header>
  )
}
