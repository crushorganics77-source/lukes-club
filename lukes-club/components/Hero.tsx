'use client'
import { useEffect, useRef, useState } from 'react'

function AnimatedNumber({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80')`,
            filter: 'grayscale(30%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      {/* Floating stats cards */}
      <div
        className="absolute top-24 right-8 md:right-16 z-10 transition-all duration-1000"
        style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(-20px)', transitionDelay: '0.8s' }}
      >
        <div className="bg-black/60 border border-white/10 backdrop-blur-md p-5 min-w-[160px]">
          <p className="text-[9px] tracking-widest text-white/40 uppercase mb-2">Total Members</p>
          <p className="text-4xl font-display font-light text-white">
            <AnimatedNumber target={70} suffix="+" />
          </p>
        </div>
      </div>

      <div
        className="absolute top-52 right-8 md:right-16 z-10 transition-all duration-1000"
        style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(-20px)', transitionDelay: '1s' }}
      >
        <div className="bg-black/60 border border-white/10 backdrop-blur-md p-5 min-w-[160px]">
          <p className="text-[9px] tracking-widest text-white/40 uppercase mb-2">Total Engagement</p>
          <p className="text-4xl font-display font-light text-white">
            <AnimatedNumber target={40} suffix="K+" />
          </p>
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex flex-col items-start justify-end flex-1 px-8 md:px-16 pb-24">
        <div
          className="mb-8 transition-all duration-1000"
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '0.2s' }}
        >
          <span className="section-label">Private Members Club</span>
        </div>

        <div className="overflow-hidden mb-4">
          <h1
            className="font-display font-light text-white leading-none"
            style={{
              fontSize: 'clamp(3.5rem, 10vw, 10rem)',
              transform: loaded ? 'translateY(0)' : 'translateY(100%)',
              transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: '0.3s',
            }}
          >
            MEMBERS
          </h1>
        </div>

        <div
          className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-8 transition-all duration-1000"
          style={{ opacity: loaded ? 1 : 0, transitionDelay: '0.7s' }}
        >
          <div className="max-w-md">
            <p className="text-white/60 text-sm leading-relaxed font-light tracking-wide">
              Built for the top 1% of earners and thinkers.
              One message away — 24 hours a day.
            </p>
          </div>
          <button className="btn-gold self-start md:self-auto">
            Apply for Membership
          </button>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="relative z-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
        {[
          { num: 3, suffix: '', label: 'Membership Tiers' },
          { num: 24, suffix: '/7', label: 'Concierge' },
          { num: 15, suffix: '+', label: 'Exclusive Services' },
          { num: 12, suffix: 'M', label: 'Yearly Revenue' },
        ].map(({ num, suffix, label }, i) => (
          <div
            key={label}
            className="p-6 md:p-8 text-center transition-all duration-700"
            style={{ opacity: loaded ? 1 : 0, transitionDelay: `${0.6 + i * 0.1}s` }}
          >
            <p className="text-2xl md:text-3xl font-display font-light text-white mb-1">
              <AnimatedNumber target={num} suffix={suffix} />
            </p>
            <p className="text-[9px] tracking-widest text-white/40 uppercase">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
