import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect, lazy, Suspense } from 'react'
import { LocaleProvider, SUPPORTED_LOCALES, DEFAULT_LOCALE } from './context/LocaleContext'
import Nav from './components/Nav'
import Footer from './components/Footer'
import SEOHead from './components/SEOHead'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import CaseStudies from './pages/CaseStudies'
import Portfolio from './pages/Portfolio'
import Intelligence from './pages/Intelligence'
import News from './pages/News'
import ArticlePage from './pages/ArticlePage'
import Contact from './pages/Contact'

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

/** Generates the same route set for a given locale prefix */
function LocaleRoutes({ prefix }) {
  return (
    <Route path={prefix} element={<Layout />}>
      {/* Layout renders its own nested Routes via location,
          so we use a wildcard here */}
    </Route>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin — no locale prefix, outside Layout */}
        <Route path="/admin" element={<Suspense fallback={<div style={{padding:80,textAlign:'center'}}>Loading...</div>}><Admin /></Suspense>} />

        {/* Locale-prefixed routes: /pt/*, /es/* */}
        {SUPPORTED_LOCALES.filter(l => l !== DEFAULT_LOCALE).map(lang => (
          <Route key={lang} path={`/${lang}/*`} element={<Layout />} />
        ))}

        {/* Default (English) — no prefix */}
        <Route path="/*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  )
}
