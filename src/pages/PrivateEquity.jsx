import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
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

  // ── SEO ──
  useEffect(() => {
    document.title = 'Private Equity Partnership — Valter Klug'
    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`)
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el) }
      el.content = content
    }
    setMeta('name', 'description', 'A transformation partner for private equity, from diligence to exit. International expansion and commerce growth that survives to exit, inside the Chameleon Collective model.')
    setMeta('property', 'og:title', 'Private Equity Partnership — Valter Klug')
    setMeta('property', 'og:description', 'A transformation partner for private equity, from diligence to exit. International expansion and commerce growth that survives to exit, inside the Chameleon Collective model.')
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:url', 'https://valterklug.com/private-equity/')
    return () => { document.title = 'Valter Klug — Fractional CMO & Brand Expansion Strategist' }
  }, [])

  const onSubmit = async (data) => {
    setFormStatus('submitting')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: `PE Inquiry from ${data.name} — ${data.firm || 'No firm'}`,
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
            For Investors
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .08 }}
            style={{
              fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(2rem,4.5vw,3.25rem)',
              fontWeight: 300, lineHeight: 1.08, color: '#fff',
              letterSpacing: '-.025em', marginBottom: 24, maxWidth: 720,
            }}>
            Expansion and commerce growth your buyer keeps.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .16 }}
            style={{
              fontFamily: 'Inter,sans-serif', fontSize: '1.0625rem',
              color: 'rgba(255,255,255,.55)', lineHeight: 1.7, maxWidth: 620, marginBottom: 40,
            }}>
            I lead international expansion and commerce transformation inside Chameleon Collective's diligence-to-exit model. A transformation expense with an end date, not an agency retainer that compounds.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .26 }}>
            <button onClick={scrollToForm} className="btn" style={{
              background: TERRA, color: '#fff', border: 'none',
            }}>
              Bring me your thesis →
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
              The Thesis
            </span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.5rem,3vw,2.1rem)',
              fontWeight: 300, color: '#121212', letterSpacing: '-.015em',
              lineHeight: 1.15, marginBottom: 48, maxWidth: 700,
            }}>
              The agency you hire at entry is the growth that walks out at exit.
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
                  }}>The agency curve</h3>
                  <span style={{
                    fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 12, fontWeight: 300,
                    color: '#ccc', letterSpacing: '.02em',
                  }}>01</span>
                </div>
                <p style={{
                  fontFamily: 'Inter,sans-serif', fontSize: '0.9375rem',
                  color: '#444', lineHeight: 1.7,
                }}>
                  Retainers compound quarter after quarter. The capability is rented. When the agency leaves, the growth leaves with it, and your buyer pays for a dependency.
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
                  }}>The Chameleon curve</h3>
                  <span style={{
                    fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 12, fontWeight: 300,
                    color: '#ccc', letterSpacing: '.02em',
                  }}>02</span>
                </div>
                <p style={{
                  fontFamily: 'Inter,sans-serif', fontSize: '0.9375rem',
                  color: '#444', lineHeight: 1.7,
                }}>
                  The spend has an end date. We transform the function, recruit the permanent team, and internalize the capability. EBITDA improves because we refuse to become overhead. At exit, the business runs itself.
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
              My Seat
            </span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.5rem,3vw,2.1rem)',
              fontWeight: 300, color: '#121212', letterSpacing: '-.015em',
              lineHeight: 1.15, marginBottom: 16, maxWidth: 700,
            }}>
              I own the deals with a new-market or commerce thesis.
            </h2>
            <p style={{
              fontFamily: 'Inter,sans-serif', fontSize: '0.9375rem',
              color: '#666', lineHeight: 1.7, marginBottom: 48, maxWidth: 660,
            }}>
              Chameleon is the machine across the whole deal lifecycle. My seat is the growth thesis I have spent 28 years executing, in both directions across the U.S. and Latin America.
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
                  }}>Cross-border expansion</h3>
                  <p style={{
                    fontFamily: 'Inter,sans-serif', fontSize: '0.9375rem',
                    color: '#444', lineHeight: 1.7,
                  }}>
                    Building brands into new markets, U.S. to Latin America and back. Bauducco's U.S. national launch. Inter&Co's 2022 U.S. entry. The corridor most operators have never worked, in both directions.
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
                  }}>Commerce as measurable growth</h3>
                  <p style={{
                    fontFamily: 'Inter,sans-serif', fontSize: '0.9375rem',
                    color: '#444', lineHeight: 1.7,
                  }}>
                    The e-commerce engine that turns a brand into direct sales. I built the first two U.S. storefronts on VTEX in 2019, two years before its U.S. IPO, and run Amazon and DTC on Shopify and BigCommerce.
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
              Across the Hold Period
            </span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.5rem,3vw,2.1rem)',
              fontWeight: 300, color: '#fff', letterSpacing: '-.015em',
              lineHeight: 1.15, marginBottom: 48,
            }}>
              One partner, from diligence to exit.
            </h2>
          </FadeIn>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2,
            background: 'rgba(255,255,255,.06)',
          }} className="pe-timeline-grid">
            {[
              {
                num: '01',
                title: 'Diligence',
                text: 'Before you wire the money. Chameleon’s CLEAR assessment puts C-level operators into the business and returns a plain read on where the growth blockers are. I add a quantified market-viability layer through Soundcheck Insights, my market-intelligence platform, so an expansion thesis gets a number before you commit capital.',
                featured: true,
              },
              {
                num: '02',
                title: 'The first hundred days',
                text: 'Interim marketing and commerce leadership in the seats that matter, while you search for the permanent hire. The growth engine gets stood up fast.',
              },
              {
                num: '03',
                title: 'The hold period',
                text: 'The expansion and commerce theses executed, not just planned. Brand, DTC, marketplace, and AI-enabled marketing operations, injected exactly where the thesis needs them.',
              },
              {
                num: '04',
                title: 'Exit readiness',
                text: 'We recruit the permanent team, hand off everything we built, and leave. Your buyer finds a self-sustaining business, not a dependency to unwind.',
              },
            ].map((step, i) => (
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
                    }}>Differentiator</span>
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
                The Diligence Edge
              </span>
              <p style={{
                fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
                fontWeight: 300, color: '#121212', lineHeight: 1.6,
                letterSpacing: '-.01em',
              }}>
                Most partners find out if an expansion thesis works after they have paid for it. I put a number on it during diligence. Soundcheck Insights scores cross-border viability and scale readiness, and it plugs straight into CLEAR, so your value-creation plan starts with evidence instead of a hunch.
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
              Proof
            </span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.5rem,3vw,2.1rem)',
              fontWeight: 300, color: '#121212', letterSpacing: '-.015em',
              lineHeight: 1.15, marginBottom: 48,
            }}>
              Chameleon Collective's track record.
            </h2>
          </FadeIn>

          {/* Stats band */}
          <FadeIn delay={0.1}>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 0, marginBottom: 48,
            }} className="pe-stats-grid">
              {[
                { number: '280+', label: 'Proven Specialists' },
                { number: '2,000+', label: 'Transformations Delivered' },
                { number: '6', label: 'Trusted PE Partners' },
              ].map((stat, i) => (
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
              Trusted by
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
                My Work
              </span>
              <p style={{
                fontFamily: 'Inter,sans-serif', fontSize: '0.9375rem',
                color: '#444', lineHeight: 1.7, maxWidth: 700,
              }}>
                Bauducco's U.S. launch, Inter&Co's U.S. market entry, and the first U.S. e-commerce storefronts on VTEX. Brand and commerce outcomes across consumer, fintech, and DTC.
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
                  Get in Touch
                </span>
                <h2 style={{
                  fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.5rem,3vw,2.1rem)',
                  fontWeight: 300, color: '#fff', letterSpacing: '-.015em',
                  lineHeight: 1.15, marginBottom: 20,
                }}>
                  Bring me your thesis.
                </h2>
                <p style={{
                  fontFamily: 'Inter,sans-serif', fontSize: '0.9375rem',
                  color: 'rgba(255,255,255,.5)', lineHeight: 1.7,
                }}>
                  Whether you are mid-diligence or mid-hold, let's talk. I will tell you honestly where we can move the number, and where you would not need me.
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
                  }}>Name *</label>
                  <input style={{
                    width: '100%', padding: '12px 14px',
                    background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)',
                    borderRadius: 2, color: '#fff', outline: 'none',
                    fontFamily: 'Inter,sans-serif', fontSize: '0.9375rem',
                    transition: 'border-color .2s',
                  }}
                    placeholder="Full name"
                    {...register('name', { required: 'Required' })}
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
                  }}>Firm *</label>
                  <input style={{
                    width: '100%', padding: '12px 14px',
                    background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)',
                    borderRadius: 2, color: '#fff', outline: 'none',
                    fontFamily: 'Inter,sans-serif', fontSize: '0.9375rem',
                    transition: 'border-color .2s',
                  }}
                    placeholder="Your firm"
                    {...register('firm', { required: 'Required' })}
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
                  }}>Email *</label>
                  <input type="email" style={{
                    width: '100%', padding: '12px 14px',
                    background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)',
                    borderRadius: 2, color: '#fff', outline: 'none',
                    fontFamily: 'Inter,sans-serif', fontSize: '0.9375rem',
                    transition: 'border-color .2s',
                  }}
                    placeholder="you@firm.com"
                    {...register('email', { required: 'Required', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' } })}
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
                  }}>What's the thesis?</label>
                  <input style={{
                    width: '100%', padding: '12px 14px',
                    background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)',
                    borderRadius: 2, color: '#fff', outline: 'none',
                    fontFamily: 'Inter,sans-serif', fontSize: '0.9375rem',
                    transition: 'border-color .2s',
                  }}
                    placeholder="E.g., LATAM CPG expanding to U.S. retail"
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
                  {formStatus === 'submitting' ? 'Sending...' : 'Start the conversation →'}
                </button>

                {/* Book a call alternative */}
                <p style={{
                  fontFamily: 'Inter,sans-serif', fontSize: 13,
                  color: 'rgba(255,255,255,.35)', marginTop: -4,
                }}>
                  or{' '}
                  <a href="https://calendar.app.google/2oLdDao8pL6GaAjdA" target="_blank" rel="noopener noreferrer" style={{
                    color: TERRA, textDecoration: 'underline', textUnderlineOffset: 3,
                    transition: 'opacity .2s',
                  }}
                    onMouseEnter={e => e.target.style.opacity = '.7'}
                    onMouseLeave={e => e.target.style.opacity = '1'}
                  >book a call directly</a>
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
                      Thanks. I'll be in touch within one business day.
                    </motion.div>
                  )}
                  {formStatus === 'error' && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      style={{
                        background: 'rgba(229,62,62,.08)', border: '1px solid rgba(229,62,62,.25)',
                        padding: '16px 20px', borderRadius: 2,
                        fontFamily: 'Inter,sans-serif', fontSize: '.875rem', color: '#fc8181', lineHeight: 1.6,
                      }}>
                      Something went wrong. Email me directly:{' '}
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
