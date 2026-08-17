import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect, lazy, Suspense } from 'react'
import { LocaleProvider } from './context/LocaleContext'
import Nav from './components/Nav'
import Footer from './components/Footer'
import SEOHead from './components/SEOHead'
import Home from './views/Home'
import About from './views/About'
import Services from './views/Services'
import CaseStudies from './views/CaseStudies'
import Portfolio from './views/Portfolio'
import Intelligence from './views/Intelligence'
import News from './views/News'
import ArticlePage from './views/ArticlePage'
import Contact from './views/Contact'


const Admin = lazy(() => import('./pages/Admin'))

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}


function Layout() {
  const location = useLocation()

  // Strip locale prefix so inner routes always match against clean paths
  // e.g. /pt/about → /about, /es/contact → /contact, /about → /about
  const strippedPathname = location.pathname.replace(/^\/(pt|es)(\/|$)/, '/$2').replace(/^\/\//, '/') || '/'
  const routeLocation = { ...location, pathname: strippedPathname }

  return (
    <LocaleProvider>
      <ScrollTop />
      <SEOHead />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={routeLocation} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/intelligence" element={<Intelligence />} />
          <Route path="/articles" element={<News />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          {/* Redirect old /news URLs */}
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<ArticlePage />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </AnimatePresence>
      <Footer />
    </LocaleProvider>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin — no locale prefix, outside Layout */}
        <Route path="/admin" element={<Suspense fallback={<div style={{padding:80,textAlign:'center'}}>Loading...</div>}><Admin /></Suspense>} />

        {/* Single catch-all: Layout handles locale detection internally.
            Using separate /pt/* and /es/* parent routes causes React Router v7
            to reject the stripped location prop (base mismatch error). */}
        <Route path="/*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  )
}
