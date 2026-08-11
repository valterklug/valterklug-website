export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: '/admin' },
    ],
    sitemap: 'https://valterklug.com/sitemap.xml',
  }
}
