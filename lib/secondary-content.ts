export type AdmissionStep = { number: string; title: string; body: string }

export type AdmissionContent = {
  seoTitle?: string
  seoDescription?: string
  banner: string
  eyebrow: string
  heroTitle: string
  heroAccent: string
  heroSummary: string
  introLabel: string
  introTitle: string
  introAccent: string
  introParagraphs: string[]
  introCtaLabel: string
  stepsLabel: string
  stepsTitle: string
  stepsAccent: string
  steps: AdmissionStep[]
  formEyebrow: string
  formTitle: string
  formAccent: string
  formDescription: string
  closingTitle: string
  closingAccent: string
  closingCtaLabel: string
  closingCtaHref: string
}

export type ContactContent = {
  seoTitle?: string
  seoDescription?: string
  eyebrow: string
  heroTitle: string
  heroAccent: string
  heroSummary: string
  phoneLabel: string
  emailLabel: string
  visitLabel: string
  visitLines: string[]
  ctaLabel: string
  ctaHref: string
}

export const defaultAdmissionContent: AdmissionContent = {
  seoTitle: 'Admissions | G.D. International School',
  seoDescription: 'Start your admission journey with G.D. International School.',
  banner: 'School Admission Open',
  eyebrow: 'Admissions 2026-27',
  heroTitle: 'A confident start.',
  heroAccent: 'A bright next step.',
  heroSummary: 'Every admission begins with a conversation. Discover a welcoming school community where children are known, supported and encouraged to grow.',
  introLabel: 'Your next step',
  introTitle: 'Begin with a',
  introAccent: 'conversation.',
  introParagraphs: ['The School invites aspiring applicants for admission. If you are a keen learner with kindling curiosity and a sense of adventure, then G.D. International School Aliganj, Etah is the place to be.', 'We are excited to welcome you to our prestigious institution and guide you on your journey to success. Our dedicated admission team is here to assist you every step of the way.'],
  introCtaLabel: 'Talk to admissions →',
  stepsLabel: 'How it works',
  stepsTitle: 'Three clear steps to',
  stepsAccent: 'get started.',
  steps: [
    { number: '01 / EXPLORE', title: 'Learn about GDIS', body: 'Explore our learning approach, values and school community to see what makes GDIS a welcoming place to grow.' },
    { number: '02 / CONNECT', title: 'Meet our team', body: 'Talk with the admissions team, ask your questions and arrange a campus visit for your family.' },
    { number: '03 / BEGIN', title: 'Complete the application', body: 'Submit the application and supporting information. We will share the next steps for your child’s admission.' },
  ],
  formEyebrow: 'Apply to GDIS',
  formTitle: 'Admission',
  formAccent: 'Enquiry Form',
  formDescription: 'Share your details and our admission team will help you with the next step.',
  closingTitle: 'Want to know more about',
  closingAccent: 'student life?',
  closingCtaLabel: 'Explore student life →',
  closingCtaHref: '/student',
}

export const defaultContactContent: ContactContent = {
  seoTitle: 'Contact Us | G.D. International School',
  seoDescription: 'Contact G.D. International School in Aliganj, Etah.',
  eyebrow: 'Let’s connect',
  heroTitle: 'We’re here to',
  heroAccent: 'help.',
  heroSummary: 'Whether you are exploring the school or ready to apply, our team would be happy to hear from you.',
  phoneLabel: 'Call',
  emailLabel: 'Email',
  visitLabel: 'Visit',
  visitLines: ['Hatsari road, Aliganj (Etah)', '300 Mtr. away from Hatsari crossing', '207247 Uttar Pradesh'],
  ctaLabel: 'Start an admission enquiry →',
  ctaHref: '/admission',
}
