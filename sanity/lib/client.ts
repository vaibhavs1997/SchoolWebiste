import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '@/sanity/env'

export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      token: process.env.SANITY_API_READ_TOKEN,
      useCdn: !process.env.SANITY_API_READ_TOKEN,
    })
  : null
