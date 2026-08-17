'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useLocale } from '../context/LocaleContext'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'

// ── Accent — emerald green for growth / "go" ──
const GREEN = '#2D936C'
const GREEN_LIGHT = 'rgba(45,147,108,.08)'
const GREEN_MID = 'rgba(45,147,108,.15)'

// ── FormSubmit.co ──
const FORMSUBMIT_EMAIL = 'info@soundcheckinsights.com'

// ── Soundcheck link helper ──
const SOUNDCHECK_URL = 'https://www.soundcheckinsights.com'
const linkifySoundcheck = (text, linkColor = GREEN) => {
  if (typeof text !== 'string') return text
  const parts = text.split(/(Soundcheck Insights|Soundcheck)/g)
  if (parts.length === 1) return text
  return parts.map((part, i) =>
    part === 'Soundcheck Insights' || part === 'Soundcheck'
      ? <a key={i} href={SOUNDCHECK_URL} target="_blank" rel="noopener noreferrer" style={{ color: linkColor, textDecoration: 'underline', textUnderlineOffset: 2 }}>{part}</a>
      : part
  )
}

// ── Brazilian brands helped expand to the US ──
const BRANDS_WITH_LOGOS = [
  { name: 'Bauducco', src: '/logos/bauducco.png' },
  { name: 'AB-InBev (Guaraná Antarctica)', src: '/logos/ABI.png' },
  { name: 'Inter&Co', src: '/logos/inter.png' },
  { name: 'Natura', src: '/logos/natura.png' },
  { name: 'Tramontina', src: '/logos/tramontina.png' },
  { name: 'Grendene', src: '/logos/grendene.png' },
  { name: 'Forno de Minas', src: '/logos/logo_forno.png' },
  { name: 'Cia Marítima', src: '/logos/logo_ciaM.png' },
  { name: 'Grupo 3 Corações', src: '/logos/logo_3cor.png' },
]

// ── Book data (locale-aware) ──
const BOOKS_DATA = {
  amp: {
    en: { cover: 'https://m.media-amazon.com/images/I/61Ez36HNNtL._SL1500_.jpg', url: 'https://amzn.to/4xLNIP6' },
    pt: { cover: 'https://m.media-amazon.com/images/I/610HrGdMGYL._SL1499_.jpg', url: 'https://amzn.to/3UCN9Zr' },
    es: { cover: 'https://m.media-amazon.com/images/I/61Ez36HNNtL._SL1500_.jpg', url: 'https://amzn.to/4xLNIP6' },
  },
  tstf: {
    cover: 'https://m.media-amazon.com/images/I/51rJzuYSa+L._SL1500_.jpg',
    url: 'https://amzn.to/4bSNSMb',
  },
}

// ── Shared label style ──
const sectionLabel = (color = GREEN) => ({
  fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500,
  letterSpacing: '.2em', textTransform: 'uppercase', color,
  display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16,
})
const labelDot = (color = GREEN) => ({
  width: 6, height: 6, borderRadius: '50%', background: color,
  display: 'block', flexShrink: 0,
})

