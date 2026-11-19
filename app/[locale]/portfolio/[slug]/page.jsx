import { notFound } from 'next/navigation'
import Portfolio from '../../../../src/views/Portfolio'
import { PROJECTS, getProject } from '../../../../src/data/portfolio'
import { projectMetadata } from '../../../lib/metadata'

// A shared project link (/portfolio/<id>) opens the portfolio with that project's popup open.
// Unknown ids are a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return PROJECTS.map(p => ({ slug: p.id }))
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params
  return projectMetadata(locale, slug)
}

export default async function PortfolioProjectPage({ params }) {
  const { slug } = await params
  if (!getProject(slug)) notFound()
  return <Portfolio />
}
