import { notFound } from 'next/navigation'
import CaseStudyPage from '../../../../src/views/CaseStudyPage'
import { CASES, getCaseBySlug } from '../../../../src/data/caseStudies'
import { caseStudyMetadata } from '../../../lib/metadata'

// Each case study has its own page: /case-studies/<slug>. Unknown slugs are a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return CASES.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params
  return caseStudyMetadata(locale, slug)
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params
  if (!getCaseBySlug(slug)) notFound()
  return <CaseStudyPage slug={slug} />
}
