import Services from '../../../src/views/Services'
import { pageMetadata } from '../../lib/metadata'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return pageMetadata(locale, 'services', '/services')
}

export default function ServicesPage() {
  return <Services />
}
