import type { Metadata } from 'next'
import Link from 'next/link'
import { AdmissionForm } from '@/components/admission-form'
import { getAdmissionContent } from '@/sanity/lib/queries'

export default async function AdmissionPage() {
  const content = await getAdmissionContent()
  return <main>
    <section className="relative overflow-hidden bg-ink-deep py-20 text-white sm:py-28"><div className="absolute -right-24 -bottom-64 h-[42rem] w-[42rem] rounded-full border border-orange-300/20" /><div className="site-shell relative"><div className="mb-7 inline-grid place-items-center border border-lime/50 bg-lime/10 px-6 py-3 text-xs font-extrabold uppercase tracking-[0.16em] text-lime">{content.banner}</div><p className="eyebrow text-white/65">{content.eyebrow}</p><h1 className="mt-6 max-w-5xl font-display text-5xl font-bold tracking-[-0.07em] sm:text-7xl lg:text-8xl">{content.heroTitle}<br /><em className="font-serif font-normal text-lime">{content.heroAccent}</em></h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">{content.heroSummary}</p></div></section>
    <section className="bg-paper py-16 sm:py-24"><div className="site-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24"><div><p className="section-label">{content.introLabel}</p><h2 className="section-heading">{content.introTitle} <em>{content.introAccent}</em></h2></div><div className="space-y-5 text-lg leading-relaxed text-ink-soft">{content.introParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<a href="#admission-form" className="inline-flex rounded-full bg-ink px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5">{content.introCtaLabel}</a></div></div></section>
    <section className="bg-cream py-16 sm:py-24"><div className="site-shell"><p className="section-label">{content.stepsLabel}</p><h2 className="section-heading mb-10">{content.stepsTitle} <em>{content.stepsAccent}</em></h2><div className="grid gap-5 md:grid-cols-3">{content.steps.map((step) => <article key={step.title} className="min-h-60 border border-ink/15 bg-white/45 p-7"><p className="mb-12 text-xs font-extrabold tracking-[0.14em] text-ink-soft">{step.number}</p><h3 className="font-display text-2xl font-bold tracking-[-0.04em]">{step.title}</h3><p className="mt-3 leading-relaxed text-ink-soft">{step.body}</p></article>)}</div></div></section>
    <section id="admission-form" className="bg-ink py-16 text-white sm:py-24"><div className="site-shell border border-white/15 bg-ink-deep p-7 sm:p-14"><div className="mx-auto mb-10 max-w-2xl text-center"><p className="eyebrow justify-center text-white/65">{content.formEyebrow}</p><h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.06em] sm:text-6xl">{content.formTitle} <em className="font-serif font-normal text-lime">{content.formAccent}</em></h2><p className="mt-4 text-white/70">{content.formDescription}</p></div><AdmissionForm /></div></section>
    <section className="bg-paper py-16 sm:py-20"><div className="site-shell flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"><h2 className="max-w-3xl font-display text-4xl font-bold tracking-[-0.06em] sm:text-6xl">{content.closingTitle} <em className="font-serif font-normal text-[#6d9d8b]">{content.closingAccent}</em></h2><Link href={content.closingCtaHref} className="rounded-full bg-lime px-6 py-4 text-sm font-bold text-ink">{content.closingCtaLabel}</Link></div></section>
  </main>
}

export async function generateMetadata(): Promise<Metadata> {
  const content = await getAdmissionContent()
  return { title: content.seoTitle ?? 'Admissions', description: content.seoDescription }
}
