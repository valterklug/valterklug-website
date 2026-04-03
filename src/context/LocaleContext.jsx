import { createContext, useContext, useEffect, useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const LocaleContext = createContext({ locale: 'en', setLocale: () => {}, localePath: p => p })

export const SUPPORTED_LOCALES = ['en', 'pt', 'es']
export const DEFAULT_LOCALE = 'en'

/**
 * Derive the current locale from the URL pathname.
 * /pt/about → 'pt', /es/contact → 'es', /about → 'en'
 */
function localeFromPath(pathname) {
  const match = pathname.match(/^\/(pt|es)(\/|$)/)
  return match ? match[1] : DEFAULT_LOCALE
}

/**
 * Strip the locale prefix from a pathname.
 * /pt/about → /about, /es → /, /about → /about
 */
function stripLocale(pathname) {
  return pathname.replace(/^\/(pt|es)(\/|$)/, '/$2').replace(/^\/\//, '/') || '/'
}

export function LocaleProvider({ children }) {
  const navigate = useNavigate()
  const location = useLocation()
  const { i18n } = useTranslation()

  const locale = localeFromPath(location.pathname)

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale)
    }
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : locale === 'es' ? 'es' : 'en'
  }, [locale, i18n])

  const setLocale = (newLocale) => {
    if (!SUPPORTED_LOCALES.includes(newLocale)) return
    const cleanPath = stripLocale(location.pathname)
    const newPath = newLocale === DEFAULT_LOCALE
      ? cleanPath || '/'
      : `/${newLocale}${cleanPath === '/' ? '' : cleanPath}`
    navigate(newPath)
  }

  // Build a helper to prefix links with the current locale
  const localePath = (path) => {
    if (locale === DEFAULT_LOCALE) return path
    return `/${locale}${path === '/' ? '' : path}`
  }

  const value = useMemo(() => ({ locale, setLocale, localePath }), [locale, location.pathname])

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  )
}

export const useLocale = () => useContext(LocaleContext)
