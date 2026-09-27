import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  fields: [
    defineField({ name: 'heroEyebrow', title: 'Hero label', type: 'string' }),
    defineField({
      name: 'heroSlides', title: 'Hero slides', type: 'array', validation: (rule) => rule.min(1).max(5), of: [{ type: 'object', fields: [
        defineField({
          name: 'image', title: 'Background image', type: 'image', options: { hotspot: true }, validation: (rule) => rule.required(),
          fields: [defineField({ name: 'alt', title: 'Alternative text', type: 'string', description: 'Describe the image for screen-reader users.' })],
        }),
        defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'accent', title: 'Accent title', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
      ] }],
    }),
    defineField({ name: 'primaryCtaLabel', title: 'Primary button label', type: 'string' }),
    defineField({ name: 'primaryCtaHref', title: 'Primary button link', type: 'string' }),
    defineField({ name: 'secondaryCtaLabel', title: 'Secondary button label', type: 'string' }),
    defineField({ name: 'secondaryCtaHref', title: 'Secondary button link', type: 'string' }),
    defineField({
      name: 'heroStats', title: 'Hero highlight items', type: 'array', validation: (rule) => rule.max(3), of: [{ type: 'object', fields: [
        defineField({ name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'value', title: 'Supporting text', type: 'string' }),
      ] }],
    }),
  ],
})
