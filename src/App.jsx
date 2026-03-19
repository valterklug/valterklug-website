import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect, lazy, Suspense } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
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
  return (
    <>
      <ScrollTop />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
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
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Suspense fallback={<div style={{padding:80,textAlign:'center'}}>Loading...</div>}><Admin /></Suspense>} />
        <Route path="*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  )
}
