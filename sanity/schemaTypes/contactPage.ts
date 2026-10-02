import { defineField, defineType } from 'sanity'

export const contactPage = defineType({
  name: 'contactPage', title: 'Contact page', type: 'document',
  fields: [
    defineField({ name: 'seoTitle', title: 'SEO title', description: 'Optional browser and search-result title for the contact page.', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO description', description: 'Optional search-result summary. Aim for one clear sentence of about 150 characters.', type: 'text', rows: 3 }),
    defineField({ name: 'eyebrow', title: 'Hero eyebrow', description: 'Small label above the contact heading.', type: 'string' }),
    defineField({ name: 'heroTitle', title: 'Hero title', description: 'First part of the contact page heading.', type: 'string' }),
    defineField({ name: 'heroAccent', title: 'Hero accent', description: 'Accent part of the contact page heading.', type: 'string' }),
    defineField({ name: 'heroSummary', title: 'Hero summary', description: 'Short introductory text below the contact heading.', type: 'text', rows: 3 }),
    defineField({ name: 'phoneLabel', title: 'Phone card label', description: 'Label above the phone number card.', type: 'string' }),
    defineField({ name: 'emailLabel', title: 'Email card label', description: 'Label above the email card.', type: 'string' }),
    defineField({ name: 'visitLabel', title: 'Visit card label', description: 'Label above the address card.', type: 'string' }),
    defineField({ name: 'visitLines', title: 'Address lines', description: 'Add one line per item for the public address.', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'ctaLabel', title: 'Button label', description: 'Text for the admissions enquiry button.', type: 'string' }),
    defineField({ name: 'ctaHref', title: 'Button link', description: 'Internal path or full URL opened by the button.', type: 'string' }),
  ],
})
