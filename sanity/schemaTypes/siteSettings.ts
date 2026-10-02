import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({ name: 'schoolName', title: 'School name', description: 'Official school name shown in the header, footer, metadata, and accessibility labels.', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'tagline', title: 'Tagline', description: 'Short phrase shown below the school name.', type: 'string' }),
    defineField({
      name: 'logo', title: 'School logo', description: 'Upload the logo used in the site header and footer.', type: 'image', options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alternative text', description: 'Accessible description of the logo.', type: 'string', initialValue: 'G.D. International School logo' })],
    }),
    defineField({ name: 'phone', title: 'Phone number', description: 'Public phone number shown in the header and contact information.', type: 'string' }),
    defineField({ name: 'email', title: 'Email address', description: 'Public contact email. Use a valid email address.', type: 'string' }),
    defineField({ name: 'announcement', title: 'Admissions announcement', description: 'Short announcement shown in the top strip of every page.', type: 'string' }),
    defineField({ name: 'announcementLinkLabel', title: 'Announcement link label', description: 'Text for the link beside the announcement.', type: 'string' }),
    defineField({ name: 'announcementLinkHref', title: 'Announcement link', type: 'string', description: 'Use a website path, for example /admission.' }),
    defineField({
      name: 'navigation', title: 'Header navigation', description: 'Main menu items shown in order. Drag items to reorder them.', type: 'array', of: [{ type: 'object', fields: [
        defineField({ name: 'label', title: 'Label', description: 'Text shown in the main menu.', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'href', title: 'Link', description: 'Internal path such as /about-us or a full https:// URL.', type: 'string', validation: (rule) => rule.required() }),
      ] }],
    }),
    defineField({
      name: 'footerExplore', title: 'Footer: Explore links', description: 'First group of links in the footer.', type: 'array', of: [{ type: 'object', fields: [
        defineField({ name: 'label', title: 'Label', description: 'Text shown in the footer.', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'href', title: 'Link', description: 'Internal path or full URL.', type: 'string', validation: (rule) => rule.required() }),
      ] }],
    }),
    defineField({
      name: 'footerResources', title: 'Footer: Resource links', description: 'Second group of links in the footer.', type: 'array', of: [{ type: 'object', fields: [
        defineField({ name: 'label', title: 'Label', description: 'Text shown in the footer.', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'href', title: 'Link', description: 'Internal path or full URL.', type: 'string', validation: (rule) => rule.required() }),
      ] }],
    }),
    defineField({ name: 'footerMotto', title: 'Footer motto', description: 'Short school statement displayed beside the footer logo.', type: 'text', rows: 3 }),
    defineField({ name: 'addressLineOne', title: 'Address, first line', description: 'First line of the public school address.', type: 'string' }),
    defineField({ name: 'addressLineTwo', title: 'Address, second line', description: 'Second line of the public school address.', type: 'string' }),
    defineField({ name: 'directionsUrl', title: 'Directions link', description: 'Full Google Maps or directions URL opened by the “Get directions” link.', type: 'url' }),
    defineField({ name: 'mapEmbedUrl', title: 'Google Maps embed URL', description: 'Google Maps embed URL used in the footer map. Use the URL ending with output=embed.', type: 'url' }),
    defineField({
      name: 'socialLinks', title: 'Social links', description: 'Social profiles shown in the footer. Add only active public profiles.', type: 'array', of: [{ type: 'object', fields: [
        defineField({ name: 'label', title: 'Label', description: 'Accessible name shown beside the social icon.', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'href', title: 'URL', description: 'Full public profile URL, including https://.', type: 'url', validation: (rule) => rule.required() }),
        defineField({ name: 'platform', title: 'Platform', description: 'Choose the icon that matches the profile URL.', type: 'string', options: { list: ['instagram', 'facebook', 'youtube', 'whatsapp'] }, validation: (rule) => rule.required() }),
      ] }],
    }),
  ],
})
