import PrivateEquity from '../../../src/views/PrivateEquity'
import { pageMetadata } from '../../lib/metadata'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return pageMetadata(locale, 'privateEquity', '/private-equity')
}

export default function PrivateEquityPage() {
  return <PrivateEquity />
}
