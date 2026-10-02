import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { getFooterSettings, getSiteSettings } from '@/sanity/lib/queries'

export default async function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [settings, footerSettings] = await Promise.all([getSiteSettings(), getFooterSettings()])
  return <><SiteHeader settings={settings} />{children}<SiteFooter settings={footerSettings} /></>
}
