import { defineField, defineType } from 'sanity'

export const notice = defineType({
  name: 'notice',
  title: 'Notice or event',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['Notice', 'Event'] }, initialValue: 'Notice' }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 4 }),
    defineField({ name: 'body', title: 'Full notice', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'eventDate', title: 'Event or notice date', type: 'date' }),
    defineField({ name: 'attachment', title: 'Attachment', type: 'file' }),
    defineField({ name: 'publishedAt', title: 'Publish date', type: 'datetime', initialValue: () => new Date().toISOString() }),
    defineField({ name: 'featured', title: 'Show on home page', type: 'boolean', initialValue: false }),
  ],
  orderings: [{ title: 'Newest first', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
})
