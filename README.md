# G.D. International School Website

This site now uses Next.js App Router, TypeScript, Tailwind CSS and Sanity CMS.

## Local development

```powershell
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000`.

## Sanity CMS

1. Create a Sanity project at [sanity.io](https://www.sanity.io).
2. Create a `production` dataset and copy `.env.example` to `.env.local`.
3. Add the Sanity project ID, dataset, a read token (only needed for a private dataset), and a strong revalidation secret.
4. Run `npm.cmd run dev` and open `http://localhost:3000/studio`.
5. In **Site settings**, create the single settings document and enter the header, footer, contact, map, social, and navigation details.
6. Create the singleton **Home page**, **Admissions page**, and **Contact page** documents.
7. Add content in **Website pages**, **Notices & events**, and **Faculty members**.

### Publishing changes

Published content is fetched with a short cache period. For immediate production updates, add a Sanity webhook in **Sanity → API → Webhooks**:

- URL: `https://your-domain.com/api/revalidate`
- Secret: the same value as `SANITY_REVALIDATE_SECRET`
- Trigger: create, update, and delete

The webhook verifies Sanity's signature and revalidates the site layout and its pages.

### CMS coverage

- **Site settings** controls the admissions strip, navigation, logo, school identity, phone, footer links, address, map, and social profiles.
- **Home page** controls the homepage hero carousel, calls to action, leadership and principal messages, notices, community content, the community image carousel, point-of-view section, and highlight items.
- **Home page → Community feature → Community carousel images** controls the community carousel. Editors can upload, reorder, caption, and add alt text to each slide.
- **Website pages** controls the full hero, SEO metadata, introductory, feature-card, detail-panel, and CTA content for About Us, Faculty, Student, and Entrance Exam pages. Each page has a **Hero image**, and each feature card can have an optional image. In Sanity Studio, image fields provide upload, replace, remove, crop, hotspot, and media-library selection controls.
- **Admissions page** and **Contact page** control the remaining route content and SEO metadata.
- **Notices & events** and **Faculty members** are rendered from Sanity on the public site. Mark one notice as **Show on home page** to feature it on the homepage.

Until the Sanity variables are configured, pages use the built-in content fallbacks in `lib/site-content.ts`, `lib/home-content.ts`, and `lib/secondary-content.ts`.
