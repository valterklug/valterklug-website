import CaseStudies from '../../../src/views/CaseStudies'
import { pageMetadata } from '../../lib/metadata'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return pageMetadata(locale, 'caseStudies', '/case-studies')
}

export default function CaseStudiesPage() {
  return <CaseStudies />
}
