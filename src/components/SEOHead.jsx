'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useLocale, SUPPORTED_LOCALES, DEFAULT_LOCALE } from '../context/LocaleContext'

/**
 * Injects hreflang <link> tags and og:locale <meta> tag into <head>.
 * Runs on every route change.
 */
export default function SEOHead() {
  const location = useLocation()
  const { locale } = useLocale()

  useEffect(() => {
    const BASE_URL = 'https://valterklug.com'

    // Strip current locale prefix to get the clean path
    const cleanPath = location.pathname.replace(/^\/(pt|es)(\/|$)/, '/$2').replace(/^\/\//, '/') || '/'

    // Remove any existing hreflang links
    document.querySelectorAll('link[data-hreflang]').forEach(el => el.remove())

    // Add hreflang links for each supported locale
    SUPPORTED_LOCALES.forEach(lang => {
      const link = document.createElement('link')
      link.rel = 'alternate'
      link.setAttribute('data-hreflang', lang)
      const hrefLang = lang === 'pt' ? 'pt-BR' : lang === 'es' ? 'es' : 'en'
      link.hreflang = hrefLang
      const path = lang === DEFAULT_LOCALE
        ? cleanPath
        : `/${lang}${cleanPath === '/' ? '' : cleanPath}`
      link.href = BASE_URL + path
      document.head.appendChild(link)
    })

    // Add x-default (points to English)
    const xDefault = document.createElement('link')
    xDefault.rel = 'alternate'
    xDefault.setAttribute('data-hreflang', 'x-default')
    xDefault.hreflang = 'x-default'
    xDefault.href = BASE_URL + cleanPath
    document.head.appendChild(xDefault)

    // Update og:locale meta tag
    let ogLocale = document.querySelector('meta[property="og:locale"]')
    if (!ogLocale) {
      ogLocale = document.createElement('meta')
      ogLocale.setAttribute('property', 'og:locale')
      document.head.appendChild(ogLocale)
    }
    ogLocale.content = locale === 'pt' ? 'pt_BR' : locale === 'es' ? 'es_ES' : 'en_US'

    // Cleanup on unmount
    return () => {
      document.querySelectorAll('link[data-hreflang]').forEach(el => el.remove())
    }
  }, [location.pathname, locale])

  return null
}
