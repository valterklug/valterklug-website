import { PROJECTS } from '../src/data/portfolio'
import { CASES } from '../src/data/caseStudies'

const BASE = 'https://valterklug.com'

const PAGES = [
  '/',
  '/about',
  '/services',
  '/case-studies',
  '/portfolio',
  '/intelligence',
  '/contact',
  '/goglobal',
  '/agencies',
  '/articles',
]

/* The English address plus its /pt and /es versions */
function inAllLanguages(path, { lastModified = new Date(), priority = 0.8, translatedPriority = 0.7 } = {}) {
  const cleanPath = path === '/' ? '' : path
  return [
    { url: `${BASE}${cleanPath}`, lastModified, changeFrequency: 'monthly', priority },
    { url: `${BASE}/pt${cleanPath}`, lastModified, changeFrequency: 'monthly', priority: translatedPriority },
    { url: `${BASE}/es${cleanPath}`, lastModified, changeFrequency: 'monthly', priority: translatedPriority },
  ]
}

export default async function sitemap() {
  const staticPages = PAGES.flatMap(path => inAllLanguages(path, { priority: path === '/' ? 1 : 0.8 }))

  // Each case study page and each portfolio project's own address
  const caseStudyPages = CASES.flatMap(c => inAllLanguages(`/case-studies/${c.slug}`, { priority: 0.7, translatedPriority: 0.6 }))
  const projectPages = PROJECTS.flatMap(p => inAllLanguages(`/portfolio/${p.id}`, { priority: 0.6, translatedPriority: 0.5 }))

  // Add article pages from articles.json
  let articlePages = []
  try {
    const fs = await import('fs')
    const path = await import('path')
    const articlesPath = path.join(process.cwd(), 'public', 'articles.json')
    const articles = JSON.parse(fs.readFileSync(articlesPath, 'utf8'))
    articlePages = articles.flatMap(article => inAllLanguages(`/articles/${article.slug}`, {
      lastModified: new Date(article.date || Date.now()),
      priority: 0.6,
      translatedPriority: 0.5,
    }))
  } catch {
    // articles.json not available at build time
  }

  return [...staticPages, ...caseStudyPages, ...projectPages, ...articlePages]
}
