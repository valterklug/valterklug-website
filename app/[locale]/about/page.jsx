import About from '../../../src/views/About'
import { pageMetadata } from '../../lib/metadata'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return pageMetadata(locale, 'about', '/about')
}

export default function AboutPage() {
  return <About />
}
