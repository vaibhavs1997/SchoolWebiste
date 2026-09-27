'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import styles from './guest-cms.module.css'

type Field = { id: string; label: string; value: string; multiline?: boolean }
type CmsArea = { id: string; label: string; description: string; fields: Field[] }
type Draft = Record<string, Record<string, string>>

const guestAreas: CmsArea[] = [
  {
    id: 'settings',
    label: 'Site settings',
    description: 'Shared information shown in the website header and footer.',
    fields: [
      { id: 'schoolName', label: 'School name', value: 'G.D. International School' },
      { id: 'announcement', label: 'Admissions announcement', value: 'Admissions open for the 2026–27 academic session' },
      { id: 'phone', label: 'Phone number', value: '+91 78301 22354' },
      { id: 'address', label: 'School address', value: 'Hatsari Road, Aliganj (Etah), Uttar Pradesh · 207247', multiline: true },
    ],
  },
  {
    id: 'home',
    label: 'Home page',
    description: 'Welcome visitors with the hero message and primary calls to action.',
    fields: [
      { id: 'eyebrow', label: 'Hero label', value: 'CBSE school in Aliganj, Etah' },
      { id: 'title', label: 'Hero title', value: 'Welcome to' },
      { id: 'accent', label: 'Hero accent title', value: 'G.D. International School.' },
      { id: 'summary', label: 'Hero description', value: 'Providing quality education with modern facilities and experienced faculty.', multiline: true },
      { id: 'cta', label: 'Primary button label', value: 'Begin your journey' },
    ],
  },
  {
    id: 'pages',
    label: 'Website pages',
    description: 'Manage key headings for the school information pages.',
    fields: [
      { id: 'about', label: 'About Us title', value: 'Growing minds.' },
      { id: 'faculty', label: 'Faculty page title', value: 'Learning starts with' },
      { id: 'student', label: 'Student page title', value: 'More than a classroom.' },
      { id: 'exam', label: 'Entrance Exam title', value: 'Prepare for what’s next.' },
    ],
  },
  {
    id: 'library',
    label: 'Content library',
    description: 'Prepare regular content for notices, events, and people.',
    fields: [
      { id: 'notice', label: 'Featured notice title', value: 'Holiday Notice' },
      { id: 'event', label: 'Next event', value: 'School community event' },
      { id: 'faculty', label: 'Faculty profile', value: 'Add a faculty member' },
    ],
  },
]

const storageKey = 'gdis-guest-cms-draft'

function createInitialDraft(): Draft {
  return Object.fromEntries(
    guestAreas.map((area) => [
      area.id,
      Object.fromEntries(area.fields.map((field) => [field.id, field.value])),
    ]),
  )
}

function loadGuestDraft(): Draft {
  if (typeof window === 'undefined') return createInitialDraft()

  const storedDraft = window.localStorage.getItem(storageKey)
  if (!storedDraft) return createInitialDraft()

  try {
    return JSON.parse(storedDraft) as Draft
  } catch {
    window.localStorage.removeItem(storageKey)
    return createInitialDraft()
  }
}

