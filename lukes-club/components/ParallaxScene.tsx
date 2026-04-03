'use client'
import { useEffect, useRef, useState } from 'react'

export default function ParallaxScene() {
  const ref = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const windowHeight = window.innerHeight
      // Progress from 0 (just entered view) to 1 (leaving view)
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)))
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scale from 1 to 1.25 as you scroll through
  const scale = 1 + scrollProgress * 0.25
  // Slight vertical parallax
  const translateY = (scrollProgress - 0.5) * -60

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ height: '70vh' }}
    >
      {/* The image — zooms and shifts as you scroll */}
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url('/luxury-scene.png')`,
          transform: `scale(${scale}) translateY(${translateY}px)`,
          transition: 'transform 0.05s linear',
        }}
      />

      {/* Dark overlay for depth */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Gradient top and bottom to blend with page */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #080808 0%, transparent 20%, transparent 80%, #080808 100%)',
        }}
      />

      {/* Optional text overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p
            className="font-display font-light text-white/60 tracking-widest"
            style={{
              fontSize: 'clamp(0.8rem, 2vw, 1.2rem)',
              letterSpacing: '0.4em',
              transform: `translateY(${(scrollProgress - 0.5) * 30}px)`,
              transition: 'transform 0.05s linear',
            }}
          >
            THE WORLD YOU GET ACCESS TO
          </p>
        </div>
      </div>
    </section>
  )
}
