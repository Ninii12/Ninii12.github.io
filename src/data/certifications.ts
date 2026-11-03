export type Certification = {
  slug: string
  provider: string
  title: string
  /** Human-readable completion date, shown in the record. */
  completed: string
  /** Machine-readable date for <time dateTime>. */
  completedISO: string
  skills: string[]
  /** Public path to the original certificate PDF. */
  pdf: string
}

export const certifications: Certification[] = [
  {
    slug: 'hp-life-social-media-marketing',
    provider: 'HP LIFE',
    title: 'Social Media Marketing',
    completed: 'October 30, 2026',
    completedISO: '2026-10-30',
    skills: [
      'Advertising across social platforms',
      'Creating effective social media marketing campaigns',
      'Creating targeted social media adverts',
    ],
    pdf: '/certificates/hp-life-social-media-marketing.pdf',
  },
]
