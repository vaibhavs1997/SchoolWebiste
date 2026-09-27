import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { apiVersion, dataset, projectId } from '@/sanity/env'
import { schemaTypes } from '@/sanity/schemaTypes'

export default defineConfig({
  name: 'gdis',
  title: 'G.D. International School CMS',
  projectId: projectId || 'your-project-id',
  dataset,
  apiVersion,
  basePath: '/studio',
  plugins: [structureTool({
    structure: (S) => S.list().title('GDIS content').items([
      S.listItem().title('Site settings').id('siteSettings').child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem().title('Home page').id('homePage').child(S.document().schemaType('homePage').documentId('homePage')),
      S.divider(),
      S.documentTypeListItem('page').title('Website pages'),
      S.documentTypeListItem('notice').title('Notices & events'),
      S.documentTypeListItem('facultyMember').title('Faculty members'),
    ]),
  })],
  schema: { types: schemaTypes },
})
