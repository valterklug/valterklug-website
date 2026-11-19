'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useIsPresent } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useLocale } from '../context/LocaleContext'
import { PageWrapper, FadeIn, HoverLift } from '../components/Animate'
import { PROJECTS, localizeProject } from '../data/portfolio'

/* Each project has its own address, /portfolio/<id>, so a project can be shared.
   The popup is open whenever the address names a project. The locale prefix is
   optional (/pt, /es, or /en, which the middleware adds behind the scenes). */
const PROJECT_PATH = /^(?:\/(?:en|pt|es))?\/portfolio\/([^/?#]+)\/?$/

function projectIdFromPath(pathname) {
  const m = (pathname || '').match(PROJECT_PATH)
  return m ? decodeURIComponent(m[1]) : null
}

/* ── Helper: extract YouTube/Vimeo embed URL ── */
function getEmbedUrl(url) {
  if (!url) return null
  // YouTube
  let m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&?/]+)/)
  if (m) return `https://www.youtube.com/embed/${m[1]}`
  // Vimeo
  m = url.match(/vimeo\.com\/(\d+)/)
  if (m) return `https://player.vimeo.com/video/${m[1]}`
  return null
}

/* ── Project Modal ── */
function ProjectModal({ project, onClose }) {
  const { t } = useTranslation()

  // Close only once per popup: a double-click or a second Escape during the fade-out
  // would otherwise add a stray history entry.
  const closed = useRef(false)
  const close = useCallback(() => {
    if (closed.current) return
    closed.current = true
    onClose()
  }, [onClose])
  // Re-arm it if the same popup comes back mid-fade (e.g. a quick browser Forward)
  const isPresent = useIsPresent()
  useEffect(() => { if (isPresent) closed.current = false }, [isPresent])

  // Lock the page behind the popup and let Escape close it
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = e => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [close])

  if (!project) return null
  const p = project
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(18,18,18,.92)', backdropFilter: 'blur(12px)', overflowY: 'auto' }}
      onClick={close}
      role="dialog" aria-modal="true" aria-label={p.title}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
        transition={{ duration: .3 }}
        style={{ maxWidth: 960, margin: '80px auto', padding: '0 24px', position: 'relative' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button onClick={close} aria-label={t('portfolio.modal.close')} style={{ position: 'fixed', top: 24, right: 32, background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)', color: '#fff', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 20, fontFamily: 'IBM Plex Sans,sans-serif', fontWeight: 300, zIndex: 10 }}>×</button>

        {/* Header */}
        <div style={{ borderBottom: `3px solid ${p.accent}`, paddingBottom: 32, marginBottom: 32 }}>
          <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: p.accent, marginBottom: 8 }}>{p.client} · {p.year}</div>
          <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.5rem,3vw,2.25rem)', fontWeight: 300, color: '#fff', lineHeight: 1.15, letterSpacing: '-.015em', marginBottom: 12 }}>{p.title}</h2>
          <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)' }}>{p.category}</div>
        </div>

        {/* Video embed(s) */}
        {p.videos && p.videos.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            {p.videos.map((v, i) => {
              const embedUrl = getEmbedUrl(v)
              return embedUrl ? (
                <div key={i} style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginBottom: i < p.videos.length - 1 ? 16 : 0, background: '#000' }}>
                  <iframe src={embedUrl} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={p.title + ' video ' + (i + 1)} />
                </div>
              ) : null
            })}
          </div>
        )}

        {/* Carousel Images */}
        {p.carouselImages && p.carouselImages.length > 0 && (
          <div style={{ marginBottom: 32, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 8 }}>
            {p.carouselImages.map((img, i) => (
              <img key={i} src={img} alt={p.title + ' image ' + (i + 1)} style={{ width: '100%', display: 'block', background: '#1E1E1E' }} loading="lazy" />
            ))}
          </div>
        )}

        {/* Before/After */}
        {p.beforeAfter && (
          <div style={{ marginBottom: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: 8 }}>{t('portfolio.modal.before')}</div>
              <img src={p.beforeAfter.before} alt={t('portfolio.modal.before')} style={{ width: '100%', display: 'block' }} loading="lazy" />
            </div>
            <div>
              <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: p.accent, marginBottom: 8 }}>{t('portfolio.modal.after')}</div>
              <img src={p.beforeAfter.after} alt="After" style={{ width: '100%', display: 'block' }} loading="lazy" />
            </div>
          </div>
        )}

        {/* PDFs */}
        {p.pdfs && p.pdfs.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: 12 }}>{t('portfolio.modal.documents')}</div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {p.pdfs.map((pdf, i) => (
                <a key={i} href={pdf.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 12, fontWeight: 500, color: p.accent, padding: '8px 16px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  {pdf.title} →
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, alignItems: 'start' }} className="modal-grid">
          <div>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: 'rgba(255,255,255,.65)', lineHeight: 1.8 }}>{p.description}</p>
            {p.awards && p.awards.length > 0 && (
              <div style={{ marginTop: 24, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {p.awards.map((a, i) => (
                  <span key={i} style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', background: 'rgba(234,99,63,.15)', color: '#EA633F', padding: '5px 12px' }}>🏆 {a}</span>
                ))}
              </div>
            )}
          </div>
          <div style={{ background: 'rgba(255,255,255,.03)', padding: '24px 28px', borderLeft: `3px solid ${p.accent}` }}>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: 16 }}>{t('portfolio.modal.credits')}</div>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,.5)', marginBottom: 4 }}>{t('portfolio.modal.client')}: <span style={{ color: '#fff' }}>{p.client}</span></div>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,.5)', marginBottom: 16 }}>{t('portfolio.modal.agency')}: <span style={{ color: '#fff' }}>{p.agency}</span></div>
            {p.roles.map((r, i) => (
              <div key={i} style={{ marginBottom: 10, paddingBottom: 10, borderBottom: i < p.roles.length - 1 ? '1px solid rgba(255,255,255,.06)' : 'none' }}>
                <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: 2 }}>{r.title}</div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: 'rgba(255,255,255,.6)' }}>{r.names.join(', ')}</div>
              </div>
            ))}
          </div>
        </div>

        <style>{"@media(max-width:768px){.modal-grid{grid-template-columns:1fr!important;gap:24px!important}}"}</style>
      </motion.div>
    </motion.div>
  )
}

