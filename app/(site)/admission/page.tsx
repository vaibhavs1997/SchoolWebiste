import type { Metadata } from 'next'
import Link from 'next/link'
import { AdmissionForm } from '@/components/admission-form'
import { getAdmissionContent } from '@/sanity/lib/queries'

const hasText = (...values: Array<string | undefined>) => values.some((value) => Boolean(value?.trim()))
const nonEmpty = (value: string) => Boolean(value.trim())

export default async function AdmissionPage() {
  const content = await getAdmissionContent()
  const hasHero = hasText(content.banner, content.eyebrow, content.heroTitle, content.heroAccent, content.heroSummary)
  const hasIntro = hasText(content.introLabel, content.introTitle, content.introAccent, content.introCtaLabel) || content.introParagraphs.some(nonEmpty)
  const hasSteps = hasText(content.stepsLabel, content.stepsTitle, content.stepsAccent) || content.steps.some((step) => hasText(step.number, step.title, step.body))
  const hasForm = hasText(content.formEyebrow, content.formTitle, content.formAccent, content.formDescription)
  const hasClosing = hasText(content.closingTitle, content.closingAccent, content.closingCtaLabel, content.closingCtaHref)

  return <main>
    {hasHero && <section className="relative overflow-hidden bg-ink-deep py-20 text-white sm:py-28"><div className="absolute -right-24 -bottom-64 h-[42rem] w-[42rem] rounded-full border border-orange-300/20" /><div className="site-shell relative">{hasText(content.banner) && <div className="mb-7 inline-grid place-items-center border border-lime/50 bg-lime/10 px-6 py-3 text-xs font-extrabold uppercase tracking-[0.16em] text-lime">{content.banner}</div>}{hasText(content.eyebrow) && <p className="eyebrow text-white/65">{content.eyebrow}</p>}{hasText(content.heroTitle, content.heroAccent) && <h1 className="mt-6 max-w-5xl font-display text-5xl font-bold tracking-[-0.07em] sm:text-7xl lg:text-8xl">{content.heroTitle}{hasText(content.heroAccent) && <><br /><em className="font-serif font-normal text-lime">{content.heroAccent}</em></>}</h1>}{hasText(content.heroSummary) && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">{content.heroSummary}</p>}</div></section>}
    {hasIntro && <section className="bg-paper py-16 sm:py-24"><div className="site-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24"><div>{hasText(content.introLabel) && <p className="section-label">{content.introLabel}</p>}{hasText(content.introTitle, content.introAccent) && <h2 className="section-heading">{content.introTitle} {hasText(content.introAccent) && <em>{content.introAccent}</em>}</h2>}</div>{content.introParagraphs.some(nonEmpty) || hasText(content.introCtaLabel) ? <div className="space-y-5 text-lg leading-relaxed text-ink-soft">{content.introParagraphs.filter(nonEmpty).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{hasText(content.introCtaLabel) && <a href="#admission-form" className="inline-flex rounded-full bg-ink px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5">{content.introCtaLabel}</a>}</div> : null}</div></section>}
    {hasSteps && <section className="bg-cream py-16 sm:py-24"><div className="site-shell">{hasText(content.stepsLabel) && <p className="section-label">{content.stepsLabel}</p>}{hasText(content.stepsTitle, content.stepsAccent) && <h2 className="section-heading mb-10">{content.stepsTitle} {hasText(content.stepsAccent) && <em>{content.stepsAccent}</em>}</h2>}{content.steps.some((step) => hasText(step.number, step.title, step.body)) && <div className="grid gap-5 md:grid-cols-3">{content.steps.filter((step) => hasText(step.number, step.title, step.body)).map((step) => <article key={step.title} className="min-h-60 border border-ink/15 bg-white/45 p-7">{hasText(step.number) && <p className="mb-12 text-xs font-extrabold tracking-[0.14em] text-ink-soft">{step.number}</p>}{hasText(step.title) && <h3 className="font-display text-2xl font-bold tracking-[-0.04em]">{step.title}</h3>}{hasText(step.body) && <p className="mt-3 leading-relaxed text-ink-soft">{step.body}</p>}</article>)}</div>}</div></section>}
    {hasForm && <section id="admission-form" className="bg-ink py-16 text-white sm:py-24"><div className="site-shell border border-white/15 bg-ink-deep p-7 sm:p-14"><div className="mx-auto mb-10 max-w-2xl text-center">{hasText(content.formEyebrow) && <p className="eyebrow justify-center text-white/65">{content.formEyebrow}</p>}{hasText(content.formTitle, content.formAccent) && <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.06em] sm:text-6xl">{content.formTitle} {hasText(content.formAccent) && <em className="font-serif font-normal text-lime">{content.formAccent}</em>}</h2>}{hasText(content.formDescription) && <p className="mt-4 text-white/70">{content.formDescription}</p>}</div><AdmissionForm /></div></section>}
    {hasClosing && <section className="bg-paper py-16 sm:py-20"><div className="site-shell flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">{hasText(content.closingTitle, content.closingAccent) && <h2 className="max-w-3xl font-display text-4xl font-bold tracking-[-0.06em] sm:text-6xl">{content.closingTitle} {hasText(content.closingAccent) && <em className="font-serif font-normal text-[#6d9d8b]">{content.closingAccent}</em>}</h2>}{hasText(content.closingCtaLabel, content.closingCtaHref) && <Link href={content.closingCtaHref} className="rounded-full bg-lime px-6 py-4 text-sm font-bold text-ink">{content.closingCtaLabel}</Link>}</div></section>}
  </main>
}

export async function generateMetadata(): Promise<Metadata> {
  const content = await getAdmissionContent()
  return { title: content.seoTitle ?? 'Admissions', description: content.seoDescription }
}
