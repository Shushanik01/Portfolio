import { createElement } from 'react'
import type { RouteObject } from 'react-router-dom'
import { APP_ROUTES } from './consts'
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'
import CertificatesPage from '../pages/CertificatesPage'
import ContactPage from '../pages/ContactPage'

export const getAppRoutes = (): RouteObject[] => [
  {
    path: APP_ROUTES.home,
    element: createElement(HomePage),
  },
  {
    path: APP_ROUTES.about,
    element: createElement(AboutPage),
  },
  {
    path: APP_ROUTES.certificates,
    element: createElement(CertificatesPage),
  },
  {
    path: APP_ROUTES.contact,
    element: createElement(ContactPage),
  },
]
