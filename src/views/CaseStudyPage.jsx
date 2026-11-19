'use client'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { PageWrapper, FadeIn } from '../components/Animate'
import { useLocale } from '../context/LocaleContext'
import { CASES, localizeCase } from '../data/caseStudies'

/* Light hero colours (PlantCo's green) get dark text; the rest keep white text */
function isLight(hex) {
  const n = parseInt(hex.replace('#', ''), 16)
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map(v => {
    const c = v / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.35
}

const SECTION_LABEL = { fontFamily: 'var(--fd)', fontSize: 11, fontWeight: 500, letterSpacing: '.15em', textTransform: 'uppercase', color: '#EA633F', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10 }
const BODY = { fontFamily: 'var(--fb)', fontSize: '1.0625rem', color: '#444', lineHeight: 1.8 }

/* One case study on its own page: /case-studies/<slug> */
export default function CaseStudyPage({ slug }) {
  const { t } = useTranslation()
  const { localePath } = useLocale()

  const index = CASES.findIndex(c => c.slug === slug)
  if (index === -1) return null // the route already answers unknown slugs with a 404
  const cs = localizeCase(CASES[index], t)
  const next = localizeCase(CASES[(index + 1) % CASES.length], t)

  const light = isLight(cs.bg)
  const ink = light ? '#121212' : '#fff'
  const soft = light ? 'rgba(18,18,18,.7)' : 'rgba(255,255,255,.7)'
  const faint = light ? 'rgba(18,18,18,.5)' : 'rgba(255,255,255,.4)'
  const chip = light ? 'rgba(18,18,18,.08)' : 'rgba(255,255,255,.08)'

  const meta = [
    [t('caseStudies.clientLabel'), cs.client],
    [t('caseStudies.roleLabel'), cs.role],
    [t('caseStudies.categoryLabel'), cs.category],
  ]
  const sections = [
    [t('caseStudies.challengeLabel'), cs.challenge],
    [t('caseStudies.approachLabel'), cs.approach],
    [t('caseStudies.impactLabel'), cs.impact],
  ]

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="cs-hero" style={{ background: cs.bg, display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) clamp(320px, 36vw, 540px)', borderBottom: `3px solid ${cs.accent}` }}>
        <div className="cs-hero-text" style={{ padding: '56px var(--pad) 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <FadeIn>
            <Link href={localePath('/case-studies')} style={{ fontFamily: 'var(--fd)', fontSize: 12, fontWeight: 500, letterSpacing: '.06em', textTransform: 'uppercase', color: faint, textDecoration: 'none', display: 'inline-block', marginBottom: 32 }}>
              ← {t('caseStudies.allCaseStudies')}
            </Link>
            <div style={{ fontFamily: 'var(--fd)', fontSize: 11, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: cs.accent, marginBottom: 12 }}>{cs.tag}</div>
            <h1 style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(1.75rem,3.6vw,2.75rem)', fontWeight: 300, color: ink, lineHeight: 1.12, letterSpacing: '-.02em', marginBottom: 18, maxWidth: 720 }}>{cs.title}</h1>
            <p style={{ fontFamily: 'var(--fb)', fontSize: '1.0625rem', color: soft, lineHeight: 1.7, maxWidth: 640, marginBottom: 32 }}>{cs.desc}</p>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {meta.map(([label, value]) => (
                <div key={label}>
                  <div style={{ fontFamily: 'var(--fd)', fontSize: 10, fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: faint, marginBottom: 4 }}>{label}</div>
                  <div style={{ fontFamily: 'var(--fb)', fontSize: 14, color: ink }}>{value}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 24 }}>
              {cs.tags.map(tag => (
                <span key={tag} style={{ fontFamily: 'var(--fd)', fontSize: 10, fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', background: chip, padding: '4px 10px', color: soft }}>{tag}</span>
              ))}
            </div>
          </FadeIn>
        </div>
        <div className="cs-hero-img" style={{ position: 'relative', minHeight: 520, overflow: 'hidden' }}>
          <img src={cs.fullImg} alt={cs.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </section>

      {/* Challenge · Approach · Impact */}
      <section className="cs-body" style={{ background: '#fff', padding: '72px var(--pad) 88px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          {sections.map(([label, text], i) => (
            <FadeIn key={label} delay={i * .05}>
              <div style={{ marginBottom: i < sections.length - 1 ? 48 : 0 }}>
                <h2 style={SECTION_LABEL}>
                  <span style={{ width: 20, height: 1, background: '#EA633F', display: 'block' }} />
                  {label}
                </h2>
                <p style={BODY}>{text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Next case study */}
      <section style={{ background: '#121212' }}>
        <Link href={localePath(`/case-studies/${next.slug}`)} className="cs-next" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', alignItems: 'center', gap: 32, padding: '56px var(--pad)', textDecoration: 'none' }}>
          <div>
            <div style={{ fontFamily: 'var(--fd)', fontSize: 11, fontWeight: 500, letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', marginBottom: 14 }}>{t('caseStudies.nextCase')}</div>
            <div style={{ fontFamily: 'var(--fd)', fontSize: 11, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: next.accent === '#121212' ? next.bg : next.accent, marginBottom: 8 }}>{next.tag}</div>
            <div className="cs-next-title" style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(1.2rem,2.4vw,1.6rem)', fontWeight: 300, color: '#fff', lineHeight: 1.25, letterSpacing: '-.01em', maxWidth: 820, transition: 'color .2s' }}>{next.title}</div>
          </div>
          <span className="cs-next-arrow" style={{ width: 52, height: 52, border: '1px solid rgba(255,255,255,.2)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, transition: 'background .2s, border-color .2s' }}>→</span>
        </Link>
      </section>

      {/* CTA */}
      <div className="cta-strip" style={{ padding: '80px var(--pad)' }}>
        <FadeIn>
          <h2>{t('caseStudies.wantResults')}</h2>
          <p>{t('caseStudies.wantResultsSub')}</p>
        </FadeIn>
        <Link href={localePath('/contact')} className="btn btn-dark">{t('caseStudies.getInTouch')}</Link>
      </div>

      <style>{`
        .cs-next:hover .cs-next-title { color: #EA633F !important; }
        .cs-next:hover .cs-next-arrow { background: #EA633F; border-color: #EA633F !important; }
        @media (max-width: 900px) {
          .cs-hero { grid-template-columns: 1fr !important; }
          .cs-hero-text { padding: 40px var(--pad) 48px !important; }
          .cs-hero-img { min-height: 320px !important; }
          .cs-body { padding: 56px var(--pad) 64px !important; }
          .cs-next { padding: 40px var(--pad) !important; }
        }
      `}</style>
    </PageWrapper>
  )
}
