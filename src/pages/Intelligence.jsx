import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'
import { useLocale } from '../context/LocaleContext'


function ProductCard({ p, index, localePath }) {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  const bg = p.featured ? '#EA633F' : index % 2 === 0 ? '#fff' : '#F5F5F5'
  const dark = p.featured

  return (
    <FadeIn delay={index * 0.06}>
      <div style={{ background: bg, borderTop: `3px solid ${p.featured ? '#fff' : '#EA633F'}`, borderBottom: '1px solid #E8E8E8' }}>
        {/* Card header */}
        <div style={{ padding: '36px 40px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 20, marginBottom: 16, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.15em', color: dark ? 'rgba(255,255,255,.7)' : '#EA633F', marginBottom: 4 }}>{p.num}</div>
              <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: dark ? 'rgba(255,255,255,.55)' : '#999', marginBottom: 10 }}>{p.audience}</div>
              <h3 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.1rem,2vw,1.3rem)', fontWeight: 600, color: dark ? '#fff' : '#121212', lineHeight: 1.2, marginBottom: 8 }}>{p.title}</h3>
              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.875rem', fontStyle: 'italic', color: dark ? 'rgba(255,255,255,.7)' : '#888', lineHeight: 1.5, maxWidth: 500 }}>{p.headline}</p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <span style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: dark ? 'rgba(255,255,255,.5)' : '#EA633F', background: dark ? 'rgba(255,255,255,.1)' : 'rgba(234,99,63,.08)', padding: '4px 10px', borderRadius: 2 }}>{p.badge}</span>
            </div>
          </div>
          <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.875rem', color: dark ? 'rgba(255,255,255,.7)' : '#555', lineHeight: 1.7, marginBottom: 18, maxWidth: 640 }}>{p.sub}</p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setOpen(!open)}
              style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: `1px solid ${dark ? 'rgba(255,255,255,.3)' : '#E8E8E8'}`, padding: '7px 14px', fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.08em', textTransform: 'uppercase', color: dark ? 'rgba(255,255,255,.7)' : '#666', cursor: 'pointer', borderRadius: 2, transition: 'all .2s' }}>
              <motion.span animate={{ rotate: open ? 90 : 0 }} style={{ display: 'inline-block', fontSize: 14 }}>›</motion.span>
              {open ? t('intelligence.hideDeliverables') : t('intelligence.viewDeliverables')}
            </button>
            <Link to={localePath('/contact')} style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 12, fontWeight: 500, letterSpacing: '.05em', textTransform: 'uppercase', color: dark ? '#fff' : '#EA633F', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              {t('intelligence.requestService')} →
            </Link>
          </div>
        </div>

        {/* Expandable deliverables */}
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} style={{ overflow: 'hidden' }}>
              <div style={{ padding: '0 40px 32px', borderTop: `1px solid ${dark ? 'rgba(255,255,255,.15)' : '#E8E8E8'}`, paddingTop: 24 }}>
                <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: dark ? 'rgba(255,255,255,.4)' : '#999', marginBottom: 14 }}>{t('intelligence.whatsIncluded')}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {p.deliverables.map(d => (
                    <div key={d} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <span style={{ color: dark ? 'rgba(255,255,255,.5)' : '#EA633F', flexShrink: 0, lineHeight: 1.6, fontSize: 14 }}>—</span>
                      <span style={{ fontFamily: 'Inter,sans-serif', fontSize: '.875rem', color: dark ? 'rgba(255,255,255,.65)' : '#444', lineHeight: 1.65 }}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  )
}

export default function Intelligence() {
  const { t } = useTranslation()
  const { localePath } = useLocale()
  const heroStats = t('intelligence.heroStats', { returnObjects: true })
  const howSteps = t('intelligence.howSteps', { returnObjects: true })
  const products = t('intelligence.products', { returnObjects: true })
  const whyItems = t('intelligence.whyItems', { returnObjects: true })

  return (
    <PageWrapper>
      <section className="page-hero" style={{ borderTop: '4px solid #88E8F0' }}>
        <div className="page-hero-inner">
          <span className="lbl" style={{ color: '#88E8F0' }}>{t('intelligence.heroLabel')}</span>
          <h1 className="page-h1">{t('intelligence.heroH1')}</h1>
          <p className="page-sub">{t('intelligence.heroSub')}</p>
          <div style={{ display: 'flex', gap: 32, marginTop: 36, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,.08)', flexWrap: 'wrap' }}>
            {heroStats.map(({ number, label }) => (
              <div key={label}>
                <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.4rem,3vw,1.8rem)', fontWeight: 300, color: '#88E8F0', lineHeight: 1 }}>{number}</div>
                <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: '#EAEAC8', padding: '80px 64px', borderTop: '1px solid rgba(18,18,18,.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="lbl lbl-cream">{t('intelligence.howLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 300, color: '#121212', letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 40, maxWidth: 560 }}>
              {t('intelligence.howH2')}
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'rgba(18,18,18,.1)' }} className="steps-grid">
            {howSteps.map(({ number, title, desc, owner }) => (
              <FadeIn key={number} delay={parseInt(number) * .06}>
                <div style={{ background: '#fff', padding: '36px 28px' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: '2rem', fontWeight: 300, color: '#EA633F', lineHeight: 1, marginBottom: 16 }}>{number}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: '1rem', fontWeight: 600, color: '#121212', marginBottom: 10 }}>{title}</div>
                  <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.8125rem', color: '#666', lineHeight: 1.65, marginBottom: 14 }}>{desc}</p>
                  <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: '#EA633F' }}>{owner}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.steps-grid{grid-template-columns:1fr 1fr!important}section[style*="80px 64px"]{padding:60px 24px!important}}`}</style>
      </section>

      {/* Products */}
      <section style={{ background: '#fff', padding: '80px 64px', borderTop: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="lbl">{t('intelligence.productsLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 300, color: '#121212', letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 40, maxWidth: 560 }}>
              {t('intelligence.productsH2')}
            </h2>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {products.map((p, i) => <ProductCard key={p.num} p={p} index={i} localePath={localePath} />)}
          </div>
        </div>
        <style>{`@media(max-width:768px){section[style*="80px 64px"]{padding:60px 24px!important}}`}</style>
      </section>

      {/* Why */}
      <section style={{ background: '#121212', padding: '80px 64px', borderTop: '4px solid #EA633F' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }} className="why-grid">
          <FadeIn>
            <span className="lbl lbl-white">{t('intelligence.whyLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 300, color: '#fff', letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 18 }}>{t('intelligence.whyH2')}</h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.75 }}>
              {t('intelligence.whySub')}
            </p>
          </FadeIn>
          <StaggerContainer>
            {whyItems.map(({ title, desc }) => (
              <StaggerItem key={title}>
                <div style={{ background: 'rgba(255,255,255,.03)', borderLeft: '3px solid #EA633F', padding: '20px 28px', marginBottom: 2 }}>
                  <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: '1rem', fontWeight: 500, color: '#fff', marginBottom: 6 }}>{title}</div>
                  <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '.875rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.65 }}>{desc}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <style>{`@media(max-width:900px){.why-grid{grid-template-columns:1fr!important;gap:48px!important}section[style*="80px 64px"]{padding:60px 24px!important}}`}</style>
      </section>

      <div className="cta-strip" style={{ padding: '80px 64px' }}>
        <FadeIn>
          <h2>{t('intelligence.ctaH2')}</h2>
          <p>{t('intelligence.ctaSub')}</p>
        </FadeIn>
        <Link to={localePath('/contact')} className="btn btn-dark">{t('intelligence.ctaBtn')} →</Link>
      </div>
    </PageWrapper>
  )
}
