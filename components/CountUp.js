'use client'
import { useEffect, useRef, useState } from 'react'

export default function CountUp({ to, suffix = '', prefix = '', duration = 1600 }) {
  const [display, setDisplay] = useState('0')
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        const target = parseFloat(String(to).replace(/[^0-9.]/g, ''))
        const isDecimal = String(to).includes('.')
        const start = performance.now()

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          const cur = target * eased
          setDisplay(isDecimal ? cur.toFixed(1) : Math.floor(cur).toLocaleString())
          if (progress < 1) requestAnimationFrame(tick)
          else setDisplay(isDecimal ? target.toFixed(1) : target.toLocaleString())
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [to, duration])

  return <span ref={ref}>{prefix}{display}{suffix}</span>
}