export default function GoGlobal() {
  const { t } = useTranslation()
  const { localePath, locale } = useLocale()
  const [formStatus, setFormStatus] = useState('idle')
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const painPoints = t('goglobal.painPoints', { returnObjects: true })
  const stats = t('goglobal.stats', { returnObjects: true })
  const months = t('goglobal.months', { returnObjects: true })
  const included = t('goglobal.includedItems', { returnObjects: true })
  const pricingIncludes = t('goglobal.pricingIncludes', { returnObjects: true })
  const books = t('goglobal.books', { returnObjects: true })

  const onSubmit = async (data) => {
    setFormStatus('submitting')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: `${t('goglobal.formSubjectPrefix')} ${data.name} — ${data.company || 'No company'} (${data.segment || '?'})`,
          _template: 'table',
        }),
      })
      if (res.ok) { setFormStatus('success'); reset() }
      else setFormStatus('error')
    } catch { setFormStatus('error') }
  }

  const scrollToForm = (e) => {
    e.preventDefault()
    document.getElementById('goglobal-contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  // ── Shared input style ──
  const inputStyle = (hasError) => ({
    width: '100%', padding: '12px 14px', background: 'rgba(255,255,255,.06)',
    border: hasError ? '1px solid #E85D4A' : '1px solid rgba(255,255,255,.1)',
    borderRadius: 2, fontFamily: 'Inter,sans-serif', fontSize: 14, color: '#fff',
    outline: 'none', transition: 'border-color .2s', boxSizing: 'border-box',
  })
  const labelStyle = {
    display: 'block', marginBottom: 6,
    fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500,
    letterSpacing: '.12em', textTransform: 'uppercase',
    color: 'rgba(255,255,255,.4)',
  }
  const errorStyle = { fontFamily: 'Inter,sans-serif', fontSize: 11, color: '#E85D4A', marginTop: 4, display: 'block' }

  return (
    <PageWrapper>
      {/* ════════════════════════════════════════════════════════════
          HERO — Pain-point first
          ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#121212', padding: '90px 64px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/hero-mentorship.png)', backgroundSize: 'cover', backgroundPosition: 'center right', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #121212 0%, #121212 30%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: GREEN }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }} className="hero-grid">
          <div style={{ maxWidth: 640 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}
              style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: GREEN, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: GREEN, display: 'block', flexShrink: 0 }} />
              {t('goglobal.heroLabel')}
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .08 }}
              style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 300, lineHeight: 1.15, color: '#fff', letterSpacing: '-.025em', marginBottom: 24, maxWidth: 680, whiteSpace: 'pre-line' }}>
              {t('goglobal.heroH1')}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .16 }}
              style={{ fontFamily: 'Inter,sans-serif', fontSize: '1.0625rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.7, maxWidth: 520, marginBottom: 36 }}>
              {t('goglobal.heroSub')}
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .26 }} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <button onClick={scrollToForm} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '12px 28px', background: GREEN, color: '#fff',
                fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 13, fontWeight: 600,
                letterSpacing: '.06em', textTransform: 'uppercase',
                borderRadius: 2, transition: 'opacity .2s', border: 'none', cursor: 'pointer',
              }}>{t('goglobal.ctaPrimary')}</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          PAIN POINTS — "Você se identifica?"
          ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '80px 64px', borderTop: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span style={sectionLabel()}>
              <span style={labelDot()} />
              {t('goglobal.painLabel')}
            </span>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 300, color: '#121212', letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 48, maxWidth: 560 }}>
              {t('goglobal.painH2')}
            </h2>
          </FadeIn>

          <StaggerContainer>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
              {painPoints.map((point, i) => (
                <StaggerItem key={i}>
                  <div style={{
                    background: '#F5F5F5', padding: '28px 28px', borderLeft: `3px solid ${GREEN}`,
                    height: '100%', display: 'flex', alignItems: 'flex-start', gap: 14,
                  }}>
                    <span style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 24, fontWeight: 300, color: GREEN, lineHeight: 1, flexShrink: 0, marginTop: -2 }}>"</span>
                    <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: '#333', lineHeight: 1.6, fontStyle: 'italic' }}>{point}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <FadeIn>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '1rem', color: '#555', lineHeight: 1.75, marginTop: 40, maxWidth: 640 }}>
              {t('goglobal.painClosing')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          AUTHORITY — Who is Valter + Books
          ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#121212', padding: '80px 64px', borderTop: '1px solid rgba(255,255,255,.06)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span style={sectionLabel()}>
              <span style={labelDot()} />
              {t('goglobal.authorityLabel')}
            </span>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 300, color: '#fff', letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 20, maxWidth: 600 }}>
              {t('goglobal.authorityH2')}
            </h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.75, maxWidth: 640, marginBottom: 48 }}>
              {t('goglobal.authorityP')}
            </p>
          </FadeIn>

          {/* Stats bar */}
          <FadeIn>
            <div style={{ display: 'flex', gap: 0, marginBottom: 56, paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,.08)' }}>
              {stats.map(({ number, label }, i) => (
                <div key={label} style={{ paddingRight: 28, borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,.1)' : 'none', marginRight: i < stats.length - 1 ? 28 : 0 }}>
                  <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 300, color: '#fff', lineHeight: 1 }}>{number}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Brand logos */}
          <FadeIn>
            <p style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: 20 }}>
              {t('goglobal.brandsLabel')}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', marginBottom: 56 }}>
              {BRANDS_WITH_LOGOS.map(b => (
                <div key={b.name} style={{ height: 36, opacity: .6, transition: 'opacity .2s' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 1}
                  onMouseLeave={e => e.currentTarget.style.opacity = .6}>
                  <img src={b.src} alt={b.name} style={{ height: '100%', width: 'auto', filter: 'brightness(0) invert(1)', objectFit: 'contain' }} />
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Books */}
          <FadeIn>
            <p style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: 24 }}>
              {t('goglobal.booksLabel')}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }} className="books-grid">
              {books.map((book, i) => {
                const ampData = BOOKS_DATA.amp[locale] || BOOKS_DATA.amp.en
                const bookData = i === 0
                  ? { cover: ampData.cover, url: ampData.url }
                  : { cover: BOOKS_DATA.tstf.cover, url: BOOKS_DATA.tstf.url }
                return (
                  <a key={i} href={bookData.url} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', gap: 20, alignItems: 'flex-start', textDecoration: 'none', padding: '24px 24px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', transition: 'border-color .2s, background .2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = GREEN; e.currentTarget.style.background = 'rgba(45,147,108,.06)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)'; e.currentTarget.style.background = 'rgba(255,255,255,.04)' }}>
                    <img src={bookData.cover} alt={book.title} style={{ width: 80, height: 'auto', flexShrink: 0, boxShadow: '0 4px 16px rgba(0,0,0,.4)' }} />
                    <div>
                      <h3 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: '.9375rem', fontWeight: 600, color: '#fff', lineHeight: 1.3, marginBottom: 6 }}>{book.title}</h3>
                      <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.8125rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.6, marginBottom: 10 }}>{book.desc}</p>
                      <span style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, color: GREEN, letterSpacing: '.06em', textTransform: 'uppercase' }}>{book.cta} →</span>
                    </div>
                  </a>
                )
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          6-MONTH STRUCTURE
          ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#F5F5F5', padding: '80px 64px', borderTop: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span style={sectionLabel()}>
              <span style={labelDot()} />
              {t('goglobal.structureLabel')}
            </span>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 300, color: '#121212', letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 48, whiteSpace: 'nowrap' }}>
              {t('goglobal.structureH2')}
            </h2>
          </FadeIn>

          <StaggerContainer>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {months.map((m, i) => (
                <StaggerItem key={m.num}>
                  <div style={{
                    background: i === 0 ? GREEN : '#fff',
                    borderTop: i === 0 ? 'none' : `3px solid ${GREEN}`,
                    borderBottom: '1px solid #E8E8E8',
                    padding: '36px 40px',
                  }}>
                    <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.15em', color: i === 0 ? 'rgba(255,255,255,.7)' : GREEN, marginBottom: 8 }}>{m.num}</div>
                    <h3 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.1rem,2vw,1.3rem)', fontWeight: 600, color: i === 0 ? '#fff' : '#121212', lineHeight: 1.2, marginBottom: 12 }}>{m.title}</h3>
                    <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.875rem', color: i === 0 ? 'rgba(255,255,255,.75)' : '#555', lineHeight: 1.7, marginBottom: 16, maxWidth: 640 }}>{linkifySoundcheck(m.desc, i === 0 ? '#fff' : GREEN)}</p>
                    <div style={{
                      fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 12, fontWeight: 500,
                      color: i === 0 ? 'rgba(255,255,255,.5)' : '#999',
                      borderTop: `1px solid ${i === 0 ? 'rgba(255,255,255,.15)' : '#E8E8E8'}`,
                      paddingTop: 12, marginTop: 4,
                    }}>
                      <span style={{ fontStyle: 'italic' }}>{m.outcome}</span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          WHAT'S INCLUDED
          ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '80px 64px', borderTop: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span style={sectionLabel()}>
              <span style={labelDot()} />
              {t('goglobal.includedLabel')}
            </span>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 300, color: '#121212', letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 48, maxWidth: 460 }}>
              {t('goglobal.includedH2')}
            </h2>
          </FadeIn>

          <StaggerContainer>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
              {included.map((item) => (
                <StaggerItem key={item.title}>
                  <div style={{
                    background: '#F5F5F5', padding: '28px 28px', borderTop: `3px solid ${GREEN}`,
                    height: '100%',
                  }}>
                    <h3 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: '.9375rem', fontWeight: 600, color: '#121212', marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.875rem', color: '#555', lineHeight: 1.65 }}>{linkifySoundcheck(item.desc)}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          PRICING
          ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#F5F5F5', padding: '80px 64px', borderTop: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <span style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: GREEN, marginBottom: 16, display: 'block' }}>
              {t('goglobal.pricingLabel')}
            </span>
            <div style={{
              background: '#fff', border: `3px solid ${GREEN}`, padding: '48px 40px', textAlign: 'center',
            }}>
              <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 300, color: '#121212', letterSpacing: '-.02em', lineHeight: 1, marginBottom: 8 }}>
                {t('goglobal.pricingH2')}
              </h2>
              <p style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 14, fontWeight: 500, color: '#999', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 32 }}>
                {t('goglobal.pricingSub')}
              </p>

              <div style={{ textAlign: 'left', marginBottom: 28 }}>
                {pricingIncludes.map(item => (
                  <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 10 }}>
                    <span style={{ color: GREEN, flexShrink: 0, fontSize: 16, lineHeight: 1.5 }}>✓</span>
                    <span style={{ fontFamily: 'Inter,sans-serif', fontSize: '.875rem', color: '#333', lineHeight: 1.6 }}>{linkifySoundcheck(item)}</span>
                  </div>
                ))}
              </div>

              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.8125rem', color: '#888', lineHeight: 1.6, marginBottom: 28, fontStyle: 'italic' }}>
                {t('goglobal.pricingNote')}
              </p>

              <button onClick={scrollToForm} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '14px 36px', background: GREEN, color: '#fff',
                fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 13, fontWeight: 600,
                letterSpacing: '.06em', textTransform: 'uppercase',
                borderRadius: 2, transition: 'opacity .2s', border: 'none', cursor: 'pointer',
              }}>{t('goglobal.ctaPrimary')}</button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          MIAMI TEASER
          ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '64px 64px', borderTop: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <span style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: GREEN, marginBottom: 16, display: 'block' }}>
              {t('goglobal.miamiLabel')}
            </span>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', fontWeight: 300, color: '#121212', letterSpacing: '-.01em', lineHeight: 1.25, marginBottom: 16 }}>
              {t('goglobal.miamiH2')}
            </h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: '#666', lineHeight: 1.7 }}>
              {t('goglobal.miamiP')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          STRUCTURED INTAKE FORM
          ════════════════════════════════════════════════════════════ */}
      <section id="goglobal-contact" style={{ background: '#121212', padding: '80px 64px', borderTop: `3px solid ${GREEN}` }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <FadeIn>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 300, color: '#fff', letterSpacing: '-.015em', lineHeight: 1.2, marginBottom: 16, textAlign: 'center' }}>
              {t('goglobal.ctaH2')}
            </h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.7, marginBottom: 40, textAlign: 'center' }}>
              {t('goglobal.ctaSub')}
            </p>

            <form onSubmit={handleSubmit(onSubmit)} noValidate style={{
              display: 'flex', flexDirection: 'column', gap: 20,
            }}>
              {/* Row: Name + Email */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                <div>
                  <label style={labelStyle}>{t('goglobal.formNameLabel')}</label>
                  <input type="text" placeholder={t('goglobal.formNamePlaceholder')}
                    {...register('name', { required: t('goglobal.formRequired') })}
                    style={inputStyle(errors.name)} />
                  {errors.name && <span style={errorStyle}>{errors.name.message}</span>}
                </div>
                <div>
                  <label style={labelStyle}>{t('goglobal.formEmailLabel')}</label>
                  <input type="email" placeholder={t('goglobal.formEmailPlaceholder')}
                    {...register('email', { required: t('goglobal.formRequired'), pattern: { value: /^\S+@\S+\.\S+$/, message: t('goglobal.formInvalidEmail') } })}
                    style={inputStyle(errors.email)} />
                  {errors.email && <span style={errorStyle}>{errors.email.message}</span>}
                </div>
              </div>

              {/* Row: Company + Segment */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                <div>
                  <label style={labelStyle}>{t('goglobal.formCompanyLabel')}</label>
                  <input type="text" placeholder={t('goglobal.formCompanyPlaceholder')}
                    {...register('company', { required: t('goglobal.formRequired') })}
                    style={inputStyle(errors.company)} />
                  {errors.company && <span style={errorStyle}>{errors.company.message}</span>}
                </div>
                <div>
                  <label style={labelStyle}>{t('goglobal.formSegmentLabel')}</label>
                  <select {...register('segment', { required: t('goglobal.formRequired') })}
                    style={{ ...inputStyle(errors.segment), appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M1.5 5.5l6.5 6.5 6.5-6.5'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', paddingRight: 36 }}>
                    <option value="" style={{ background: '#1E1E1E' }}>{t('goglobal.formSegmentPlaceholder')}</option>
                    {t('goglobal.formSegmentOptions', { returnObjects: true }).map(opt => (
                      <option key={opt} value={opt} style={{ background: '#1E1E1E' }}>{opt}</option>
                    ))}
                  </select>
                  {errors.segment && <span style={errorStyle}>{errors.segment.message}</span>}
                </div>
              </div>

              {/* Row: Revenue + US Operations */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                <div>
                  <label style={labelStyle}>{t('goglobal.formRevenueLabel')}</label>
                  <select {...register('revenue')}
                    style={{ ...inputStyle(false), appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M1.5 5.5l6.5 6.5 6.5-6.5'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', paddingRight: 36 }}>
                    <option value="" style={{ background: '#1E1E1E' }}>{t('goglobal.formRevenuePlaceholder')}</option>
                    {t('goglobal.formRevenueOptions', { returnObjects: true }).map(opt => (
                      <option key={opt} value={opt} style={{ background: '#1E1E1E' }}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>{t('goglobal.formUSopsLabel')}</label>
                  <select {...register('usOperations')}
                    style={{ ...inputStyle(false), appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M1.5 5.5l6.5 6.5 6.5-6.5'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', paddingRight: 36 }}>
                    <option value="" style={{ background: '#1E1E1E' }}>{t('goglobal.formUSopsPlaceholder')}</option>
                    {t('goglobal.formUSopsOptions', { returnObjects: true }).map(opt => (
                      <option key={opt} value={opt} style={{ background: '#1E1E1E' }}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label style={labelStyle}>{t('goglobal.formTimelineLabel')}</label>
                <select {...register('timeline')}
                  style={{ ...inputStyle(false), appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M1.5 5.5l6.5 6.5 6.5-6.5'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', paddingRight: 36 }}>
                  <option value="" style={{ background: '#1E1E1E' }}>{t('goglobal.formTimelinePlaceholder')}</option>
                  {t('goglobal.formTimelineOptions', { returnObjects: true }).map(opt => (
                    <option key={opt} value={opt} style={{ background: '#1E1E1E' }}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>{t('goglobal.formMessageLabel')}</label>
                <textarea rows={4} placeholder={t('goglobal.formMessagePlaceholder')}
                  {...register('message')}
                  style={{ ...inputStyle(false), resize: 'vertical' }} />
              </div>

              {/* Submit */}
              <button type="submit" disabled={formStatus === 'submitting'}
                style={{
                  width: '100%', padding: '14px 36px', background: GREEN, color: '#fff',
                  fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 13, fontWeight: 600,
                  letterSpacing: '.06em', textTransform: 'uppercase', border: 'none',
                  borderRadius: 2, cursor: formStatus === 'submitting' ? 'not-allowed' : 'pointer',
                  opacity: formStatus === 'submitting' ? .6 : 1,
                  transition: 'opacity .2s, transform .15s',
                }}
                onMouseEnter={e => { if (formStatus !== 'submitting') { e.target.style.opacity = '.85'; e.target.style.transform = 'translateY(-1px)' } }}
                onMouseLeave={e => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' }}
              >
                {formStatus === 'submitting' ? t('goglobal.formSubmitting') : t('goglobal.ctaBtn')}
              </button>

              {/* Status messages */}
              <AnimatePresence>
                {formStatus === 'success' && (
                  <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: GREEN, textAlign: 'center', marginTop: 4 }}>
                    {t('goglobal.formSuccess')}
                  </motion.p>
                )}
                {formStatus === 'error' && (
                  <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: '#E85D4A', textAlign: 'center', marginTop: 4 }}>
                    {t('goglobal.formError')}{' '}
                    <a href={`mailto:${FORMSUBMIT_EMAIL}`} style={{ color: '#E85D4A', textDecoration: 'underline' }}>{FORMSUBMIT_EMAIL}</a>
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* ── Responsive overrides ── */}
      <style>{`
        @media (max-width: 768px) {
          .form-row { grid-template-columns: 1fr !important; }
          .books-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageWrapper>
  )
}
