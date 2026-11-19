'use client'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { PageWrapper, FadeIn, HoverLift } from '../components/Animate'
import { useLocale } from '../context/LocaleContext'
import { CASES, localizeCase } from '../data/caseStudies'

export default function CaseStudies() {
  const { t } = useTranslation()
  const { localePath } = useLocale()

  const localizedCases = CASES.map(cs => localizeCase(cs, t))

  return (
    <PageWrapper>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="lbl lbl-orange">{t('caseStudies.heroLabel')}</span>
          <h1 className="page-h1">{t('caseStudies.heroH1')}</h1>
          <p className="page-sub">{t('caseStudies.heroSub')}</p>
        </div>
      </section>

      {/* Case Study Grid — 3 columns, tall vertical cards */}
      <section style={{ background: '#F5F5F5', padding: '80px 64px', borderTop: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 3 }} className="case-grid">
            {localizedCases.map((c, i) => (
              <FadeIn key={c.id} delay={i * .05}>
                <HoverLift>
                  <Link
                    href={localePath(`/case-studies/${c.slug}`)}
                    style={{ background: '#fff', cursor: 'pointer', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', color: 'inherit', textDecoration: 'none' }}
                  >
                    <div style={{ position: 'relative', paddingBottom: '130%', overflow: 'hidden', background: c.bg }}>
                      <img src={c.thumb} alt={c.title} loading="lazy"
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .4s' }}
                        onMouseEnter={e => e.target.style.transform = 'scale(1.03)'}
                        onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                      />
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: c.accent }} />
                    </div>
                    <div style={{ padding: '20px 22px', flex: 1, display: 'flex', flexDirection: 'column', borderLeft: `3px solid ${c.accent}` }}>
                      <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 9, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: c.accent, marginBottom: 6 }}>{c.tag}</div>
                      <h3 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(.85rem,1.2vw,1rem)', fontWeight: 500, color: '#121212', lineHeight: 1.3, marginBottom: 8 }}>{c.title}</h3>
                      <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.75rem', color: '#888', lineHeight: 1.6, marginBottom: 14, flex: 1 }}>{c.desc}</p>
                      <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.05em', textTransform: 'uppercase', color: '#EA633F', display: 'flex', alignItems: 'center', gap: 4 }}>
                        {t('caseStudies.readCaseStudy')} <span>→</span>
                      </div>
                    </div>
                  </Link>
                </HoverLift>
              </FadeIn>
            ))}
          </div>
        </div>
        <style>{`
          @media(max-width:1200px){
            .case-grid{grid-template-columns:repeat(3,1fr)!important}
          }
          @media(max-width:900px){
            .case-grid{grid-template-columns:repeat(2,1fr)!important}
          }
          @media(max-width:600px){
            .case-grid{grid-template-columns:1fr!important}
            section[style*='80px 64px']{padding:60px 24px!important}
          }
        `}</style>
      </section>

      {/* Also Worked With */}
      <section style={{ background: '#121212', padding: '80px 64px', borderTop: '1px solid rgba(255,255,255,.06)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }} className="brands-grid">
          <FadeIn>
            <span className="lbl lbl-white">{t('caseStudies.alsoWorkedWith')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', fontWeight: 300, color: '#fff', letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 16 }}>{t('caseStudies.alsoH2')}</h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.75 }}>{t('caseStudies.alsoSub')}</p>
          </FadeIn>
          <FadeIn delay={.1}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'rgba(255,255,255,.08)' }} className="brand-grid">
              {['AB-InBev', 'Natura &Co', 'PepsiCo', 'Tramontina', 'Grendene', 'Inter&Co', 'Conchita Foods', 'Microsoft', 'AT&T', 'Coca-Cola', 'Nokia', 'Intel'].map(b => (
                <div key={b} style={{ background: '#1E1E1E', padding: '20px 24px', fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,.45)', letterSpacing: '.02em' }}>{b}</div>
              ))}
            </div>
          </FadeIn>
        </div>
        <style>{"@media(max-width:900px){.brands-grid{grid-template-columns:1fr!important;gap:40px!important}.brand-grid{grid-template-columns:1fr 1fr!important}}"}</style>
      </section>

      {/* CTA */}
      <div className="cta-strip" style={{ padding: '80px 64px' }}>
        <FadeIn>
          <h2>{t('caseStudies.ctaH2')}</h2>
          <p>{t('caseStudies.ctaSub')}</p>
        </FadeIn>
        <Link href={localePath('/contact')} className="btn btn-dark">{t('nav.cta')}</Link>
      </div>
    </PageWrapper>
  )
}
