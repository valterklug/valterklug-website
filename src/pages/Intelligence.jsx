import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'

const PRODUCTS = [
  {
    num: '01', badge: 'Most Popular', audience: 'International Brands → US Market',
    headline: 'Expand to the US with intelligence: invest without waste.',
    title: 'International Expansion Viability Analysis',
    sub: 'A comprehensive analysis of your brand\'s readiness and potential for the US market. CVE score, competitive landscape, investment estimates, strategic timeline, and competitor map.',
    deliverables: [
      'CVE — Expansion Viability Coefficient: probability of success in the new market combining real-world data, AI analysis, and local expertise',
      'Clear investment estimates: cost projections for marketing, operations, and e-commerce',
      'Strategic timeline: step-by-step action plan from product adaptation to launch campaign',
      'Competitor map: key players, competitive differentials, and white-space opportunities',
      'Detailed viability report (40+ pages) + executive video presentation with Q&A',
    ],
    price: 'US$5,000', delivery: '14 days · Fixed Fee', featured: true,
  },
  {
    num: '02', badge: 'Founders & New Ventures', audience: 'Know Before You Build',
    headline: 'Get a data-driven go/no-go recommendation before committing capital to your next venture.',
    title: 'Idea Validation',
    sub: 'Every year, thousands of founders invest months building products without validating whether real demand exists. I deliver a rigorous, data-backed market validation in just 7 days.',
    deliverables: [
      'Market Demand Signals: real search volume, consumer interest data, and category trend analysis',
      'Competitive Gap Analysis: who\'s already doing this, how well, and exactly where white space exists',
      'Target Customer Profile: demographics, behaviors, and willingness-to-pay signals',
      'Go / No-Go Recommendation: conditions for success, risk factors, and Year 1–3 revenue potential',
      'In-depth report + executive presentation & Q&A session',
    ],
    price: 'US$2,500', delivery: '7 days · Fixed Fee',
  },
  {
    num: '03', badge: 'Pre-Launch & Setup Stage', audience: 'From Vision to Investor-Ready',
    headline: 'A research-backed business plan built for the conversations that matter.',
    title: 'Business Plan Development',
    sub: 'Investors and lenders expect market data, competitive intelligence, and credible revenue projections. I build your complete plan from the ground up — powered by real market research — in 14 days.',
    deliverables: [
      'Market Analysis & Customer Personas: category size, growth drivers, and detailed buyer profiles based on real data — not assumptions',
      'Competitive Landscape & Positioning: direct competitor mapping, differentiation strategy, and the positioning that makes your brand impossible to ignore',
      'Go-To-Market Strategy: channel priorities, launch sequencing, and acquisition strategy designed for your specific market and budget',
      'Revenue Projections (3-Year): conservative, base, and optimistic scenarios with clear assumptions — the financial model investors actually trust',
      'In-depth report + executive presentation & Q&A session',
    ],
    price: 'US$5,000', delivery: '14 days · Fixed Fee',
  },
  {
    num: '04', badge: 'Consumer Intelligence', audience: 'Test Ideas in Days, Not Months',
    headline: 'AI-powered focus groups that deliver real consumer insights — without the cost, delays, or bias.',
    title: 'AI Virtual Focus Groups',
    sub: 'Traditional focus groups cost $15,000+, take weeks to recruit, and suffer from groupthink and loudest-voice bias. I deliver honest, segment-level consumer feedback in days — and run it again whenever you need.',
    deliverables: [
      'Custom AI Personas: 3–10 personas built from exact target demographics — age, income, lifestyle, purchase behavior — mirroring your real audience',
      'Moderated Discussion Transcript: structured, bias-free — every persona responds independently, no groupthink or dominant voices',
      'Executive Summary & Recommendations: key findings distilled into clear strategic recommendations for your team',
      'Reusable Persona Panel: saved and available for future sessions — test new concepts, packaging, or messaging anytime',
    ],
    price: 'From US$1,500/session', delivery: '1–7 days · Per Session',
  },
  {
    num: '05', badge: 'VC · PE · Investment', audience: 'Invest with Intelligence, Not Just Intuition',
    headline: 'Independent market intelligence that gives investment committees the data they need.',
    title: 'Funding Vetting',
    sub: 'Too many investment decisions are made based on pitch decks and founder narratives without independent market validation. I deliver an objective, research-grade assessment of any investment target — with red flags that due diligence alone won\'t surface.',
    deliverables: [
      'Funding Viability Score (0–100%): proprietary assessment that scores the target across 5 critical dimensions, delivering a clear rating',
      '5-Dimension Analysis: Market Opportunity, Competitive Moat, Operational Health, Revenue Quality, and Investment Risk — each scored independently',
      'Red Flag Assessment: the risks, assumptions, and deal-breaker conditions that pitch decks don\'t mention — surfaced through independent research',
      'Competitive Landscape Map: where the target company actually sits in its market and who\'s gaining ground',
      '30–50 page report + IC-ready executive deck',
    ],
    price: 'US$1,500 + US$3,500/report', delivery: '14 days · Volume discounts',
  },
  {
    num: '06', badge: 'CC Methodology', audience: 'CxO Led Evaluation And Recommendations',
    headline: "Chameleon Collective's proprietary organizational diagnostic — applied by an experienced practitioner.",
    title: 'CLEAR Assessment',
    sub: 'I assess your marketing organization across Strategy, Team, and Execution to identify growth blockers, uncover capability gaps, and prioritize the highest-leverage opportunities for improvement.',
    deliverables: [
      'Stakeholder interviews across leadership, marketing, sales, and operations',
      'Scored assessment across Strategy, Team, and Execution dimensions',
      'Growth blocker identification with root cause analysis',
      'Prioritized recommendations with sequencing and resource implications',
      'Executive presentation with a clear roadmap to unlock growth',
    ],
    price: 'Custom Scope', delivery: 'Scoped per engagement',
  },
]

