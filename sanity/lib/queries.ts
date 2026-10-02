import type { MarketingPageContent } from '@/lib/site-content'
import { defaultHomeContent, type HomeContent } from '@/lib/home-content'
import { defaultFooterSettings, defaultSiteSettings, type FooterSettings, type SiteSettings } from '@/lib/site-settings'
import { defaultAdmissionContent, defaultContactContent, type AdmissionContent, type ContactContent } from '@/lib/secondary-content'
import { sanityClient } from '@/sanity/lib/client'

type CmsPage = Partial<MarketingPageContent>
type CmsSiteSettings = Partial<SiteSettings> & { logoUrl?: string }
type CmsFooterSettings = Partial<FooterSettings> & { logoUrl?: string }
type CmsHomeContent = Partial<HomeContent>
export type FacultyMember = { name: string; role: string; photo?: ContentImage; qualifications?: string; bio?: string; displayOrder?: number }
export type ContentImage = { url: string; alt?: string }
type CmsNotice = { title?: string; category?: string; summary?: string; publishedAt?: string; featured?: boolean }

const pageQuery = `*[_type == "page" && slug.current == $slug][0]{
  heroTitle, heroAccent, heroSummary, seoTitle, seoDescription, "seoImageUrl": seoImage.asset->url, "heroImage": select(defined(heroImage.asset) => { "url": heroImage.asset->url, "alt": heroImage.alt }),
  introLabel, introTitle, introAccent, introBody,
  featureLabel, featureTitle, featureAccent, cards[]{number, title, body, "image": select(defined(image.asset) => { "url": image.asset->url, "alt": image.alt })},
  panelLabel, panelTitle, panelAccent, panelHeading, panelBody, panelItems[]{number, title, body, "image": select(defined(image.asset) => { "url": image.asset->url, "alt": image.alt })},
  cta, ctaAccent, ctaHref, ctaLabel
}`

const siteSettingsQuery = `*[_id == "siteSettings"][0]{
  schoolName, tagline, "logoUrl": logo.asset->url, phone, email,
  announcement, announcementLinkLabel, announcementLinkHref,
  navigation[]{label, href}, footerExplore[]{label, href}, footerResources[]{label, href},
  footerMotto, addressLineOne, addressLineTwo, directionsUrl, mapEmbedUrl,
  socialLinks[]{label, href, platform}
}`

const footerSettingsQuery = `*[_id == "footerSettings"][0]{
  schoolName, tagline, "logoUrl": logo.asset->url, motto,
  exploreTitle, exploreLinks[]{label, href}, resourcesTitle, resourceLinks[]{label, href},
  socialTitle, socialLinks[]{label, href, platform},
  visitTitle, addressLineOne, addressLineTwo, directionsLabel, directionsUrl, mapEmbedUrl,
  copyrightTemplate, closingMessage
}`

const homePageQuery = `*[_id == "homePage"][0]{
  seoTitle, seoDescription, heroEyebrow,
  heroSlides[]{"image": image.asset->url, title, accent, description},
  primaryCtaLabel, primaryCtaHref, secondaryCtaLabel, secondaryCtaHref,
  heroStats[]{label, value},
  leadership{label, title, accent, "image": image.asset->url, "imageAlt": image.alt, paragraphs, signoff, name, role},
  principal{label, title, accent, mission, quoteLead, quote, "image": image.asset->url, "imageAlt": image.alt, leftParagraphs, rightParagraphs, signoff, name, qualifications},
  notice{label, eventLabel, title, summary, updatedAt, viewMoreLabel, viewMoreHref},
  community{"image": image.asset->url, "imageAlt": image.alt, title, subtitle, gallery[]{"image": image.asset->url, "alt": image.alt, caption}},
  viewpoint{label, title, accent, lead, body},
  highlights[]{title, body, href}
}`

function populatedFields<T extends object>(content: T | null): Partial<T> {
  // Sanity returns explicitly empty fields as null. Do not let those values
  // replace the site's safe defaults, especially for arrays rendered with map.
  return Object.fromEntries(Object.entries(content ?? {}).filter(([, value]) => value != null)) as Partial<T>
}

export async function getCmsPage<T extends MarketingPageContent>(slug: string, fallback: T): Promise<T> {
  if (!sanityClient) return fallback

  try {
    const page = await sanityClient.fetch<CmsPage | null>(pageQuery, { slug }, { next: { revalidate: 60, tags: ['cms-page', `cms-page-${slug}`] } })
    return page ? { ...fallback, ...populatedFields(page) } : fallback
  } catch {
    return fallback
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!sanityClient) return defaultSiteSettings

  try {
    const settings = await sanityClient.fetch<CmsSiteSettings | null>(siteSettingsQuery, {}, { next: { revalidate: 60, tags: ['site-settings'] } })
    return settings ? { ...defaultSiteSettings, ...populatedFields(settings) } : defaultSiteSettings
  } catch {
    return defaultSiteSettings
  }
}

