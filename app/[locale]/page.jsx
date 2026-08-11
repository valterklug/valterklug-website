import Home from '../../src/views/Home'
import { pageMetadata } from '../lib/metadata'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return pageMetadata(locale, 'home', '/', {
    title: 'Fractional CMO & Brand Expansion Strategist',
  })
}

export default function HomePage() {
  return <Home />
}
