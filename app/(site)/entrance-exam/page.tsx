import type { Metadata } from 'next'
import { MarketingPage } from '@/components/marketing-page'
import { marketingPages } from '@/lib/site-content'
import { getCmsPage } from '@/sanity/lib/queries'

export default async function EntranceExamPage() {
  const content = await getCmsPage('entrance-exam', marketingPages['entrance-exam'])
  return <MarketingPage content={content} />
}

export async function generateMetadata(): Promise<Metadata> {
  const content = await getCmsPage('entrance-exam', marketingPages['entrance-exam'])
  return { title: content.seoTitle ?? 'Entrance Exam', description: content.seoDescription, openGraph: content.seoImageUrl ? { images: [content.seoImageUrl] } : undefined }
}
