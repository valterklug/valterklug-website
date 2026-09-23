import Agencies from '../../../src/views/Agencies'
import { pageMetadata } from '../../lib/metadata'

import en from '../../../src/locales/en/translations.json'
import pt from '../../../src/locales/pt/translations.json'
import es from '../../../src/locales/es/translations.json'
const allT = { en, pt, es }

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = allT[locale] || allT.en
  return pageMetadata(locale, 'agencies', '/agencies', {
    title: t.agencies?.meta?.title,
    description: t.agencies?.meta?.description,
  })
}

export default function AgenciesPage() {
  return <Agencies />
}
