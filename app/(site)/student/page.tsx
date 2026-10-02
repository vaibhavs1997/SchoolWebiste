import type { Metadata } from 'next'
import { MarketingPage } from '@/components/marketing-page'
import { marketingPages } from '@/lib/site-content'
import { getCmsPage } from '@/sanity/lib/queries'

export default async function StudentPage() {
  const content = await getCmsPage('student', marketingPages.student)
  return <MarketingPage content={content} />
}

export async function generateMetadata(): Promise<Metadata> {
  const content = await getCmsPage('student', marketingPages.student)
  return { title: content.seoTitle ?? 'Student Life', description: content.seoDescription, openGraph: content.seoImageUrl ? { images: [content.seoImageUrl] } : undefined }
}
