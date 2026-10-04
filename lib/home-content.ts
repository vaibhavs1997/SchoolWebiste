export type HomeHeroSlide = {
  image: string
  heading?: string
  description?: string
}

export type HomeHeroStat = {
  label: string
  value: string
}

export type HomeContent = {
  seoTitle?: string
  seoDescription?: string
  heroEyebrow: string
  heroSlides: HomeHeroSlide[]
  primaryCtaLabel: string
  primaryCtaHref: string
  secondaryCtaLabel: string
  secondaryCtaHref: string
  heroStats: HomeHeroStat[]
  leadership: LeadershipContent
  principal: PrincipalContent
  notice: HomeNoticeContent
  community: CommunityContent
  viewpoint: ViewpointContent
  highlights: HomeHighlight[]
}

export type LeadershipContent = {
  label: string
  title: string
  accent: string
  image: string
  imageAlt: string
  paragraphs: string[]
  signoff: string
  name: string
  role: string
}

export type PrincipalContent = {
  label: string
  title: string
  accent: string
  mission: string
  quoteLead: string
  quote: string
  image: string
  imageAlt: string
  leftParagraphs: string[]
  rightParagraphs: string[]
  signoff: string
  name: string
  qualifications: string
}

export type HomeNoticeContent = {
  label: string
  eventLabel: string
  title: string
  summary: string
  updatedAt: string
  viewMoreLabel: string
  viewMoreHref: string
}

export type CommunityContent = {
  image: string
  imageAlt: string
  title: string
  subtitle: string
  gallery: CommunityGalleryItem[]
}

export type CommunityGalleryItem = {
  image: string
  alt: string
  caption: string
}

export type ViewpointContent = {
  label: string
  title: string
  accent: string
  lead: string
  body: string
}

export type HomeHighlight = {
  title: string
  body: string
  href: string
}

