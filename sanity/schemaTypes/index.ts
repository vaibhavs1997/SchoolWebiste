import { type SchemaTypeDefinition } from 'sanity'
import { facultyMember } from '@/sanity/schemaTypes/facultyMember'
import { footerSettings } from '@/sanity/schemaTypes/footerSettings'
import { featureCard } from '@/sanity/schemaTypes/featureCard'
import { homePage } from '@/sanity/schemaTypes/homePage'
import { notice } from '@/sanity/schemaTypes/notice'
import { page } from '@/sanity/schemaTypes/page'
import { siteSettings } from '@/sanity/schemaTypes/siteSettings'

export const schemaTypes: SchemaTypeDefinition[] = [featureCard, page, siteSettings, footerSettings, homePage, notice, facultyMember]
