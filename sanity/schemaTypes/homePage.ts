import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  fieldsets: [
    { name: 'directorMessageSection', title: 'Director message section', options: { collapsible: true, collapsed: false } },
    { name: 'principalMessageSection', title: 'Principal message section', options: { collapsible: true, collapsed: false } },
    { name: 'noticeSection', title: 'Homepage Notice / Events section', options: { collapsible: true, collapsed: false } },
    { name: 'communitySection', title: 'Homepage Community Feature section', options: { collapsible: true, collapsed: false } },
  ],
  fields: [
    defineField({ name: 'heroEyebrow', title: 'Hero label', type: 'string' }),
    defineField({
      name: 'heroSlides', title: 'Hero slides', type: 'array', validation: (rule) => rule.max(5), of: [{ type: 'object', fields: [
        defineField({
          name: 'image', title: 'Background image', type: 'image', options: { hotspot: true },
          fields: [defineField({ name: 'alt', title: 'Alternative text', type: 'string', description: 'Describe the image for screen-reader users.' })],
        }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'accent', title: 'Accent title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
      ] }],
    }),
    defineField({ name: 'primaryCtaLabel', title: 'Primary button label', type: 'string' }),
    defineField({ name: 'primaryCtaHref', title: 'Primary button link', type: 'string' }),
    defineField({ name: 'secondaryCtaLabel', title: 'Secondary button label', type: 'string' }),
    defineField({ name: 'secondaryCtaHref', title: 'Secondary button link', type: 'string' }),
    defineField({
      name: 'heroStats', title: 'Hero highlight items', type: 'array', validation: (rule) => rule.max(3), of: [{ type: 'object', fields: [
        defineField({ name: 'label', title: 'Label', type: 'string' }),
        defineField({ name: 'value', title: 'Supporting text', type: 'string' }),
      ] }],
    }),
    defineField({
      name: 'directorMessageImage', title: 'Director message image', type: 'image', fieldset: 'directorMessageSection', options: { hotspot: true },
      description: 'Upload the photo shown in the Director message section. The heading, caption and layout are fixed by the website.',
    }),
    defineField({
      name: 'directorMessage', title: 'Director message content', type: 'text', fieldset: 'directorMessageSection', rows: 12,
      description: 'Edit the message only. Separate paragraphs with a blank line. The heading, signature, styling and layout are fixed by the website.',
    }),
    defineField({
      name: 'principalMessageImage', title: 'Principal message image', type: 'image', fieldset: 'principalMessageSection', options: { hotspot: true },
      description: 'Upload the photo shown beside the Principal message. The heading and layout are fixed by the website.',
    }),
    defineField({
      name: 'principalMessage', title: 'Principal message content', type: 'text', fieldset: 'principalMessageSection', rows: 18,
      description: 'Edit the written content only. Keep one paragraph per block, separated by a blank line. The first two blocks are the mission and quote; the remaining blocks appear below in two columns. The heading, “And”, signature, styling and layout are fixed.',
    }),
    defineField({
      name: 'noticeSection', title: 'Homepage Notice / Events content', type: 'object', fieldset: 'noticeSection',
      description: 'Content shown in the left-hand Notice / Events panel on the homepage. The panel design and timeline styling are fixed.',
      fields: [
        defineField({ name: 'label', title: 'Section label', type: 'string', description: 'Small label above the panel heading, for example “Notice / Events”.' }),
        defineField({ name: 'eventLabel', title: 'Active tab label', type: 'string', description: 'Label shown on the active tab, for example “Notice” or “Event”.' }),
        defineField({ name: 'eventTabLabel', title: 'Second tab label', type: 'string', description: 'Label shown on the second tab, for example “Event”.' }),
        defineField({ name: 'title', title: 'Notice title', type: 'string', description: 'Short title shown on the timeline.' }),
        defineField({ name: 'summary', title: 'Notice content', type: 'text', rows: 5, description: 'The main notice or event message shown to visitors.' }),
        defineField({ name: 'updatedAt', title: 'Updated date and time', type: 'datetime', description: 'Displayed below the notice content.' }),
        defineField({ name: 'updatedLabel', title: 'Updated-date prefix', type: 'string', initialValue: 'Updated on', description: 'Text shown before the date, for example “Updated on”.' }),
        defineField({ name: 'viewMoreLabel', title: 'Button label', type: 'string', description: 'Text for the button below the notice.' }),
        defineField({ name: 'viewMoreHref', title: 'Button link', type: 'string', description: 'Internal path such as /student or /admission.' }),
      ],
    }),
    defineField({
      name: 'communitySection', title: 'Homepage Community Feature content', type: 'object', fieldset: 'communitySection',
      description: 'Slides shown in the right-hand community panel. Add more than one slide to enable automatic scrolling.',
      fields: [
        defineField({
          name: 'slides', title: 'Community slides', type: 'array', validation: (rule) => rule.min(1).max(12),
          description: 'Add, remove, and reorder slides. With multiple slides, the panel changes automatically every five seconds.',
          of: [{ type: 'object', fields: [
            defineField({ name: 'image', title: 'Slide image', type: 'image', options: { hotspot: true }, validation: (rule) => rule.required(), description: 'Upload the image for this community slide.' }),
            defineField({ name: 'alt', title: 'Alternative text', type: 'string', validation: (rule) => rule.required(), description: 'Briefly describe the image for screen-reader users.' }),
            defineField({ name: 'title', title: 'Slide heading', type: 'string', description: 'Heading shown below the image.' }),
            defineField({ name: 'subtitle', title: 'Slide supporting text', type: 'string', description: 'Short line shown below the slide heading.' }),
          ] }],
        }),
      ],
    }),
  ],
})
