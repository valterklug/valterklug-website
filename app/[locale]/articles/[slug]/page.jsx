import ArticlePage from '../../../../src/views/ArticlePage'
import { SITE_URL } from '../../../lib/site'

export async function generateMetadata({ params }) {
  const { locale, slug } = await params
  return {
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    alternates: {
      canonical: `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/articles/${slug}`,
      languages: {
        'en': `${SITE_URL}/articles/${slug}`,
        'pt-BR': `${SITE_URL}/pt/articles/${slug}`,
        'es': `${SITE_URL}/es/articles/${slug}`,
      },
    },
  }
}

export default function ArticleDetailPage() {
  return <ArticlePage />
}
