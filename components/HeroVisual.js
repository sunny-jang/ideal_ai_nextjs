'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'

export default function HeroVisual() {
  const imgRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth < 861) return
      const x = (e.clientX / window.innerWidth - 0.5) * 12
      const y = (e.clientY / window.innerHeight - 0.5) * 10
      if (imgRef.current) {
        imgRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      }
    }
    const handleMouseLeave = () => {
      if (imgRef.current) imgRef.current.style.transform = ''
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>
      <Image ref={imgRef} src="/assets/hero-bubbles.png" alt="" width={640} height={640} style={{width:'100%', height:'auto'}} priority />
    </div>
  )
}
