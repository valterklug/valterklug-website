'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useLocale } from '../context/LocaleContext'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'

// ── Accent — emerald green for growth / "go" ──
const GREEN = '#2D936C'
const GREEN_LIGHT = 'rgba(45,147,108,.08)'
const GREEN_MID = 'rgba(45,147,108,.15)'

// ── Brazilian brands helped expand to the US ──
const BRANDS_WITH_LOGOS = [
  { name: 'Bauducco', src: '/logos/bauducco.png' },
  { name: 'AB-InBev (Guaraná Antarctica)', src: '/logos/ABI.png' },
  { name: 'Inter&Co', src: '/logos/inter.png' },
  { name: 'Natura', src: '/logos/natura.png' },
  { name: 'Tramontina', src: '/logos/tramontina.png' },
  { name: 'Grendene', src: '/logos/grendene.png' },
]
const BRANDS_TEXT_ONLY = ['Forno de Minas', 'Cia Marítima', 'Grupo 3 Corações']

export default function GoGlobal() {
  const { t } = useTranslation()
  const { localePath } = useLocale()
  const stats = t('goglobal.stats', { returnObjects: true })
  const months = t('goglobal.months', { returnObjects: true })
  const included = t('goglobal.includedItems', { returnObjects: true })
  const whoChecks = t('goglobal.whoChecks', { returnObjects: true })
  const pricingIncludes = t('goglobal.pricingIncludes', { returnObjects: true })

  return (
    <PageWrapper>
      {/* ════════════════════════════════════════════════════════════
          HERO — with Valter photo
          ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#121212', padding: '90px 64px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/hero-valter.jpg)', backgroundSize: 'cover', backgroundPosition: 'center right', pointerEvents: 'none' }} />
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
              style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(2.2rem,5vw,3.6rem)', fontWeight: 300, lineHeight: 1.06, color: '#fff', letterSpacing: '-.025em', marginBottom: 24, maxWidth: 600 }}>
              {t('goglobal.heroH1')}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .16 }}
              style={{ fontFamily: 'Inter,sans-serif', fontSize: '1.0625rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.7, maxWidth: 520, marginBottom: 36 }}>
              {t('goglobal.heroSub')}
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .26 }} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href={localePath('/contact')} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '12px 28px', background: GREEN, color: '#fff',
                fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 13, fontWeight: 600,
                letterSpacing: '.06em', textTransform: 'uppercase', textDecoration: 'none',
                borderRadius: 2, transition: 'opacity .2s',
              }}>{t('goglobal.ctaPrimary')}</Link>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }}
              style={{ display: 'flex', gap: 0, marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,.08)' }}>
              {stats.map(({ number, label }, i) => (
                <div key={label} style={{ paddingRight: 28, borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,.1)' : 'none', marginRight: i < stats.length - 1 ? 28 : 0 }}>
                  <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 300, color: '#fff', lineHeight: 1 }}>{number}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          WHO IT'S FOR
          ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '80px 64px', borderTop: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: GREEN, display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: GREEN, display: 'block', flexShrink: 0 }} />
              {t('goglobal.whoLabel')}
            </span>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 300, color: '#121212', letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 20, maxWidth: 560 }}>
              {t('goglobal.whoH2')}
            </h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '1rem', color: '#555', lineHeight: 1.75, maxWidth: 640, marginBottom: 32 }}>
              {t('goglobal.whoP')}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {whoChecks.map(check => (
                <div key={check} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ color: GREEN, flexShrink: 0, fontSize: 18, lineHeight: 1.4 }}>✓</span>
                  <span style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: '#333', lineHeight: 1.6 }}>{check}</span>
                </div>
              ))}
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
            <span style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: GREEN, display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: GREEN, display: 'block', flexShrink: 0 }} />
              {t('goglobal.structureLabel')}
            </span>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 300, color: '#121212', letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 48, maxWidth: 460 }}>
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
                    <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.875rem', color: i === 0 ? 'rgba(255,255,255,.75)' : '#555', lineHeight: 1.7, marginBottom: 16, maxWidth: 640 }}>{m.desc}</p>
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
            <span style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: GREEN, display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: GREEN, display: 'block', flexShrink: 0 }} />
              {t('goglobal.includedLabel')}
            </span>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 300, color: '#121212', letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 48, maxWidth: 460 }}>
              {t('goglobal.includedH2')}
            </h2>
          </FadeIn>

          <StaggerContainer>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
              {included.map((item, i) => (
                <StaggerItem key={item.title}>
                  <div style={{
                    background: '#F5F5F5', padding: '28px 28px', borderTop: `3px solid ${GREEN}`,
                    height: '100%',
                  }}>
                    <h3 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: '.9375rem', fontWeight: 600, color: '#121212', marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.875rem', color: '#555', lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          BRANDS
          ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#121212', padding: '64px 64px', borderTop: '1px solid rgba(255,255,255,.06)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: GREEN, display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: GREEN, display: 'block', flexShrink: 0 }} />
              {t('goglobal.brandsLabel')}
            </span>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', fontWeight: 300, color: '#fff', letterSpacing: '-.01em', lineHeight: 1.25, marginBottom: 40, maxWidth: 520 }}>
              {t('goglobal.brandsH2')}
            </h2>
          </FadeIn>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', marginBottom: 24 }}>
            {BRANDS_WITH_LOGOS.map(b => (
              <div key={b.name} style={{ height: 36, opacity: .6, transition: 'opacity .2s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                onMouseLeave={e => e.currentTarget.style.opacity = .6}>
                <img src={b.src} alt={b.name} style={{ height: '100%', width: 'auto', filter: 'brightness(0) invert(1)', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
            {BRANDS_TEXT_ONLY.map(name => (
              <span key={name} style={{
                fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,.4)',
                letterSpacing: '.04em', padding: '4px 0',
              }}>{name}</span>
            ))}
          </div>
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
                    <span style={{ fontFamily: 'Inter,sans-serif', fontSize: '.875rem', color: '#333', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>

              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.8125rem', color: '#888', lineHeight: 1.6, marginBottom: 28, fontStyle: 'italic' }}>
                {t('goglobal.pricingNote')}
              </p>

              <Link href={localePath('/contact')} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '14px 36px', background: GREEN, color: '#fff',
                fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 13, fontWeight: 600,
                letterSpacing: '.06em', textTransform: 'uppercase', textDecoration: 'none',
                borderRadius: 2, transition: 'opacity .2s',
              }}>{t('goglobal.ctaPrimary')}</Link>
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
          CTA
          ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#121212', padding: '80px 64px', borderTop: `3px solid ${GREEN}` }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 300, color: '#fff', letterSpacing: '-.015em', lineHeight: 1.2, marginBottom: 16 }}>
              {t('goglobal.ctaH2')}
            </h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.7, marginBottom: 32 }}>
              {t('goglobal.ctaSub')}
            </p>
            <Link href={localePath('/contact')} style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '14px 36px', background: GREEN, color: '#fff',
              fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 13, fontWeight: 600,
              letterSpacing: '.06em', textTransform: 'uppercase', textDecoration: 'none',
              borderRadius: 2,
            }}>{t('goglobal.ctaBtn')}</Link>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  )
}
