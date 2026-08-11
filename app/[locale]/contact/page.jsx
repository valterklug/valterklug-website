import Contact from '../../../src/views/Contact'
import { pageMetadata } from '../../lib/metadata'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return pageMetadata(locale, 'contact', '/contact')
}

export default function ContactPage() {
  return <Contact />
}
