import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { getSiteSettings } from '@/sanity/lib/queries'

export default async function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const settings = await getSiteSettings()
  return <><SiteHeader settings={settings} />{children}<SiteFooter settings={settings} /></>
}
