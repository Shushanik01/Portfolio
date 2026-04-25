import { APP_ROUTES } from '../../app/consts'

export const NAV_ITEMS = [
  { label: 'Home', to: APP_ROUTES.home, type: 'route' },
  { label: 'About', to: APP_ROUTES.about, type: 'route' },
  { label: 'Projects', to: '#projects', type: 'anchor' },
  { label: 'Timeline', to: '#timeline', type: 'anchor' },
  { label: 'Academic', to: '#academic', type: 'anchor' },
  { label: 'Certifications', to: '#certifications', type: 'anchor' },
] as const

export const FOOTER_ITEMS = ['Github', 'LinkedIn', 'Resume', 'Email'] as const
