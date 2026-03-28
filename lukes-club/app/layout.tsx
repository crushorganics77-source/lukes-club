import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lukes® — Private Members Club',
  description: 'A private members club for ambitious entrepreneurs and high-achieving individuals. Three tiers. One community. Unlimited access.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
