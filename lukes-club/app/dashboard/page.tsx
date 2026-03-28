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
          <Link href="/" className="flex items-center gap-1 mb-12">
            <span className="font-display text-2xl font-light tracking-widest text-white">LUKES</span>
            <span className="text-[10px] text-gold align-super">®</span>
          </Link>

          <h1 className="font-display text-4xl font-light text-white mb-2">Member Login</h1>
          <p className="text-white/40 text-sm mb-10">Welcome back. Your world awaits.</p>

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
            className="btn-gold w-full"
            onClick={() => setLoggedIn(true)}
          >
            Sign In
          </button>

          <p className="text-center text-white/30 text-xs mt-6">
            Not a member?{' '}
            <Link href="/#memberships" className="text-gold hover:text-gold-light transition-colors">
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
          <span className="text-[10px] text-gold align-super">®</span>
        </Link>
        <div className="flex items-center gap-6">
          <span className="text-white/40 text-xs tracking-widest">James K.</span>
          <button
            className="text-xs tracking-widest text-white/40 uppercase hover:text-gold transition-colors"
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
            Welcome back, <em className="text-gold">James.</em>
          </h1>
        </div>

        {/* Tier card */}
        <div className="dashboard-card mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold/5 -translate-y-1/2 translate-x-1/2" />
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
              <p className="text-gold text-sm mt-1">£2,497 / month</p>
            </div>
          </div>

          {/* Progress to next tier */}
          <div className="mt-8 pt-8 border-t border-white/5">
            <div className="flex justify-between mb-3">
              <span className="text-[9px] tracking-widest text-white/30 uppercase">Tier Status</span>
              <span className="text-[9px] tracking-widest text-gold uppercase">Gold — Highest Tier</span>
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
                  ? 'border-gold text-gold'
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
                    <span className="text-[9px] tracking-widest text-gold uppercase border border-gold/30 px-3 py-1">
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
