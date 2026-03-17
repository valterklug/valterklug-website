
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'

const SERVICES = [
  {
    num:'01', title:'Fractional CMO',
    headline:'The strategic marketing leader you need — without the full-time cost.',
    sub:'I operate as a true member of your leadership team — attending your standups, setting your marketing roadmap, managing agency relationships, and being accountable to your business goals.',
    deliverables:['Marketing strategy and annual planning','Agency and vendor selection, management, and performance oversight','Team structure design and hiring support','Brand positioning and messaging architecture','Reporting frameworks and KPI design'],
    meta:'40–80 hrs/month · Retainer-Based via Chameleon Collective',
  },
  {
    num:'02', title:'US Market Expansion',
    headline:'From intelligence to launch — a complete end-to-end market entry system.',
    sub:'I work with established companies — especially those from Brazil and Latin America — to build a rigorous, data-backed strategy for entering or scaling in the US market. We start with intelligence, not assumptions.',
    deliverables:['Market viability assessment (powered by Soundcheck Insights)','Competitive landscape and audience analysis','Brand localization and cultural adaptation strategy','Channel strategy: retail, DTC, e-commerce, distributor','Launch planning and go-to-market execution'],
    meta:'Fixed-Fee Project-Based · AI-Powered Intelligence',
  },
  {
    num:'03', title:'Team of Specialists',
    headline:'Leading a team of experts in Advertising, E-commerce, Social Media, Digital, and more.',
    sub:'Through Chameleon Collective\'s Deliver model, I assemble and lead a team of specialists across the disciplines your company needs — whether it\'s advertising, e-commerce, social media, digital marketing, or any combination — to drive growth in the US or Latin America.',
    deliverables:['Advertising strategy and creative direction','E-commerce launch and optimization','Social media strategy and community management','Digital marketing across paid, organic, and content','Integrated campaign execution and performance tracking'],
    meta:'Retainer or Project-Based via Chameleon Collective',
  },
  {
    num:'04', title:'Market Intelligence',
    headline:'AI-powered market research and competitive intelligence — delivered in days, not months.',
    sub:'Through Soundcheck Insights, I deliver fast, rigorous market intelligence that helps companies validate opportunities, understand competitive landscapes, and make smarter decisions before investing in new markets.',
    deliverables:['Market viability and opportunity assessment','Competitive landscape and positioning analysis','Consumer sentiment and cultural insights','Category trends and white-space identification','Custom AI-powered research reports'],
    meta:'Fixed-Fee Project · 7–14 Day Delivery',
  },
]

