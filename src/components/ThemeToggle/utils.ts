import type { ThemeName } from '../../contexts/ThemeProvider/consts'
import { THEME_TOGGLE_ARIA } from './consts'

export const getToggleAriaLabel = (theme: ThemeName): string =>
  theme === 'dark' ? THEME_TOGGLE_ARIA.switchToLight : THEME_TOGGLE_ARIA.switchToDark
