import { defineField, defineType } from 'sanity'

export const facultyMember = defineType({
  name: 'facultyMember',
  title: 'Faculty member',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'role', title: 'Role or subject', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alternative text', type: 'string', description: 'Describe the photograph for screen-reader users.' })],
    }),
    defineField({ name: 'qualifications', title: 'Qualifications', type: 'string' }),
    defineField({ name: 'bio', title: 'Short biography', type: 'text', rows: 4 }),
    defineField({ name: 'displayOrder', title: 'Display order', type: 'number', initialValue: 100 }),
  ],
  orderings: [{ title: 'Display order', name: 'displayOrderAsc', by: [{ field: 'displayOrder', direction: 'asc' }] }],
})
