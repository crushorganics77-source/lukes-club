import Link from 'next/link'

export default function Terms() {
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
        <h1 className="font-display text-5xl font-light text-white mb-4">Terms & Conditions</h1>
        <p className="text-white/40 text-sm mb-16">Last updated: April 2024</p>

        <div className="space-y-12 text-white/70 text-sm leading-relaxed">
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-4">1. Acceptance of Terms</h2>
            <p>By applying for or holding a membership with Lukes®, you agree to be bound by these Terms and Conditions. If you do not agree, you may not use our services.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-4">2. Membership</h2>
            <p>Membership is by application only and is personal and non-transferable. We reserve the right to accept or decline any application at our sole discretion. Members must be 18 or older and conduct themselves with respect at all times.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-4">3. Membership Tiers & Fees</h2>
            <p>We offer three tiers: Silver (£497/month), Gold (£997/month), and Platinum (£2,497/month). All fees are billed monthly in advance. We reserve the right to change pricing with 30 days' notice.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-4">4. Cancellation & Refunds</h2>
            <p>Members may cancel with 30 days' written notice. Fees are non-refundable except where required by law. Access ceases at the end of the current billing period.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-4">5. Concierge Services</h2>
            <p>Our concierge acts as a facilitator only. We cannot guarantee availability of specific services and are not liable for third-party services arranged on your behalf.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-4">6. Confidentiality</h2>
            <p>All members must maintain strict confidentiality regarding other members' identities and information shared within the community. Breach may result in immediate termination.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-4">7. Termination</h2>
            <p>We reserve the right to terminate any membership immediately and without refund if a member breaches these terms or acts in a manner detrimental to the club.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-4">8. Governing Law</h2>
            <p>These Terms are governed by the laws of England and Wales. Disputes are subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-light text-white mb-4">9. Contact</h2>
            <p>Questions? Email us at legal@lukesclub.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 px-8 py-8 flex justify-between items-center">
        <p className="text-white/20 text-xs tracking-widest">© 2024 Lukes®. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="text-white/30 text-xs hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/cookie-policy" className="text-white/30 text-xs hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </div>
  )
}
