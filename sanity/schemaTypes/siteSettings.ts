import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fieldsets: [
    {
      name: 'headerBranding',
      title: 'Website header: school identity & phone',
      description: 'Update the school identity shown on the left side of the website header and the phone number shown beside the navigation.',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'announcementBar',
      title: 'Admissions announcement bar',
      description: 'Controls the message strip displayed at the very top of every page.',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: 'schoolName',
      title: 'School name in header',
      type: 'string',
      fieldset: 'headerBranding',
      description: 'The main school name displayed next to the logo in the website header.',
    }),
    defineField({
      name: 'tagline',
      title: 'Short tagline under school name',
      type: 'string',
      fieldset: 'headerBranding',
      description: 'The small supporting line displayed below the school name, such as “Inspiring Lifelong Learning”.',
    }),
    defineField({
      name: 'logo',
      title: 'School logo in header',
      type: 'image',
      fieldset: 'headerBranding',
      description: 'The logo displayed to the left of the school name. Use a clear square image where possible.',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alternative text', type: 'string', initialValue: 'G.D. International School logo' })],
    }),
    defineField({
      name: 'phone',
      title: 'Header phone number',
      type: 'string',
      fieldset: 'headerBranding',
      description: 'The phone number shown beside the navigation. Include the country code, for example +91 78301 22354.',
    }),
    defineField({ name: 'email', title: 'Email address', type: 'string' }),
    defineField({
      name: 'announcement',
      title: 'Announcement message',
      type: 'string',
      fieldset: 'announcementBar',
      description: 'The short message visitors see in the top announcement strip, for example “Admissions open for the 2026–27 academic session”. Leave blank to hide the message.',
    }),
    defineField({
      name: 'announcementLinkLabel',
      title: 'Announcement link text',
      type: 'string',
      fieldset: 'announcementBar',
      description: 'Optional text for the clickable link beside the message, for example “Explore admission process”.',
    }),
    defineField({
      name: 'announcementLinkHref',
      title: 'Announcement link destination',
      type: 'string',
      fieldset: 'announcementBar',
      description: 'Where the link should go. Use a website path such as /admission, or a full URL such as https://example.com.',
    }),
    defineField({
      name: 'navigation', title: 'Header navigation', type: 'array', of: [{ type: 'object', fields: [
        defineField({ name: 'label', title: 'Label', type: 'string' }),
        defineField({ name: 'href', title: 'Link', type: 'string' }),
      ] }],
    }),
    defineField({
      name: 'footerExplore', title: 'Footer: Explore links', type: 'array', of: [{ type: 'object', fields: [
        defineField({ name: 'label', title: 'Label', type: 'string' }),
        defineField({ name: 'href', title: 'Link', type: 'string' }),
      ] }],
    }),
    defineField({
      name: 'footerResources', title: 'Footer: Resource links', type: 'array', of: [{ type: 'object', fields: [
        defineField({ name: 'label', title: 'Label', type: 'string' }),
        defineField({ name: 'href', title: 'Link', type: 'string' }),
      ] }],
    }),
    defineField({ name: 'footerMotto', title: 'Footer motto', type: 'text', rows: 3 }),
    defineField({ name: 'addressLineOne', title: 'Address, first line', type: 'string' }),
    defineField({ name: 'addressLineTwo', title: 'Address, second line', type: 'string' }),
    defineField({ name: 'directionsUrl', title: 'Directions link', type: 'url' }),
    defineField({ name: 'mapEmbedUrl', title: 'Google Maps embed URL', type: 'url' }),
    defineField({
      name: 'socialLinks', title: 'Social links', type: 'array', of: [{ type: 'object', fields: [
        defineField({ name: 'label', title: 'Label', type: 'string' }),
        defineField({ name: 'href', title: 'URL', type: 'url' }),
        defineField({ name: 'platform', title: 'Platform', type: 'string', options: { list: ['instagram', 'facebook', 'youtube', 'whatsapp'] } }),
      ] }],
    }),
  ],
})
