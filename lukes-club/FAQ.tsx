'use client'
import { useEffect, useRef, useState } from 'react'

const faqs = [
  {
    q: 'Who is this for?',
    a: 'Lukes® is built for ambitious entrepreneurs, founders, executives, and high-achieving individuals who are serious about growth. If you\'re already doing well and want to go further — surrounded by others doing the same — this is for you.',
  },
  {
    q: 'How do I apply?',
    a: 'Click the "Apply for Membership" button and fill out a short application. We review every application personally to ensure the community maintains its standard. If accepted, you\'ll receive an invite within 48 hours.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. You can cancel your membership at any time with 30 days\' written notice. There are no lock-in contracts or hidden exit fees. Your access continues until the end of your current billing period.',
  },
  {
    q: 'Is there a joining fee?',
    a: 'No joining fee. Membership starts from just £10/month and is all-inclusive — everything within your tier is available to you from day one. No hidden costs, no upsells.',
  },
  {
    q: 'What makes this different from other networks?',
    a: 'Most networks are just group chats. Lukes® is a full private ecosystem — 24/7 concierge, exclusive events, deal flow, private travel, restaurant bookings and more. It\'s not just who you meet, it\'s what you can access. One message, any request, any time.',
  },
]

export default function FAQ() {
  const [visible, setVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="py-32 bg-black" ref={ref}>
      <div className="max-w-3xl mx-auto px-8 md:px-16">

        {/* Header */}
        <div
          className="text-center mb-16 transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <span className="section-label block mb-6">Got Questions</span>
          <h2
            className="font-display font-light text-white"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Everything you <em className="italic">need to know</em>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map(({ q, a }, i) => (
            <div
              key={q}
              className="border-t border-white/10 last:border-b transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <button
                className="w-full flex items-center justify-between py-6 text-left group"
                onClick={() => toggle(i)}
              >
                <span className="font-display text-xl font-light text-white group-hover:text-white/80 transition-colors duration-300 pr-8">
                  {q}
                </span>
                <span
                  className="flex-shrink-0 w-8 h-8 border border-white/20 flex items-center justify-center text-white/40 group-hover:border-white/40 group-hover:text-white transition-all duration-300"
                  style={{
                    transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease, border-color 0.3s ease, color 0.3s ease',
                  }}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              <div
                style={{
                  maxHeight: openIndex === i ? '300px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <p className="text-white/50 text-sm leading-relaxed pb-6 pr-12">
                  {a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below FAQ */}
        <div
          className="text-center mt-16 transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transitionDelay: '0.6s' }}
        >
          <p className="text-white/40 text-sm mb-6">Still have questions?</p>
          <button className="btn-outline">Get in Touch →</button>
        </div>

      </div>
    </section>
  )
}
