'use client'
import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    name: 'James K.',
    role: 'Founding Member',
    tier: 'Platinum',
    text: 'The network here is unlike anything I\'ve experienced. Within my first month I\'d connected with three potential business partners. Worth every penny.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80',
    stars: 5,
  },
  {
    name: 'Will C.',
    role: 'Founding Member',
    tier: 'Platinum',
    text: 'Being a founding member has been one of the best decisions I\'ve made. The access and opportunities that we are able to provide are unmatched.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80',
    stars: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'COO, BrightPath SaaS',
    tier: 'Gold',
    text: 'The concierge service alone is worth the membership. I\'ve had tables secured at restaurants with 3-month waiting lists. Truly elite access.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80',
    stars: 5,
  },
  {
    name: 'Marcus T.',
    role: 'Serial Entrepreneur',
    tier: 'Platinum',
    text: 'I\'ve been part of many masterminds and networks. None come close to the calibre of individuals inside Lukes. This is the real deal.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    stars: 5,
  },
  {
    name: 'Alexandra R.',
    role: 'Founder, Luminary Ventures',
    tier: 'Gold',
    text: 'Three investment deals closed through connections made here in under 6 months. The ROI speaks for itself.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    stars: 5,
  },
  {
    name: 'David Chen',
    role: 'Tech Executive',
    tier: 'Silver',
    text: 'Started on Silver and I\'m already upgrading to Gold. The events alone have been worth more than I paid. Incredible community.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
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
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#C9A84C">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="reviews" className="py-32 md:py-48 bg-black" ref={ref}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-16">

        {/* Header with rating stat */}
        <div
          className="text-center mb-20 transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <span className="section-label block mb-6">Member Stories</span>
          <h2
            className="font-display font-light text-white mb-8"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
          >
            What They <em className="text-gold">Say</em>
          </h2>

          {/* Rating stat */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#C9A84C">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p className="text-white/50 text-sm tracking-widest">
              <span className="text-white font-semibold">4.9</span> out of 5 — rated by <span className="text-white font-semibold">70+ members</span>
            </p>
          </div>
        </div>

        {/* Featured + grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Featured large card */}
          <div
            className="md:col-span-1 md:row-span-2 testimonial-card p-8 flex flex-col justify-between"
            style={{
              opacity: visible ? 1 : 0,
              transition: 'all 0.8s ease',
              minHeight: '400px',
            }}
          >
            <div>
              <Stars count={testimonials[0].stars} />
              <div className="text-5xl font-display text-gold/20 mb-6">"</div>
              <p className="text-white text-base leading-relaxed mb-8">
                {testimonials[0].text}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${testimonials[0].image}')` }}
                />
                <div>
                  <p className="text-white font-semibold text-sm">{testimonials[0].name}</p>
                  <p className="text-white/40 text-xs italic">{testimonials[0].role}</p>
                </div>
              </div>
              <span
                className="membership-badge"
                style={{
                  color: tierColor(testimonials[0].tier),
                  borderColor: tierColor(testimonials[0].tier),
                  background: `${tierColor(testimonials[0].tier)}15`
                }}
              >
                {testimonials[0].tier}
              </span>
            </div>
          </div>

          {/* Remaining cards */}
          {testimonials.slice(1).map((t, i) => (
            <div
              key={t.name}
              className="testimonial-card p-6"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.7s ease ${(i + 1) * 0.1}s`,
              }}
            >
              <Stars count={t.stars} />
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-cover bg-center flex-shrink-0"
                    style={{ backgroundImage: `url('${t.image}')` }}
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs italic">{t.role}</p>
                  </div>
                </div>
                <span className="text-2xl font-display text-gold/20">"</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">{t.text}</p>
              <span
                className="membership-badge"
                style={{
                  color: tierColor(t.tier),
                  borderColor: tierColor(t.tier),
                  background: `${tierColor(t.tier)}15`
                }}
              >
                {t.tier}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