export function GuestCms() {
  const [selectedId, setSelectedId] = useState('settings')
  const [draft, setDraft] = useState<Draft>(loadGuestDraft)
  const [saved, setSaved] = useState(false)

  const selected = useMemo(
    () => guestAreas.find((area) => area.id === selectedId) ?? guestAreas[0],
    [selectedId],
  )
  const values = draft[selected.id] ?? {}
  const previewTitle = values.title ?? values.schoolName ?? values.about ?? values.notice ?? selected.label
  const previewAccent = values.accent ?? values.faculty ?? values.event ?? ''
  const previewDescription = values.summary ?? values.announcement ?? values.address ?? selected.description

  function selectArea(id: string) {
    setSelectedId(id)
    setSaved(false)
  }

  function updateField(id: string, value: string) {
    setSaved(false)
    setDraft((current) => ({
      ...current,
      [selected.id]: { ...current[selected.id], [id]: value },
    }))
  }

  function saveDraft() {
    window.localStorage.setItem(storageKey, JSON.stringify(draft))
    setSaved(true)
  }

  function resetDraft() {
    window.localStorage.removeItem(storageKey)
    setDraft(createInitialDraft())
    setSaved(false)
  }

  return (
    <main className={styles.shell}>
      <aside className={styles.sidebar}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandMark}>GD</span>
          <span>
            <strong>GDIS CMS</strong>
            <small>Guest workspace</small>
          </span>
        </Link>

        <p className={styles.navLabel}>Content</p>
        <nav className={styles.nav} aria-label="CMS sections">
          {guestAreas.map((area, index) => (
            <button
              key={area.id}
              type="button"
              onClick={() => selectArea(area.id)}
              aria-current={selected.id === area.id ? 'page' : undefined}
              className={`${styles.navButton} ${selected.id === area.id ? styles.navButtonActive : ''}`}
            >
              <span>0{index + 1}</span>
              <span>{area.label}</span>
            </button>
          ))}
        </nav>

        <div className={styles.guestNote}>
          <strong>CMS setup needed</strong>
          <p>Connect a Sanity project to upload images and publish edits to the website.</p>
        </div>
      </aside>

      <section className={styles.workspace}>
        <header className={styles.topbar}>
          <div className={styles.editorStatus}>
            <span aria-hidden="true" />
            Guest editor
          </div>
          <Link href="/" className={styles.websiteLink}>
            View website <span aria-hidden="true">↗</span>
          </Link>
        </header>

        <div className={styles.content}>
          <div className={styles.pageHeader}>
            <div>
              <p className={styles.eyebrow}>Editing</p>
              <h1>{selected.label}</h1>
              <p>{selected.description}</p>
            </div>
            <span className={styles.localBadge}>Local draft</span>
          </div>

          <div className={styles.editorLayout}>
            <form
              className={styles.formCard}
              autoComplete="off"
              onSubmit={(event) => {
                event.preventDefault()
                saveDraft()
              }}
            >
              <div className={styles.cardHeader}>
                <div>
                  <h2>Content details</h2>
                  <p>Edit the fields below, then save your draft.</p>
                </div>
                <span>{selected.fields.length} fields</span>
              </div>

              <div className={styles.formGrid}>
                {selected.fields.map((field) => (
                  <label key={field.id} className={styles.field}>
                    <span>{field.label}</span>
                    {field.multiline ? (
                      <textarea
                        value={values[field.id] ?? ''}
                        onChange={(event) => updateField(field.id, event.target.value)}
                        rows={4}
                      />
                    ) : (
                      <input
                        value={values[field.id] ?? ''}
                        onChange={(event) => updateField(field.id, event.target.value)}
                      />
                    )}
                  </label>
                ))}
              </div>

              <div className={styles.actions}>
                <button type="submit" className={styles.saveButton}>Save draft</button>
                <button type="button" onClick={resetDraft} className={styles.resetButton}>Reset changes</button>
                <p className={styles.saveStatus} aria-live="polite">
                  {saved ? 'Draft saved in this browser.' : 'Not published to the website.'}
                </p>
              </div>
            </form>

            <aside className={styles.previewCard} aria-label="Content preview">
              <div className={styles.previewHeader}>
                <span>Preview</span>
                <small>Guest draft</small>
              </div>
              <div className={styles.previewCanvas}>
                <p className={styles.previewLabel}>{selected.label}</p>
                <h2>{previewTitle}</h2>
                {previewAccent && <p className={styles.previewAccent}>{previewAccent}</p>}
                <p className={styles.previewDescription}>{previewDescription}</p>
              </div>
              <div className={styles.previewHelp}>
                <strong>Image uploads & publishing</strong>
                <p>This local preview cannot upload media or update the website. Add NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local, restart the app, then use the image fields in Sanity Studio to upload, crop, replace, or remove images.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
