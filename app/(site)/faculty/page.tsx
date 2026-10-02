import type { Metadata } from 'next'
import { MarketingPage } from '@/components/marketing-page'
import { marketingPages } from '@/lib/site-content'
import { getCmsPage, getFacultyMembers } from '@/sanity/lib/queries'

export default async function FacultyPage() {
  const [content, faculty] = await Promise.all([getCmsPage('faculty', marketingPages.faculty), getFacultyMembers()])
  return <MarketingPage content={content} faculty={faculty} />
}

export async function generateMetadata(): Promise<Metadata> {
  const content = await getCmsPage('faculty', marketingPages.faculty)
  return { title: content.seoTitle ?? 'Faculty', description: content.seoDescription, openGraph: content.seoImageUrl ? { images: [content.seoImageUrl] } : undefined }
}
