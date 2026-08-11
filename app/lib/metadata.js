import en from '../../src/locales/en/translations.json'
import pt from '../../src/locales/pt/translations.json'
import es from '../../src/locales/es/translations.json'

const allTranslations = { en, pt, es }
const BASE = 'https://valterklug.com'

function strip(s) {
  return (s || '').replace(/<[^>]*>/g, '').replace(/\n/g, ' ')
}

export function pageMetadata(locale, section, path, overrides = {}) {
  const t = allTranslations[locale] || allTranslations.en
  const s = t[section] || {}
  const cleanPath = path === '/' ? '' : path

  return {
    title: overrides.title || strip(s.heroH1) || section,
    description: overrides.description || strip(s.heroSub) || '',
    alternates: {
      canonical: `${BASE}${locale === 'en' ? '' : `/${locale}`}${cleanPath}`,
      languages: {
        en: `${BASE}${cleanPath}`,
        'pt-BR': `${BASE}/pt${cleanPath}`,
        es: `${BASE}/es${cleanPath}`,
      },
    },
    openGraph: {
      locale: locale === 'pt' ? 'pt_BR' : locale === 'es' ? 'es_ES' : 'en_US',
    },
    ...overrides,
  }
}
