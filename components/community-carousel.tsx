'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { CommunitySlide } from '@/lib/home-content'

export function CommunityCarousel({ slides }: Readonly<{ slides: CommunitySlide[] }>) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const activeSlide = slides[activeIndex] ?? slides[0]

  useEffect(() => {
    if (slides.length < 2 || isPaused) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [isPaused, slides.length])

  if (!activeSlide) return null

  return <div onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onFocus={() => setIsPaused(true)} onBlur={(event) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false)
  }}>
    <div className="relative aspect-[5/4] overflow-hidden">
      <Image src={activeSlide.image} alt={activeSlide.alt} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover object-center transition-opacity duration-500" />
    </div>
    <div className="bg-[#edf3ee] px-7 py-6 text-center">
      <h3 className="font-display text-3xl font-bold tracking-[-.05em] text-[#6f5931]">{activeSlide.title}</h3>
      <p className="mt-2 text-lg font-medium text-ink-soft">{activeSlide.subtitle}</p>
    </div>
    {slides.length > 1 && <div className="mt-5 flex justify-center gap-2" aria-label="Community feature slides">
      {slides.map((slide, index) => <button key={`${slide.image}-${index}`} type="button" onClick={() => setActiveIndex(index)} aria-label={`Show community slide ${index + 1}`} aria-current={index === activeIndex} className={`h-2.5 w-2.5 rounded-full transition ${index === activeIndex ? 'bg-[#bda372]' : 'bg-[#d9c28f] hover:bg-[#bda372]'}`} />)}
    </div>}
  </div>
}
