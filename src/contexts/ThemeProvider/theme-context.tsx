import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'
import { THEME_STORAGE_KEY, type ThemeName } from './consts'
import { ThemeContext } from './theme-context-instance'
import { getStoredTheme, isThemeName } from './utils'

function readInitialTheme(): ThemeName {
  if (typeof window === 'undefined') {
    return 'dark'
  }
  const stored = getStoredTheme()
  if (stored) {
    return stored
  }
  const raw = window.localStorage.getItem(THEME_STORAGE_KEY)
  return isThemeName(raw) ? raw : 'dark'
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setThemeState] = useState<ThemeName>(readInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const setTheme = useCallback((next: ThemeName) => {
    setThemeState(next)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
