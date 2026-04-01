'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'payments' | 'benefits'>('overview')
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 mb-12">
            <span className="font-display text-2xl font-light tracking-widest text-white">LUKES</span>
            <span className="text-[10px] align-super" style={{ color: 'var(--gold)' }}>®</span>
          </Link>

          <h1 className="font-display text-4xl font-light text-white mb-2">Member Login</h1>
          <p className="text-white/40 text-sm mb-10">Welcome back. Your world awaits.</p>

          {/* Discord Login Button */}
          <button
            className="w-full flex items-center justify-center gap-3 py-4 mb-6 border border-white/10 bg-[#5865F2]/10 hover:bg-[#5865F2]/20 transition-all duration-300"
            onClick={() => setLoggedIn(true)}
          >
            {/* Discord SVG icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#5865F2]">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.054a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span className="text-[11px] font-bold tracking-widest text-white uppercase">Continue with Discord</span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/20 text-xs tracking-widest">OR</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Email/Password Login */}
          <div className="space-y-4 mb-8">
            <div>
              <label className="block text-[9px] tracking-widest text-white/40 uppercase mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-[9px] tracking-widest text-white/40 uppercase mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            className="btn-gold w-full mb-4"
            onClick={() => setLoggedIn(true)}
          >
            Sign In
          </button>

          <p className="text-center text-white/30 text-xs mt-6">
            Not a member?{' '}
            <Link href="/#memberships" className="text-white/60 hover:text-white transition-colors">
              Apply for membership →
            </Link>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Dashboard Navbar */}
      <nav className="border-b border-white/5 px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <span className="font-display text-xl font-light tracking-widest text-white">LUKES</span>
          <span className="text-[10px] align-super" style={{ color: 'var(--gold)' }}>®</span>
        </Link>
        <div className="flex items-center gap-6">
          <span className="text-white/40 text-xs tracking-widest">James K.</span>
          <button
            className="text-xs tracking-widest text-white/40 uppercase hover:text-white transition-colors"
            onClick={() => setLoggedIn(false)}
          >
            Sign Out
          </button>
        </div>
      </nav>

      <div className="max-w-screen-xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <span className="section-label block mb-3">Member Portal</span>
          <h1 className="font-display text-4xl font-light text-white">
            Welcome back, <em className="italic">James.</em>
          </h1>
        </div>

        {/* Tier card */}
        <div className="dashboard-card mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-[9px] tracking-widest text-white/30 uppercase mb-2">Current Membership</p>
              <div className="flex items-center gap-4">
                <h2 className="font-display text-5xl font-light text-white">Gold</h2>
                <span className="badge-gold membership-badge">Active</span>
              </div>
              <p className="text-white/40 text-sm mt-2">Founding Member · Since January 2024</p>
            </div>
            <div className="text-right">
              <p className="text-[9px] tracking-widest text-white/30 uppercase mb-2">Next Billing</p>
              <p className="font-display text-3xl font-light text-white">April 1, 2024</p>
              <p className="text-white text-sm mt-1">£2,497 / month</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5">
            <div className="flex justify-between mb-3">
              <span className="text-[9px] tracking-widest text-white/30 uppercase">Tier Status</span>
              <span className="text-[9px] tracking-widest text-white uppercase">Gold — Highest Tier</span>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: '100%' }} />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 border-b border-white/5">
          {(['overview', 'payments', 'benefits'] as const).map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 text-[9px] tracking-widest uppercase transition-all duration-300 border-b-2 -mb-px ${
                activeTab === tab
                  ? 'border-white text-white'
                  : 'border-transparent text-white/30 hover:text-white/60'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Concierge Requests', value: '24', sub: 'this month' },
              { label: 'Events Attended', value: '7', sub: 'since joining' },
              { label: 'Connections Made', value: '42', sub: 'via Inner Circle' },
            ].map(({ label, value, sub }) => (
              <div key={label} className="dashboard-card text-center">
                <p className="text-[9px] tracking-widest text-white/30 uppercase mb-3">{label}</p>
                <p className="font-display text-5xl font-light text-white mb-1">{value}</p>
                <p className="text-white/30 text-xs">{sub}</p>
              </div>
            ))}
            <div className="md:col-span-3 dashboard-card">
              <p className="text-[9px] tracking-widest text-white/30 uppercase mb-6">Recent Activity</p>
              <div className="space-y-4">
                {[
                  { action: 'Concierge: Restaurant reservation at Nobu Mayfair', date: 'Mar 27, 2024', status: 'Completed' },
                  { action: 'Event: Q1 Mastermind Summit — Dubai', date: 'Mar 15, 2024', status: 'Attended' },
                  { action: 'Concierge: Private jet London → Milan', date: 'Mar 10, 2024', status: 'Completed' },
                  { action: 'Finance: Whisky investment opportunity shared', date: 'Mar 5, 2024', status: 'Reviewed' },
                ].map(({ action, date, status }) => (
                  <div key={action} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                    <div>
                      <p className="text-white/80 text-sm">{action}</p>
                      <p className="text-white/30 text-xs mt-1">{date}</p>
                    </div>
                    <span className="text-[9px] tracking-widest text-white uppercase border border-white/20 px-3 py-1">
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Payments Tab */}
        {activeTab === 'payments' && (
          <div className="dashboard-card">
            <p className="text-[9px] tracking-widest text-white/30 uppercase mb-6">Payment History</p>
            <div className="space-y-0">
              {[
                { date: 'Mar 1, 2024', desc: 'Gold Membership — Monthly', amount: '£2,497', status: 'Paid' },
                { date: 'Feb 1, 2024', desc: 'Gold Membership — Monthly', amount: '£2,497', status: 'Paid' },
                { date: 'Jan 1, 2024', desc: 'Gold Membership — Monthly (Founding)', amount: '£2,497', status: 'Paid' },
              ].map(({ date, desc, amount, status }) => (
                <div key={date} className="flex items-center justify-between py-5 border-b border-white/5 last:border-0">
                  <div>
                    <p className="text-white/80 text-sm">{desc}</p>
                    <p className="text-white/30 text-xs mt-1">{date}</p>
                  </div>
                  <div className="text-right flex items-center gap-6">
                    <p className="font-display text-xl text-white">{amount}</p>
                    <span className="text-[9px] tracking-widest text-green-400 uppercase border border-green-400/30 px-3 py-1">
                      {status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: '24/7 Concierge', status: 'Active', desc: 'Your dedicated line is always open. One message, any request.' },
              { title: 'Private Travel', status: 'Active', desc: 'Jets, luxury cars, and five-star hotels. Travel elevated.' },
              { title: 'Finance & Wealth', status: 'Active', desc: 'Private banking, watch and whisky investment.' },
              { title: 'Restaurant Bookings', status: 'Active', desc: 'Impossible tables, secured in every major city.' },
              { title: 'Exclusive Events', status: 'Active', desc: 'Sold-out tickets and private parties worldwide.' },
              { title: 'Inner Circle', status: 'Active', desc: 'Private Discord community of driven individuals.' },
            ].map(({ title, status, desc }) => (
              <div key={title} className="dashboard-card">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-xl text-white">{title}</h3>
                  <span className="badge-gold membership-badge">{status}</span>
                </div>
                <p className="text-white/40 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
