import { APP_ROUTES } from '../../app/consts'

export const NAV_ITEMS = [
  { label: 'Home', to: APP_ROUTES.home, type: 'route' },
  { label: 'About', to: APP_ROUTES.about, type: 'route' },
  { label: 'Projects', to: '#projects', type: 'anchor' },
  { label: 'Certifications', to: APP_ROUTES.certificates, type: 'route' },
] as const

export const FOOTER_ITEMS = [
  { label: 'Github', href: 'https://github.com/Shushanik01' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shushanik-arakelyan-4b763b365/' },
  { label: 'Email', href: 'mailto:shushanikarakl62@gmail.com' },
] as const
