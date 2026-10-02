import { type SchemaTypeDefinition } from 'sanity'
import { facultyMember } from '@/sanity/schemaTypes/facultyMember'
import { featureCard } from '@/sanity/schemaTypes/featureCard'
import { admissionPage } from '@/sanity/schemaTypes/admissionPage'
import { contactPage } from '@/sanity/schemaTypes/contactPage'
import { homePage } from '@/sanity/schemaTypes/homePage'
import { notice } from '@/sanity/schemaTypes/notice'
import { page } from '@/sanity/schemaTypes/page'
import { siteSettings } from '@/sanity/schemaTypes/siteSettings'

export const schemaTypes: SchemaTypeDefinition[] = [featureCard, page, siteSettings, homePage, notice, facultyMember, admissionPage, contactPage]
