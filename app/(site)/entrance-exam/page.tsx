import type { Metadata } from 'next'
import { MarketingPage } from '@/components/marketing-page'
import { marketingPages } from '@/lib/site-content'
import { getCmsPage } from '@/sanity/lib/queries'

export const metadata: Metadata = { title: 'Entrance Exam' }

export default async function EntranceExamPage() {
  const content = await getCmsPage('entrance-exam', marketingPages['entrance-exam'])
  return <MarketingPage content={content} />
}
