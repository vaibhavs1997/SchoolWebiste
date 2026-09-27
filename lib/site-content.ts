export type ContentImage = { url: string; alt?: string }

export type FeatureCard = { number: string; title: string; body: string; image?: ContentImage }

export type MarketingPageContent = {
  slug: string
  eyebrow: string
  heroTitle: string
  heroAccent: string
  heroSummary: string
  heroImage?: ContentImage
  introLabel: string
  introTitle: string
  introAccent: string
  introBody: string[]
  featureLabel: string
  featureTitle: string
  featureAccent: string
  cards: FeatureCard[]
  panelLabel: string
  panelTitle: string
  panelAccent: string
  panelHeading: string
  panelBody: string
  panelItems: FeatureCard[]
  cta: string
  ctaAccent: string
  ctaHref: string
  ctaLabel: string
}

export const marketingPages: Record<string, MarketingPageContent> = {
  'about-us': {
    slug: 'about-us',
    eyebrow: 'About G.D. International School',
    heroTitle: 'Growing minds.',
    heroAccent: 'Grounded in values.',
    heroSummary: 'A joyful, future-ready learning community in Aliganj where every learner is known, supported and inspired to make a difference.',
    introLabel: 'Our story',
    introTitle: 'Education with',
    introAccent: 'purpose.',
    introBody: [
      'G. D. International School is one of the most prestigious schools in Uttar Pradesh. Founded in 2020 in Aliganj, Etah, it is run by the Gyan Devi Shiksha Samiti.',
      'Affiliated with the Central Board of Secondary Education, GDIS centres on academic excellence, intellectual growth, art, athletics, ethical awareness, sportsmanship and community service.',
    ],
    featureLabel: 'What guides us',
    featureTitle: 'A shared',
    featureAccent: 'commitment.',
    cards: [
      { number: '01 / MISSION', title: 'A safe haven', body: 'A place where everyone is valued, respected and empowered to meet current and future challenges.' },
      { number: '02 / VISION', title: 'A welcoming community', body: 'An inclusive environment where learners from diverse family and cultural backgrounds belong.' },
      { number: '03 / PROMISE', title: 'Ready for tomorrow', body: 'Critical thinking, global perspective and core values prepare students for a changing world.' },
    ],
    panelLabel: 'Beyond academics',
    panelTitle: 'A life with',
    panelAccent: 'depth.',
    panelHeading: 'Every learner is known.',
    panelBody: 'The school traditions and broad curriculum add depth to each student’s life, helping children learn with confidence and character.',
    panelItems: [
      { number: '', title: 'Academic growth', body: 'Strong foundations and thoughtful teaching.' },
      { number: '', title: 'Character', body: 'Integrity, compassion and responsibility.' },
      { number: '', title: 'Community', body: 'Respect, service and shared purpose.' },
      { number: '', title: 'Opportunity', body: 'Arts, athletics and exploration.' },
    ],
    cta: 'Come discover how curiosity',
    ctaAccent: 'finds its wings.',
    ctaHref: '/admission',
    ctaLabel: 'Explore admissions',
  },
  faculty: {
    slug: 'faculty',
    eyebrow: 'The people of GDIS',
    heroTitle: 'Learning starts with',
    heroAccent: 'the right people.',
    heroSummary: 'Our faculty bring knowledge, care and curiosity into every classroom, helping each learner find confidence in their own voice.',
    introLabel: 'A connected team',
    introTitle: 'Teachers who see the',
    introAccent: 'whole child.',
    introBody: [
      'At G.D. International School, teaching is a partnership. Our educators create classrooms where questions are welcome, effort is valued and every learner is encouraged to grow.',
      'From academic foundations to arts, athletics and life beyond the classroom, our team makes learning purposeful, personal and full of possibility.',
    ],
    featureLabel: 'How we teach',
    featureTitle: 'Expertise with',
    featureAccent: 'empathy.',
    cards: [
      { number: '01 / GUIDE', title: 'Teach with purpose', body: 'Lessons connect strong foundations with the questions, skills and confidence learners need for the world ahead.' },
      { number: '02 / NOTICE', title: 'Know every learner', body: 'Teachers pay attention to individual strengths, interests and next steps so support is thoughtful and timely.' },
      { number: '03 / GROW', title: 'Keep learning too', body: 'Our faculty model curiosity, reflection and collaboration because great teaching grows alongside its students.' },
    ],
    panelLabel: 'One school, many strengths',
    panelTitle: 'A team built around',
    panelAccent: 'belonging.',
    panelHeading: 'Every role matters.',
    panelBody: 'Our school team shares one commitment: to create a safe, respectful and ambitious environment in which students can do their best work.',
    panelItems: [
      { number: '', title: 'Academic leadership', body: 'Sets a clear direction for learning and school-wide growth.' },
      { number: '', title: 'Class teachers', body: 'Build trusted relationships through each learner’s daily journey.' },
      { number: '', title: 'Subject specialists', body: 'Bring depth, energy and fresh perspectives to every discipline.' },
      { number: '', title: 'Student support', body: 'Creates confidence through activities, care and community.' },
    ],
    cta: 'Come meet a school where people make',
    ctaAccent: 'the difference.',
    ctaHref: '/contact',
    ctaLabel: 'Let’s connect',
  },
  student: {
    slug: 'student',
    eyebrow: 'Student life at GDIS',
    heroTitle: 'More than a classroom.',
    heroAccent: 'A place to belong.',
    heroSummary: 'Learning continues through friendships, creativity, movement and the everyday moments that make school feel like a community.',
    introLabel: 'The full experience',
    introTitle: 'Room to learn,',
    introAccent: 'space to grow.',
    introBody: [
      'At G.D. International School, students are encouraged to explore their interests, take on new challenges and build the confidence to participate fully in school life.',
      'Our campus experience brings together academic learning, sport, art, collaboration and service so every learner can discover where they feel most at home.',
    ],
    featureLabel: 'Make it yours',
    featureTitle: 'Find your own',
    featureAccent: 'rhythm.',
    cards: [
      { number: '01 / LEARN', title: 'Learn deeply', body: 'Strong foundations, curious questions and the freedom to think independently.' },
      { number: '02 / CREATE', title: 'Create freely', body: 'Art, projects and ideas give students space to express themselves and make something new.' },
      { number: '03 / MOVE', title: 'Move with purpose', body: 'Sports, activity and teamwork help learners build energy, resilience and a healthy sense of joy.' },
    ],
    panelLabel: 'Beyond the timetable',
    panelTitle: 'Every interest can become a',
    panelAccent: 'beginning.',
    panelHeading: 'Find your place.',
    panelBody: 'Whether a student leads from the front, creates behind the scenes or finds confidence one small step at a time, there is room to participate and belong.',
    panelItems: [
      { number: '', title: 'Sports & athletics', body: 'Build confidence through movement, practice and teamwork.' },
      { number: '', title: 'Arts & expression', body: 'Explore imagination, performance and creative voice.' },
      { number: '', title: 'Clubs & collaboration', body: 'Follow questions, share ideas and make learning social.' },
      { number: '', title: 'Service & leadership', body: 'Turn care for others into meaningful action.' },
    ],
    cta: 'Come see how students',
    ctaAccent: 'find their wings.',
    ctaHref: '/admission',
    ctaLabel: 'Explore admissions',
  },
  'entrance-exam': {
    slug: 'entrance-exam',
    eyebrow: 'Entrance Exam 2026-27',
    heroTitle: 'Prepare for what’s next.',
    heroAccent: 'Start with confidence.',
    heroSummary: 'A clear, supportive introduction to the GDIS admission journey, with the information families need to take the next step.',
    introLabel: 'A thoughtful beginning',
    introTitle: 'Show us how you',
    introAccent: 'learn.',
    introBody: [
      'The entrance exam is an opportunity for us to understand each learner’s readiness, interests and strengths.',
      'Families can use this page to understand the journey, prepare with confidence and connect with our admissions team whenever they have a question.',
    ],
    featureLabel: 'Your exam journey',
    featureTitle: 'Three steps to',
    featureAccent: 'get ready.',
    cards: [
      { number: '01 / CONNECT', title: 'Submit an enquiry', body: 'Share your family’s details so our admissions team can answer questions and explain the next step.' },
      { number: '02 / PREPARE', title: 'Understand the format', body: 'Learn what your child can expect and use the time before the assessment to feel prepared, not pressured.' },
      { number: '03 / BEGIN', title: 'Take the next step', body: 'Complete the required process and stay connected with our team as your admission journey moves forward.' },
    ],
    panelLabel: 'Preparation guide',
    panelTitle: 'A calm, clear',
    panelAccent: 'process.',
    panelHeading: 'Bring your curiosity.',
    panelBody: 'Review age-appropriate learning foundations without pressure, bring requested documents and arrive with enough time to settle in.',
    panelItems: [
      { number: '', title: 'Ask questions', body: 'Our admissions team is ready to help.' },
      { number: '', title: 'Learn the format', body: 'Know what your child can expect.' },
      { number: '', title: 'Prepare calmly', body: 'Confidence matters more than pressure.' },
      { number: '', title: 'Take the next step', body: 'Start your enquiry when you are ready.' },
    ],
    cta: 'Ready to begin your child’s',
    ctaAccent: 'next chapter?',
    ctaHref: '/admission',
    ctaLabel: 'Start an enquiry',
  },
}
