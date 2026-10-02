import { defineField, defineType } from 'sanity'

export const notice = defineType({
  name: 'notice',
  title: 'Notice or event',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', description: 'Short headline for the notice or event.', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'category', title: 'Category', description: 'Choose whether this item is a notice or an event.', type: 'string', options: { list: ['Notice', 'Event'] }, initialValue: 'Notice' }),
    defineField({ name: 'summary', title: 'Summary', description: 'Short text used in cards and the homepage preview.', type: 'text', rows: 4 }),
    defineField({ name: 'body', title: 'Full notice', description: 'Complete rich-text content for the detail view.', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'eventDate', title: 'Event or notice date', description: 'Date associated with the event or notice.', type: 'date' }),
    defineField({ name: 'attachment', title: 'Attachment', description: 'Optional file visitors may download, such as a circular or schedule.', type: 'file' }),
    defineField({ name: 'publishedAt', title: 'Publish date', description: 'Controls newest-first ordering and the displayed update time.', type: 'datetime', initialValue: () => new Date().toISOString() }),
    defineField({ name: 'featured', title: 'Show on home page', description: 'Turn on for the notice that should appear in the homepage notice panel. Keep only one featured item when possible.', type: 'boolean', initialValue: false }),
  ],
  orderings: [{ title: 'Newest first', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
})
