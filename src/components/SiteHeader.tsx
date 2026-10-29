import { useLocation } from '../lib/router'
import { Link } from './RouteLink'
import styles from './SiteHeader.module.css'

const navigation = [
  { label: 'Work', hash: '#work' },
  { label: 'About', hash: '#about' },
  { label: 'Contact', hash: '#contact' },
]

export default function SiteHeader() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link
          className={styles.brand}
          href="/"
          aria-label="Nancy Lawrance, back to top"
        >
          <span className={styles.monogram} aria-hidden="true">
            N
          </span>
          <span className={styles.name}>Nancy Lawrance</span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <span className={styles.navMeta}>Portfolio / 2026</span>
          <ul className={styles.navList}>
            {navigation.map((item) => (
              <li key={item.label}>
                <Link
                  className={styles.navLink}
                  href={isHome ? item.hash : `/${item.hash}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
