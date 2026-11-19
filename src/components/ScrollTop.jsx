'use client'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

/* /portfolio and /portfolio/<id> in one language: opening or closing a project popup
   changes the address but not the page, so it must not jump back to the top. */
const PORTFOLIO = /^(?:\/(en|pt|es))?\/portfolio(?:\/[^/]+)?\/?$/

function samePortfolioPage(a, b) {
  const ma = (a || '').match(PORTFOLIO)
  const mb = (b || '').match(PORTFOLIO)
  return Boolean(ma && mb && (ma[1] || 'en') === (mb[1] || 'en'))
}

export default function ScrollTop() {
  const pathname = usePathname()
  const previous = useRef(pathname)

  useEffect(() => {
    const was = previous.current
    previous.current = pathname
    if (was !== pathname && samePortfolioPage(was, pathname)) return
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
