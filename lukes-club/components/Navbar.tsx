'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 border-b border-white/5'
          : 'bg-transparent'
      }`}
      style={{ backdropFilter: scrolled ? 'blur(20px)' : 'none' }}
    >
      <div className="max-w-screen-xl mx-auto px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-display text-2xl font-light tracking-widest text-white">
            LUKES
          </span>
          <span className="text-[10px] text-gold align-super">®</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {['About Us', 'Gallery', 'Reviews', 'Memberships'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-xs font-medium tracking-widest text-white/60 uppercase hover:text-gold transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/dashboard"
            className="text-xs font-medium tracking-widest text-white/60 uppercase hover:text-white transition-colors duration-300"
          >
            Log In
          </Link>
          <Link href="#memberships">
            <button className="btn-gold text-[10px]">
              Apply Now
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-black/95 border-t border-white/5 px-8 py-8 flex flex-col gap-6">
          {['About Us', 'Gallery', 'Reviews', 'Memberships'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium tracking-widest text-white/60 uppercase hover:text-gold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-4">
            <Link href="/dashboard" className="text-sm tracking-widest text-white/40 uppercase">Log In</Link>
            <button className="btn-gold w-full">Apply Now</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
