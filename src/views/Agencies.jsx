'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useLocale } from '../context/LocaleContext'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'

// ── Accent — site orange ──
const ORANGE = '#EA633F'
const DARK = '#1E1E1E'

// ── Toggle: set to true when team photos are authorised ──
const SHOW_TEAM_SECTION = true

// ── Shared label style ──
const sectionLabel = (color = ORANGE) => ({
  fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500,
  letterSpacing: '.2em', textTransform: 'uppercase', color,
  display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16,
})
const labelDot = (color = ORANGE) => ({
  width: 6, height: 6, borderRadius: '50%', background: color,
  display: 'block', flexShrink: 0,
})

// ── Shared heading style ──
const h2Style = {
  fontFamily: 'IBM Plex Sans,sans-serif', fontWeight: 300, color: '#121212',
  letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 24,
  fontSize: 'clamp(1.4rem,3vw,2rem)',
}
const sectionPad = { padding: '80px 64px' }
const innerMax = { maxWidth: 1200, margin: '0 auto' }

// ── Soundcheck link helper ──
const SOUNDCHECK_URL = 'https://www.soundcheckinsights.com'

export default function Agencies() {
  const { t } = useTranslation()
  const { locale } = useLocale()
  const [openFaq, setOpenFaq] = useState(null)

  const stats = t('agencies.stats', { returnObjects: true })
  const problemStats = t('agencies.problemStats', { returnObjects: true })
  const services = t('agencies.services', { returnObjects: true })
  const teamMembers = t('agencies.teamMembers', { returnObjects: true })
  const disciplines = t('agencies.disciplines', { returnObjects: true })
  const benefitCards = t('agencies.benefitCards', { returnObjects: true })
  const compareHeaders = t('agencies.compareHeaders', { returnObjects: true })
  const compareRows = t('agencies.compareRows', { returnObjects: true })
  const soundcheckCards = t('agencies.soundcheckCards', { returnObjects: true })
  const costHeaders = t('agencies.costHeaders', { returnObjects: true })
  const costRows = t('agencies.costRows', { returnObjects: true })
  const faqs = t('agencies.faqs', { returnObjects: true })
  const timeline = t('agencies.timeline', { returnObjects: true })
  const heroChips = t('agencies.heroChips', { returnObjects: true })

  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('agencies-contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <PageWrapper>
      {/* ════════════════════════════════════════════════════════════
          1. HERO
          ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#000', padding: '100px 64px 90px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: ORANGE }} />
        <div style={{ ...innerMax, position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 700 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}
              style={sectionLabel(ORANGE)}>
              <span style={labelDot(ORANGE)} />
              {t('agencies.heroEyebrow')}
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .08 }}
              style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 300, lineHeight: 1.15, color: '#fff', letterSpacing: '-.025em', marginBottom: 24, whiteSpace: 'pre-line' }}>
              {t('agencies.heroH1')}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .16 }}
              style={{ fontFamily: 'Inter,sans-serif', fontSize: '1.0625rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.7, maxWidth: 600, marginBottom: 28 }}>
              {t('agencies.heroSub')}
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .22 }}
              style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 36 }}>
              {heroChips.map((chip, i) => (
                <span key={i} style={{
                  fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500,
                  letterSpacing: '.06em', color: 'rgba(255,255,255,.5)',
                  padding: '6px 14px', border: '1px solid rgba(255,255,255,.12)', borderRadius: 2,
                }}>{chip}</span>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }}>
              <button onClick={scrollToContact} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '12px 28px', background: ORANGE, color: '#fff',
                fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 13, fontWeight: 600,
                letterSpacing: '.06em', textTransform: 'uppercase',
                borderRadius: 2, transition: 'opacity .2s', border: 'none', cursor: 'pointer',
              }}>{t('agencies.heroCta')}</button>
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:768px){section{padding:60px 24px 50px!important;}}`}</style>
      </section>

      {/* ════════════════════════════════════════════════════════════
          2. STATS BAR
          ════════════════════════════════════════════════════════════ */}
      <section style={{ background: DARK, padding: '40px 64px', borderBottom: `3px solid ${ORANGE}` }}>
        <StaggerContainer>
          <div style={{ ...innerMax, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, textAlign: 'center' }} className="agencies-stats-grid">
            {stats.map((s, i) => (
              <StaggerItem key={i}>
                <div>
                  <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 300, color: ORANGE, letterSpacing: '-.02em' }}>{s.number}</div>
                  <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: 'rgba(255,255,255,.5)', lineHeight: 1.5, marginTop: 4 }}>{s.label}</div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* ════════════════════════════════════════════════════════════
          3. SPLIT: WHO LEADS + THE PROBLEM
          ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', ...sectionPad, borderBottom: '1px solid #E8E8E8' }}>
        <div style={{ ...innerMax, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }} className="agencies-split">
          {/* Left: Who leads */}
          <FadeIn>
            <div>
              <span style={sectionLabel()}>
                <span style={labelDot()} />
                {t('agencies.whoLeadsLabel')}
              </span>
              <h2 style={{ ...h2Style, marginBottom: 20 }}>{t('agencies.whoLeadsName')}</h2>

              <div style={{ display: 'flex', gap: 24, marginBottom: 24 }} className="agencies-bio-layout">
                <img src="/agencies/valter-klug.jpg" alt="Valter Klug" style={{
                  width: 140, height: 140, borderRadius: '50%', objectFit: 'cover',
                  flexShrink: 0, filter: 'grayscale(100%)',
                }} />
                <div>
                  <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: '#333', lineHeight: 1.7, marginBottom: 12 }}>
                    {t('agencies.whoLeadsBio')}
                  </p>
                </div>
              </div>

              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: '#333', lineHeight: 1.7, marginBottom: 12 }}>
                {t('agencies.whoLeadsBio2')}
              </p>
              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: '#333', lineHeight: 1.7, marginBottom: 12 }}>
                {t('agencies.whoLeadsBio3')}
              </p>
              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: '#333', lineHeight: 1.7, marginBottom: 28 }}>
                {t('agencies.whoLeadsBio4')}
              </p>

              {/* Timeline */}
              <div style={{ borderLeft: `2px solid ${ORANGE}`, paddingLeft: 20 }}>
                {timeline.map((item, i) => (
                  <div key={i} style={{
                    fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#555',
                    lineHeight: 1.5, padding: '6px 0',
                    borderBottom: i < timeline.length - 1 ? '1px solid #F0F0F0' : 'none',
                  }}>{item}</div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right: The problem */}
          <FadeIn>
            <div>
              <h2 style={{ ...h2Style, marginBottom: 20, maxWidth: 420 }}>{t('agencies.problemH2')}</h2>
              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: '#333', lineHeight: 1.7, marginBottom: 16 }}>
                {t('agencies.problemP1')}
              </p>
              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: '#333', lineHeight: 1.7, marginBottom: 36 }}>
                {t('agencies.problemP2')}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="agencies-problem-stats">
                {problemStats.map((s, i) => (
                  <div key={i} style={{ padding: '20px', background: '#F5F5F5', borderLeft: `3px solid ${ORANGE}` }}>
                    <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 300, color: ORANGE }}>{s.number}</div>
                    <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: '#666', lineHeight: 1.5, marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          4. SERVICES — 4 cards
          ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#FAFAFA', ...sectionPad, borderBottom: '1px solid #E8E8E8' }}>
        <div style={innerMax}>
          <FadeIn>
            <span style={sectionLabel()}>
              <span style={labelDot()} />
              {t('agencies.servicesEyebrow')}
            </span>
            <h2 style={{ ...h2Style, marginBottom: 12 }}>{t('agencies.servicesH2')}</h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: '#555', lineHeight: 1.7, maxWidth: 600, marginBottom: 40 }}>
              {t('agencies.servicesIntro')}
            </p>
          </FadeIn>

          <StaggerContainer>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
              {services.map((svc, i) => (
                <StaggerItem key={i}>
                  <div style={{
                    background: '#fff', padding: 28, borderTop: `3px solid ${ORANGE}`,
                    height: '100%',
                  }}>
                    <span style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.15em', textTransform: 'uppercase', color: ORANGE }}>{svc.tag}</span>
                    <h3 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 16, fontWeight: 500, color: '#121212', margin: '10px 0 10px', lineHeight: 1.3 }}>{svc.title}</h3>
                    <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: '#555', lineHeight: 1.65 }}>{svc.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          5. CHAMELEON COLLECTIVE TEAM — toggled by SHOW_TEAM_SECTION
          ════════════════════════════════════════════════════════════ */}
      {SHOW_TEAM_SECTION && (
        <section style={{ background: '#fff', ...sectionPad, borderBottom: '1px solid #E8E8E8' }}>
          <div style={innerMax}>
            <FadeIn>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
                <span style={sectionLabel()}>
                  <span style={labelDot()} />
                  {t('agencies.teamEyebrow')}
                </span>
              </div>
              <h2 style={{ ...h2Style, marginBottom: 12 }}>{t('agencies.teamH2')}</h2>
              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: '#555', lineHeight: 1.7, maxWidth: 680, marginBottom: 40 }}>
                {t('agencies.teamIntro')}
              </p>
            </FadeIn>

            <StaggerContainer>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 28 }}>
                {teamMembers.map((member, i) => (
                  <StaggerItem key={i}>
                    <div style={{ textAlign: 'left' }}>
                      <img src={member.photo} alt={member.name} style={{
                        width: 120, height: 120, borderRadius: '50%', objectFit: 'cover',
                        filter: 'grayscale(100%)', marginBottom: 14,
                      }} />
                      <h3 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 15, fontWeight: 600, color: '#121212', margin: '0 0 4px' }}>{member.name}</h3>
                      <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.08em', textTransform: 'uppercase', color: ORANGE, marginBottom: 10 }}>{member.role}</div>
                      <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#555', lineHeight: 1.6, marginBottom: 12 }}>{member.bio}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {member.tags.map((tag, j) => (
                          <span key={j} style={{
                            fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500,
                            letterSpacing: '.05em', color: '#666', padding: '4px 10px',
                            background: '#F5F5F5', borderRadius: 2,
                          }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            <FadeIn>
              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: '#555', lineHeight: 1.7, marginTop: 36, textAlign: 'center', fontStyle: 'italic' }}>
                {t('agencies.teamFooter')}
              </p>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════════
          6. SPECIALISTS / DISCIPLINES
          ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', ...sectionPad, borderBottom: '1px solid #E8E8E8' }}>
        <div style={innerMax}>
          <FadeIn>
            <span style={sectionLabel()}>
              <span style={labelDot()} />
              {t('agencies.networkEyebrow')}
            </span>
            <h2 style={{ ...h2Style, marginBottom: 12, maxWidth: 680 }}>{t('agencies.networkH2')}</h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: '#555', lineHeight: 1.7, maxWidth: 600, marginBottom: 32 }}>
              {t('agencies.networkIntro')}
            </p>
          </FadeIn>

          <StaggerContainer>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {disciplines.map((d, i) => (
                <StaggerItem key={i}>
                  <span style={{
                    fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 12, fontWeight: 500,
                    letterSpacing: '.04em', color: '#333', padding: '8px 16px',
                    background: '#F5F5F5', borderRadius: 2, display: 'inline-block',
                    borderLeft: `2px solid ${ORANGE}`,
                  }}>{d}</span>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          7. COMPARISON TABLE + BENEFIT CARDS
          ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', ...sectionPad, borderBottom: '1px solid #E8E8E8' }}>
        <div style={innerMax}>
          <FadeIn>
            <span style={sectionLabel()}>
              <span style={labelDot()} />
              {t('agencies.compareEyebrow')}
            </span>
            <h2 style={h2Style}>{t('agencies.compareH2')}</h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: '#555', lineHeight: 1.7, maxWidth: 600, marginBottom: 36 }}>
              {t('agencies.compareIntro')}
            </p>
          </FadeIn>

          {/* Comparison table */}
          <FadeIn>
            <div style={{ overflowX: 'auto', marginBottom: 48 }} className="agencies-table-wrap">
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }} className="agencies-compare-table">
                <thead>
                  <tr>
                    {compareHeaders.map((h, i) => (
                      <th key={i} style={{
                        fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 13, fontWeight: 600,
                        color: i === 2 ? '#fff' : '#121212',
                        background: i === 2 ? ORANGE : '#F5F5F5',
                        padding: '14px 18px', textAlign: 'left',
                        borderBottom: '2px solid #E8E8E8',
                        width: '33.33%',
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, ri) => (
                    <tr key={ri}>
                      {row.map((cell, ci) => (
                        <td key={ci} style={{
                          fontFamily: 'Inter,sans-serif', fontSize: 14, color: ci === 2 ? '#121212' : '#555',
                          fontWeight: ci === 2 ? 500 : 400,
                          padding: '14px 18px',
                          background: ci === 2 ? 'rgba(234,99,63,.06)' : 'transparent',
                          borderBottom: '1px solid #E8E8E8',
                          lineHeight: 1.5,
                          verticalAlign: 'top',
                        }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          {/* Benefit cards */}
          <StaggerContainer>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
              {benefitCards.map((card, i) => (
                <StaggerItem key={i}>
                  <div style={{ padding: 24, background: '#F5F5F5', borderLeft: `3px solid ${ORANGE}`, height: '100%' }}>
                    <h3 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 15, fontWeight: 500, color: '#121212', margin: '0 0 8px', lineHeight: 1.3 }}>{card.title}</h3>
                    <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: '#555', lineHeight: 1.6 }}>{card.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          9. THE MATH — 2 tables
          ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#FAFAFA', ...sectionPad, borderBottom: '1px solid #E8E8E8' }}>
        <div style={innerMax}>
          <FadeIn>
            <span style={sectionLabel()}>
              <span style={labelDot()} />
              {t('agencies.mathEyebrow')}
            </span>
            <h2 style={h2Style}>{t('agencies.mathH2')}</h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: '#555', lineHeight: 1.7, maxWidth: 600, marginBottom: 36 }}>
              {t('agencies.mathIntro')}
            </p>
          </FadeIn>

          {/* Cost of doing it alone */}
          <FadeIn>
            <h3 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 16, fontWeight: 500, color: '#121212', marginBottom: 16 }}>{t('agencies.costTitle')}</h3>
            <div style={{ overflowX: 'auto', marginBottom: 24 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
                <thead>
                  <tr>
                    {costHeaders.map((h, i) => (
                      <th key={i} style={{
                        fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 12, fontWeight: 600,
                        color: '#121212', background: '#F0F0F0',
                        padding: '12px 16px', textAlign: 'left',
                        borderBottom: `2px solid ${ORANGE}`,
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {costRows.map((row, ri) => (
                    <tr key={ri} style={{ background: ri === costRows.length - 1 ? 'rgba(234,99,63,.06)' : 'transparent' }}>
                      {row.map((cell, ci) => (
                        <td key={ci} style={{
                          fontFamily: 'Inter,sans-serif', fontSize: 14,
                          color: ri === costRows.length - 1 ? '#121212' : '#555',
                          fontWeight: ri === costRows.length - 1 ? 500 : 400,
                          padding: '12px 16px', borderBottom: '1px solid #E8E8E8',
                          lineHeight: 1.5, verticalAlign: 'top',
                        }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          <FadeIn>
            <p style={{
              fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#888', lineHeight: 1.6,
              fontStyle: 'italic', padding: '16px 20px', background: '#fff',
              borderLeft: `3px solid ${ORANGE}`,
            }}>
              {t('agencies.mathDisclaimer')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          10. SOUNDCHECK INSIGHTS — dark block
          ════════════════════════════════════════════════════════════ */}
      <section style={{ background: DARK, ...sectionPad, borderBottom: `3px solid ${ORANGE}` }}>
        <div style={innerMax}>
          <FadeIn>
            <span style={sectionLabel('rgba(255,255,255,.4)')}>
              <span style={labelDot(ORANGE)} />
              {t('agencies.soundcheckEyebrow')}
            </span>
            <h2 style={{ ...h2Style, color: '#fff', marginBottom: 12 }}>
              <a href={SOUNDCHECK_URL} target="_blank" rel="noopener noreferrer"
                style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: 4, textDecorationColor: ORANGE }}>
                {t('agencies.soundcheckH2')}
              </a>
            </h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.7, maxWidth: 680, marginBottom: 36 }}>
              {t('agencies.soundcheckIntro')}
            </p>
          </FadeIn>

          <StaggerContainer>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 28 }}>
              {soundcheckCards.map((card, i) => (
                <StaggerItem key={i}>
                  <div style={{
                    background: 'rgba(255,255,255,.04)', padding: 28,
                    borderTop: `3px solid ${ORANGE}`, height: '100%',
                  }}>
                    <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 28, fontWeight: 300, color: ORANGE, marginBottom: 6 }}>{card.number}</div>
                    <h3 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 15, fontWeight: 500, color: '#fff', margin: '0 0 8px', lineHeight: 1.3 }}>{card.title}</h3>
                    <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: 'rgba(255,255,255,.45)', lineHeight: 1.6 }}>{card.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <FadeIn>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: 'rgba(255,255,255,.4)', lineHeight: 1.7, fontStyle: 'italic', maxWidth: 680 }}>
              {t('agencies.soundcheckFooter')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          11. FAQ
          ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', ...sectionPad, borderBottom: '1px solid #E8E8E8' }}>
        <div style={{ ...innerMax, maxWidth: 800 }}>
          <FadeIn>
            <span style={sectionLabel()}>
              <span style={labelDot()} />
              {t('agencies.faqEyebrow')}
            </span>
            <h2 style={h2Style}>{t('agencies.faqH2')}</h2>
          </FadeIn>

          <div style={{ marginTop: 8 }}>
            {faqs.map((faq, i) => (
              <FadeIn key={i}>
                <div style={{ borderBottom: '1px solid #E8E8E8' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                    }}
                  >
                    <span style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 15, fontWeight: 500, color: '#121212', lineHeight: 1.3, paddingRight: 16 }}>{faq.q}</span>
                    <span style={{
                      fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 20, color: ORANGE,
                      flexShrink: 0, transition: 'transform .2s',
                      transform: openFaq === i ? 'rotate(45deg)' : 'none',
                    }}>+</span>
                  </button>
                  {openFaq === i && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                      style={{ paddingBottom: 20 }}>
                      <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: '#555', lineHeight: 1.7 }}>{faq.a}</p>
                    </motion.div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          12. CTA & CONTACT
          ════════════════════════════════════════════════════════════ */}
      <section id="agencies-contact" style={{ background: '#000', padding: '80px 64px 90px' }}>
        <div style={{ ...innerMax, maxWidth: 700, textAlign: 'center' }}>
          <FadeIn>
            <span style={{ ...sectionLabel(ORANGE), justifyContent: 'center' }}>
              <span style={labelDot(ORANGE)} />
              {t('agencies.ctaEyebrow')}
            </span>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 300, color: '#fff', letterSpacing: '-.015em', lineHeight: 1.2, marginBottom: 20 }}>
              {t('agencies.ctaH2')}
            </h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.7, marginBottom: 36 }}>
              {t('agencies.ctaText')}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center', marginBottom: 36 }}>
              <a href={`mailto:${t('agencies.ctaEmail')}`} style={{ fontFamily: 'Inter,sans-serif', fontSize: 15, color: 'rgba(255,255,255,.5)', textDecoration: 'none', transition: 'color .2s' }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.5)'}
              >{t('agencies.ctaEmail')}</a>
              <a href={`https://linkedin.com${t('agencies.ctaLinkedIn')}`} target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: 'Inter,sans-serif', fontSize: 15, color: 'rgba(255,255,255,.5)', textDecoration: 'none', transition: 'color .2s' }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.5)'}
              >linkedin.com{t('agencies.ctaLinkedIn')}</a>
              <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: 'rgba(255,255,255,.3)' }}>
                {t('agencies.ctaLocation')}
              </span>
            </div>

            <a href={`mailto:${t('agencies.ctaEmail')}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '14px 32px', background: ORANGE, color: '#fff',
              fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 13, fontWeight: 600,
              letterSpacing: '.06em', textTransform: 'uppercase',
              borderRadius: 2, transition: 'opacity .2s', textDecoration: 'none',
            }}>{t('agencies.ctaButton')}</a>
          </FadeIn>
        </div>
      </section>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 900px) {
          .agencies-split { grid-template-columns: 1fr !important; gap: 48px !important; }
          .agencies-bio-layout { flex-direction: column !important; }
        }
        @media (max-width: 768px) {
          .agencies-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .agencies-problem-stats { grid-template-columns: 1fr !important; }
          .agencies-table-wrap { margin-left: -24px; margin-right: -24px; padding: 0 24px; }
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </PageWrapper>
  )
}
