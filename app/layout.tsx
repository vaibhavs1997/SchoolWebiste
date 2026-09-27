import type { Metadata, Viewport } from 'next'
import { DM_Sans, Manrope } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })

export const metadata: Metadata = {
  title: { default: 'G.D. International School', template: '%s | G.D. International School' },
  description: 'G.D. International School, Aliganj, Etah. Inspiring lifelong learning.',
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#102321' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${dmSans.variable} ${manrope.variable}`}><body className="font-sans">{children}</body></html>
}
