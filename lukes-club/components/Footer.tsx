'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-black border-t border-white/5">
      {/* CTA Band */}
      <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span
            className="font-display font-light text-white/4 whitespace-nowrap"
            style={{ fontSize: 'clamp(8rem, 20vw, 22rem)' }}
          >
            LUKES
          </span>
        </div>
        <div className="relative z-10 text-center">
          <span className="section-label block mb-6">Ready?</span>
          <h2
            className="font-display font-light text-white mb-8"
            style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}
          >
            Join the <em className="text-gold">Inner Circle</em>
          </h2>
          <button className="btn-gold">Contact Now</button>
        </div>
      </div>

      {/* Newsletter + Links */}
      <div className="border-t border-white/5 px-8 md:px-16 py-20">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Newsletter */}
          <div>
            <h3 className="font-display text-2xl font-light text-white mb-2">Be the first to know.</h3>
            <p className="text-white/40 text-sm mb-6 leading-relaxed">
              Get exclusive updates on new membership openings, private events, and member-only
              opportunities — straight to your inbox.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex gap-0 mb-6">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <button type="submit" className="btn-gold px-8 whitespace-nowrap">Submit</button>
              </form>
            ) : (
              <div className="border border-gold/30 bg-gold/5 p-4 mb-6">
                <p className="text-gold text-sm">You're on the list. We'll be in touch.</p>
              </div>
            )}

            {/* Socials */}
            <div>
              <p className="text-[9px] tracking-widest text-white/30 uppercase mb-4">Socials</p>
              <div className="flex gap-3">
                {['X', 'In', 'Be', 'Ig'].map((s) => (
                  <button
                    key={s}
                    className="w-10 h-10 rounded-full border border-white/10 text-white/40 text-xs hover:border-white hover:text-white transition-all duration-300 font-bold"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[9px] tracking-widests text-white/30 uppercase mb-6">Pages</p>
              <ul className="space-y-3">
                <li><Link href="/" className="text-white/60 text-sm hover:text-white transition-colors duration-300">Home</Link></li>
                <li><a href="/#about-us" className="text-white/60 text-sm hover:text-white transition-colors duration-300">About</a></li>
                <li><a href="/#memberships" className="text-white/60 text-sm hover:text-white transition-colors duration-300">Memberships</a></li>
                <li><a href="/#gallery" className="text-white/60 text-sm hover:text-white transition-colors duration-300">Gallery</a></li>
                <li><a href="/#reviews" className="text-white/60 text-sm hover:text-white transition-colors duration-300">Reviews</a></li>
              </ul>
            </div>
            <div>
              <p className="text-[9px] tracking-widest text-white/30 uppercase mb-6">Utility</p>
              <ul className="space-y-3">
                <li><Link href="/privacy-policy" className="text-white/60 text-sm hover:text-white transition-colors duration-300">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-white/60 text-sm hover:text-white transition-colors duration-300">Terms</Link></li>
                <li><Link href="/cookie-policy" className="text-white/60 text-sm hover:text-white transition-colors duration-300">Cookie Policy</Link></li>
                <li><Link href="/dashboard" className="text-white/60 text-sm hover:text-white transition-colors duration-300">Members Login</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-8 md:px-16 py-6">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs tracking-widest">
            © 2024 Lukes®. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="font-display text-white/10 text-sm tracking-widest">LUKES</span>
            <span className="text-[8px] text-white/10 align-super">®</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
