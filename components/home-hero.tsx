'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { HomeContent } from '@/lib/home-content'

export function HomeHero({ content }: Readonly<{ content: HomeContent }>) {
  const [activeSlide, setActiveSlide] = useState(0)
  const heroSlides = content.heroSlides?.filter((slide) => slide.image || slide.title?.trim() || slide.accent?.trim() || slide.description?.trim()) ?? []
  const heroStats = content.heroStats?.filter((item) => item.label?.trim() || item.value?.trim()) ?? []
  const slide = heroSlides[activeSlide] ?? heroSlides[0]

  function changeSlide(direction: -1 | 1) {
    if (!heroSlides.length) return
    setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length)
  }

  if (!slide) return null

  return <section className="relative isolate min-h-[690px] overflow-hidden bg-ink-deep text-white sm:min-h-[760px]">
    {slide.image && <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-500" style={{ backgroundImage: `url('${slide.image}')` }} aria-hidden="true" />}
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.52)_0%,rgba(0,0,0,.34)_32%,rgba(0,0,0,.18)_62%,rgba(0,0,0,.08)_100%)]" />
    {heroSlides.length > 1 && <><button type="button" onClick={() => changeSlide(-1)} aria-label="Show previous slide" className="absolute left-6 top-1/2 z-10 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-white/45 text-2xl transition hover:bg-white/15 sm:left-10">←</button><button type="button" onClick={() => changeSlide(1)} aria-label="Show next slide" className="absolute right-6 top-1/2 z-10 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-white/45 text-2xl transition hover:bg-white/15 sm:right-10">→</button></>}
    <div className="site-shell relative flex min-h-[690px] flex-col justify-start py-12 sm:min-h-[760px] sm:py-14">
      {content.heroEyebrow?.trim() && <p className="eyebrow text-white/75">{content.heroEyebrow}</p>}
      {(slide.title?.trim() || slide.accent?.trim()) && <h1 className="mt-10 max-w-6xl font-display text-5xl font-bold leading-[.94] tracking-[-0.075em] sm:text-7xl lg:text-[6.4rem]">{slide.title}{slide.accent?.trim() && <><br /><em className="font-serif font-normal tracking-[-0.065em] text-lime">{slide.accent}</em></>}</h1>}
      {slide.description?.trim() && <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">{slide.description}</p>}
      {(content.primaryCtaLabel?.trim() && content.primaryCtaHref?.trim()) || (content.secondaryCtaLabel?.trim() && content.secondaryCtaHref?.trim()) ? <div className="mt-9 flex flex-wrap items-center gap-6">{content.primaryCtaLabel?.trim() && content.primaryCtaHref?.trim() && <Link href={content.primaryCtaHref} className="rounded-full bg-lime px-7 py-4 text-sm font-bold text-ink transition hover:-translate-y-0.5">{content.primaryCtaLabel} <span aria-hidden="true">↗</span></Link>}{content.secondaryCtaLabel?.trim() && content.secondaryCtaHref?.trim() && <Link href={content.secondaryCtaHref} className="border-b border-white/60 pb-1 text-sm font-bold transition hover:text-lime">{content.secondaryCtaLabel} <span aria-hidden="true">↓</span></Link>}</div> : null}
      {heroStats.length > 0 && <div className="mt-auto grid gap-6 border-t border-white/30 pt-8 text-sm sm:grid-cols-3 sm:gap-10">{heroStats.map((item) => <div key={`${item.label}-${item.value}`}>{item.label?.trim() && <strong className="block font-bold text-lime">{item.label}</strong>}{item.value?.trim() && <span className="mt-2 block text-white/70">{item.value}</span>}</div>)}</div>}
    </div>
    {heroSlides.length > 1 && <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2" aria-label="Hero slides">{heroSlides.map((item, index) => <button key={`${item.accent}-${index}`} type="button" onClick={() => setActiveSlide(index)} aria-label={`Show slide ${index + 1}`} aria-current={index === activeSlide} className={`h-2.5 w-2.5 rounded-full transition ${index === activeSlide ? 'bg-lime' : 'bg-white/45 hover:bg-white'}`} />)}</div>}
    <span className="absolute bottom-11 right-5 hidden origin-bottom-right -rotate-90 text-[10px] font-bold tracking-[.24em] text-white/55 xl:block">SCROLL TO EXPLORE</span>
  </section>
}
