export type PersonalProjectMetric = {
  value: string
  label: string
}

export type PersonalProjectReel = {
  name: string
  url: string
}

export const personalProject = {
  eyebrow: 'Personal project / 02',
  title: 'A small account.',
  titleAccent: 'A real audience.',
  deck:
    'An independent Instagram project built around my cats, short-form Reels and brand collaborations.',
  intro:
    'This is a personal Instagram account built around my cats and short-form Reels. It is a practical test of the ideas I’m developing in social media strategy: how a hook earns attention, how a familiar moment travels beyond followers, and how a small account can work with brands without losing its voice.',
  demonstrations: [
    'Short-form content creation from idea and hook through filming, editing and publishing.',
    'Writing for a real audience rather than a hypothetical brief.',
    'Creating content for PR/barter brand collaborations while maintaining my account’s voice.',
    'Using Instagram insights to understand content reach and audience discovery.',
  ],
  metrics: [
    { value: '1,900', label: 'followers' },
    { value: '17,548', label: 'views · last 30 days' },
    { value: '14,254', label: 'viewers · last 30 days' },
    { value: '97.3%', label: 'of last-30-day views from non-followers' },
    { value: '96.4%', label: 'of last-30-day views from Reels' },
    { value: '~10', label: 'PR/barter brand collaborations' },
  ],
  reels: [
    {
      name: 'SafeMyPet',
      url: 'https://www.instagram.com/reel/DfPaYPLTKK5/',
    },
    {
      name: 'Zoomies',
      url: 'https://www.instagram.com/reel/Dd07-XWzRp8/',
    },
    {
      name: 'Furfly',
      url: 'https://www.instagram.com/reel/DbqQR4kTezc/',
    },
    {
      name: 'Vritus',
      url: 'https://www.instagram.com/reel/DbU-PR1TePQ/',
    },
  ],
  collaborationNote:
    'Approximately 10 PR/barter brand collaborations, all published on my own Instagram account. Pawwcious used one of my posts as a Partnership Ad.',
  scopeNote:
    'Independent social media content creation and brand collaborations. I did not manage brand accounts, run paid campaigns or produce separate UGC deliverables.',
} as const
