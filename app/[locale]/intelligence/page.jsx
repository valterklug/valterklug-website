import Intelligence from '../../../src/views/Intelligence'
import { pageMetadata } from '../../lib/metadata'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return pageMetadata(locale, 'intelligence', '/intelligence')
}

export default function IntelligencePage() {
  return <Intelligence />
}
