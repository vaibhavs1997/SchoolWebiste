import type { Metadata } from 'next'
import Link from 'next/link'
import { getContactContent } from '@/sanity/lib/queries'
import { getSiteSettings } from '@/sanity/lib/queries'

export default async function ContactPage() {
  const [content, settings] = await Promise.all([getContactContent(), getSiteSettings()])
  return <main><section className="bg-ink py-20 text-white sm:py-28"><div className="site-shell"><p className="eyebrow text-white/65">{content.eyebrow}</p><h1 className="mt-6 font-display text-5xl font-bold tracking-[-0.07em] sm:text-7xl">{content.heroTitle} <em className="font-serif font-normal text-lime">{content.heroAccent}</em></h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">{content.heroSummary}</p></div></section><section className="bg-paper py-16 sm:py-24"><div className="site-shell grid gap-7 md:grid-cols-3"><a className="border border-ink/15 bg-[#fffdf7] p-8" href={`tel:${settings.phone.replace(/[^+\d]/g, '')}`}><p className="section-label">{content.phoneLabel}</p><p className="mt-5 text-xl font-bold">{settings.phone}</p></a><a className="border border-ink/15 bg-[#fffdf7] p-8" href={`mailto:${settings.email}`}><p className="section-label">{content.emailLabel}</p><p className="mt-5 break-words text-xl font-bold">{settings.email}</p></a><div className="border border-ink/15 bg-[#fffdf7] p-8"><p className="section-label">{content.visitLabel}</p><p className="mt-5 leading-relaxed">{content.visitLines.map((line) => <span key={line} className="block">{line}</span>)}</p></div></div><div className="site-shell mt-12 text-center"><Link href={content.ctaHref} className="rounded-full bg-lime px-6 py-4 text-sm font-bold text-ink">{content.ctaLabel}</Link></div></section></main>
}

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContactContent()
  return { title: content.seoTitle ?? 'Contact Us', description: content.seoDescription }
}
