import Link from 'next/link'

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-black">
      <nav className="border-b border-white/5 px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <span className="font-display text-2xl font-light tracking-widest text-white">LUKES</span>
          <span className="text-[10px] align-super" style={{ color: 'var(--gold)' }}>®</span>
        </Link>
        <Link href="/" className="text-white/40 text-xs tracking-widest uppercase hover:text-white transition-colors">
          ← Back to Home
        </Link>
      </nav>

      <div className="max-w-3xl mx-auto px-8 py-20">
        <span className="section-label block mb-6">Legal</span>
        <h1 className="font-display text-5xl font-light text-white mb-4">Cookie Policy</h1>
        <p className="text-white/40 text-sm mb-16">Last updated: April 2024</p>

        <div className="space-y-12 text-white/70 text-sm leading-relaxed">
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-4">1. What Are Cookies</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, keep you logged in, and understand how you use the site.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-4">2. How We Use Cookies</h2>
            <p>Lukes® uses cookies to improve your experience, keep you logged into your member account, and understand how our site is used so we can continue to improve it.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-4">3. Types of Cookies We Use</h2>
            <div className="space-y-6">
              {[
                { title: 'Essential Cookies', desc: 'Necessary for the website to function. They enable core features such as security and account access. You cannot opt out of these.' },
                { title: 'Performance Cookies', desc: 'Help us understand how visitors use our site by collecting anonymous data, allowing us to improve the experience.' },
                { title: 'Functional Cookies', desc: 'Remember your preferences and keep you logged in to your member account.' },
                { title: 'Analytics Cookies', desc: 'Used to understand traffic patterns and improve our services. All data is aggregated and anonymous.' },
              ].map(({ title, desc }) => (
                <div key={title} className="border-l border-white/10 pl-6">
                  <h3 className="text-white font-semibold mb-2 text-sm tracking-wide">{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-4">4. Managing Cookies</h2>
            <p>You can control cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our website and your member experience.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-4">5. Third-Party Cookies</h2>
            <p>Some cookies are set by third-party services such as payment processors and analytics providers, governed by their respective privacy policies.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-4">6. Updates</h2>
            <p>We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated date.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-4">7. Contact</h2>
            <p>Questions about our use of cookies? Email us at privacy@lukesclub.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 px-8 py-8 flex justify-between items-center">
        <p className="text-white/20 text-xs tracking-widest">© 2024 Lukes®. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="text-white/30 text-xs hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-white/30 text-xs hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </div>
  )
}
