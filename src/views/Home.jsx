'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useLocale } from '../context/LocaleContext'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem, HoverLift } from '../components/Animate'

const LOGOS = [
  { name: 'AB-InBev', src: '/logos/ABI.png' },
  { name: 'Conchita Foods', src: '/logos/conchita.png' },
  { name: 'Tramontina', src: '/logos/tramontina.png' },
  { name: 'Natura &Co', src: '/logos/natura.png' },
  { name: 'PepsiCo', src: '/logos/pepsico.png' },
  { name: 'Grendene', src: '/logos/grendene.png' },
  { name: 'Inter&Co', src: '/logos/inter.png' },
  { name: 'The Nature Conservancy', src: '/logos/TNC.png' },
  { name: 'Bauducco', src: '/logos/bauducco.png' },
  { name: 'Nord Anglia', src: '/logos/nordanglia.png' },
  { name: 'Carozzi', src: '/logos/carozzi.png' },
  { name: 'Royal Prestige', src: '/logos/royalprestige.png' },
]

export default function Home() {
  const { t } = useTranslation()
  const { localePath } = useLocale()

  return (
    <PageWrapper>
      {/* ── HERO ── */}
      <section style={{ background: '#121212', padding: '90px 64px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/hero-valter.jpg)', backgroundSize: 'cover', backgroundPosition: 'center right', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #121212 0%, #121212 25%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: '#EA633F' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr auto', gap: 80, alignItems: 'center' }} className="hero-grid">
          <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}
              style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: '#EA633F', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#EA633F', display: 'block', flexShrink: 0 }} />
              {t('home.heroLabel')}
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .08 }}
              style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 300, lineHeight: 1.04, color: '#fff', letterSpacing: '-.025em', marginBottom: 24, maxWidth: 680 }}>
              {t('home.heroH1')}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .16 }}
              style={{ fontFamily: 'Inter,sans-serif', fontSize: '1.0625rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.7, maxWidth: 520, marginBottom: 36 }}>
              {t('home.heroSub')}
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .26 }} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href={localePath('/contact')} className="btn btn-primary">{t('home.ctaPrimary')}</Link>
              <Link href={localePath('/portfolio')} className="btn btn-ghost">{t('home.ctaSecondary')}</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }}
              style={{ display: 'flex', gap: 0, marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,.08)' }}>
              {t('home.stats', { returnObjects: true }).map(({number, label}, i) => (
                <div key={label} style={{ paddingRight: 28, borderRight: i < 2 ? '1px solid rgba(255,255,255,.1)' : 'none', marginRight: i < 2 ? 28 : 0 }}>
                  <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 300, color: '#fff', lineHeight: 1 }}>{number}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .6, delay: .2 }}
            style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)', padding: '32px 36px', maxWidth: 300 }}>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 13, fontStyle: 'italic', color: 'rgba(255,255,255,.7)', lineHeight: 1.7, marginBottom: 20 }}>
              "{t('home.quote')}"
            </div>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 12, fontWeight: 500, color: '#EA633F', letterSpacing: '.05em' }}>{t('home.quoteName')}</div>
            <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, color: 'rgba(255,255,255,.35)', marginTop: 3 }}>{t('home.quoteRole')}</div>
            <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 2 }}>
              {t('home.credentials', { returnObjects: true }).map(({ code, label }) => (
                <div key={code} style={{ background: 'rgba(255,255,255,.04)', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 700, color: '#EA633F', letterSpacing: '.05em', minWidth: 40 }}>{code}</span>
                  <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, color: 'rgba(255,255,255,.4)', lineHeight: 1.4 }}>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <style>{`@media(max-width:900px){.hero-grid{grid-template-columns:1fr!important;gap:40px!important}section[style*="90px 64px"]{padding:70px 24px 60px!important}}`}</style>
      </section>

      {/* ── TRUSTED BY ── */}
      <section style={{ background: '#EAEAC8', padding: '36px 64px', borderTop: '1px solid rgba(18,18,18,.08)', borderBottom: '1px solid rgba(18,18,18,.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(18,18,18,.35)', textAlign: 'center', marginBottom: 20 }}>
            {t('home.trustedBy')}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '24px 32px', alignItems: 'center', justifyItems: 'center' }} className="logos-grid">
            {LOGOS.map(({ name, src }) => (
              <img key={name} src={src} alt={name} title={name} style={{ height: 28, objectFit: 'contain', opacity: 0.55, filter: 'grayscale(100%)', transition: 'opacity .2s, filter .2s' }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.filter = 'grayscale(0%)' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '0.55'; e.currentTarget.style.filter = 'grayscale(100%)' }}
              />
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){section[style*="36px 64px"]{padding:28px 24px!important}.logos-grid{grid-template-columns:repeat(3,1fr)!important}}`}</style>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ background: '#fff', padding: '80px 64px', borderTop: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="lbl">{t('home.servicesLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.6rem,3vw,2.25rem)', fontWeight: 300, color: '#121212', letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 48, maxWidth: 560 }}>
              {t('home.servicesH2')}
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 1, background: '#E8E8E8' }} className="svc-grid-home">
            {t('home.services', { returnObjects: true }).map((s, i) => (
              <FadeIn key={s.num} delay={i * .06}>
                <HoverLift>
                  <Link href={localePath(s.href || '/services')} style={{ display: 'block', background: i % 2 === 0 ? '#fff' : '#F5F5F5', padding: '44px 40px', textDecoration: 'none', transition: 'background .2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#F5F5F5'}
                    onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? '#fff' : '#F5F5F5'}
                  >
                    <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.15em', color: '#EA633F', marginBottom: 16 }}>{s.num}</div>
                    <h3 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: '1.2rem', fontWeight: 600, color: '#121212', marginBottom: 12, lineHeight: 1.25 }}>{s.title}</h3>
                    <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9rem', color: '#666', lineHeight: 1.65, marginBottom: 24 }}>{s.desc}</p>
                    <span className="tlink">{t('home.learnMore')}</span>
                  </Link>
                </HoverLift>
              </FadeIn>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.svc-grid-home{grid-template-columns:1fr!important}section[style*="80px 64px"]{padding:60px 24px!important}}`}</style>
      </section>

      {/* ── MY APPROACH ── */}
      <section style={{ background: '#121212', padding: '80px 64px', borderTop: '4px solid #EA633F' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }} className="approach-grid">
          <FadeIn>
            <span className="lbl lbl-white">{t('home.approachLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 300, color: '#fff', letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 18 }}>
              {t('home.approachH2')}
            </h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.75 }}>
              {t('home.approachSub')}
            </p>
            <Link href={localePath('/about')} className="tlink tlink-white" style={{ marginTop: 28, display: 'inline-flex' }}>{t('home.fullBackground')}</Link>
          </FadeIn>
          <StaggerContainer>
            {t('home.approachItems', { returnObjects: true }).map(({title, desc}) => (
              <StaggerItem key={title}>
                <div style={{ background: 'rgba(255,255,255,.03)', borderLeft: '3px solid #EA633F', padding: '22px 28px', marginBottom: 2, display: 'flex', gap: 20 }}>
                  <div>
                    <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: '1rem', fontWeight: 500, color: '#fff', marginBottom: 6 }}>{title}</div>
                    <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '.875rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.65 }}>{desc}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <style>{`@media(max-width:900px){.approach-grid{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: '#fff', padding: '80px 64px', borderTop: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="lbl">{t('home.testimonialsLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 300, color: '#121212', letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 40, maxWidth: 560 }}>
              {t('home.testimonialsH2')}
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: '#E8E8E8' }} className="testimonials-grid">
            {t('home.testimonials', { returnObjects: true }).map((testimonial, i) => (
              <FadeIn key={testimonial.name} delay={i * .06}>
                <div style={{ background: '#fff', padding: '32px 28px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: '2rem', color: '#EA633F', lineHeight: 1, marginBottom: 12 }}>"</div>
                  <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.875rem', color: '#444', lineHeight: 1.7, flex: 1, marginBottom: 20, fontStyle: 'italic' }}>{testimonial.quote}</p>
                  <div>
                    <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 13, fontWeight: 600, color: '#121212' }}>{testimonial.name}</div>
                    <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, color: '#999', marginTop: 2 }}>{testimonial.title}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.testimonials-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:600px){.testimonials-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── FEATURED CASE ── */}
      <section style={{ background: '#EAEAC8', padding: '80px 64px', borderTop: '1px solid rgba(18,18,18,.1)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="feat-grid">
          <FadeIn>
            <span className="lbl lbl-cream">{t('home.featuredLabel')}</span>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: '#EA633F', marginBottom: 8 }}>{t('home.featuredBrand')}</div>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 400, color: '#121212', letterSpacing: '-.01em', lineHeight: 1.15, marginBottom: 16 }}>
              {t('home.featuredTitle')}
            </h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: '#666', lineHeight: 1.75, marginBottom: 28 }}>
              {t('home.featuredDesc')}
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
              {t('home.featuredTags', { returnObjects: true }).map(tag => (
                <span key={tag} style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', background: 'rgba(18,18,18,.08)', padding: '4px 12px', color: '#121212' }}>{tag}</span>
              ))}
            </div>
            <Link href={localePath('/case-studies')} className="tlink">{t('home.viewCaseStudy')}</Link>
          </FadeIn>
          <FadeIn delay={.12} direction="left">
            <Link href={localePath('/case-studies')} style={{ display: 'block', position: 'relative', overflow: 'hidden', background: '#121212' }}>
              <img src="/cs-bauducco-panettone-thumb.jpg" alt="Bauducco Panettone" style={{ width: '100%', height: '100%', minHeight: 360, objectFit: 'cover', display: 'block', opacity: 0.9, transition: 'opacity .3s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.9'}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 28px', background: 'linear-gradient(transparent, rgba(0,0,0,.7))' }}>
                <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.2rem,2.5vw,1.5rem)', fontWeight: 400, color: '#fff', letterSpacing: '-.01em' }}>{t('home.featuredBrand')}</div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '.8rem', color: 'rgba(255,255,255,.6)', marginTop: 4 }}>{t('home.featuredDesc')}</div>
              </div>
            </Link>
          </FadeIn>
        </div>
        <style>{`@media(max-width:900px){.feat-grid{grid-template-columns:1fr!important;gap:40px!important}section[style*="80px 64px"]{padding:60px 24px!important}}`}</style>
      </section>

      {/* ── CTA ── */}
      <div className="cta-strip" style={{ padding: '80px 64px' }}>
        <FadeIn>
          <h2>{t('home.ctaH2')}</h2>
          <p>{t('home.ctaSub')}</p>
        </FadeIn>
        <Link href={localePath('/contact')} className="btn btn-dark">{t('home.ctaPrimary')}</Link>
      </div>
    </PageWrapper>
  )
}
