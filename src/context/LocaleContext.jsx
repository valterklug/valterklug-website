'use client'
import { createContext, useContext, useMemo, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '../i18n/locales'

export { SUPPORTED_LOCALES, DEFAULT_LOCALE }

const LocaleContext = createContext({ locale: 'en', setLocale: () => {}, localePath: p => p })

export function LocaleProvider({ locale, children }) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : locale === 'es' ? 'es' : 'en'
  }, [locale])

  const setLocale = (newLocale) => {
    if (!SUPPORTED_LOCALES.includes(newLocale)) return
    const cleanPath = pathname.replace(/^\/(pt|es)(\/|$)/, '/$2').replace(/^\/\//, '/') || '/'
    const newPath = newLocale === DEFAULT_LOCALE
      ? cleanPath || '/'
      : `/${newLocale}${cleanPath === '/' ? '' : cleanPath}`
    router.push(newPath)
  }

  const localePath = (path) => {
    if (locale === DEFAULT_LOCALE) return path
    return `/${locale}${path === '/' ? '' : path}`
  }

  const value = useMemo(() => ({ locale, setLocale, localePath }), [locale, pathname])

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  )
}

export const useLocale = () => useContext(LocaleContext)
