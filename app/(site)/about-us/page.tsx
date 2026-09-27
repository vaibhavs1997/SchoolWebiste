import type { Metadata } from 'next'
import { MarketingPage } from '@/components/marketing-page'
import { marketingPages } from '@/lib/site-content'
import { getCmsPage } from '@/sanity/lib/queries'

export const metadata: Metadata = { title: 'About Us' }

export default async function AboutUsPage() {
  const content = await getCmsPage('about-us', marketingPages['about-us'])
  return <MarketingPage content={content} />
}
