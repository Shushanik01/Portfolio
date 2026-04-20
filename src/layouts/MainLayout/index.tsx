import { Button } from 'antd'
import type { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from '../../components/ThemeToggle'
import { FOOTER_ITEMS, NAV_ITEMS } from './consts'
import { getNavItemClassName, useIsActivePath } from './utils'
import styles from './style.module.css'

function MainLayout({ children }: PropsWithChildren) {
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
          <Button className={styles.talkButton} type="primary">
            Let's Build
          </Button>
          <ThemeToggle />
        </div>
      </header>

      <main className={styles.content}>{children}</main>

      <footer id="contact" className={styles.footer}>
        <p className={styles.copy}>© 2024 Ethereal Architect. Designed with precision and whimsy.</p>
        <div className={styles.footerLinks}>
          {FOOTER_ITEMS.map((item) => (
            <a key={item} href="#" className={styles.footerLink}>
              {item}
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

  if (type === 'anchor') {
    return (
      <a className={styles.link} href={to}>
        {children}
      </a>
    )
  }

  return <Link className={className} to={to}>{children}</Link>
}

export default MainLayout
