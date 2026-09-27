import type { Metadata } from 'next'
import { MarketingPage } from '@/components/marketing-page'
import { marketingPages } from '@/lib/site-content'
import { getCmsPage } from '@/sanity/lib/queries'

export const metadata: Metadata = { title: 'Student Life' }

export default async function StudentPage() {
  const content = await getCmsPage('student', marketingPages.student)
  return <MarketingPage content={content} />
}