function ProductCard({ p, index }) {
  const [open, setOpen] = useState(false)
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
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: '1rem', fontWeight: 600, color: dark ? '#fff' : '#121212', marginBottom: 3 }}>{p.price}</div>
              <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.08em', color: dark ? 'rgba(255,255,255,.55)' : '#999' }}>{p.delivery}</div>
            </div>
          </div>
          <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.875rem', color: dark ? 'rgba(255,255,255,.7)' : '#555', lineHeight: 1.7, marginBottom: 18, maxWidth: 640 }}>{p.sub}</p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setOpen(!open)}
              style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: `1px solid ${dark ? 'rgba(255,255,255,.3)' : '#E8E8E8'}`, padding: '7px 14px', fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.08em', textTransform: 'uppercase', color: dark ? 'rgba(255,255,255,.7)' : '#666', cursor: 'pointer', borderRadius: 2, transition: 'all .2s' }}>
              <motion.span animate={{ rotate: open ? 90 : 0 }} style={{ display: 'inline-block', fontSize: 14 }}>›</motion.span>
              {open ? 'Hide' : 'View'} Deliverables
            </button>
            <Link to="/contact" style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 12, fontWeight: 500, letterSpacing: '.05em', textTransform: 'uppercase', color: dark ? '#fff' : '#EA633F', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              Request This Service →
            </Link>
          </div>
        </div>

        {/* Expandable deliverables */}
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} style={{ overflow: 'hidden' }}>
              <div style={{ padding: '0 40px 32px', borderTop: `1px solid ${dark ? 'rgba(255,255,255,.15)' : '#E8E8E8'}`, paddingTop: 24 }}>
                <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: dark ? 'rgba(255,255,255,.4)' : '#999', marginBottom: 14 }}>What's Included</div>
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
  return (
    <PageWrapper>
      <section className="page-hero" style={{ borderTop: '4px solid #88E8F0' }}>
        <div className="page-hero-inner">
          <span className="lbl" style={{ color: '#88E8F0' }}>Intelligence Services · Powered by Soundcheck Insights</span>
          <h1 className="page-h1">Every engagement<br />starts with the data.</h1>
          <p className="page-sub">I use AI-powered market research to validate assumptions, size opportunities, and pressure-test ideas — before we invest a dollar in strategy or execution.</p>
          <div style={{ display: 'flex', gap: 32, marginTop: 36, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,.08)', flexWrap: 'wrap' }}>
            {[['6', 'Intelligence services'], ['14 days', 'Full analysis delivery'], ['25+', 'Years expert validation']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.4rem,3vw,1.8rem)', fontWeight: 300, color: '#88E8F0', lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: '#EAEAC8', padding: '80px 64px', borderTop: '1px solid rgba(18,18,18,.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="lbl lbl-cream">How It Works</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 300, color: '#121212', letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 40, maxWidth: 560 }}>
              AI-powered research. Expert-validated intelligence. Delivered in your hands.
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'rgba(18,18,18,.1)' }} className="steps-grid">
            {[
              ['01', 'Intake Call', 'We meet to clarify your goals, market, competitors, and target audience. I submit a structured brief to the Soundcheck platform.', 'Valter + You'],
              ['02', 'AI Research', 'The platform aggregates data across competitors, consumer behavior, market size, regulations, and distribution channels — automatically.', 'Platform'],
              ['03', 'Expert Validation', 'I review every finding with 25 years of cross-cultural market experience — adding context, flagging risks, and shaping strategic implications.', 'Valter'],
              ['04', 'Live Presentation', 'We present findings in a live video session with your team. You leave with a complete report, an executive deck, and clear next steps.', 'Valter + You'],
            ].map(([n, t, d, who]) => (
              <FadeIn key={n} delay={parseInt(n) * .06}>
                <div style={{ background: '#fff', padding: '36px 28px' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: '2rem', fontWeight: 300, color: '#EA633F', lineHeight: 1, marginBottom: 16 }}>{n}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: '1rem', fontWeight: 600, color: '#121212', marginBottom: 10 }}>{t}</div>
                  <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.8125rem', color: '#666', lineHeight: 1.65, marginBottom: 14 }}>{d}</p>
                  <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: '#EA633F' }}>{who}</div>
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
            <span className="lbl">Intelligence Services</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 300, color: '#121212', letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 40, maxWidth: 560 }}>
              Six ways I turn data into competitive advantage.
            </h2>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {PRODUCTS.map((p, i) => <ProductCard key={p.num} p={p} index={i} />)}
          </div>
        </div>
        <style>{`@media(max-width:768px){section[style*="80px 64px"]{padding:60px 24px!important}}`}</style>
      </section>

      {/* Why */}
      <section style={{ background: '#121212', padding: '80px 64px', borderTop: '4px solid #EA633F' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }} className="why-grid">
          <FadeIn>
            <span className="lbl lbl-white">Why This Matters</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 300, color: '#fff', letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 18 }}>Intelligence before strategy. Always.</h2>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '.9375rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.75 }}>
              Too many companies enter new markets on gut feeling, anecdotal research, or outdated reports. Soundcheck changes that — without the agency price tag or the 6-month timeline.
            </p>
          </FadeIn>
          <StaggerContainer>
            {[
              ['Data-Backed Decisions', 'Every recommendation is supported by real market data — competitor analysis, consumer behavior, distribution landscape, regulatory requirements.'],
              ['Expert-Validated Output', 'AI does the aggregation. I apply 25 years of cross-cultural marketing experience to validate, contextualize, and translate findings into strategy.'],
              ['Fast and Affordable', 'Traditional market research firms charge $30,000–$80,000 and take 3–6 months. Soundcheck delivers equivalent depth in 7–14 days at a fraction of the cost.'],
              ['Standalone or Integrated', "Start with an intelligence engagement, then move into a full fractional CMO relationship — or use the output to brief another agency. Your choice."],
            ].map(([t, d]) => (
              <StaggerItem key={t}>
                <div style={{ background: 'rgba(255,255,255,.03)', borderLeft: '3px solid #EA633F', padding: '20px 28px', marginBottom: 2 }}>
                  <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: '1rem', fontWeight: 500, color: '#fff', marginBottom: 6 }}>{t}</div>
                  <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '.875rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.65 }}>{d}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <style>{`@media(max-width:900px){.why-grid{grid-template-columns:1fr!important;gap:48px!important}section[style*="80px 64px"]{padding:60px 24px!important}}`}</style>
      </section>

      <div className="cta-strip" style={{ padding: '80px 64px' }}>
        <FadeIn>
          <h2>Tell me what you need to know.</h2>
          <p>I'll respond within 24 hours with a proposal — or a call to discuss the right starting point.</p>
        </FadeIn>
        <Link to="/contact" className="btn btn-dark">Start an Intelligence Engagement →</Link>
      </div>
    </PageWrapper>
  )
}
