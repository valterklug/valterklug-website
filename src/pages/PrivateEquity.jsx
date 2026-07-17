import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useLocale } from '../context/LocaleContext'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'

// ── Terracotta accent — signals the Chameleon Collective partnership ──
const TERRA = '#D45939'
const TERRA_LIGHT = 'rgba(212,89,57,.08)'
const TERRA_MID = 'rgba(212,89,57,.15)'

// ── FormSubmit.co ──
const FORMSUBMIT_EMAIL = 'valter.klug@chameleon.co'

// ── Fund logos from Chameleon Collective investors page ──
// TODO: Download and self-host these images for production
const CDN = 'https://qbxkxavbngfiziy7.public.blob.vercel-storage.com/logos'
const FUND_LOGOS = [
  { name: 'Bain Capital Credit', src: `${CDN}/baincapitalcredit.com.png` },
  { name: 'KKR', src: `${CDN}/kkr.com.png` },
  { name: 'H.I.G. Capital', src: `${CDN}/higcapital.com.png` },
  { name: 'Summit Partners', src: `${CDN}/summitpartners.com.png` },
  { name: 'Graham Partners', src: `${CDN}/grahampartners.net.png` },
  { name: 'BV Investment Partners', src: `${CDN}/bvlp.com.png` },
]

export default function PrivateEquity() {
  const [formStatus, setFormStatus] = useState('idle')
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const { t } = useTranslation()
  const { localePath } = useLocale()

  // ── SEO ──
  useEffect(() => {
    document.title = t('privateEquity.seoTitle')
    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`)
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el) }
      el.content = content
    }
    setMeta('name', 'description', t('privateEquity.seoDescription'))
    setMeta('property', 'og:title', t('privateEquity.seoTitle'))
    setMeta('property', 'og:description', t('privateEquity.seoDescription'))
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:url', 'https://valterklug.com/private-equity/')
    return () => { document.title = t('privateEquity.seoDefaultTitle') }
  }, [t])

  const onSubmit = async (data) => {
    setFormStatus('submitting')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: `${t('privateEquity.formSubjectPrefix')} ${data.name} — ${data.firm || 'No firm'}`,
          _template: 'table',
        }),
      })
      if (res.ok) { setFormStatus('success'); reset() }
      else setFormStatus('error')
    } catch { setFormStatus('error') }
  }

  const scrollToForm = (e) => {
    e.preventDefault()
    document.getElementById('pe-contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const steps = t('privateEquity.steps', { returnObjects: true })
  const stats = t('privateEquity.stats', { returnObjects: true })

  return (
    <PageWrapper>
      {/* ════════════════════════════════════════════════════════════
          SECTION 1 — HERO
          ════════════════════════════════════════════════════════════ */}
      <section style={{
        background: '#121212', padding: '100px 64px 88px',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Subtle gradient accent */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse 60% 100% at 100% 60%, ${TERRA_LIGHT} 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: TERRA }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}
            style={{
              fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500,
              letterSpacing: '.2em', textTransform: 'uppercase', color: TERRA,
              marginBottom: 28, display: 'flex', alignItems: 'center', gap: 10,
            }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: TERRA, display: 'block', flexShrink: 0 }} />
            {t('privateEquity.heroLabel')}
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .08 }}
            style={{
              fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(2rem,4.5vw,3.25rem)',
              fontWeight: 300, lineHeight: 1.08, color: '#fff',
              letterSpacing: '-.025em', marginBottom: 24, maxWidth: 720,
            }}>
            {t('privateEquity.heroH1')}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .16 }}
            style={{
              fontFamily: 'Inter,sans-serif', fontSize: '1.0625rem',
              color: 'rgba(255,255,255,.55)', lineHeight: 1.7, maxWidth: 620, marginBottom: 40,
            }}>
            {t('privateEquity.heroSub')}
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .26 }}>
            <button onClick={scrollToForm} className="btn" style={{
              background: TERRA, color: '#fff', border: 'none',
            }}>
              {t('privateEquity.heroCta')}
            </button>
          </motion.div>
        </div>

        <style>{`@media(max-width:768px){section[data-hero-pe]{padding:80px 24px 64px!important;}}`}</style>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 2 — THE THESIS (Two Curves)
          ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '80px 64px', borderTop: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span style={{
              fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500,
              letterSpacing: '.18em', textTransform: 'uppercase', color: TERRA,
              display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14,
            }}>
              <span style={{ width: 20, height: 1.5, background: TERRA, display: 'block' }} />
              {t('privateEquity.thesisEyebrow')}
            </span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.5rem,3vw,2.1rem)',
              fontWeight: 300, color: '#121212', letterSpacing: '-.015em',
              lineHeight: 1.15, marginBottom: 48, maxWidth: 700,
            }}>
              {t('privateEquity.thesisH2')}
            </h2>
          </FadeIn>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2,
            background: '#E8E8E8', borderRadius: 2,
          }} className="pe-thesis-grid">
            {/* Left — The Agency Curve */}
            <FadeIn delay={0.1}>
              <div style={{ background: '#F5F5F5', padding: '40px 36px', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <h3 style={{
                    fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 16, fontWeight: 500,
                    color: '#121212', letterSpacing: '-.01em',
                  }}>{t('privateEquity.agencyCurveTitle')}</h3>
                  <span style={{
                    fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 12, fontWeight: 300,
                    color: '#ccc', letterSpacing: '.02em',
                  }}>01</span>
                </div>
                <p style={{
                  fontFamily: 'Inter,sans-serif', fontSize: '0.9375rem',
                  color: '#444', lineHeight: 1.7,
                }}>
                  {t('privateEquity.agencyCurveText')}
                </p>
              </div>
            </FadeIn>

            {/* Right — The Chameleon Curve */}
            <FadeIn delay={0.2}>
              <div style={{ background: '#fff', padding: '40px 36px', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <h3 style={{
                    fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 16, fontWeight: 500,
                    color: '#121212', letterSpacing: '-.01em',
                  }}>{t('privateEquity.chameleonCurveTitle')}</h3>
                  <span style={{
                    fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 12, fontWeight: 300,
                    color: '#ccc', letterSpacing: '.02em',
                  }}>02</span>
                </div>
                <p style={{
                  fontFamily: 'Inter,sans-serif', fontSize: '0.9375rem',
                  color: '#444', lineHeight: 1.7,
                }}>
                  {t('privateEquity.chameleonCurveText')}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 3 — WHERE I FIT
          ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#F5F5F5', padding: '80px 64px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span style={{
              fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500,
              letterSpacing: '.18em', textTransform: 'uppercase', color: TERRA,
              display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14,
            }}>
              <span style={{ width: 20, height: 1.5, background: TERRA, display: 'block' }} />
              {t('privateEquity.fitEyebrow')}
            </span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.5rem,3vw,2.1rem)',
              fontWeight: 300, color: '#121212', letterSpacing: '-.015em',
              lineHeight: 1.15, marginBottom: 16, maxWidth: 700,
            }}>
              {t('privateEquity.fitH2')}
            </h2>
            <p style={{
              fontFamily: 'Inter,sans-serif', fontSize: '0.9375rem',
              color: '#666', lineHeight: 1.7, marginBottom: 48, maxWidth: 660,
            }}>
              {t('privateEquity.fitSub')}
            </p>
          </FadeIn>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2,
            background: '#E8E8E8', borderRadius: 2,
          }} className="pe-cards-grid">
            <StaggerContainer>
              <StaggerItem>
                <div style={{
                  background: '#fff', padding: '40px 36px', height: '100%',
                  borderLeft: `3px solid ${TERRA}`,
                }}>
                  <h3 style={{
                    fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 16, fontWeight: 500,
                    color: '#121212', letterSpacing: '-.01em', marginBottom: 16,
                  }}>{t('privateEquity.crossBorderTitle')}</h3>
                  <p style={{
                    fontFamily: 'Inter,sans-serif', fontSize: '0.9375rem',
                    color: '#444', lineHeight: 1.7,
                  }}>
                    {t('privateEquity.crossBorderText')}
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
            <StaggerContainer>
              <StaggerItem>
                <div style={{
                  background: '#fff', padding: '40px 36px', height: '100%',
                  borderLeft: `3px solid ${TERRA}`,
                }}>
                  <h3 style={{
                    fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 16, fontWeight: 500,
                    color: '#121212', letterSpacing: '-.01em', marginBottom: 16,
                  }}>{t('privateEquity.commerceTitle')}</h3>
                  <p style={{
                    fontFamily: 'Inter,sans-serif', fontSize: '0.9375rem',
                    color: '#444', lineHeight: 1.7,
                  }}>
                    {t('privateEquity.commerceText')}
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 4 — DEAL LIFECYCLE
          ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#121212', padding: '80px 64px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span style={{
              fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500,
              letterSpacing: '.18em', textTransform: 'uppercase', color: TERRA,
              display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14,
            }}>
              <span style={{ width: 20, height: 1.5, background: TERRA, display: 'block' }} />
              {t('privateEquity.lifecycleEyebrow')}
            </span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.5rem,3vw,2.1rem)',
              fontWeight: 300, color: '#fff', letterSpacing: '-.015em',
              lineHeight: 1.15, marginBottom: 48,
            }}>
              {t('privateEquity.lifecycleH2')}
            </h2>
          </FadeIn>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2,
            background: 'rgba(255,255,255,.06)',
          }} className="pe-timeline-grid">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div style={{
                  background: step.featured ? 'rgba(212,89,57,.08)' : 'rgba(255,255,255,.03)',
                  padding: '36px 28px', height: '100%',
                  borderTop: step.featured ? `3px solid ${TERRA}` : '3px solid transparent',
                  display: 'flex', flexDirection: 'column',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                    <h3 style={{
                      fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 15, fontWeight: 500,
                      color: '#fff', letterSpacing: '-.01em',
                    }}>{step.title}</h3>
                    <span style={{
                      fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 12, fontWeight: 300,
                      color: step.featured ? TERRA : 'rgba(255,255,255,.2)', letterSpacing: '.02em',
                    }}>{step.num}</span>
                  </div>
                  {step.featured && (
                    <span style={{
                      fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 9, fontWeight: 600,
                      letterSpacing: '.15em', textTransform: 'uppercase', color: TERRA,
                      marginBottom: 14, display: 'block',
                    }}>{t('privateEquity.differentiatorBadge')}</span>
                  )}
                  <p style={{
                    fontFamily: 'Inter,sans-serif', fontSize: '0.875rem',
                    color: 'rgba(255,255,255,.5)', lineHeight: 1.7,
                  }}>{step.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 5 — DILIGENCE DIFFERENTIATOR (Callout)
          ════════════════════════════════════════════════════════════ */}
      <section style={{
        background: TERRA_LIGHT,
        borderTop: `3px solid ${TERRA}`,
        borderBottom: `1px solid ${TERRA_MID}`,
        padding: '64px 64px',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
              <span style={{
                fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500,
                letterSpacing: '.18em', textTransform: 'uppercase', color: TERRA,
                display: 'block', marginBottom: 20,
              }}>
                {t('privateEquity.calloutEyebrow')}
              </span>
              <p style={{
                fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
                fontWeight: 300, color: '#121212', lineHeight: 1.6,
                letterSpacing: '-.01em',
              }}>
                {t('privateEquity.calloutText')}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 6 — PROOF
          ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '80px 64px', borderTop: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span style={{
              fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500,
              letterSpacing: '.18em', textTransform: 'uppercase', color: TERRA,
              display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14,
            }}>
              <span style={{ width: 20, height: 1.5, background: TERRA, display: 'block' }} />
              {t('privateEquity.proofEyebrow')}
            </span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.5rem,3vw,2.1rem)',
              fontWeight: 300, color: '#121212', letterSpacing: '-.015em',
              lineHeight: 1.15, marginBottom: 48,
            }}>
              {t('privateEquity.proofH2')}
            </h2>
          </FadeIn>

          {/* Stats band */}
          <FadeIn delay={0.1}>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 0, marginBottom: 48,
            }} className="pe-stats-grid">
              {stats.map((stat, i) => (
                <div key={stat.label} style={{
                  textAlign: 'center', padding: '32px 24px',
                  borderRight: i < 2 ? '1px solid #E8E8E8' : 'none',
                }}>
                  <div style={{
                    fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(2rem,3.5vw,2.8rem)',
                    fontWeight: 300, color: '#121212', lineHeight: 1, marginBottom: 8,
                  }}>{stat.number}</div>
                  <div style={{
                    fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500,
                    letterSpacing: '.14em', textTransform: 'uppercase', color: '#999',
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Logo wall — fund logos */}
          <FadeIn delay={0.2}>
            <div style={{
              fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500,
              letterSpacing: '.14em', textTransform: 'uppercase', color: '#999',
              marginBottom: 20, textAlign: 'center',
            }}>
              {t('privateEquity.trustedBy')}
            </div>
            <div style={{
              display: 'flex', justifyContent: 'center', flexWrap: 'wrap',
              gap: 16, marginBottom: 48, alignItems: 'center',
            }}>
              {FUND_LOGOS.map(({ name, src }) => (
                <div key={name} style={{
                  border: '1px solid #E8E8E8', borderRadius: 2,
                  padding: '12px 20px', background: '#FAFAFA',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  height: 56, minWidth: 120,
                }}>
                  <img src={src} alt={name} style={{
                    maxHeight: 32, maxWidth: 110, objectFit: 'contain',
                    filter: 'grayscale(100%) opacity(0.6)',
                    transition: 'filter .3s',
                  }}
                    onMouseEnter={e => e.target.style.filter = 'grayscale(0%) opacity(1)'}
                    onMouseLeave={e => e.target.style.filter = 'grayscale(100%) opacity(0.6)'}
                  />
                </div>
              ))}
            </div>
          </FadeIn>

          {/* My track record */}
          <FadeIn delay={0.3}>
            <div style={{
              borderTop: '1px solid #E8E8E8', paddingTop: 32,
            }}>
              <span style={{
                fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500,
                letterSpacing: '.14em', textTransform: 'uppercase', color: '#999',
                display: 'block', marginBottom: 12,
              }}>
                {t('privateEquity.myWorkLabel')}
              </span>
              <p style={{
                fontFamily: 'Inter,sans-serif', fontSize: '0.9375rem',
                color: '#444', lineHeight: 1.7, maxWidth: 700,
              }}>
                {t('privateEquity.myWorkText')}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 7 — CONTACT / CONVERSION
          ════════════════════════════════════════════════════════════ */}
      <section id="pe-contact" style={{ background: '#121212', padding: '80px 64px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="pe-contact-grid">
            {/* Left — CTA text */}
            <FadeIn>
              <div>
                <span style={{
                  fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500,
                  letterSpacing: '.18em', textTransform: 'uppercase', color: TERRA,
                  display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14,
                }}>
                  <span style={{ width: 20, height: 1.5, background: TERRA, display: 'block' }} />
                  {t('privateEquity.contactEyebrow')}
                </span>
                <h2 style={{
                  fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.5rem,3vw,2.1rem)',
                  fontWeight: 300, color: '#fff', letterSpacing: '-.015em',
                  lineHeight: 1.15, marginBottom: 20,
                }}>
                  {t('privateEquity.contactH2')}
                </h2>
                <p style={{
                  fontFamily: 'Inter,sans-serif', fontSize: '0.9375rem',
                  color: 'rgba(255,255,255,.5)', lineHeight: 1.7,
                }}>
                  {t('privateEquity.contactSub')}
                </p>
              </div>
            </FadeIn>

            {/* Right — Form */}
            <FadeIn delay={0.15}>
              <form onSubmit={handleSubmit(onSubmit)} noValidate style={{
                display: 'flex', flexDirection: 'column', gap: 16,
              }}>
                {/* Honeypot */}
                <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                {/* Name */}
                <div>
                  <label style={{
                    fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500,
                    letterSpacing: '.12em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,.45)', display: 'block', marginBottom: 6,
                  }}>{t('privateEquity.formNameLabel')}</label>
                  <input style={{
                    width: '100%', padding: '12px 14px',
                    background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)',
                    borderRadius: 2, color: '#fff', outline: 'none',
                    fontFamily: 'Inter,sans-serif', fontSize: '0.9375rem',
                    transition: 'border-color .2s',
                  }}
                    placeholder={t('privateEquity.formNamePlaceholder')}
                    {...register('name', { required: t('privateEquity.formRequired') })}
                    onFocus={e => e.target.style.borderColor = TERRA}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.12)'}
                  />
                  {errors.name && <span style={{ fontFamily: 'Inter,sans-serif', fontSize: '.75rem', color: '#e53e3e', marginTop: 4, display: 'block' }}>{errors.name.message}</span>}
                </div>

                {/* Firm */}
                <div>
                  <label style={{
                    fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500,
                    letterSpacing: '.12em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,.45)', display: 'block', marginBottom: 6,
                  }}>{t('privateEquity.formFirmLabel')}</label>
                  <input style={{
                    width: '100%', padding: '12px 14px',
                    background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)',
                    borderRadius: 2, color: '#fff', outline: 'none',
                    fontFamily: 'Inter,sans-serif', fontSize: '0.9375rem',
                    transition: 'border-color .2s',
                  }}
                    placeholder={t('privateEquity.formFirmPlaceholder')}
                    {...register('firm', { required: t('privateEquity.formRequired') })}
                    onFocus={e => e.target.style.borderColor = TERRA}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.12)'}
                  />
                  {errors.firm && <span style={{ fontFamily: 'Inter,sans-serif', fontSize: '.75rem', color: '#e53e3e', marginTop: 4, display: 'block' }}>{errors.firm.message}</span>}
                </div>

                {/* Email */}
                <div>
                  <label style={{
                    fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500,
                    letterSpacing: '.12em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,.45)', display: 'block', marginBottom: 6,
                  }}>{t('privateEquity.formEmailLabel')}</label>
                  <input type="email" style={{
                    width: '100%', padding: '12px 14px',
                    background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)',
                    borderRadius: 2, color: '#fff', outline: 'none',
                    fontFamily: 'Inter,sans-serif', fontSize: '0.9375rem',
                    transition: 'border-color .2s',
                  }}
                    placeholder={t('privateEquity.formEmailPlaceholder')}
                    {...register('email', { required: t('privateEquity.formRequired'), pattern: { value: /^\S+@\S+\.\S+$/, message: t('privateEquity.formInvalidEmail') } })}
                    onFocus={e => e.target.style.borderColor = TERRA}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.12)'}
                  />
                  {errors.email && <span style={{ fontFamily: 'Inter,sans-serif', fontSize: '.75rem', color: '#e53e3e', marginTop: 4, display: 'block' }}>{errors.email.message}</span>}
                </div>

                {/* What's the thesis? */}
                <div>
                  <label style={{
                    fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500,
                    letterSpacing: '.12em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,.45)', display: 'block', marginBottom: 6,
                  }}>{t('privateEquity.formThesisLabel')}</label>
                  <input style={{
                    width: '100%', padding: '12px 14px',
                    background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)',
                    borderRadius: 2, color: '#fff', outline: 'none',
                    fontFamily: 'Inter,sans-serif', fontSize: '0.9375rem',
                    transition: 'border-color .2s',
                  }}
                    placeholder={t('privateEquity.formThesisPlaceholder')}
                    {...register('thesis')}
                    onFocus={e => e.target.style.borderColor = TERRA}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.12)'}
                  />
                </div>

                {/* Submit */}
                <button type="submit" disabled={formStatus === 'submitting'}
                  style={{
                    background: TERRA, color: '#fff', border: 'none',
                    padding: '14px 32px', fontFamily: 'IBM Plex Sans,sans-serif',
                    fontSize: 13, fontWeight: 500, letterSpacing: '.04em',
                    borderRadius: 2, cursor: formStatus === 'submitting' ? 'not-allowed' : 'pointer',
                    opacity: formStatus === 'submitting' ? .6 : 1,
                    transition: 'opacity .2s, transform .15s',
                    alignSelf: 'flex-start', marginTop: 4,
                  }}
                  onMouseEnter={e => { if (formStatus !== 'submitting') { e.target.style.opacity = '.85'; e.target.style.transform = 'translateY(-1px)' } }}
                  onMouseLeave={e => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' }}
                >
                  {formStatus === 'submitting' ? t('privateEquity.formSubmitting') : t('privateEquity.formSubmit')}
                </button>

                {/* Book a call alternative */}
                <p style={{
                  fontFamily: 'Inter,sans-serif', fontSize: 13,
                  color: 'rgba(255,255,255,.35)', marginTop: -4,
                }}>
                  {t('privateEquity.formOr')}{' '}
                  <a href="https://calendar.app.google/2oLdDao8pL6GaAjdA" target="_blank" rel="noopener noreferrer" style={{
                    color: TERRA, textDecoration: 'underline', textUnderlineOffset: 3,
                    transition: 'opacity .2s',
                  }}
                    onMouseEnter={e => e.target.style.opacity = '.7'}
                    onMouseLeave={e => e.target.style.opacity = '1'}
                  >{t('privateEquity.formBookCall')}</a>
                </p>

                {/* Status messages */}
                <AnimatePresence>
                  {formStatus === 'success' && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      style={{
                        background: 'rgba(52,168,83,.1)', border: '1px solid rgba(52,168,83,.3)',
                        padding: '16px 20px', borderRadius: 2,
                        fontFamily: 'Inter,sans-serif', fontSize: '.875rem', color: '#68d391', lineHeight: 1.6,
                      }}>
                      {t('privateEquity.formSuccess')}
                    </motion.div>
                  )}
                  {formStatus === 'error' && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      style={{
                        background: 'rgba(229,62,62,.08)', border: '1px solid rgba(229,62,62,.25)',
                        padding: '16px 20px', borderRadius: 2,
                        fontFamily: 'Inter,sans-serif', fontSize: '.875rem', color: '#fc8181', lineHeight: 1.6,
                      }}>
                      {t('privateEquity.formError')}{' '}
                      <a href="mailto:valter.klug@chameleon.co" style={{ color: TERRA }}>valter.klug@chameleon.co</a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Responsive overrides ── */}
      <style>{`
        @media (max-width: 900px) {
          .pe-thesis-grid { grid-template-columns: 1fr !important; }
          .pe-cards-grid { grid-template-columns: 1fr !important; }
          .pe-timeline-grid { grid-template-columns: 1fr 1fr !important; }
          .pe-contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .pe-stats-grid { grid-template-columns: 1fr !important; }
          .pe-stats-grid > div { border-right: none !important; border-bottom: 1px solid #E8E8E8; }
          .pe-stats-grid > div:last-child { border-bottom: none; }
        }
        @media (max-width: 600px) {
          .pe-timeline-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </PageWrapper>
  )
}