export async function getFooterSettings(): Promise<FooterSettings> {
  if (!sanityClient) return defaultFooterSettings

  try {
    const footer = await sanityClient.fetch<CmsFooterSettings | null>(footerSettingsQuery, {}, { next: { revalidate: 60, tags: ['footer-settings'] } })
    if (!footer) return defaultFooterSettings

    return {
      ...defaultFooterSettings,
      ...populatedFields(footer),
      exploreLinks: footer.exploreLinks?.length ? footer.exploreLinks : defaultFooterSettings.exploreLinks,
      resourceLinks: footer.resourceLinks?.length ? footer.resourceLinks : defaultFooterSettings.resourceLinks,
      socialLinks: footer.socialLinks?.length ? footer.socialLinks : defaultFooterSettings.socialLinks,
    }
  } catch {
    return defaultFooterSettings
  }
}

export async function getHomeContent(): Promise<HomeContent> {
  if (!sanityClient) return defaultHomeContent

  try {
    const [content, featuredNotice] = await Promise.all([
      sanityClient.fetch<CmsHomeContent | null>(homePageQuery, {}, { next: { revalidate: 60, tags: ['home-page'] } }),
      sanityClient.fetch<CmsNotice | null>(`*[_type == "notice" && featured == true] | order(publishedAt desc)[0]{title, category, summary, publishedAt, featured}`, {}, { next: { revalidate: 60, tags: ['notices'] } }),
    ])
    if (!content) return defaultHomeContent
    return {
      ...defaultHomeContent,
      ...populatedFields(content),
      leadership: { ...defaultHomeContent.leadership, ...(content.leadership ?? {}) },
      principal: { ...defaultHomeContent.principal, ...(content.principal ?? {}) },
      notice: { ...defaultHomeContent.notice, ...(content.notice ?? {}), ...(featuredNotice ? { title: featuredNotice.title ?? defaultHomeContent.notice.title, eventLabel: featuredNotice.category ?? defaultHomeContent.notice.eventLabel, summary: featuredNotice.summary ?? defaultHomeContent.notice.summary, updatedAt: featuredNotice.publishedAt ?? defaultHomeContent.notice.updatedAt } : {}) },
      community: { ...defaultHomeContent.community, ...(content.community ?? {}), gallery: content.community?.gallery?.length ? content.community.gallery : defaultHomeContent.community.gallery },
      viewpoint: { ...defaultHomeContent.viewpoint, ...(content.viewpoint ?? {}) },
      highlights: content.highlights?.length ? content.highlights : defaultHomeContent.highlights,
    }
  } catch {
    return defaultHomeContent
  }
}

export async function getFacultyMembers(): Promise<FacultyMember[]> {
  if (!sanityClient) return []
  try {
    return await sanityClient.fetch<FacultyMember[]>(`*[_type == "facultyMember"] | order(displayOrder asc){name, role, qualifications, bio, displayOrder, "photo": select(defined(photo.asset) => { "url": photo.asset->url, "alt": photo.alt })}`, {}, { next: { revalidate: 60, tags: ['faculty-members'] } })
  } catch {
    return []
  }
}

export async function getPageMetadata(slug: string, fallback: MarketingPageContent) {
  if (!sanityClient) return fallback
  try {
    const page = await sanityClient.fetch<Pick<MarketingPageContent, 'seoTitle' | 'seoDescription' | 'seoImageUrl'> | null>(`*[_type == "page" && slug.current == $slug][0]{seoTitle, seoDescription, "seoImageUrl": seoImage.asset->url}`, { slug }, { next: { revalidate: 60, tags: ['cms-page', `cms-page-${slug}`] } })
    return page ? { ...fallback, ...populatedFields(page) } : fallback
  } catch {
    return fallback
  }
}

export async function getAdmissionContent(): Promise<AdmissionContent> {
  if (!sanityClient) return defaultAdmissionContent
  try {
    const content = await sanityClient.fetch<Partial<AdmissionContent> | null>(`*[_id == "admissionPage"][0]{...}`, {}, { next: { revalidate: 60, tags: ['admission-page'] } })
    return content ? { ...defaultAdmissionContent, ...populatedFields(content), steps: content.steps?.length ? content.steps : defaultAdmissionContent.steps } : defaultAdmissionContent
  } catch { return defaultAdmissionContent }
}

export async function getContactContent(): Promise<ContactContent> {
  if (!sanityClient) return defaultContactContent
  try {
    const content = await sanityClient.fetch<Partial<ContactContent> | null>(`*[_id == "contactPage"][0]{...}`, {}, { next: { revalidate: 60, tags: ['contact-page'] } })
    return content ? { ...defaultContactContent, ...populatedFields(content), visitLines: content.visitLines?.length ? content.visitLines : defaultContactContent.visitLines } : defaultContactContent
  } catch { return defaultContactContent }
}
