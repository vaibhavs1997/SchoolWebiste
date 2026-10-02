export type NavigationItem = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href: string
  platform: 'instagram' | 'facebook' | 'youtube' | 'whatsapp'
}

export type SiteSettings = {
  schoolName: string
  tagline: string
  logoUrl?: string
  phone: string
  email: string
  announcement: string
  announcementLinkLabel: string
  announcementLinkHref: string
  navigation: NavigationItem[]
  footerExplore: NavigationItem[]
  footerResources: NavigationItem[]
  footerMotto: string
  addressLineOne: string
  addressLineTwo: string
  directionsUrl: string
  mapEmbedUrl: string
  socialLinks: SocialLink[]
}

export type FooterSettings = {
  schoolName: string
  tagline: string
  logoUrl?: string
  motto: string
  exploreTitle: string
  exploreLinks: NavigationItem[]
  resourcesTitle: string
  resourceLinks: NavigationItem[]
  socialTitle: string
  socialLinks: SocialLink[]
  visitTitle: string
  addressLineOne: string
  addressLineTwo: string
  directionsLabel: string
  directionsUrl: string
  mapEmbedUrl: string
  copyrightTemplate: string
  closingMessage: string
}

export const defaultSiteSettings: SiteSettings = {
  schoolName: 'G.D. International School',
  tagline: 'Inspiring Lifelong Learning',
  phone: '+91 78301 22354',
  email: 'info@gdinternationalschoolaliganj.in',
  announcement: 'Admissions open for the 2026-27 academic session',
  announcementLinkLabel: 'Explore admission process ↗',
  announcementLinkHref: '/admission',
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About us' },
    { href: '/admission', label: 'Admission' },
    { href: '/faculty', label: 'Faculty' },
    { href: '/student', label: 'Student' },
    { href: '/entrance-exam', label: 'Entrance Exam' },
  ],
  footerExplore: [
    { href: '/about-us', label: 'About us' },
    { href: '/entrance-exam', label: 'Learning' },
    { href: '/student', label: 'Campus life' },
    { href: '/faculty', label: 'Updates' },
  ],
  footerResources: [
    { href: '/admission', label: 'Admissions' },
    { href: '/about-us#documents', label: 'Documents' },
    { href: '/student#gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact us' },
  ],
  footerMotto: 'An international school with an Indian mind, heart and soul.',
  addressLineOne: 'Hatsari Road, Aliganj (Etah)',
  addressLineTwo: 'Uttar Pradesh · 207247',
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Hatsari+Road%2C+Aliganj%2C+Etah',
  mapEmbedUrl: 'https://www.google.com/maps?q=Hatsari%20Road%2C%20Aliganj%2C%20Etah%2C%20Uttar%20Pradesh%20207247&output=embed',
  socialLinks: [
    { label: 'Instagram', href: 'https://www.instagram.com/', platform: 'instagram' },
    { label: 'Facebook', href: 'https://www.facebook.com/', platform: 'facebook' },
    { label: 'YouTube', href: 'https://www.youtube.com/', platform: 'youtube' },
    { label: 'WhatsApp', href: 'https://wa.me/917830122354', platform: 'whatsapp' },
  ],
}

export const defaultFooterSettings: FooterSettings = {
  schoolName: defaultSiteSettings.schoolName,
  tagline: defaultSiteSettings.tagline,
  motto: defaultSiteSettings.footerMotto,
  exploreTitle: 'Explore',
  exploreLinks: defaultSiteSettings.footerExplore,
  resourcesTitle: 'Resources',
  resourceLinks: defaultSiteSettings.footerResources,
  socialTitle: 'Follow along',
  socialLinks: defaultSiteSettings.socialLinks,
  visitTitle: 'Visit us',
  addressLineOne: defaultSiteSettings.addressLineOne,
  addressLineTwo: defaultSiteSettings.addressLineTwo,
  directionsLabel: 'Get directions',
  directionsUrl: defaultSiteSettings.directionsUrl,
  mapEmbedUrl: defaultSiteSettings.mapEmbedUrl,
  copyrightTemplate: '{year} {schoolName}. All rights reserved.',
  closingMessage: 'Made for curious minds',
}
