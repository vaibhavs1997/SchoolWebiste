import { defineField, defineType } from 'sanity'

export const facultyMember = defineType({
  name: 'facultyMember',
  title: 'Faculty member',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', description: 'Full name shown on the faculty profile card.', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'role', title: 'Role or subject', description: 'Job title, department, or subject taught.', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'photo', title: 'Photo', description: 'Optional professional photograph for the profile card.', type: 'image', options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alternative text', type: 'string', description: 'Describe the photograph for screen-reader users.' })],
    }),
    defineField({ name: 'qualifications', title: 'Qualifications', description: 'Degrees, certifications, or other credentials.', type: 'string' }),
    defineField({ name: 'bio', title: 'Short biography', description: 'Short introduction shown on the faculty profile card.', type: 'text', rows: 4 }),
    defineField({ name: 'displayOrder', title: 'Display order', description: 'Lower numbers appear first. Use 1, 2, 3, and so on.', type: 'number', initialValue: 100 }),
  ],
  orderings: [{ title: 'Display order', name: 'displayOrderAsc', by: [{ field: 'displayOrder', direction: 'asc' }] }],
})
