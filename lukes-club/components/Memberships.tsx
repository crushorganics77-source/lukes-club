'use client'
import { useEffect, useRef, useState } from 'react'

const tiers = [
  {
    num: '01',
    name: 'Bronze',
    tagline: 'The Foundation',
    price: '£497',
    period: '/month',
    description: 'Your entry into the most connected community of entrepreneurs. Access the essentials — concierge, events, and the inner circle.',
    features: [
      '24/7 Concierge Service',
      'Private Discord Community',
      'Exclusive Events Access',
      'Member Directory',
      'Monthly Mastermind Calls',
    ],
    color: '#CD7F32',
    bg: 'from-[#2a1a0a] to-[#1a0f05]',
    cta: 'Apply for Bronze',
  },
  {
    num: '02',
    name: 'Silver',
    tagline: 'The Operator',
    price: '£997',
    period: '/month',
    description: 'For the serious operator. Add restaurant bookings, finance & wealth tools, and elevated deal flow to your arsenal.',
    features: [
      'Everything in Bronze',
      'Impossible Restaurant Bookings',
      'Finance & Wealth Access',
      'Private Banking Introductions',
      'Watch & Whisky Investment',
      'Priority Deal Flow',
    ],
    color: '#C0C0C0',
    bg: 'from-[#1a1a1a] to-[#0f0f0f]',
    cta: 'Apply for Silver',
    featured: true,
  },
  {
    num: '03',
    name: 'Gold',
    tagline: 'The Elite',
    price: '£2,497',
    period: '/month',
    description: 'Unrestricted access to everything. Private travel, the founding member network, and true white-glove treatment.',
    features: [
      'Everything in Silver',
      'Private Jets & Luxury Travel',
      'Five-Star Hotel Access',
      'Founding Member Network',
      '1-on-1 Mentorship Access',
      'Bespoke Opportunities',
    ],
    color: '#C9A84C',
    bg: 'from-[#1a1505] to-[#0f0d02]',
    cta: 'Apply for Gold',
  },
]

export default function Memberships() {
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
    <section id="memberships" className="py-32 md:py-48 bg-black" ref={ref}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-16">
        {/* Header */}
        <div
          className="max-w-2xl mb-20 transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <span className="section-label block mb-6">Membership Tiers</span>
          <h2
            className="font-display font-light text-white leading-tight mb-8"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
          >
            MEMBERSHIP<br />
            <em className="text-gold">TIERS</em>
          </h2>
          <p className="text-white/50 text-sm leading-relaxed">
            Whether you're just starting out or scaling to new heights, we have a membership built
            for you. From our accessible entry-level tier to our exclusive founding membership —
            everyone has a place in this community.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map(({ num, name, tagline, price, period, description, features, color, bg, cta, featured }, i) => (
            <div
              key={name}
              className={`tier-card relative flex flex-col ${featured ? 'ring-1 ring-white/20 scale-105' : ''}`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? (featured ? 'scale(1.05)' : 'translateY(0)') : 'translateY(40px)',
                transition: `all 0.8s ease ${i * 0.15}s`,
              }}
            >
              {featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-black text-[9px] font-bold tracking-widest uppercase px-4 py-1.5">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card header */}
              <div className={`bg-gradient-to-br ${bg} p-8 border-b border-white/5`}>
                <div className="flex items-start justify-between mb-8">
                  <span className="text-[9px] tracking-widest text-white/30 uppercase font-bold">{num}</span>
                  <span className="membership-badge" style={{ color, borderColor: color, background: `${color}15` }}>
                    {name}
                  </span>
                </div>

                {/* Image placeholder area */}
                <div className="h-32 mb-8 relative overflow-hidden rounded-lg" style={{ background: `${color}08` }}>
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${color}, transparent 70%)`
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-6xl font-light" style={{ color }}>
                      {name.charAt(0)}
                    </span>
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-[9px] tracking-widest text-white/30 uppercase">{tagline}</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{description}</p>
              </div>

              {/* Pricing */}
              <div className="px-8 py-6 border-b border-white/5">
                <div className="flex items-end gap-2">
                  <span className="font-display text-4xl font-light text-white">{price}</span>
                  <span className="text-white/30 text-sm mb-1">{period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="px-8 py-6 flex-1">
                <ul className="space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/60">
                      <span className="mt-0.5 flex-shrink-0" style={{ color }}>—</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-8 pb-8">
                <button
                  className="w-full py-4 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 border"
                  style={{
                    borderColor: color,
                    color: featured ? '#000' : color,
                    background: featured ? color : 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (!featured) {
                      e.currentTarget.style.background = color
                      e.currentTarget.style.color = '#000'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!featured) {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = color
                    }
                  }}
                >
                  {cta} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
