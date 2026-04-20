import { useLocation } from 'react-router-dom'

export const useIsActivePath = (path: string): boolean => {
  const location = useLocation()
  return location.pathname === path
}

export const getNavItemClassName = (
  isActive: boolean,
  linkClass: string,
  activeClass: string,
): string => (isActive ? `${linkClass} ${activeClass}` : linkClass)
