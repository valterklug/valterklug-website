import News from '../../../src/views/News'
import { pageMetadata } from '../../lib/metadata'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return pageMetadata(locale, 'news', '/articles')
}

export default function ArticlesPage() {
  return <News />
}
