import { Button } from 'antd'
import type { PropsWithChildren } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { APP_ROUTES } from '../../app/consts'
import ThemeToggle from '../../components/ThemeToggle'
import { FOOTER_ITEMS, NAV_ITEMS } from './consts'
import { getNavItemClassName, useIsActivePath } from './utils'
import styles from './style.module.css'

function MainLayout({ children }: PropsWithChildren) {
  const navigate = useNavigate()

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.brandBlock}>
          <p className={styles.brandTop}>Ethereal Architect</p>
          <p className={styles.brand}>Modern Web Identity</p>
        </div>
        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <MainLayoutLink key={item.label} to={item.to} type={item.type}>
              {item.label}
            </MainLayoutLink>
          ))}
        </nav>
        <div className={styles.actions}>
          <Button className={styles.talkButton} type="primary" onClick={() => navigate(APP_ROUTES.contact)}>
            Let's Build
          </Button>
          <ThemeToggle />
        </div>
      </header>

      <main className={styles.content}>{children}</main>

      <footer id="contact" className={styles.footer}>
        <p className={styles.copy}>© 2026 Ethereal Architect. Designed with precision and whimsy.</p>
        <div className={styles.footerLinks}>
          {FOOTER_ITEMS.map((item) => (
            <a key={item.label} href={item.href} className={styles.footerLink} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
              {item.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}

interface MainLayoutLinkProps extends PropsWithChildren {
  to: string
  type: 'route' | 'anchor'
}

function MainLayoutLink({ to, type, children }: MainLayoutLinkProps) {
  const isActive = useIsActivePath(to)
  const className = getNavItemClassName(isActive, styles.link, styles.activeLink)
  const navigate = useNavigate()
  const location = useLocation()

  if (type === 'anchor') {
    const handleAnchorClick = (e: React.MouseEvent) => {
      e.preventDefault()
      const id = to.replace('#', '')
      const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(scroll, 100)
      } else {
        scroll()
      }
    }
    return (
      <a className={styles.link} href={to} onClick={handleAnchorClick}>
        {children}
      </a>
    )
  }

  return <Link className={className} to={to}>{children}</Link>
}

export default MainLayout
