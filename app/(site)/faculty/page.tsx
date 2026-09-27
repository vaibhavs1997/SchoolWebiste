import type { Metadata } from 'next'
import { MarketingPage } from '@/components/marketing-page'
import { marketingPages } from '@/lib/site-content'
import { getCmsPage } from '@/sanity/lib/queries'

export const metadata: Metadata = { title: 'Faculty' }

export default async function FacultyPage() {
  const content = await getCmsPage('faculty', marketingPages.faculty)
  return <MarketingPage content={content} />
}
