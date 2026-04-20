export const THEME_STORAGE_KEY = 'portfolio-theme'

export const THEMES = ['dark', 'light'] as const

export type ThemeName = (typeof THEMES)[number]
