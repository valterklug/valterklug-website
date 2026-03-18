
import { Link } from 'react-router-dom'
import { PageWrapper, FadeIn } from '../components/Animate'
import ContactForm from '../components/ContactForm'

const TOPICS = [
  'Fractional CMO — Retainer Engagement',
  'US Market Expansion Strategy',
  'Brand Strategy & Positioning',
  'Digital & Performance Marketing',
  'International Expansion Viability Analysis',
  'Idea Validation',
  'Business Plan Development',
  'AI Virtual Focus Groups',
  'Funding Vetting',
  'CLEAR Assessment (Organizational Diagnostic)',
  'Speaking / Advisory',
  'Other',
]

const PARTNERS = [
  { name:'Chameleon Collective', desc:'Fractional CMO and consulting engagements. An elite collective of independent practitioners who embed directly into client organizations.', url:'chameleoncollective.com', cat:'Fractional Leadership' },
  { name:'Soundcheck Insights', desc:'AI-powered market intelligence platform delivering actionable growth insights in 7–14 days.', url:'soundcheckinsights.com', cat:'Market Intelligence' },
  { name:'Oxford USA', desc:'US entity setup, legal structure, tax planning, and immigration support for Brazilian and Latin American companies entering the US market.', url:'oxfordusa.com', cat:'US Business Setup' },
  { name:'ITS Company', desc:'Trade logistics, customs clearance, freight management, and supply chain operations for brands importing into the US.', url:'itscompany.com.br', cat:'Trade & Logistics' },
  { name:'Global Franchise', desc:'Franchise model design, legal framework, franchisee recruitment, and international franchise launch strategy.', url:'globalfranchise.com.br', cat:'Franchise Expansion' },
  { name:'Go To Market BD', desc:'US retail distribution strategy, broker relationships, shelf placement, and buyer introductions for CPG brands.', url:'gotomarketbd.com', cat:'CPG Retail' },
  { name:'RBA Design', desc:'Strategic brand design, visual identity, and creative direction from Milan, Italy.', url:'rbadesign.it', cat:'Brand Design — Milan' },
  { name:'Native Digital Edge', desc:'Digital marketing strategy, performance campaigns, and growth consulting.', url:'nativedigitaledge.com', cat:'Digital Marketing' },
  { name:'QBCO', desc:'Business consulting, operational strategy, and organizational transformation.', url:'qbco.io', cat:'Business Consulting' },
  { name:'Andeza', desc:'E-commerce strategy, marketplace management, and digital storefront operations for brands selling online.', url:'andeza.com', cat:'E-Commerce & Marketplaces' },
  { name:'Carve Communications', desc:'Public relations, media strategy, and communications consulting.', url:'carvecomms.com', cat:'PR & Communications' },
  { name:'Mobly Media', desc:'Media buying, paid social, and performance marketing for brands scaling in digital channels.', url:'moblymedia.com', cat:'Media & Performance' },
]

