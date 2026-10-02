import { defineField, defineType } from 'sanity'

const linkFields = [
  defineField({ name: 'label', title: 'Link label', type: 'string', description: 'Short text visitors will see in the footer.' }),
  defineField({ name: 'href', title: 'Destination', type: 'string', description: 'Use an internal path such as /admission or a full URL.' }),
]

export const footerSettings = defineType({
  name: 'footerSettings',
  title: 'Footer settings',
  type: 'document',
  fieldsets: [
    { name: 'identity', title: 'Footer identity', description: 'Control the school identity and motto shown in the first footer column.', options: { collapsible: true, collapsed: false } },
    { name: 'linkColumns', title: 'Footer link columns', description: 'Manage the two groups of navigation links shown in the footer.', options: { collapsible: true, collapsed: false } },
    { name: 'social', title: 'Social links', description: 'Add the social profiles visitors can use to follow the school.', options: { collapsible: true, collapsed: false } },
    { name: 'visit', title: 'Visit us details', description: 'Update the address, directions link, and embedded map.', options: { collapsible: true, collapsed: false } },
    { name: 'bottomBar', title: 'Bottom bar', description: 'Edit the small copyright and closing message at the bottom of the footer.', options: { collapsible: true, collapsed: false } },
  ],
  fields: [
    defineField({ name: 'schoolName', title: 'School name', type: 'string', fieldset: 'identity', description: 'Shown beside the footer logo.' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', fieldset: 'identity', description: 'Short supporting line below the school name.' }),
    defineField({ name: 'logo', title: 'Footer logo', type: 'image', fieldset: 'identity', options: { hotspot: true }, description: 'Upload the logo displayed in the footer. A square image works best.', fields: [defineField({ name: 'alt', title: 'Alternative text', type: 'string', initialValue: 'G.D. International School logo', description: 'Describe the logo for screen-reader users.' })] }),
    defineField({ name: 'motto', title: 'Footer motto', type: 'text', rows: 3, fieldset: 'identity', description: 'The larger statement shown below the school identity.' }),
    defineField({ name: 'exploreTitle', title: 'First link-column heading', type: 'string', fieldset: 'linkColumns', initialValue: 'Explore', description: 'Heading above the first group of links.' }),
    defineField({ name: 'exploreLinks', title: 'First link column', type: 'array', fieldset: 'linkColumns', description: 'Add, remove, or reorder links in the first footer column.', of: [{ type: 'object', fields: linkFields }] }),
    defineField({ name: 'resourcesTitle', title: 'Second link-column heading', type: 'string', fieldset: 'linkColumns', initialValue: 'Resources', description: 'Heading above the second group of links.' }),
    defineField({ name: 'resourceLinks', title: 'Second link column', type: 'array', fieldset: 'linkColumns', description: 'Add, remove, or reorder links in the second footer column.', of: [{ type: 'object', fields: linkFields }] }),
    defineField({ name: 'socialTitle', title: 'Social-column heading', type: 'string', fieldset: 'social', initialValue: 'Follow along' }),
    defineField({ name: 'socialLinks', title: 'Social profiles', type: 'array', fieldset: 'social', description: 'Choose a supported platform so the footer can show the matching icon.', of: [{ type: 'object', fields: [
      defineField({ name: 'label', title: 'Profile label', type: 'string', description: 'For example Instagram or Facebook.' }),
      defineField({ name: 'href', title: 'Profile URL', type: 'url', description: 'Paste the complete public profile URL.' }),
      defineField({ name: 'platform', title: 'Platform', type: 'string', options: { list: ['instagram', 'facebook', 'youtube', 'whatsapp'] } }),
    ] }] }),
    defineField({ name: 'visitTitle', title: 'Visit-column heading', type: 'string', fieldset: 'visit', initialValue: 'Visit us' }),
    defineField({ name: 'addressLineOne', title: 'Address line one', type: 'string', fieldset: 'visit' }),
    defineField({ name: 'addressLineTwo', title: 'Address line two', type: 'string', fieldset: 'visit' }),
    defineField({ name: 'directionsLabel', title: 'Directions link label', type: 'string', fieldset: 'visit', initialValue: 'Get directions', description: 'Text for the link that opens the map directions.' }),
    defineField({ name: 'directionsUrl', title: 'Directions URL', type: 'url', fieldset: 'visit', description: 'Paste a Google Maps directions or location URL.' }),
    defineField({ name: 'mapEmbedUrl', title: 'Map embed URL', type: 'url', fieldset: 'visit', description: 'Paste the Google Maps embed URL, not the normal share URL.' }),
    defineField({ name: 'copyrightTemplate', title: 'Copyright text', type: 'string', fieldset: 'bottomBar', initialValue: '{year} {schoolName}. All rights reserved.', description: 'Use {year} and {schoolName} as placeholders; they are filled automatically.' }),
    defineField({ name: 'closingMessage', title: 'Closing message', type: 'string', fieldset: 'bottomBar', initialValue: 'Made for curious minds', description: 'Short message shown on the right side of the bottom bar.' }),
  ],
})
