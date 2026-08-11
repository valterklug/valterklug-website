import ArticlePage from '../../../../src/views/ArticlePage'

export async function generateMetadata({ params }) {
  const { locale, slug } = await params
  return {
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    alternates: {
      canonical: `https://valterklug.com${locale === 'en' ? '' : `/${locale}`}/articles/${slug}`,
      languages: {
        'en': `https://valterklug.com/articles/${slug}`,
        'pt-BR': `https://valterklug.com/pt/articles/${slug}`,
        'es': `https://valterklug.com/es/articles/${slug}`,
      },
    },
  }
}

export default function ArticleDetailPage() {
  return <ArticlePage />
}
