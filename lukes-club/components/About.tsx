'use client'
import { useEffect, useRef, useState } from 'react'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about-us" className="py-32 md:py-48 bg-black" ref={ref}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-center">
          {/* Left */}
          <div
            className="transition-all duration-1000"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-40px)' }}
          >
            <span className="section-label block mb-6">About</span>
            <h2
              className="font-display font-light text-white leading-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              Inside<br />
              <em className="text-gold">The Club</em>
            </h2>
            <div className="gold-line mb-8" style={{ margin: '0' }} />
          </div>

          {/* Right */}
          <div
            className="transition-all duration-1000 delay-300"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(40px)' }}
          >
            <p className="text-white/50 text-sm leading-relaxed tracking-wide mb-6">
              Built for the TOP 1% of earners and thinkers.
            </p>
            <p className="text-white/80 text-base leading-relaxed mb-6">
              A private members club for ambitious entrepreneurs and high-achieving individuals.
              Three tiers. One community. Unlimited access.
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-10">
              This isn't a networking group. It's a private ecosystem for people who have already
              achieved something — and want to go further. Surrounded by others doing the same.
              From restaurant reservations and private jets to exclusive deal flow and 1-on-1 access —
              everything you need is one message away, 24 hours a day.
            </p>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>

        {/* Services grid */}
        <div className="mt-24 md:mt-40">
          <div className="luxury-divider mb-16">
            <span className="section-label px-6">What You Get</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {[
              { title: '24/7 Concierge', desc: 'One message. Any request. Day or night, a dedicated concierge handles it for you.', tier: 'Bronze', color: '#CD7F32' },
              { title: 'Exclusive Events', desc: 'Sold-out tickets, guest lists, private parties in every major city.', tier: 'Bronze', color: '#CD7F32' },
              { title: 'Inner Circle', desc: 'A private Discord community of driven individuals. Accountability, connections, and direct access.', tier: 'Bronze', color: '#CD7F32' },
              { title: 'Restaurant Bookings', desc: 'Impossible tables, secured. We get you into the rooms others can\'t.', tier: 'Silver', color: '#C0C0C0' },
              { title: 'Finance & Wealth', desc: 'Private banking, watch and whisky investment, and deal flow for serious operators.', tier: 'Silver', color: '#C0C0C0' },
              { title: 'Private Travel', desc: 'Private jets, luxury cars, five-star hotels. Your travel, elevated in every direction.', tier: 'Gold', color: '#C9A84C' },
            ].map(({ title, desc, tier, color }, i) => (
              <div
                key={title}
                className="bg-black p-10 group hover:bg-white/3 transition-all duration-300"
                style={{
                  transitionDelay: visible ? `${i * 0.1}s` : '0s',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, background 0.3s ease`
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="membership-badge" style={{ color, borderColor: color, background: `${color}15` }}>
                    {tier}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-light text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
