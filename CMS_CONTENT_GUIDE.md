# GDIS CMS content guide

This guide explains where an administrator should update each piece of website content.

Open the CMS at `/studio`, choose the relevant item from the left-hand menu, edit the fields, and click **Publish**. Changes may take up to one minute to appear because published content is cached for 60 seconds.

## Quick lookup

| Website content | CMS location |
| --- | --- |
| Top admissions announcement | **Site settings → Admissions announcement bar** |
| Header logo, school name, phone, and menu | **Site settings → Website header** |
| Homepage hero carousel | **Home page → Hero slides** |
| Homepage leadership message | **Home page → Leadership message** |
| Homepage principal message | **Home page → Principal message** |
| Homepage notice fallback | **Home page → Homepage notice** |
| Homepage community carousel | **Home page → Community feature** |
| Homepage point of view | **Home page → Point of view section** |
| Homepage Explore cards | **Home page → Explore cards** |
| Footer branding and links | **Footer settings** |
| Notices and events | **Notices & events** |
| Faculty profiles | **Faculty members** |
| About Us, Student, Faculty, and other standard pages | **Website pages** |
| Admissions page | **Admissions page** |
| Contact page | **Contact page** |

## Site settings

Use this document for website-wide header and announcement content.

### Admissions announcement bar

These fields control the announcement strip shown at the top of the website:

- **Announcement message**: `Admissions open for the 2026-27 academic session`
- **Announcement link text**: `Explore admission process ↗`
- **Announcement link destination**: `/admission`

Use an internal path such as `/admission` for a page on this website. Use a complete `https://...` URL for an external destination.

### Website header

- **School name in header**: name beside the logo.
- **Short tagline under school name**: supporting line under the name.
- **School logo in header**: upload or replace the logo and add alternative text.
- **Header phone number**: phone number shown in the header.
- **Header navigation**: add, remove, rename, and reorder main menu links.

## Footer settings

Use the separate **Footer settings** document for everything displayed in the footer:

- **Footer identity**: school name, tagline, logo, and motto.
- **Footer link columns**: headings and repeatable Explore/Resources links. Drag items to reorder them.
- **Social links**: profile label, complete profile URL, and matching platform icon.
- **Visit us details**: column heading, two address lines, directions label, directions URL, and Google Maps embed URL.
- **Bottom bar**: copyright text and closing message.

For copyright text, these placeholders are supported:

- `{year}` becomes the current year.
- `{schoolName}` becomes the configured school name.

For the map, use the Google Maps **embed** URL ending in `output=embed`, not the normal share URL.

## Home page

### Hero slides

Add and reorder the main homepage slides. Each slide includes a background image, image alternative text, title, accent title, and description. Keep between one and five slides.

### Leadership message

Controls the founder/director section: section label, title, accent, portrait, image alternative text, paragraphs, sign-off, name, and role.

### Principal message

Controls the principal section: section label, title, accent, mission, quote lead-in, quote, portrait, two paragraph columns, sign-off, name, and qualifications.

### Homepage notice

Controls the fallback notice shown when there is no featured notice document. A featured item from **Notices & events** takes priority over the fallback title, category, summary, and updated date.

### Community feature

Controls the right-hand homepage panel. Add multiple gallery items to enable the automatic carousel. Each item supports an image, required alternative text, and an optional caption.

The carousel advances automatically and pauses when a visitor hovers over it or focuses its controls.

### Point of view and Explore cards

Use **Point of view section** for the closing editorial message. Use **Explore cards** for the linked cards near the bottom of the homepage; keep each link path valid.

## Notices & events

Create a notice or event document for updates that should appear in the website content. Set:

- **Title** and **Summary**: visitor-facing content.
- **Category**: Notice or Event.
- **Event or notice date** and **Publish date**: timing information.
- **Show on home page**: enable this to make it the featured homepage notice.
- **Attachment**: optional downloadable file.

The newest featured document is used on the homepage.

## Website pages

Use **Website pages** for standard content pages such as About Us, Student, Faculty, and Entrance Exam.

- **Internal title** and **Route** identify the page.
- **SEO fields** control search and social sharing metadata.
- **Hero fields** control the page heading, summary, and image.
- **Introduction, Feature cards, Detail panel, and Call-to-action** control the corresponding page sections.

Use a route slug such as `about-us` or `student`; do not include a leading slash in the slug field.

## Admissions page

Use **Admissions page** for admissions-specific copy, including hero content, introduction paragraphs, admission steps, enquiry form text, and the closing call to action. Add one item per admission step and keep the order logical.

## Contact page

Use **Contact page** for the contact hero, phone/email/visit card labels, public address lines, and the admissions enquiry button.

## Faculty members

Create one document per faculty member. Update the name, role, photo and alternative text, qualifications, biography, and display order.

## Editing guidelines

- Write visitor-facing text in complete, clear sentences.
- Add alternative text for every meaningful image; describe what the image shows.
- Use internal paths such as `/contact` for website pages.
- Use full URLs beginning with `https://` for external links.
- Publish after editing; saving a draft alone does not update the public website.
- If a field is left empty, the website may use its built-in default content.
