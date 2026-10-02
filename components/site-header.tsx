'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { SiteSettings } from '@/lib/site-settings'

export function SiteHeader({ settings }: Readonly<{ settings: SiteSettings }>) {
  const pathname = usePathname()
  const logo = settings.logoUrl ?? '/assets/GDIS.png'
  const phoneHref = `tel:${settings.phone.replace(/[^+\d]/g, '')}`
  const showAnnouncement = Boolean(settings.announcement || settings.announcementLinkLabel)

  return <>
    {showAnnouncement && <div className="bg-ink-deep text-xs text-white">
      <div className="site-shell flex min-h-10 flex-wrap items-center justify-center gap-x-6 gap-y-1 py-2 text-center">
        {settings.announcement && <p className="flex items-center gap-3 font-normal"><span className="h-2.5 w-2.5 shrink-0 rounded-full bg-lime shadow-[0_0_0_5px_rgba(220,240,122,.12)]" aria-hidden="true" />{settings.announcement}</p>}
        {settings.announcementLinkLabel && settings.announcementLinkHref && <Link href={settings.announcementLinkHref} className="shrink-0 font-normal text-lime hover:text-white">{settings.announcementLinkLabel}</Link>}
      </div>
    </div>}
    <header className="border-b border-ink/10 bg-paper">
      <div className="relative mx-auto flex min-h-32 w-[min(1810px,calc(100%-3rem))] flex-nowrap items-center justify-between gap-3 py-4">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label={`${settings.schoolName} home`}>
          <Image src={logo} alt={`${settings.schoolName} emblem`} width={80} height={80} priority className="h-[4.5rem] w-[4.5rem] rounded-full border border-ink/15 object-cover" />
          <span className="flex flex-col"><strong className="whitespace-nowrap font-display text-[1.75rem] font-extrabold tracking-[-0.06em] text-brand">{settings.schoolName}</strong><small className="mt-1 text-[13px] tracking-[0.02em] text-brand/70">{settings.tagline}</small></span>
        </Link>
        <nav className="flex flex-1 flex-nowrap justify-center gap-5" aria-label="Primary navigation">
          {settings.navigation.map((item) => {
            const active = pathname === item.href
            return <Link key={`${item.href}-${item.label}`} href={item.href} className={`whitespace-nowrap text-base font-bold tracking-[-0.02em] ${active ? 'text-olive' : 'text-brand hover:text-lime'}`}>{item.label}</Link>
          })}
        </nav>
        <div className="flex shrink-0 items-center gap-3 border-l border-ink/15 pl-4">
          <a href={phoneHref} className="flex items-center gap-2 whitespace-nowrap text-base font-bold text-brand"><span className="text-lg text-olive" aria-hidden="true">☎</span>{settings.phone}</a>
          <Link href="/contact" className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-lime px-5 py-3.5 text-base font-bold text-ink transition hover:-translate-y-0.5"><span className="text-lg leading-none" aria-hidden="true">✉</span>Let&apos;s Connect</Link>
        </div>
      </div>
    </header>
  </>
}
