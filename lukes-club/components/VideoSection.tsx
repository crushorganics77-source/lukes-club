'use client'
import { useEffect, useRef, useState } from 'react'

export default function VideoSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative h-screen overflow-hidden" ref={ref}>
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient top and bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
        {/* Eyebrow */}
        <div
          className="mb-8 transition-all duration-1000"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '0.2s'
          }}
        >
          <span className="section-label">The Experience</span>
        </div>

        {/* Main text */}
        <div className="overflow-hidden mb-6">
          <h2
            className="font-display font-light text-white leading-tight"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 7rem)',
              transform: visible ? 'translateY(0)' : 'translateY(100%)',
              transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: '0.3s',
            }}
          >
            The world opens differently
          </h2>
        </div>

        <div className="overflow-hidden mb-12">
          <h2
            className="font-display font-light text-white leading-tight"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 7rem)',
              transform: visible ? 'translateY(0)' : 'translateY(100%)',
              transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: '0.5s',
            }}
          >
            when you're <em className="italic">inside.</em>
          </h2>
        </div>

        {/* Divider */}
        <div
          className="gold-line mb-12 transition-all duration-1000"
          style={{
            opacity: visible ? 1 : 0,
            transitionDelay: '0.8s',
            background: 'rgba(255,255,255,0.4)',
          }}
        />

        {/* CTA */}
        <div
          className="transition-all duration-1000"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '0.9s'
          }}
        >
          <a href="#memberships">
            <button className="btn-outline">
              Join the inner circle →
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
