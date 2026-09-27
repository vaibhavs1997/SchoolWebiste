import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({ name: 'schoolName', title: 'School name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({
      name: 'logo', title: 'School logo', type: 'image', options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alternative text', type: 'string', initialValue: 'G.D. International School logo' })],
    }),
    defineField({ name: 'phone', title: 'Phone number', type: 'string' }),
    defineField({ name: 'email', title: 'Email address', type: 'string' }),
    defineField({ name: 'announcement', title: 'Admissions announcement', type: 'string' }),
    defineField({ name: 'announcementLinkLabel', title: 'Announcement link label', type: 'string' }),
    defineField({ name: 'announcementLinkHref', title: 'Announcement link', type: 'string', description: 'Use a website path, for example /admission.' }),
    defineField({
      name: 'navigation', title: 'Header navigation', type: 'array', of: [{ type: 'object', fields: [
        defineField({ name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'href', title: 'Link', type: 'string', validation: (rule) => rule.required() }),
      ] }],
    }),
    defineField({
      name: 'footerExplore', title: 'Footer: Explore links', type: 'array', of: [{ type: 'object', fields: [
        defineField({ name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'href', title: 'Link', type: 'string', validation: (rule) => rule.required() }),
      ] }],
    }),
    defineField({
      name: 'footerResources', title: 'Footer: Resource links', type: 'array', of: [{ type: 'object', fields: [
        defineField({ name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'href', title: 'Link', type: 'string', validation: (rule) => rule.required() }),
      ] }],
    }),
    defineField({ name: 'footerMotto', title: 'Footer motto', type: 'text', rows: 3 }),
    defineField({ name: 'addressLineOne', title: 'Address, first line', type: 'string' }),
    defineField({ name: 'addressLineTwo', title: 'Address, second line', type: 'string' }),
    defineField({ name: 'directionsUrl', title: 'Directions link', type: 'url' }),
    defineField({ name: 'mapEmbedUrl', title: 'Google Maps embed URL', type: 'url' }),
    defineField({
      name: 'socialLinks', title: 'Social links', type: 'array', of: [{ type: 'object', fields: [
        defineField({ name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'href', title: 'URL', type: 'url', validation: (rule) => rule.required() }),
        defineField({ name: 'platform', title: 'Platform', type: 'string', options: { list: ['instagram', 'facebook', 'youtube', 'whatsapp'] }, validation: (rule) => rule.required() }),
      ] }],
    }),
  ],
})
