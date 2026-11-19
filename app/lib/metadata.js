import en from '../../src/locales/en/translations.json'
import pt from '../../src/locales/pt/translations.json'
import es from '../../src/locales/es/translations.json'
import { getProject } from '../../src/data/portfolio'
import { getCaseBySlug } from '../../src/data/caseStudies'
import { SITE_URL as BASE } from './site'

const allTranslations = { en, pt, es }
const OG_LOCALE = { en: 'en_US', pt: 'pt_BR', es: 'es_ES' }

function strip(s) {
  return (s || '').replace(/<[^>]*>/g, '').replace(/\n/g, ' ')
}

function alternatesFor(locale, cleanPath) {
  return {
    canonical: `${BASE}${locale === 'en' ? '' : `/${locale}`}${cleanPath}`,
    languages: {
      en: `${BASE}${cleanPath}`,
      'pt-BR': `${BASE}/pt${cleanPath}`,
      es: `${BASE}/es${cleanPath}`,
    },
  }
}

export function pageMetadata(locale, section, path, overrides = {}) {
  const t = allTranslations[locale] || allTranslations.en
  const s = t[section] || {}
  const cleanPath = path === '/' ? '' : path

  return {
    title: overrides.title || strip(s.heroH1) || section,
    description: overrides.description || strip(s.heroSub) || '',
    alternates: alternatesFor(locale, cleanPath),
    openGraph: {
      locale: OG_LOCALE[locale] || OG_LOCALE.en,
    },
    ...overrides,
  }
}

/* First ~160 characters, cut at a word boundary, for descriptions in link previews */
function excerpt(s, max = 160) {
  const clean = strip(s).replace(/\s+/g, ' ').trim()
  if (clean.length <= max) return clean
  const cut = clean.slice(0, max - 1)
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`
}

/* Title, description and image that WhatsApp, LinkedIn, iMessage, Slack and X show for a shared link */
function shareMetadata(locale, path, { title, description, image }) {
  const alternates = alternatesFor(locale, path)
  const shareTitle = `${title} — Valter Klug`
  return {
    title,
    description,
    alternates,
    openGraph: {
      type: 'article',
      siteName: 'Valter Klug',
      locale: OG_LOCALE[locale] || OG_LOCALE.en,
      url: alternates.canonical,
      title: shareTitle,
      description,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: shareTitle,
      description,
      images: [image],
    },
  }
}

export function projectMetadata(locale, id) {
  const p = getProject(id)
  if (!p) return {}
  const tr = allTranslations[locale]?.portfolio?.projects?.[id] || {}
  return shareMetadata(locale, `/portfolio/${id}`, {
    title: tr.title || p.title,
    description: excerpt(tr.description || p.description),
    image: p.thumbnail,
  })
}

export function caseStudyMetadata(locale, slug) {
  const c = getCaseBySlug(slug)
  if (!c) return {}
  const tr = allTranslations[locale]?.caseStudies?.cases?.[c.id] || {}
  return shareMetadata(locale, `/case-studies/${slug}`, {
    title: tr.title || c.title,
    description: excerpt(tr.desc || c.desc),
    image: c.fullImg,
  })
}
