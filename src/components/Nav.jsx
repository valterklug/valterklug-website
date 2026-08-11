'use client'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useLocale, SUPPORTED_LOCALES } from '../context/LocaleContext'

const LOCALE_LABELS = { en: 'EN', pt: 'PT', es: 'ES' }

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useTranslation()
  const { locale, setLocale, localePath } = useLocale()

  const NAV_LINKS = useMemo(() => [
    { label: t('nav.about'), to: '/about' },
    { label: t('nav.services'), to: '/services' },
    { label: t('nav.caseStudies'), to: '/case-studies' },
    { label: t('nav.portfolio'), to: '/portfolio' },
    { label: t('nav.intelligence'), to: '/intelligence' },
    { label: t('nav.articles'), to: '/articles' },
    { label: t('nav.investors'), to: '/private-equity' },
  ], [t])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: 68,
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid #e8e8e8' : '1px solid transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 64px',
        transition: 'background .3s, border-color .3s, box-shadow .3s',
        boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.07)' : 'none',
      }}>
        {/* Orange bottom bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: '#EA633F' }} />

        {/* Wordmark */}
        <Link href={localePath('/')} style={{ display: 'flex', flexDirection: 'column', gap: 2, textDecoration: 'none' }}>
          <span style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 16, fontWeight: 600, color: '#121212', letterSpacing: '.04em', textTransform: 'uppercase', lineHeight: 1 }}>
            {t('nav.wordmark')}
          </span>
          <span style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 9, fontWeight: 500, color: '#EA633F', letterSpacing: '.2em', textTransform: 'uppercase', lineHeight: 1 }}>
            {t('nav.subtitle')}
          </span>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: 4, listStyle: 'none', margin: 0 }} className="nav-desktop">
          {NAV_LINKS.map(({ label, to }) => {
            const active = pathname === localePath(to)
            return (
              <li key={to}>
                <Link href={localePath(to)} style={{
                  fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 12, fontWeight: 500,
                  letterSpacing: '.08em', textTransform: 'uppercase',
                  color: active ? '#EA633F' : '#666',
                  padding: '6px 14px', display: 'block',
                  transition: 'color .2s',
                  textDecoration: 'none',
                }}
                  onMouseEnter={e => { if (!active) e.target.style.color = '#121212' }}
                  onMouseLeave={e => { if (!active) e.target.style.color = '#666' }}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Language switcher — desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginRight: 16 }} className="nav-desktop">
          {SUPPORTED_LOCALES.map((l, i) => (
            <span key={l} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <button
                onClick={() => setLocale(l)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                  fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: locale === l ? 700 : 400,
                  letterSpacing: '.08em', color: locale === l ? '#EA633F' : '#999',
                  transition: 'color .2s',
                }}
                onMouseEnter={e => { if (locale !== l) e.target.style.color = '#121212' }}
                onMouseLeave={e => { if (locale !== l) e.target.style.color = '#999' }}
              >
                {LOCALE_LABELS[l]}
              </button>
              {i < SUPPORTED_LOCALES.length - 1 && (
                <span style={{ color: '#ccc', fontSize: 11, userSelect: 'none' }}>|</span>
              )}
            </span>
          ))}
        </div>

        <Link href={localePath('/contact')} className="btn btn-primary" style={{ padding: '9px 22px', fontSize: 12 }} data-desktop="true">
          {t('nav.cta')}
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ display: 'none', background: 'none', border: 'none', padding: 8, color: '#121212', marginLeft: 'auto' }}
          className="nav-ham"
          aria-label="Menu"
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            {open ? (
              <>
                <line x1="2" y1="2" x2="20" y2="14" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
                <line x1="20" y1="2" x2="2" y2="14" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
              </>
            ) : (
              <>
                <line x1="0" y1="2" x2="22" y2="2" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
                <line x1="0" y1="8" x2="22" y2="8" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
                <line x1="0" y1="14" x2="22" y2="14" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>

        <style>{`
          @media (max-width: 900px) {
            .nav-desktop { display: none !important; }
            .nav-ham { display: flex !important; }
            nav a[data-desktop="true"] { display: none !important; }
            nav { padding: 0 24px !important; }
          }
        `}</style>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', top: 68, left: 0, right: 0, zIndex: 999,
              background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)',
              borderBottom: '3px solid #EA633F',
              padding: '20px 24px 32px',
            }}
          >
            {NAV_LINKS.map(({ label, to }, i) => (
              <motion.div key={to} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                <Link href={localePath(to)} style={{
                  display: 'block', padding: '14px 0',
                  fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 16, fontWeight: 400,
                  color: pathname === localePath(to) ? '#EA633F' : '#121212',
                  borderBottom: '1px solid #E8E8E8', textDecoration: 'none',
                }}>{label}</Link>
              </motion.div>
            ))}
            {/* Language switcher — mobile */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 18, marginBottom: 14 }}>
              {SUPPORTED_LOCALES.map((l, i) => (
                <span key={l} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <button
                    onClick={() => setLocale(l)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0',
                      fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 14, fontWeight: locale === l ? 700 : 400,
                      letterSpacing: '.08em', color: locale === l ? '#EA633F' : '#666',
                    }}
                  >
                    {LOCALE_LABELS[l]}
                  </button>
                  {i < SUPPORTED_LOCALES.length - 1 && (
                    <span style={{ color: '#ccc', fontSize: 14, userSelect: 'none' }}>|</span>
                  )}
                </span>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.26 }} style={{ marginTop: 6 }}>
              <Link href={localePath('/contact')} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                {t('nav.cta')}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nav spacer */}
      <div style={{ height: 68 }} />
    </>
  )
}
