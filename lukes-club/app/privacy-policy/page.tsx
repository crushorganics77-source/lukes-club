import Link from 'next/link'

export default function PrivacyPolicy() {
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
        <h1 className="font-display text-5xl font-light text-white mb-4">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-16">Last updated: April 2024</p>

        <div className="space-y-12 text-white/70 text-sm leading-relaxed">
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-4">1. Introduction</h2>
            <p>Lukes® is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and membership services.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-4">2. Information We Collect</h2>
            <p>We collect your name, email, contact details, payment information, and usage data when you apply for or use our membership services.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-4">3. How We Use Your Information</h2>
            <p>We use your data to process your membership, provide concierge services, handle billing, send club updates, and comply with legal obligations.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-4">4. Data Sharing</h2>
            <p>We do not sell your personal data. We may share it with trusted service providers under confidentiality agreements, or where required by law.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-4">5. Data Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your data. All payment data is processed through encrypted, PCI-compliant systems.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-4">6. Your Rights</h2>
            <p>Under UK GDPR you have the right to access, correct, delete, or restrict your data. To exercise these rights contact us at privacy@lukesclub.com</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-4">7. Cookies</h2>
            <p>We use cookies to enhance your experience. See our <Link href="/cookie-policy" className="text-white underline">Cookie Policy</Link> for details.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-4">8. Contact</h2>
            <p>Questions? Email us at privacy@lukesclub.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 px-8 py-8 flex justify-between items-center">
        <p className="text-white/20 text-xs tracking-widest">© 2024 Lukes®. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/terms" className="text-white/30 text-xs hover:text-white transition-colors">Terms</Link>
          <Link href="/cookie-policy" className="text-white/30 text-xs hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </div>
  )
}
