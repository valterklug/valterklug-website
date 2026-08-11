const BASE = 'https://valterklug.com'

const PAGES = [
  '/',
  '/about',
  '/services',
  '/case-studies',
  '/portfolio',
  '/intelligence',
  '/contact',
  '/private-equity',
  '/articles',
]

export default async function sitemap() {
  const staticPages = PAGES.flatMap(path => {
    const cleanPath = path === '/' ? '' : path
    return [
      { url: `${BASE}${cleanPath}`, lastModified: new Date(), changeFrequency: 'monthly', priority: path === '/' ? 1 : 0.8 },
      { url: `${BASE}/pt${cleanPath}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
      { url: `${BASE}/es${cleanPath}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ]
  })

  // Add article pages from articles.json
  let articlePages = []
  try {
    const fs = await import('fs')
    const path = await import('path')
    const articlesPath = path.join(process.cwd(), 'public', 'articles.json')
    const articles = JSON.parse(fs.readFileSync(articlesPath, 'utf8'))
    articlePages = articles.flatMap(article => [
      { url: `${BASE}/articles/${article.slug}`, lastModified: new Date(article.date || Date.now()), changeFrequency: 'monthly', priority: 0.6 },
      { url: `${BASE}/pt/articles/${article.slug}`, lastModified: new Date(article.date || Date.now()), changeFrequency: 'monthly', priority: 0.5 },
      { url: `${BASE}/es/articles/${article.slug}`, lastModified: new Date(article.date || Date.now()), changeFrequency: 'monthly', priority: 0.5 },
    ])
  } catch {
    // articles.json not available at build time
  }

  return [...staticPages, ...articlePages]
}