/* ── PORTFOLIO PAGE ── */
export default function Portfolio() {
  const { t } = useTranslation()
  const { localePath } = useLocale()
  const pathname = usePathname()
  const [filter, setFilter] = useState('all')

  const localizedProjects = PROJECTS.map(p => localizeProject(p, t))
  const selectedId = projectIdFromPath(pathname)
  const selected = selectedId ? localizedProjects.find(p => p.id === selectedId) || null : null

  const agencies = [...new Set(PROJECTS.map(p => p.agency))]
  const filtered = filter === 'all' ? localizedProjects : localizedProjects.filter(p => p.agency === filter)

  // Open the popup and put the project's own address in the browser bar.
  // Cmd/Ctrl/Shift/middle-click keep the link's normal behaviour (open the project in a new tab).
  // The history entry remembers it was opened from the grid (Next.js keeps custom history state).
  const openProject = (e, id) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    window.history.pushState({ fromGrid: true }, '', localePath(`/portfolio/${id}`))
  }

  // Back to /portfolio: opened from the grid, step back so the browser's Back button stays
  // in step; arrived on a shared link, go forward to the grid.
  const closeProject = useCallback(() => {
    if (window.history.state?.fromGrid) window.history.back()
    else window.history.pushState(null, '', localePath('/portfolio'))
  }, [localePath])

  // Keep the browser tab's title in step with the popup (same wording as the server-side titles)
  const selectedTitle = selected?.title
  const gridTitle = t('portfolio.heroH1').replace(/<[^>]*>/g, '').replace(/\n/g, ' ')
  useEffect(() => {
    document.title = `${selectedTitle || gridTitle} — Valter Klug`
  }, [selectedTitle, gridTitle])

  return (
    <>
    <PageWrapper>
      {/* Hero */}
      <section className="page-hero" style={{ borderTop: '4px solid #88E8F0' }}>
        <div className="page-hero-inner">
          <span className="lbl" style={{ color: '#88E8F0' }}>{t('portfolio.heroLabel')}</span>
          <h1 className="page-h1">{t('portfolio.heroH1')}</h1>
          <p className="page-sub">{t('portfolio.heroSub')}</p>
          <div style={{ display: 'flex', gap: 32, marginTop: 36, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,.08)', flexWrap: 'wrap' }}>
            {[['20+', t('portfolio.statsProjects')], ['12+', t('portfolio.statsClients')], ['3', t('portfolio.statsAgencies')]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.4rem,3vw,1.8rem)', fontWeight: 300, color: '#88E8F0', lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section style={{ background: '#EAEAC8', padding: '20px 64px', borderTop: '1px solid rgba(18,18,18,.08)', borderBottom: '1px solid rgba(18,18,18,.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(18,18,18,.4)' }}>{t('portfolio.filterBy')}</span>
          {['all', ...agencies].map(a => (
            <button key={a} onClick={() => setFilter(a)}
              style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.06em', padding: '6px 14px', background: filter === a ? '#121212' : 'transparent', color: filter === a ? '#fff' : '#666', border: filter === a ? 'none' : '1px solid rgba(18,18,18,.15)', cursor: 'pointer', textTransform: a === 'all' ? 'uppercase' : 'none', transition: 'all .2s' }}>
              {a === 'all' ? t('portfolio.filterAll') : a}
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <section style={{ background: '#F5F5F5', padding: '80px 64px', borderTop: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, background: '#E8E8E8' }} className="portfolio-grid">
            {filtered.map((p, i) => (
              <FadeIn key={p.id} delay={i * .04}>
                <HoverLift>
                  <a href={localePath(`/portfolio/${p.id}`)} onClick={e => openProject(e, p.id)}
                    style={{ display: 'block', background: '#fff', cursor: 'pointer', overflow: 'hidden', transition: 'background .2s', color: 'inherit', textDecoration: 'none' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#FAFAFA'}
                    onMouseLeave={e => e.currentTarget.style.background = '#fff'}
                  >
                    {/* Thumbnail */}
                    <div style={{ position: 'relative', paddingBottom: '56%', overflow: 'hidden', background: '#121212' }}>
                      <img src={p.thumbnail} alt={p.title} loading="lazy"
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .4s', opacity: .9 }}
                        onMouseEnter={e => e.target.style.transform = 'scale(1.03)'}
                        onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                      />
                      {/* Play icon overlay for video projects */}
                      {p.videos && p.videos.length > 0 && (
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,.3)', opacity: 0, transition: 'opacity .3s' }}
                          onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                          onMouseLeave={e => e.currentTarget.style.opacity = '0'}
                        >
                          <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(234,99,63,.85)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: 0, height: 0, borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderLeft: '14px solid #fff', marginLeft: 3 }} />
                          </div>
                        </div>
                      )}
                      {/* Accent bar at bottom */}
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: p.accent }} />
                    </div>
                    {/* Card info */}
                    <div style={{ padding: '24px 28px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                        <span style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, color: '#666' }}>{p.client}</span>
                        <span style={{ color: '#ccc' }}>·</span>
                        <span style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, color: '#999' }}>{p.year}</span>
                      </div>
                      <h3 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(.95rem,1.5vw,1.1rem)', fontWeight: 500, color: '#121212', lineHeight: 1.3, marginBottom: 10 }}>{p.title}</h3>
                      <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: p.accent }}>{p.category.replace(/\+/g, ' + ')}</div>
                      <div style={{ marginTop: 16, fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 12, fontWeight: 500, letterSpacing: '.05em', textTransform: 'uppercase', color: '#EA633F', display: 'flex', alignItems: 'center', gap: 4 }}>
                        {t('portfolio.viewProject')} <span>→</span>
                      </div>
                    </div>
                  </a>
                </HoverLift>
              </FadeIn>
            ))}
          </div>
          <style>{"@media(max-width:768px){.portfolio-grid{grid-template-columns:1fr!important}section[style*='80px 64px']{padding:60px 24px!important}}"}</style>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-strip" style={{ padding: '80px 64px' }}>
        <FadeIn>
          <h2>{t('portfolio.ctaH2')}</h2>
          <p>{t('portfolio.ctaSub')}</p>
        </FadeIn>
        <Link href={localePath('/contact')} className="btn btn-dark">{t('nav.cta')}</Link>
      </div>
    </PageWrapper>

    {/* Modal — opened by the address. It sits outside PageWrapper so the page's fade-in
        (opacity + transform) can't dim it or pin it under the menu on a shared link.
        initial={false}: on a shared link it is already open, no fade-in. */}
    <AnimatePresence initial={false}>
      {selected && <ProjectModal key={selected.id} project={selected} onClose={closeProject} />}
    </AnimatePresence>
    </>
  )
}
