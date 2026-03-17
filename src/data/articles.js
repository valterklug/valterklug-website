/**
 * Article data layer.
 * Reads from /articles.json (managed by the CMS at /admin).
 */

let _cache = null

export async function fetchArticles() {
  if (_cache) return _cache
  try {
    const res = await fetch('/articles.json')
    if (!res.ok) throw new Error('Failed to load articles')
    _cache = await res.json()
    return _cache
  } catch {
    return []
  }
}

// Synchronous access for components that pre-loaded
let _sync = null
export function setArticlesSync(articles) { _sync = articles }
export function getArticlesSync() { return _sync || [] }

export function getArticleBySlug(slug) {
  const articles = getArticlesSync()
  return articles.find(a => a.slug === slug) || null
}

export const SOURCE_COLORS = {
  Forbes: '#B91C1C',
  'Samba Rock': '#EA633F',
  'Estadão': '#1E40AF',
  LinkedIn: '#0A66C2',
  'Chameleon Collective': '#121212',
}
