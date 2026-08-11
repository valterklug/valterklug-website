import Portfolio from '../../../src/views/Portfolio'
import { pageMetadata } from '../../lib/metadata'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return pageMetadata(locale, 'portfolio', '/portfolio')
}

export default function PortfolioPage() {
  return <Portfolio />
}
