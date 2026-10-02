import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  fields: [
    defineField({ name: 'seoTitle', title: 'SEO title', description: 'Optional browser and search-result title for the homepage.', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO description', description: 'Optional search-result summary. Aim for one clear sentence of about 150 characters.', type: 'text', rows: 3 }),
    defineField({ name: 'heroEyebrow', title: 'Hero label', description: 'Small label shown above the main homepage hero heading.', type: 'string' }),
    defineField({
      name: 'heroSlides', title: 'Hero slides', description: 'Images and text for the main homepage carousel. Slides appear in this order; keep between 1 and 5.', type: 'array', validation: (rule) => rule.min(1).max(5), of: [{ type: 'object', fields: [
        defineField({
          name: 'image', title: 'Background image', description: 'Upload a wide, high-quality image. Use the hotspot to choose the important area.', type: 'image', options: { hotspot: true }, validation: (rule) => rule.required(),
          fields: [defineField({ name: 'alt', title: 'Alternative text', type: 'string', description: 'Describe the image for screen-reader users.' })],
        }),
        defineField({ name: 'title', title: 'Title', description: 'First line of the slide heading.', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'accent', title: 'Accent title', description: 'Second line of the heading, displayed in the accent color.', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'description', title: 'Description', description: 'Short supporting text shown below the slide heading.', type: 'text', rows: 3 }),
      ] }],
    }),
    defineField({ name: 'primaryCtaLabel', title: 'Primary button label', description: 'Text for the bright primary button in the hero.', type: 'string' }),
    defineField({ name: 'primaryCtaHref', title: 'Primary button link', description: 'Internal path such as /admission, or a full https:// URL.', type: 'string' }),
    defineField({ name: 'secondaryCtaLabel', title: 'Secondary button label', description: 'Text for the secondary text link in the hero.', type: 'string' }),
    defineField({ name: 'secondaryCtaHref', title: 'Secondary button link', description: 'Internal path such as /about-us, or a full https:// URL.', type: 'string' }),
    defineField({
      name: 'heroStats', title: 'Hero highlight items', description: 'Small facts shown at the bottom of the hero. Add up to three.', type: 'array', validation: (rule) => rule.max(3), of: [{ type: 'object', fields: [
        defineField({ name: 'label', title: 'Label', description: 'Short highlighted fact, for example “Since 2020”.', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'value', title: 'Supporting text', description: 'Additional explanation shown below the label.', type: 'string' }),
      ] }],
    }),
    defineField({ name: 'leadership', title: 'Leadership message', description: 'Content for the founder/director message section.', type: 'object', fields: [
      defineField({ name: 'label', title: 'Section label', description: 'Small label above the section heading.', type: 'string' }),
      defineField({ name: 'title', title: 'Title', description: 'Main heading before the accent title.', type: 'string' }),
      defineField({ name: 'accent', title: 'Accent title', description: 'Heading text displayed in the accent style.', type: 'string' }),
      defineField({ name: 'image', title: 'Portrait', description: 'Portrait or leadership image for this section.', type: 'image', options: { hotspot: true }, fields: [defineField({ name: 'alt', title: 'Alternative text', description: 'Describe the image for visitors using screen readers.', type: 'string' })] }),
      defineField({ name: 'paragraphs', title: 'Message paragraphs', description: 'Add one paragraph per item. Keep paragraphs readable on mobile.', type: 'array', of: [{ type: 'text', rows: 5 }] }),
      defineField({ name: 'signoff', title: 'Sign-off', description: 'Closing phrase before the person’s name.', type: 'string' }),
      defineField({ name: 'name', title: 'Name', description: 'Name displayed below the message.', type: 'string' }),
      defineField({ name: 'role', title: 'Role', description: 'Role or designation displayed below the name.', type: 'string' }),
    ] }),
    defineField({ name: 'principal', title: 'Principal message', description: 'Content for the principal’s message section.', type: 'object', fields: [
      defineField({ name: 'label', title: 'Section label', description: 'Small label above the section heading.', type: 'string' }),
      defineField({ name: 'title', title: 'Title', description: 'Main heading before the accent title.', type: 'string' }),
      defineField({ name: 'accent', title: 'Accent title', description: 'Heading text displayed in the accent style.', type: 'string' }),
      defineField({ name: 'mission', title: 'Mission statement', description: 'Short statement displayed prominently near the top.', type: 'text', rows: 3 }),
      defineField({ name: 'quoteLead', title: 'Quote lead-in', description: 'Short word or phrase shown immediately before the quote.', type: 'string' }),
      defineField({ name: 'quote', title: 'Quote', description: 'Principal quote shown in large type.', type: 'text', rows: 4 }),
      defineField({ name: 'image', title: 'Portrait', description: 'Principal portrait or related image.', type: 'image', options: { hotspot: true }, fields: [defineField({ name: 'alt', title: 'Alternative text', description: 'Describe the image for visitors using screen readers.', type: 'string' })] }),
      defineField({ name: 'leftParagraphs', title: 'Left column paragraphs', description: 'Paragraphs displayed in the first text column.', type: 'array', of: [{ type: 'text', rows: 4 }] }),
      defineField({ name: 'rightParagraphs', title: 'Right column paragraphs', description: 'Paragraphs displayed in the second text column.', type: 'array', of: [{ type: 'text', rows: 4 }] }),
      defineField({ name: 'signoff', title: 'Sign-off', description: 'Closing phrase before the principal’s name.', type: 'string' }),
      defineField({ name: 'name', title: 'Name', description: 'Principal’s name.', type: 'string' }),
      defineField({ name: 'qualifications', title: 'Qualifications', description: 'Degrees or qualifications shown below the name.', type: 'string' }),
    ] }),
    defineField({ name: 'notice', title: 'Homepage notice', description: 'Fallback notice presentation used when no featured notice is published.', type: 'object', fields: [
      defineField({ name: 'label', title: 'Section label', description: 'Heading for the notice and events panel.', type: 'string' }),
      defineField({ name: 'eventLabel', title: 'Tab label', description: 'Label shown on the active notice tab.', type: 'string' }),
      defineField({ name: 'title', title: 'Title', description: 'Short notice title.', type: 'string' }),
      defineField({ name: 'summary', title: 'Summary', description: 'Short notice text shown on the homepage.', type: 'text', rows: 4 }),
      defineField({ name: 'updatedAt', title: 'Updated at', description: 'Date and time displayed below the notice.', type: 'datetime' }),
      defineField({ name: 'viewMoreLabel', title: 'View more label', description: 'Text for the link below the notice.', type: 'string' }),
      defineField({ name: 'viewMoreHref', title: 'View more link', description: 'Internal path where visitors can read more.', type: 'string' }),
    ] }),
    defineField({ name: 'community', title: 'Community feature', description: 'Image, heading and carousel content for the community panel.', type: 'object', fields: [
      defineField({ name: 'image', title: 'Image', description: 'Fallback or feature image for the community panel.', type: 'image', options: { hotspot: true }, fields: [defineField({ name: 'alt', title: 'Alternative text', description: 'Describe the image for screen readers.', type: 'string' })] }),
      defineField({ name: 'title', title: 'Title', description: 'Community panel heading.', type: 'string' }),
      defineField({ name: 'subtitle', title: 'Subtitle', description: 'Short supporting line below the heading.', type: 'string' }),
      defineField({ name: 'gallery', title: 'Community carousel images', description: 'Upload and reorder the images shown in the community carousel. Add a useful alt text and optional caption to every slide.', type: 'array', validation: (rule) => rule.min(1).max(12), of: [{ type: 'object', fields: [
        defineField({ name: 'image', title: 'Image', description: 'Image for this carousel slide.', type: 'image', options: { hotspot: true }, validation: (rule) => rule.required(), fields: [defineField({ name: 'alt', title: 'Alternative text', description: 'Describe what the image shows for screen-reader users.', type: 'string', validation: (rule) => rule.required() })] }),
        defineField({ name: 'caption', title: 'Caption', description: 'Optional short caption displayed with or near this slide.', type: 'string' }),
      ] }] }),
    ] }),
    defineField({ name: 'viewpoint', title: 'Point of view section', description: 'Closing editorial section about the school’s educational approach.', type: 'object', fields: [
      defineField({ name: 'label', title: 'Section label', description: 'Small label above the section heading.', type: 'string' }),
      defineField({ name: 'title', title: 'Title', description: 'Main heading before the accent text.', type: 'string' }),
      defineField({ name: 'accent', title: 'Accent title', description: 'Heading text displayed in the accent style.', type: 'string' }),
      defineField({ name: 'lead', title: 'Lead paragraph', description: 'Opening statement displayed with emphasis.', type: 'text', rows: 3 }),
      defineField({ name: 'body', title: 'Body paragraph', description: 'Supporting explanation for the section.', type: 'text', rows: 4 }),
    ] }),
    defineField({ name: 'highlights', title: 'Explore cards', description: 'Cards linking visitors to key areas of the website. Keep link paths valid.', type: 'array', of: [{ type: 'object', fields: [
      defineField({ name: 'title', title: 'Title', description: 'Card heading.', type: 'string', validation: (rule) => rule.required() }),
      defineField({ name: 'body', title: 'Description', description: 'One or two sentences explaining the destination.', type: 'text', rows: 3 }),
      defineField({ name: 'href', title: 'Link', description: 'Internal path such as /faculty or /admission.', type: 'string', validation: (rule) => rule.required() }),
    ] }] }),
  ],
})
