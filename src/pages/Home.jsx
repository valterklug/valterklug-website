import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
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
const SERVICES = [
  { num: '01', title: 'Fractional CMO', desc: 'Embedded marketing leadership at the executive level — strategy, teams, and outcomes.', href: '/services' },
  { num: '02', title: 'US Market Expansion', desc: 'End-to-end brand expansion strategy for companies entering or scaling in the US market.', href: '/services' },
  { num: '03', title: 'Team of Specialists', desc: 'Leading experts in Advertising, E-commerce, Social Media, Digital, and whatever else your company needs to grow in the US or Latin America.', href: '/services' },
  { num: '04', title: 'Market Intelligence', desc: 'AI-powered research and validation through Soundcheck Insights — delivered in 7–14 days.', href: '/intelligence' },
]
const CREDS = [
  { code: 'Forbes', label: 'Former Forbes Business Council' },
  { code: 'GS10K', label: 'Goldman Sachs 10,000 Small Businesses' },
  { code: '2×CL', label: 'Cannes Lions Winner' },
  { code: 'A.M.P.', label: 'Published Author' },
]

export default function Home() {
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
              Fractional CMO · International Brand Expansion · Miami
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .08 }}
              style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 300, lineHeight: 1.04, color: '#fff', letterSpacing: '-.025em', marginBottom: 24, maxWidth: 680 }}>
              I Help Companies<br />Grow and Win in the<br />US Market and Beyond
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .16 }}
              style={{ fontFamily: 'Inter,sans-serif', fontSize: '1.0625rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.7, maxWidth: 520, marginBottom: 36 }}>
              28 years building brands across Brazil, the UK, and the United States. Now available as a Fractional CMO through Chameleon Collective.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .26 }} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">Let's Talk →</Link>
              <Link to="/portfolio" className="btn btn-ghost">See My Work</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }}
              style={{ display: 'flex', gap: 0, marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,.08)' }}>
              {[['28+', 'Yrs Exp.'], ['2×', 'Cannes Lions'], ['30+', 'Brands']].map(([n, l], i) => (
                <div key={l} style={{ paddingRight: 28, borderRight: i < 2 ? '1px solid rgba(255,255,255,.1)' : 'none', marginRight: i < 2 ? 28 : 0 }}>
                  <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 300, color: '#fff', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .6, delay: .2 }}
            style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)', padding: '32px 36px', maxWidth: 300 }}>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 13, fontStyle: 'italic', color: 'rgba(255,255,255,.7)', lineHeight: 1.7, marginBottom: 20 }}>
              "I don't advise from the outside.<br/>I lead from the inside."
            </div>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 12, fontWeight: 500, color: '#EA633F', letterSpacing: '.05em' }}>Valter Klug</div>
            <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, color: 'rgba(255,255,255,.35)', marginTop: 3 }}>Fractional CMO</div>
            <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 2 }}>
              {CREDS.map(({ code, label }) => (
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
            Trusted by Brands Across the Americas, Europe, and Beyond
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
            <span className="lbl">What I Do</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.6rem,3vw,2.25rem)', fontWeight: 300, color: '#121212', letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 48, maxWidth: 560 }}>
              Strategic marketing leadership —<br />without the full-time overhead.
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 1, background: '#E8E8E8' }} className="svc-grid-home">
            {SERVICES.map((s, i) => (
              <FadeIn key={s.num} delay={i * .06}>
                <HoverLift>
                  <Link to={s.href} style={{ display: 'block', background: i % 2 === 0 ? '#fff' : '#F5F5F5', padding: '44px 40px', textDecoration: 'none', transition: 'background .2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#F5F5F5'}
                    onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? '#fff' : '#F5F5F5'}
                  >
                    <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.15em', color: '#EA633F', marginBottom: 16 }}>{s.num}</div>
                    <h3 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: '1.2rem', fontWeight: 600, color: '#121212', marginBottom: 12, lineHeight: 1.25 }}>{s.title}</h3>
                    <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9rem', color: '#666', lineHeight: 1.65, marginBottom: 24 }}>{s.desc}</p>
                    <span className="tlink">Learn More</span>
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
            <span className="lbl lbl-white">My Approach</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 300, color: '#fff', letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 18 }}>
              Operating at the intersection of creative leadership and business outcomes.
            </h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.75 }}>
              Through Chameleon Collective, I work alongside an elite network of independent practitioners — giving clients the depth of a full agency with the accountability of a dedicated leader.
            </p>
            <Link to="/about" className="tlink tlink-white" style={{ marginTop: 28, display: 'inline-flex' }}>Full Background</Link>
          </FadeIn>
          <StaggerContainer>
            {[
              ['Embedded Leadership', 'I operate as a true member of your leadership team — attending your standups, owning your roadmap, and being accountable to your results.'],
              ['Intelligence-First', 'Every engagement starts with data. I use AI-powered market research through Soundcheck Insights to validate assumptions before we invest in strategy or execution.'],
              ['Elite Network Access', 'Through Chameleon Collective, I can bring in world-class practitioners in paid media, content, SEO, data, or creative — without adding agency overhead.'],
              ['Outcome-Oriented', 'Engagements structured around deliverables and results — not hours and presentations.'],
            ].map(([t, d]) => (
              <StaggerItem key={t}>
                <div style={{ background: 'rgba(255,255,255,.03)', borderLeft: '3px solid #EA633F', padding: '22px 28px', marginBottom: 2, display: 'flex', gap: 20 }}>
                  <div>
                    <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: '1rem', fontWeight: 500, color: '#fff', marginBottom: 6 }}>{t}</div>
                    <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '.875rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.65 }}>{d}</div>
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
            <span className="lbl">What Clients Say</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 300, color: '#121212', letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 40, maxWidth: 560 }}>
              Results that speak for themselves.
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: '#E8E8E8' }} className="testimonials-grid">
            {[
              {
                quote: "Valter Klug's creative and strategic work was instrumental in establishing the panettone category in the US, and helping Bauducco to become the leader in the US market.",
                name: 'Erik Volavicius',
                title: 'Marketing Director @ Bauducco Foods',
                bg: '#FFC107',
              },
              {
                quote: "Valter Klug's exceptional work with the Chilean brand Carozzi on Amazon led me to confidently rehire him and his team when I joined Netherlands-based Chrysal.",
                name: 'Andro Mandakovic',
                title: 'Former Marketing & Sales Director at Carozzi and Chrysal',
                bg: '#1E40AF',
              },
              {
                quote: "Valter Klug has been developing our digital presence for 9 years, and his strategies have been key to our brand's growth, both at Amazon and at brick-and-mortar retailers.",
                name: 'Sixto Ferro',
                title: 'CEO @ Conchita Foods',
                bg: '#FFC107',
              },
              {
                quote: "Valter Klug's strategic launch of Forno de Minas in the US, introducing traditional Brazilian cheese bread to American consumers, played a key role in its acquisition by McCain Foods.",
                name: 'Fred Rodrigues',
                title: 'Former Marketing and Sales Director @ Forno de Minas',
                bg: '#F5F5F5',
              },
              {
                quote: "Thanks to Valter Klug's innovative strategies, the beloved Brazilian soda Guarana Antarctica has taken its uniqueness globally, showing great sales and awareness growth, year after year.",
                name: 'Arthur Ervolino',
                title: 'Manager Exports @ AMBEV / AB-InBev',
                bg: '#16A34A',
              },
              {
                quote: "Valter Klug expertly grasped the core of my brand, repositioning it for the US market with a premium focus. His tailored branding strategy is propelling us to new heights.",
                name: 'Cristian Iuliano',
                title: 'Owner and CEO @ Saphirus Air Fresheners',
                bg: '#3B82F6',
              },
            ].map((t, i) => (
              <FadeIn key={t.name} delay={i * .06}>
                <div style={{ background: '#fff', padding: '32px 28px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: '2rem', color: '#EA633F', lineHeight: 1, marginBottom: 12 }}>"</div>
                  <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.875rem', color: '#444', lineHeight: 1.7, flex: 1, marginBottom: 20, fontStyle: 'italic' }}>{t.quote}</p>
                  <div>
                    <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 13, fontWeight: 600, color: '#121212' }}>{t.name}</div>
                    <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, color: '#999', marginTop: 2 }}>{t.title}</div>
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
            <span className="lbl lbl-cream">Featured Case</span>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: '#EA633F', marginBottom: 8 }}>Bauducco</div>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 400, color: '#121212', letterSpacing: '-.01em', lineHeight: 1.15, marginBottom: 16 }}>
              Bauducco — Building Brand Love in the US Market
            </h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: '#666', lineHeight: 1.75, marginBottom: 28 }}>
              Long-term strategic partnership helping Brazil's most iconic bread and cake brand build meaningful presence with American consumers — from brand positioning to seasonal campaign execution across digital and retail.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
              {['Brand Strategy', 'US Expansion', 'Digital Content', 'Retail'].map(t => (
                <span key={t} style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', background: 'rgba(18,18,18,.08)', padding: '4px 12px', color: '#121212' }}>{t}</span>
              ))}
            </div>
            <Link to="/case-studies" className="tlink">View Case Study</Link>
          </FadeIn>
          <FadeIn delay={.12} direction="left">
            <Link to="/case-studies" style={{ display: 'block', position: 'relative', overflow: 'hidden', background: '#121212' }}>
              <img src="/cs-bauducco-panettone-thumb.jpg" alt="Bauducco Panettone" style={{ width: '100%', height: '100%', minHeight: 360, objectFit: 'cover', display: 'block', opacity: 0.9, transition: 'opacity .3s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.9'}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 28px', background: 'linear-gradient(transparent, rgba(0,0,0,.7))' }}>
                <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.2rem,2.5vw,1.5rem)', fontWeight: 400, color: '#fff', letterSpacing: '-.01em' }}>Bauducco</div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '.8rem', color: 'rgba(255,255,255,.6)', marginTop: 4 }}>CPG + US Market Entry + Digital</div>
              </div>
            </Link>
          </FadeIn>
        </div>
        <style>{`@media(max-width:900px){.feat-grid{grid-template-columns:1fr!important;gap:40px!important}section[style*="80px 64px"]{padding:60px 24px!important}}`}</style>
      </section>

      {/* ── CTA ── */}
      <div className="cta-strip" style={{ padding: '80px 64px' }}>
        <FadeIn>
          <h2>Ready to grow in the US market?</h2>
          <p>Let's have a direct, substantive conversation about where you are, where you want to go, and whether I'm the right person to help.</p>
        </FadeIn>
        <Link to="/contact" className="btn btn-dark">Let's Talk →</Link>
      </div>
    </PageWrapper>
  )
}
