'use client'
import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    name: 'James K.',
    role: 'Founding Member',
    tier: 'Platinum',
    text: 'The network here is unlike anything I\'ve experienced. Within my first month I\'d connected with three potential business partners. Worth every penny.',
    stars: 5,
  },
  {
    name: 'Will C.',
    role: 'Founding Member',
    tier: 'Platinum',
    text: 'Being a founding member has been one of the best decisions I\'ve made. The access and opportunities that we are able to provide are unmatched.',
    stars: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'COO, BrightPath SaaS',
    tier: 'Gold',
    text: 'The concierge service alone is worth the membership. I\'ve had tables secured at restaurants with 3-month waiting lists. Truly elite access.',
    stars: 5,
  },
  {
    name: 'Marcus T.',
    role: 'Serial Entrepreneur',
    tier: 'Platinum',
    text: 'I\'ve been part of many masterminds and networks. None come close to the calibre of individuals inside Lukes. This is the real deal.',
    stars: 5,
  },
  {
    name: 'Alexandra R.',
    role: 'Founder, Luminary Ventures',
    tier: 'Gold',
    text: 'Three investment deals closed through connections made here in under 6 months. The ROI speaks for itself.',
    stars: 5,
  },
  {
    name: 'David Chen',
    role: 'Tech Executive',
    tier: 'Silver',
    text: 'Started on Silver and I\'m already upgrading to Gold. The events alone have been worth more than I paid. Incredible community.',
    stars: 5,
  },
]

function tierColor(tier: string) {
  if (tier === 'Platinum') return '#E5E4E2'
  if (tier === 'Gold') return '#C9A84C'
  return '#C0C0C0'
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-6 justify-center">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C9A84C">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Auto advance
  useEffect(() => {
    const timer = setInterval(() => {
      goTo((active + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [active])

  const goTo = (index: number) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setActive(index)
      setAnimating(false)
    }, 300)
  }

  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length)
  const next = () => goTo((active + 1) % testimonials.length)

  const getIndex = (offset: number) => (active + offset + testimonials.length) % testimonials.length

  return (
    <section id="reviews" className="py-32 md:py-48 bg-black overflow-hidden" ref={ref}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-16">

        {/* Header */}
        <div
          className="text-center mb-20 transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <span className="section-label block mb-6">Member Stories</span>
          <h2
            className="font-display font-light text-white mb-8"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
          >
            What They <em className="text-gold italic">Say</em>
          </h2>
          {/* Rating */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#C9A84C">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p className="text-white/40 text-sm tracking-widest">
              <span className="text-white font-semibold">4.9</span> out of 5 — rated by <span className="text-white font-semibold">70+ members</span>
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transitionDelay: '0.3s' }}
        >
          {/* Cards track */}
          <div className="flex items-center justify-center gap-4 md:gap-6">

            {/* Left card (previous) */}
            <div
              className="hidden md:block flex-shrink-0 cursor-pointer"
              style={{ width: '280px' }}
              onClick={prev}
            >
              <div
                className="testimonial-card p-6 h-full text-center"
                style={{
                  opacity: animating ? 0 : 0.4,
                  transform: animating ? 'scale(0.9)' : 'scale(0.92)',
                  transition: 'all 0.4s ease',
                  filter: 'blur(1px)',
                }}
              >
                <Stars count={testimonials[getIndex(-1)].stars} />
                <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-4">
                  "{testimonials[getIndex(-1)].text}"
                </p>
                <p className="text-white/50 font-semibold text-sm">{testimonials[getIndex(-1)].name}</p>
                <p className="text-white/30 text-xs italic">{testimonials[getIndex(-1)].role}</p>
              </div>
            </div>

            {/* Centre card (active) */}
            <div className="flex-shrink-0 w-full md:w-auto" style={{ maxWidth: '560px' }}>
              <div
                className="testimonial-card p-10 text-center relative overflow-hidden"
                style={{
                  opacity: animating ? 0 : 1,
                  transform: animating ? 'scale(0.96) translateY(10px)' : 'scale(1)',
                  transition: 'all 0.4s ease',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 0 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
                }}
              >
                {/* Top quote mark */}
                <div className="text-6xl font-display text-white/5 absolute top-4 left-6">"</div>

                <Stars count={testimonials[active].stars} />

                <p className="text-white text-lg md:text-xl leading-relaxed mb-8 font-light font-display italic">
                  "{testimonials[active].text}"
                </p>

                <div className="border-t border-white/5 pt-6">
                  <p className="text-white font-semibold text-sm tracking-wide mb-1">
                    {testimonials[active].name}
                  </p>
                  <p className="text-white/40 text-xs italic mb-4">{testimonials[active].role}</p>
                  <span
                    className="membership-badge"
                    style={{
                      color: tierColor(testimonials[active].tier),
                      borderColor: tierColor(testimonials[active].tier),
                      background: `${tierColor(testimonials[active].tier)}15`,
                    }}
                  >
                    {testimonials[active].tier}
                  </span>
                </div>
              </div>
            </div>

            {/* Right card (next) */}
            <div
              className="hidden md:block flex-shrink-0 cursor-pointer"
              style={{ width: '280px' }}
              onClick={next}
            >
              <div
                className="testimonial-card p-6 text-center"
                style={{
                  opacity: animating ? 0 : 0.4,
                  transform: animating ? 'scale(0.9)' : 'scale(0.92)',
                  transition: 'all 0.4s ease',
                  filter: 'blur(1px)',
                }}
              >
                <Stars count={testimonials[getIndex(1)].stars} />
                <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-4">
                  "{testimonials[getIndex(1)].text}"
                </p>
                <p className="text-white/50 font-semibold text-sm">{testimonials[getIndex(1)].name}</p>
                <p className="text-white/30 text-xs italic">{testimonials[getIndex(1)].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-300"
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === active ? '24px' : '6px',
                    height: '6px',
                    background: i === active ? 'white' : 'rgba(255,255,255,0.2)',
                    borderRadius: '3px',
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
