import { defineField, defineType } from 'sanity'

export const featureCard = defineType({
  name: 'featureCard',
  title: 'Feature card',
  type: 'object',
  fields: [
    defineField({ name: 'number', title: 'Label or number', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'body', title: 'Description', type: 'text', rows: 3 }),
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