export const defaultHomeContent: HomeContent = {
  seoTitle: 'G.D. International School',
  seoDescription: 'G.D. International School in Aliganj, Etah — a caring, future-ready learning community.',
  heroEyebrow: 'CBSE school in Aliganj, Etah',
  heroSlides: [
    {
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=2200&q=85',
      heading: 'Welcome to G.D. International School.',
      description: 'Providing quality education with modern facilities and experienced faculty.',
    },
    {
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2200&q=85',
      heading: 'A place to learn. A place to belong.',
      description: 'A caring learning community where every child is encouraged to grow with confidence.',
    },
    {
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2200&q=85',
      heading: 'Curiosity for today. Confidence for tomorrow.',
      description: 'Strong values, thoughtful teaching and meaningful opportunities for every learner.',
    },
  ],
  primaryCtaLabel: 'Begin your journey',
  primaryCtaHref: '/admission',
  secondaryCtaLabel: 'Discover GDIS',
  secondaryCtaHref: '/about-us',
  heroStats: [
    { label: 'Since 2020', value: 'Building bright futures' },
    { label: 'CBSE aligned', value: 'Rooted in strong values' },
    { label: 'Aliganj, Etah', value: 'Uttar Pradesh, India' },
  ],
  leadership: {
    label: 'A message from our leadership',
    title: 'FROM DESK OF',
    accent: 'FOUNDER/DIRECTOR',
    image: '/assets/Director.png',
    imageAlt: 'G.D. International School Founder and Director with students',
    paragraphs: [
      'GD International SCHOOL has, therefore been established for the specific purpose of providing the new generation with an institution which besides giving the best education in the field of modern science & technology. It cares for all round development physical, mental & spiritual and inculcates in them a deep love for high moral values and deep respect for all religions.',
      'Human nature is to be ambitious. Ambition resides in the heart of hopes. Even the nature teaches us the consequences of ambition. A flower desires to bloom and a tree bears fruits. Thus, the term ambition is itself hidden in the hopes of nature; and with the change of time and situation, the ambition of nature gets fulfilled. This is just because of its action. Therefore, we humans too, should try to transform the hopes into thoughts and thoughts into actions.',
      'As a result, the action bears the fruit of success. As noble laureate Rabindra Nath Tagore says, “Nature is the best teacher of human being”.',
      'Our educational model will be an international school with an Indian mind, an Indian heart and an Indian soul. All these inspire us to continue our best in preparing children for the 21st century. I warmly invite you to explore GDIS as we re-dedicate ourselves every day to impart the very best education to young minds.',
    ],
    signoff: 'With warm regards,',
    name: 'Mr. Sultan Singh Yadav',
    role: 'Retd. Principal',
  },
  principal: {
    label: 'A message from our principal',
    title: 'Principal',
    accent: 'Message.',
    mission: 'My mission is nation building through education and beyond.',
    quoteLead: 'And',
    quote: '“Success comes to those who work hard and stays with those, who don’t rest on the laurels of the past.”',
    image: '/assets/Principal.png',
    imageAlt: 'Principal of G.D. International School',
    leftParagraphs: [
      'We are a school with a difference..! We value individualism, creativity and innovation and strive to nurture them in our students.',
      'G.D. International School takes on the role of igniting and fueling the very fire of learning in the students to produce scholars who have the mental agility, physical vigor, strong value system and IT skills.',
      'Founded in 2020, the school is offering an environment of rich tutelage, harmonious learning and various facilities to help the learners broaden their horizons. The school’s objective is to provide pedagogy which will empower the learners with analytical and logical skills.',
      'The infrastructure of the school is being constantly upgraded to attain the highest standards of excellence.',
    ],
    rightParagraphs: [
      'Our exemplary founder Chairman persistently emphasizes on commitment, innovation and hard work.',
      'Under his able direction and leadership, we at G.D. International School are most certainly poised for an enriched future.',
      'I look forward to yet awe-inspiring forthcoming years of perpetual exaltation and success.',
      'Teamwork is always the hallmark of G.D. International School. I am very sure through collaborative effort we can achieve more to benefit our students who are the future leaders of tomorrow.',
    ],
    signoff: 'With Best Wishes and Regards',
    name: 'Mr. Akash Shukla',
    qualifications: 'BCA, MCA, M.Sc, B.Ed, LLB, Ph.D (Pursuing)',
  },
  notice: {
    label: 'Notice / Events',
    eventLabel: 'Notice',
    title: 'HOLIDAY',
    summary: 'Holiday Notice — Respected parents, this is to inform you all that school will remain closed for all students on 4th September 2026.',
    updatedAt: '2026-09-03 12:00:00',
    viewMoreLabel: 'View more',
    viewMoreHref: '/student',
  },
  community: {
    image: '/assets/Director.png',
    imageAlt: 'G.D. International School community event',
    title: 'GDIS COMMUNITY',
    subtitle: 'Learning, joy and belonging',
    gallery: [
      { image: '/assets/Director.png', alt: 'G.D. International School community event', caption: 'Learning, joy and belonging' },
      { image: '/assets/Principal.png', alt: 'G.D. International School principal', caption: 'Guidance, care and confidence' },
      { image: '/assets/GDIS.png', alt: 'G.D. International School logo', caption: 'A community built around every learner' },
    ],
  },
  viewpoint: {
    label: 'Our point of view',
    title: 'Education that feels',
    accent: 'like possibility.',
    lead: 'We believe the best education prepares children not only for examinations, but for a changing world.',
    body: 'At G.D. International School, modern learning meets timeless values. Learners are encouraged to ask better questions, think independently, collaborate generously and grow into capable, compassionate citizens.',
  },
  highlights: [
    { title: 'About us', body: 'Discover our values, story and learning promise.', href: '/about-us' },
    { title: 'Admissions', body: 'Start a warm, clear admission journey for your family.', href: '/admission' },
    { title: 'Faculty', body: 'Meet the people who make learning possible.', href: '/faculty' },
    { title: 'Student life', body: 'Explore a community built for curiosity and belonging.', href: '/student' },
    { title: 'Entrance Exam', body: 'Prepare confidently for the next step.', href: '/entrance-exam' },
  ],
}