export default function Services() {
  const [open, setOpen] = useState(null)
  return (
    <PageWrapper>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="lbl lbl-orange">Services · Capabilities · How I Work</span>
          <h1 className="page-h1">I don't advise from the outside.<br/>I lead from the inside.</h1>
          <p className="page-sub">Four core service areas — each designed to deliver real marketing outcomes, not slide decks.</p>
        </div>
      </section>

      <section style={{background:'#fff',padding:'80px 64px',borderTop:'1px solid #E8E8E8'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'flex',flexDirection:'column',gap:1,background:'#E8E8E8'}}>
          {SERVICES.map((s,i)=>(
            <FadeIn key={s.num} delay={i*.06}>
              <div style={{background:'#fff'}}>
                <button onClick={()=>setOpen(open===i?null:i)}
                  style={{width:'100%',display:'grid',gridTemplateColumns:'80px 1fr auto',gap:24,padding:'36px 40px',background:'none',border:'none',cursor:'pointer',textAlign:'left',alignItems:'center'}} className="svc-btn">
                  <span style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:11,fontWeight:500,letterSpacing:'.15em',color:'#EA633F'}}>{s.num}</span>
                  <span style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'1.2rem',fontWeight:600,color:'#121212'}}>{s.title}</span>
                  <motion.span animate={{rotate:open===i?45:0}} style={{display:'inline-block',fontFamily:'IBM Plex Sans,sans-serif',fontSize:'1.5rem',fontWeight:300,color:'#EA633F',lineHeight:1,flexShrink:0}}>+</motion.span>
                </button>
                <AnimatePresence>
                  {open===i && (
                    <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.3}} style={{overflow:'hidden'}}>
                      <div style={{padding:'0 40px 40px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:40,borderTop:'1px solid #E8E8E8',paddingTop:32}} className="svc-detail">
                        <div>
                          <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'1rem',fontWeight:500,color:'#121212',marginBottom:12,lineHeight:1.35}}>{s.headline}</div>
                          <p style={{fontFamily:'Inter,sans-serif',fontSize:'.9rem',color:'#666',lineHeight:1.75,marginBottom:20}}>{s.sub}</p>
                          <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:11,fontWeight:500,letterSpacing:'.1em',textTransform:'uppercase',color:'#EA633F',background:'rgba(234,99,63,.06)',padding:'8px 14px',display:'inline-block'}}>{s.meta}</div>
                        </div>
                        <div>
                          <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:11,fontWeight:500,letterSpacing:'.12em',textTransform:'uppercase',color:'#999',marginBottom:16}}>What This Includes</div>
                          <div style={{display:'flex',flexDirection:'column',gap:8}}>
                            {s.deliverables.map(d=>(
                              <div key={d} style={{display:'flex',gap:12,alignItems:'flex-start'}}>
                                <span style={{color:'#EA633F',flexShrink:0,marginTop:2,lineHeight:1}}>—</span>
                                <span style={{fontFamily:'Inter,sans-serif',fontSize:'.875rem',color:'#444',lineHeight:1.55}}>{d}</span>
                              </div>
                            ))}
                          </div>
                          <Link to="/contact" className="tlink" style={{marginTop:24,display:'inline-flex'}}>Inquire About This Service</Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
        <style>{"@media(max-width:768px){.svc-btn{grid-template-columns:60px 1fr auto!important;padding:24px!important}.svc-detail{grid-template-columns:1fr!important;gap:28px!important}section[style*='80px 64px']{padding:60px 24px!important}}"}</style>
      </section>

      <section style={{background:'#EAEAC8',padding:'80px 64px',borderTop:'1px solid rgba(18,18,18,.1)'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center'}} className="how-grid">
          <FadeIn>
            <span className="lbl lbl-cream">How I Work</span>
            <h2 style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'clamp(1.5rem,3vw,2rem)',fontWeight:300,color:'#121212',letterSpacing:'-.015em',lineHeight:1.15,marginBottom:20}}>Intelligence first. Strategy second. Execution always.</h2>
            <p style={{fontFamily:'Inter,sans-serif',fontSize:'.9375rem',color:'#444',lineHeight:1.8,marginBottom:16}}>Every engagement begins with data — not assumptions. Before we invest in strategy or execution, I use AI-powered market research through Soundcheck Insights to validate the landscape.</p>
            <p style={{fontFamily:'Inter,sans-serif',fontSize:'.9375rem',color:'#444',lineHeight:1.8}}>From there, I embed into your organization as a true leader — not an outside advisor — and drive the work from the inside.</p>
            <Link to="/intelligence" className="tlink" style={{marginTop:24,display:'inline-flex'}}>See Intelligence Services</Link>
          </FadeIn>
          <FadeIn delay={.1}>
            <div style={{display:'flex',flexDirection:'column',gap:1,background:'rgba(18,18,18,.1)'}}>
              {[["01","Intake & Intelligence","We start with a structured intake and, where needed, an AI-powered market research report."],["02","Strategy","Grounded in data, I build the marketing strategy, positioning, and roadmap."],["03","Embedded Execution","I lead from the inside — managing vendors, teams, and channels directly."],["04","Measurement","Clear KPIs, regular reporting, and honest assessment of what's working."]].map(([n,t,d])=>(
                <div key={n} style={{background:'#fff',padding:'24px 28px',display:'grid',gridTemplateColumns:'40px 1fr',gap:16}}>
                  <span style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'1.5rem',fontWeight:300,color:'#EA633F',lineHeight:1}}>{n}</span>
                  <div>
                    <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'.9375rem',fontWeight:500,color:'#121212',marginBottom:4}}>{t}</div>
                    <div style={{fontFamily:'Inter,sans-serif',fontSize:'.8125rem',color:'#666',lineHeight:1.6}}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
        <style>{"@media(max-width:900px){.how-grid{grid-template-columns:1fr!important;gap:40px!important}section[style*='80px 64px']{padding:60px 24px!important}}"}</style>
      </section>

      <div className="cta-strip" style={{padding:'80px 64px'}}>
        <FadeIn>
          <h2>Let's build something worth building.</h2>
          <p>Tell me about your situation. I'll tell you honestly if I can help — and how.</p>
        </FadeIn>
        <Link to="/contact" className="btn btn-dark">Start a Conversation →</Link>
      </div>
    </PageWrapper>
  )
}
