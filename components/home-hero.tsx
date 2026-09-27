'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { HomeContent } from '@/lib/home-content'

export function HomeHero({ content }: Readonly<{ content: HomeContent }>) {
  const [activeSlide, setActiveSlide] = useState(0)
  const slide = content.heroSlides[activeSlide] ?? content.heroSlides[0]

  function changeSlide(direction: -1 | 1) {
    setActiveSlide((current) => (current + direction + content.heroSlides.length) % content.heroSlides.length)
  }

  return (
    <section className="relative isolate min-h-[690px] overflow-hidden bg-ink-deep text-white sm:min-h-[760px]">
      <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-500" style={{ backgroundImage: `url('${slide.image}')` }} aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,39,35,.98)_0%,rgba(8,39,35,.9)_32%,rgba(8,39,35,.54)_62%,rgba(8,39,35,.26)_100%)]" />
      <button type="button" onClick={() => changeSlide(-1)} aria-label="Show previous slide" className="absolute left-6 top-1/2 z-10 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-white/45 text-2xl transition hover:bg-white/15 sm:left-10">←</button>
      <button type="button" onClick={() => changeSlide(1)} aria-label="Show next slide" className="absolute right-6 top-1/2 z-10 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-white/45 text-2xl transition hover:bg-white/15 sm:right-10">→</button>
      <div className="site-shell relative flex min-h-[690px] flex-col justify-start py-12 sm:min-h-[760px] sm:py-14">
        <p className="eyebrow text-white/75">{content.heroEyebrow}</p>
        <h1 className="mt-10 max-w-6xl font-display text-5xl font-bold leading-[.94] tracking-[-0.075em] sm:text-7xl lg:text-[6.4rem]">{slide.title}<br /><em className="font-serif font-normal tracking-[-0.065em] text-lime">{slide.accent}</em></h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">{slide.description}</p>
        <div className="mt-9 flex flex-wrap items-center gap-6"><Link href={content.primaryCtaHref} className="rounded-full bg-lime px-7 py-4 text-sm font-bold text-ink transition hover:-translate-y-0.5">{content.primaryCtaLabel} <span aria-hidden="true">↗</span></Link><Link href={content.secondaryCtaHref} className="border-b border-white/60 pb-1 text-sm font-bold transition hover:text-lime">{content.secondaryCtaLabel} <span aria-hidden="true">↓</span></Link></div>
        <div className="mt-auto grid gap-6 border-t border-white/30 pt-8 text-sm sm:grid-cols-3 sm:gap-10">{content.heroStats.map((item) => <div key={item.label}><strong className="block font-bold text-lime">{item.label}</strong><span className="mt-2 block text-white/70">{item.value}</span></div>)}</div>
      </div>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2" aria-label="Hero slides">{content.heroSlides.map((item, index) => <button key={item.accent} type="button" onClick={() => setActiveSlide(index)} aria-label={`Show slide ${index + 1}`} aria-current={index === activeSlide} className={`h-2.5 w-2.5 rounded-full transition ${index === activeSlide ? 'bg-lime' : 'bg-white/45 hover:bg-white'}`} />)}</div>
      <span className="absolute bottom-11 right-5 hidden origin-bottom-right -rotate-90 text-[10px] font-bold tracking-[.24em] text-white/55 xl:block">SCROLL TO EXPLORE</span>
    </section>
  )
}
