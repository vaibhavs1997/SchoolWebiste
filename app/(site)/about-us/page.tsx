import type { Metadata } from 'next'
import { MarketingPage } from '@/components/marketing-page'
import { marketingPages } from '@/lib/site-content'
import { getCmsPage } from '@/sanity/lib/queries'

export default async function AboutUsPage() {
  const content = await getCmsPage('about-us', marketingPages['about-us'])
  return <MarketingPage content={content} />
}

export async function generateMetadata(): Promise<Metadata> {
  const content = await getCmsPage('about-us', marketingPages['about-us'])
  return { title: content.seoTitle ?? 'About Us', description: content.seoDescription, openGraph: content.seoImageUrl ? { images: [content.seoImageUrl] } : undefined }
}
