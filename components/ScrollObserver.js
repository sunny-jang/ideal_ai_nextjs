'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          const el = entry.target
          const delay = Number(el.dataset.delay || 0)
          setTimeout(() => el.classList.add('revealed'), delay)
          observer.unobserve(el)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const timer = setTimeout(() => {
      // auto-stagger grid containers
      document.querySelectorAll('[data-stagger]').forEach(container => {
        const gap = Number(container.dataset.stagger)
        Array.from(container.children).forEach((child, i) => {
          if (!child.classList.contains('reveal') &&
              !child.classList.contains('reveal-left') &&
              !child.classList.contains('reveal-right') &&
              !child.classList.contains('reveal-scale') &&
              !child.classList.contains('reveal-bounce')) {
            child.classList.add('reveal')
          }
          child.dataset.delay = String(i * gap)
        })
      })

      // observe all reveal elements
      document.querySelectorAll(
        '.reveal:not(.revealed), .reveal-left:not(.revealed), .reveal-right:not(.revealed), .reveal-scale:not(.revealed), .reveal-bounce:not(.revealed)'
      ).forEach(el => observer.observe(el))
    }, 60)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [pathname])

  return null
}
