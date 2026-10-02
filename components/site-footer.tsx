import Image from 'next/image'
import Link from 'next/link'
import type { FooterSettings, SocialLink } from '@/lib/site-settings'

const hasText = (...values: Array<string | undefined>) => values.some((value) => Boolean(value?.trim()))

export function SiteFooter({ settings }: Readonly<{ settings: FooterSettings }>) {
  const logo = settings.logoUrl ?? '/assets/GDIS.png'
  const exploreLinks = settings.exploreLinks.filter((item) => hasText(item.label, item.href))
  const resourceLinks = settings.resourceLinks.filter((item) => hasText(item.label, item.href))
  const socialLinks = settings.socialLinks.filter((item) => hasText(item.label, item.href))
  const hasIdentity = hasText(settings.schoolName, settings.tagline, settings.motto)
  const hasVisit = hasText(settings.addressLineOne, settings.addressLineTwo, settings.directionsUrl, settings.mapEmbedUrl)
  const copyright = settings.copyrightTemplate.replace('{year}', String(new Date().getFullYear())).replace('{schoolName}', settings.schoolName)

  return <footer className="bg-ink-deep text-white">
    <div className="mx-auto grid w-[min(1810px,calc(100%-3rem))] gap-12 py-[4.5rem] xl:grid-cols-[1.7fr_.78fr_.9fr_.72fr_1fr] xl:gap-10">
      {hasIdentity && <div><Link href="/" className="flex items-center gap-4"><Image src={logo} alt={`${settings.schoolName} emblem`} width={86} height={86} className="h-20 w-20 rounded-full border border-white/20 object-cover" /><span>{hasText(settings.schoolName) && <strong className="font-display text-2xl tracking-[-.055em]">{settings.schoolName}</strong>}{hasText(settings.tagline) && <small className="mt-1 block text-sm text-white/60">{settings.tagline}</small>}</span></Link>{hasText(settings.motto) && <p className="mt-10 max-w-xs font-serif text-2xl leading-relaxed text-white/70">{settings.motto}</p>}</div>}
      {exploreLinks.length > 0 && <FooterColumn title={settings.exploreTitle}><LinkList items={exploreLinks} /></FooterColumn>}
      {resourceLinks.length > 0 && <FooterColumn title={settings.resourcesTitle}><LinkList items={resourceLinks} /></FooterColumn>}
      {socialLinks.length > 0 && <FooterColumn title={settings.socialTitle}><div className="flex flex-col gap-4">{socialLinks.map((item) => <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-lg text-white/75 transition hover:text-lime"><SocialIcon name={item.platform} />{item.label}</a>)}</div></FooterColumn>}
      {hasVisit && <FooterColumn title={settings.visitTitle}>{hasText(settings.addressLineOne, settings.addressLineTwo) && <address className="not-italic text-lg leading-relaxed text-white/75">{settings.addressLineOne}{hasText(settings.addressLineOne, settings.addressLineTwo) && settings.addressLineOne?.trim() && settings.addressLineTwo?.trim() ? <br /> : null}{settings.addressLineTwo}</address>}{hasText(settings.directionsUrl) && <a className="mt-4 inline-flex text-base font-bold text-lime transition hover:text-white" href={settings.directionsUrl} target="_blank" rel="noreferrer">{settings.directionsLabel} ↗</a>}{hasText(settings.mapEmbedUrl) && <iframe title={`${settings.schoolName} location`} className="mt-7 h-28 w-full border-0" loading="lazy" src={settings.mapEmbedUrl} />}</FooterColumn>}
    </div>
    {hasText(copyright, settings.closingMessage) && <div className="border-t border-white/15"><div className="mx-auto flex w-[min(1810px,calc(100%-3rem))] flex-col justify-between gap-3 py-6 text-sm text-white/55 sm:flex-row">{hasText(copyright) && <span>{copyright}</span>}{hasText(settings.closingMessage) && <span>{settings.closingMessage} ✦</span>}</div></div>}
  </footer>
}

function LinkList({ items }: Readonly<{ items: Array<{ label: string; href: string }> }>) {
  return <div className="flex flex-col gap-4">{items.map((item) => <Link key={`${item.href}-${item.label}`} href={item.href} className="text-lg text-white/75 transition hover:text-lime">{item.label}</Link>)}</div>
}

function FooterColumn({ title, children }: Readonly<{ title: string; children: React.ReactNode }>) {
  return <div>{hasText(title) && <p className="mb-8 text-sm font-extrabold uppercase tracking-[.15em] text-lime">{title}</p>}{children}</div>
}

function SocialIcon({ name }: Readonly<{ name: SocialLink['platform'] }>) {
  const common = { className: 'h-5 w-5 shrink-0', fill: 'none', stroke: 'currentColor', strokeWidth: 1.9, viewBox: '0 0 24 24', 'aria-hidden': true }
  if (name === 'instagram') return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.25" cy="6.75" r=".8" fill="currentColor" stroke="none" /></svg>
  if (name === 'facebook') return <svg {...common}><path d="M14.5 21v-8h2.8l.4-3h-3.2V8.1c0-.9.3-1.6 1.7-1.6H18V3.8c-.4-.1-1.2-.2-2.2-.2-2.3 0-3.9 1.4-3.9 4V10H9v3h2.9v8" strokeLinecap="round" strokeLinejoin="round" /></svg>
  if (name === 'whatsapp') return <svg {...common}><path d="M20.2 11.4a8.1 8.1 0 0 1-11.9 7.2L4 20l1.5-4.1A8.1 8.1 0 1 1 20.2 11.4Z" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.1 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .3.1.4.3l.6 1.4c.1.2.1.3 0 .5l-.4.5c-.1.1-.1.3 0 .4.4.7 1 1.3 1.7 1.7.1.1.3.1.4 0l.5-.4c.2-.1.3-.1.5 0l1.4.6c.2.2.3.2.3.4v.5c0 .3 0 .5-.4.7-.4.2-1.1.2-2 .1-1.1-.4-2.4-1.3-3.4-2.4-1.1-1-2-2.3-2.4-3.4-.3-.9-.1-1.6.1-2Z" strokeLinecap="round" strokeLinejoin="round" /></svg>
  return <svg {...common}><path d="M21.2 7.1a2.9 2.9 0 0 0-2-2C17.5 4.7 12 4.7 12 4.7s-5.5 0-7.2.4a2.9 2.9 0 0 0-2 2A30 30 0 0 0 2.4 12a30 30 0 0 0 .4 4.9 2.9 2.9 0 0 0 2 2c1.7.4 7.2.4 7.2.4s5.5 0 7.2-.4a2.9 2.9 0 0 0 2-2 30 30 0 0 0 .4-4.9 30 30 0 0 0-.4-4.9Z" /><path d="m10 15.3 5-3.3-5-3.3v6.6Z" fill="currentColor" stroke="none" /></svg>
}
