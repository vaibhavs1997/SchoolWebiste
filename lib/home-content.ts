export type HomeHeroSlide = {
  image: string
  title: string
  accent: string
  description: string
}

export type HomeHeroStat = {
  label: string
  value: string
}

export type HomeContent = {
  heroEyebrow: string
  heroSlides: HomeHeroSlide[]
  primaryCtaLabel: string
  primaryCtaHref: string
  secondaryCtaLabel: string
  secondaryCtaHref: string
  heroStats: HomeHeroStat[]
}

export const defaultHomeContent: HomeContent = {
  heroEyebrow: 'CBSE school in Aliganj, Etah',
  heroSlides: [
    {
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=2200&q=85',
      title: 'Welcome to',
      accent: 'G.D. International School.',
      description: 'Providing quality education with modern facilities and experienced faculty.',
    },
    {
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2200&q=85',
      title: 'A place to learn.',
      accent: 'A place to belong.',
      description: 'A caring learning community where every child is encouraged to grow with confidence.',
    },
    {
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2200&q=85',
      title: 'Curiosity for today.',
      accent: 'Confidence for tomorrow.',
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
}
