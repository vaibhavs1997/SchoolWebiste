'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { CommunityGalleryItem } from '@/lib/home-content'

export function CommunityCarousel({ items }: Readonly<{ items: CommunityGalleryItem[] }>) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = items[activeIndex] ?? items[0]

  if (!activeItem) return null

  function move(direction: -1 | 1) {
    setActiveIndex((current) => (current + direction + items.length) % items.length)
  }

  return <div className="relative aspect-[5/4] overflow-hidden">
    <Image src={activeItem.image} alt={activeItem.alt} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover object-center transition-opacity duration-500" />
    {items.length > 1 && <>
      <button type="button" onClick={() => move(-1)} aria-label="Show previous community image" className="absolute left-4 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-ink/75 text-xl text-white transition hover:bg-ink">←</button>
      <button type="button" onClick={() => move(1)} aria-label="Show next community image" className="absolute right-4 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-ink/75 text-xl text-white transition hover:bg-ink">→</button>
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2" aria-label="Community gallery slides">{items.map((item, index) => <button key={`${item.image}-${index}`} type="button" onClick={() => setActiveIndex(index)} aria-label={`Show community image ${index + 1}`} aria-current={index === activeIndex} className={`h-2.5 w-2.5 rounded-full transition ${index === activeIndex ? 'bg-lime' : 'bg-white/70 hover:bg-white'}`} />)}</div>
    </>}
  </div>
}
