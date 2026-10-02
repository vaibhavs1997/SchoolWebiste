import type { MarketingPageContent } from '@/lib/site-content'
import { defaultHomeContent, type HomeContent } from '@/lib/home-content'
import { defaultSiteSettings, type SiteSettings } from '@/lib/site-settings'
import { sanityClient } from '@/sanity/lib/client'

type CmsPage = Partial<MarketingPageContent>
type CmsSiteSettings = Partial<SiteSettings> & { logoUrl?: string }
type CmsHomeContent = Partial<HomeContent>

const pageQuery = `*[_type == "page" && slug.current == $slug][0]{
  heroTitle, heroAccent, heroSummary, "heroImage": select(defined(heroImage.asset) => { "url": heroImage.asset->url, "alt": heroImage.alt }),
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

const homePageQuery = `*[_id == "homePage"][0]{
  heroEyebrow,
  heroSlides[]{"image": image.asset->url, title, accent, description},
  primaryCtaLabel, primaryCtaHref, secondaryCtaLabel, secondaryCtaHref,
  heroStats[]{label, value}
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

export async function getHomeContent(): Promise<HomeContent> {
  if (!sanityClient) return defaultHomeContent

  try {
    const content = await sanityClient.fetch<CmsHomeContent | null>(homePageQuery, {}, { next: { revalidate: 60, tags: ['home-page'] } })
    if (!content) return defaultHomeContent

    const merged = { ...defaultHomeContent, ...populatedFields(content) }

    return {
      ...merged,
      heroSlides: content.heroSlides?.length ? content.heroSlides : defaultHomeContent.heroSlides,
      heroStats: content.heroStats?.length ? content.heroStats : defaultHomeContent.heroStats,
    }
  } catch {
    return defaultHomeContent
  }
}
