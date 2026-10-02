import { defineField, defineType } from 'sanity'

export const featureCard = defineType({
  name: 'featureCard',
  title: 'Feature card',
  type: 'object',
  fields: [
    defineField({ name: 'number', title: 'Label or number', description: 'Small label such as “01 / MISSION”.', type: 'string' }),
    defineField({ name: 'title', title: 'Title', description: 'Feature card heading.', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'body', title: 'Description', description: 'Short explanation shown below the card heading.', type: 'text', rows: 3 }),
    defineField({
      name: 'image',
      title: 'Image',
      description: 'Optional. Upload a new image or choose one already in the media library.',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alternative text', type: 'string', description: 'Describe the image for screen-reader users.' }),
      ],
    }),
  ],
})
