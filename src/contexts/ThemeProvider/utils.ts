import { THEME_STORAGE_KEY, type ThemeName } from './consts'

export const isThemeName = (value: string | null): value is ThemeName =>
  value === 'dark' || value === 'light'

export const getStoredTheme = (): ThemeName | null => {
  if (typeof window === 'undefined') {
    return null
  }
  const raw = window.localStorage.getItem(THEME_STORAGE_KEY)
  return isThemeName(raw) ? raw : null
}