export default function Contact() {
  return (
    <PageWrapper>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="lbl lbl-orange">Start a Conversation</span>
          <h1 className="page-h1">Let's figure out if — and how —<br/>I can help.</h1>
          <p className="page-sub">No pitch decks, no agency theater. Just an honest conversation about where you are, where you want to go, and whether I'm the right person to help you get there.</p>
        </div>
      </section>

      <section style={{background:'#fff',padding:'80px 64px',borderTop:'1px solid #E8E8E8'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 340px',gap:80,alignItems:'start'}} className="contact-grid">
          <FadeIn>
            <h2 style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'clamp(1.3rem,2.5vw,1.7rem)',fontWeight:400,color:'#121212',letterSpacing:'-.01em',marginBottom:8,lineHeight:1.25}}>Send a Message</h2>
            <p style={{fontFamily:'Inter,sans-serif',fontSize:'.9375rem',color:'#666',lineHeight:1.7,marginBottom:32}}>Tell me what you're working on. I'll respond within 24 hours — personally.</p>
            <ContactForm topics={TOPICS} buttonLabel="Send Message →" />
          </FadeIn>

          <FadeIn delay={.12}>
            <div style={{display:'flex',flexDirection:'column',gap:2}}>
              <div style={{background:'#121212',padding:'28px'}}>
                <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:10,fontWeight:500,letterSpacing:'.15em',textTransform:'uppercase',color:'#EA633F',marginBottom:16}}>Direct Contact</div>
                <div style={{display:'flex',flexDirection:'column',gap:10}}>
                  <div style={{display:'flex',gap:12,alignItems:'center'}}>
                    <span style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:11,color:'rgba(255,255,255,.25)',width:16}}>✉</span>
                    <a href="mailto:valter.klug@chameleon.co" style={{fontFamily:'Inter,sans-serif',fontSize:13,color:'rgba(255,255,255,.55)',textDecoration:'none',transition:'color .2s'}}
                      onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,.55)'}>valter.klug@chameleon.co</a>
                  </div>
                  <div style={{display:'flex',gap:12,alignItems:'center'}}>
                    <span style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:11,color:'rgba(255,255,255,.25)',width:16}}>in</span>
                    <a href="https://linkedin.com/in/valterklug" target="_blank" rel="noopener noreferrer" style={{fontFamily:'Inter,sans-serif',fontSize:13,color:'rgba(255,255,255,.55)',textDecoration:'none',transition:'color .2s'}}
                      onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,.55)'}>linkedin.com/in/valterklug</a>
                  </div>
                  <div style={{display:'flex',gap:12,alignItems:'center'}}>
                    <span style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:11,color:'rgba(255,255,255,.25)',width:16}}>📍</span>
                    <span style={{fontFamily:'Inter,sans-serif',fontSize:13,color:'rgba(255,255,255,.4)'}}>Miami, Florida, USA</span>
                  </div>
                </div>
              </div>

              <div style={{background:'#F5F5F5',padding:'24px 28px'}}>
                <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:10,fontWeight:500,letterSpacing:'.15em',textTransform:'uppercase',color:'#666',marginBottom:14}}>What to Expect</div>
                {[
                  ['24h Response','I respond to every inquiry within 24 hours — personally, not through an assistant.'],
                  ['No Agency Theater','No pitch decks, no 6-person team for a discovery call. Just a direct conversation.'],
                  ['Clear Scope & Pricing',"If we're a good fit, you'll receive a clear proposal with defined deliverables, timeline, and pricing."],
                ].map(([t,d])=>(
                  <div key={t} style={{marginBottom:14,paddingBottom:14,borderBottom:'1px solid #E8E8E8'}}>
                    <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:13,fontWeight:500,color:'#121212',marginBottom:4}}>{t}</div>
                    <div style={{fontFamily:'Inter,sans-serif',fontSize:12,color:'#666',lineHeight:1.6}}>{d}</div>
                  </div>
                ))}
              </div>

              <div style={{background:'#EA633F',padding:'24px 28px'}}>
                <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:10,fontWeight:500,letterSpacing:'.15em',textTransform:'uppercase',color:'rgba(255,255,255,.6)',marginBottom:12}}>Engagements Via</div>
                <a href="https://chameleoncollective.com" target="_blank" rel="noopener noreferrer" style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:14,fontWeight:500,color:'#fff',textDecoration:'none',display:'block',marginBottom:4}}>Chameleon Collective</a>
                <div style={{fontFamily:'Inter,sans-serif',fontSize:12,color:'rgba(255,255,255,.7)',lineHeight:1.5,marginBottom:10}}>All fractional CMO and consulting engagements are contracted through Chameleon Collective.</div>
                <a href="https://soundcheckinsights.com" target="_blank" rel="noopener noreferrer" style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:13,fontWeight:500,color:'rgba(255,255,255,.8)',textDecoration:'none'}}>soundcheckinsights.com →</a>
              </div>
            </div>
          </FadeIn>
        </div>
        <style>{"@media(max-width:900px){.contact-grid{grid-template-columns:1fr!important;gap:48px!important}section[style*='80px 64px']{padding:60px 24px!important}}"}</style>
      </section>

      <section style={{background:'#F5F5F5',padding:'80px 64px',borderTop:'1px solid #E8E8E8'}}>
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <FadeIn>
            <span className="lbl">Partner Network</span>
            <h2 style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'clamp(1.3rem,2.5vw,1.75rem)',fontWeight:300,color:'#121212',letterSpacing:'-.015em',marginBottom:8,lineHeight:1.2,marginTop:4}}>Not the right fit for me?</h2>
            <p style={{fontFamily:'Inter,sans-serif',fontSize:'.9375rem',color:'#666',lineHeight:1.7,marginBottom:36,maxWidth:560}}>I'll connect you with the right specialist. If your needs fall outside my core expertise, I'll route you to a trusted partner from my signed network — no commissions, no pressure.</p>
          </FadeIn>
          <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:1,background:'#E8E8E8'}} className="partner-grid">
            {PARTNERS.map(p=>(
              <FadeIn key={p.name}>
                <div style={{background:'#fff',padding:'28px 32px'}}>
                  <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:10,fontWeight:500,letterSpacing:'.12em',textTransform:'uppercase',color:'#EA633F',marginBottom:10}}>{p.cat}</div>
                  <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'1rem',fontWeight:500,color:'#121212',marginBottom:8}}>{p.name}</div>
                  <p style={{fontFamily:'Inter,sans-serif',fontSize:'.875rem',color:'#666',lineHeight:1.65,marginBottom:12}}>{p.desc}</p>
                  <a href={'https://'+p.url} target="_blank" rel="noopener noreferrer" className="tlink">{p.url}</a>
                </div>
              </FadeIn>
            ))}
          </div>
          <style>{"@media(max-width:768px){.partner-grid{grid-template-columns:1fr!important}section[style*='80px 64px']{padding:60px 24px!important}}"}</style>
        </div>
      </section>
    </PageWrapper>
  )
}
