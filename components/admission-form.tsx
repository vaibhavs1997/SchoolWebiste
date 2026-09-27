'use client'

import { useState } from 'react'

export function AdmissionForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return <div className="mx-auto max-w-2xl border border-white/15 bg-paper p-10 text-center sm:p-14" role="status" aria-live="polite"><p className="section-label justify-center">Thank you</p><h3 className="mt-5 font-display text-4xl font-bold tracking-[-0.06em] text-ink">Your admission enquiry has been received.</h3><p className="mt-5 text-lg leading-relaxed text-ink-soft">Thank you for your interest in G.D. International School. Our admission team will review your details and contact you shortly to guide you through the next steps.</p></div>
  }

  return <form className="grid gap-5 md:grid-cols-2" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
    <label className="md:col-span-2"><span className="sr-only">Name</span><input required name="name" placeholder="Name" autoComplete="name" className="form-control" /></label>
    <label><span className="sr-only">Admission enquiry</span><select required name="enquiry" className="form-control"><option value="">Admission Enquiry</option><option>New admission</option><option>Campus visit</option><option>General enquiry</option></select></label>
    <label><span className="sr-only">Class studying</span><select required name="class" className="form-control"><option value="">Class-Studying</option><option>Pre-primary</option><option>Primary</option><option>Middle school</option><option>Secondary school</option></select></label>
    <label><span className="sr-only">Email address</span><input required type="email" name="email" placeholder="Email Address" autoComplete="email" className="form-control" /></label>
    <label><span className="sr-only">Contact number</span><input required type="tel" name="phone" placeholder="Contact Number" autoComplete="tel" className="form-control" /></label>
    <label className="md:col-span-2"><span className="sr-only">Message</span><textarea name="message" placeholder="Message" rows={6} className="form-control min-h-44 resize-y" /></label>
    <div className="flex justify-center md:col-span-2"><button type="submit" className="rounded-full bg-lime px-7 py-4 text-sm font-bold text-ink transition hover:-translate-y-0.5">Submit enquiry →</button></div>
  </form>
}
