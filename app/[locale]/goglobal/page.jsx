import GoGlobal from '../../../src/views/GoGlobal'
import { pageMetadata } from '../../lib/metadata'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return pageMetadata(locale, 'goglobal', '/goglobal')
}

export default function GoGlobalPage() {
  return <GoGlobal />
}
