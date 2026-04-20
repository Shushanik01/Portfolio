import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import { useTheme } from '../../contexts/ThemeProvider/useTheme'
import { getToggleAriaLabel } from './utils'
import styles from './style.module.css'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      className={styles.outer}
      aria-label={getToggleAriaLabel(theme)}
      onClick={toggleTheme}
    >
      <span className={styles.inner}>
        {theme === 'dark' ? <MoonOutlined /> : <SunOutlined />}
      </span>
    </button>
  )
}

export default ThemeToggle
