
import { Link } from 'react-router-dom'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'

const TIMELINE = [
  { years:'2001–2003', role:'Interactive Designer', co:'AgenciaClick / Isobar', loc:'São Paulo, BR' },
  { years:'2003–2007', role:'Art Director', co:'Euro RSCG 4D', loc:'Brazil' },
  { years:'2007–2009', role:'Senior Art Director', co:'Sapient Interactive', loc:'London, UK' },
  { years:'2009–2013', role:'Associate Creative Director', co:'SapientNitro', loc:'Miami, US' },
  { years:'2013–2015', role:'ACD / Digital Creative Director', co:'Young & Rubicam (Y&R)', loc:'Miami, US' },
  { years:'2015–2025', role:'Founder & CEO', co:'Samba Rock', loc:'Miami, US' },
  { years:'2025–Now', role:'Fractional Marketing Leader', co:'Chameleon Collective', loc:'Miami, US' },
]

export default function About() {
  return (
    <PageWrapper>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="lbl lbl-orange">About · Background · Credentials</span>
          <h1 className="page-h1">I'm not a consultant who talks about marketing.<br/>I'm the person who does it.</h1>
          <p className="page-sub">28 years. Three continents. From interactive agencies in São Paulo to holding-company shops in London and Miami to building my own boutique — and now operating at the fractional C-suite level.</p>
        </div>
      </section>

      <section style={{background:'#fff',padding:'80px 64px',borderTop:'1px solid #E8E8E8'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 2fr',gap:80,alignItems:'start'}} className="about-grid">
          <FadeIn>
            <span className="lbl">At a Glance</span>
            <div style={{display:'flex',flexDirection:'column',gap:1,background:'#E8E8E8',marginTop:16}}>
              {[['28+','Years of experience'],['3','Countries lived & worked'],['30+','Brands served'],['5+','Major award categories won']].map(([n,l])=>(
                <div key={l} style={{background:'#fff',padding:'20px 24px',display:'flex',alignItems:'center',gap:16}}>
                  <span style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'1.75rem',fontWeight:300,color:'#EA633F',lineHeight:1,minWidth:48}}>{n}</span>
                  <span style={{fontFamily:'Inter,sans-serif',fontSize:'.875rem',color:'#666',lineHeight:1.5}}>{l}</span>
                </div>
              ))}
            </div>
            <div style={{marginTop:24,display:'flex',flexDirection:'column',gap:1,background:'#E8E8E8'}}>
              {[['Forbes','Forbes Business Council'],['GS10K','Goldman Sachs 10,000 Small Businesses'],['2× CL','Cannes Lions Winner'],['Author','Published — A.M.P.']].map(([code,label])=>(
                <div key={code} style={{background:'#F5F5F5',padding:'14px 20px',display:'flex',gap:16,alignItems:'center'}}>
                  <span style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:11,fontWeight:700,color:'#EA633F',minWidth:48}}>{code}</span>
                  <span style={{fontFamily:'Inter,sans-serif',fontSize:'.8125rem',color:'#666'}}>{label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={.1}>
            <span className="lbl">Background</span>
            <p style={{fontFamily:'Inter,sans-serif',fontSize:'1rem',color:'#444',lineHeight:1.8,marginBottom:20}}>
              Brazilian-born. UK-educated. Miami-based. I bring a genuinely multicultural lens to brand strategy — which is exactly why clients hire me to navigate the cultural complexity of entering the US market.
            </p>
            <p style={{fontFamily:'Inter,sans-serif',fontSize:'1rem',color:'#444',lineHeight:1.8,marginBottom:20}}>
              My career spans the full arc of modern marketing — from digital's earliest days at Isobar to holding-company creative direction at Y&R, to building a boutique agency that served major Brazilian and Latin American brands entering the US.
            </p>
            <p style={{fontFamily:'Inter,sans-serif',fontSize:'1rem',color:'#444',lineHeight:1.8,marginBottom:32}}>
              Today I operate as a Fractional CMO through Chameleon Collective — an elite network of independent practitioners who embed directly into client organizations to lead transformation from the inside.
            </p>
            <div style={{background:'#121212',padding:'32px 36px'}}>
              <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:13,fontStyle:'italic',color:'rgba(255,255,255,.7)',lineHeight:1.75,marginBottom:16}}>
                "I don't advise from the outside. I lead from the inside. Every engagement I take, I'm a genuine member of the client's leadership team — accountable to the same results they are."
              </div>
              <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:12,fontWeight:500,color:'#EA633F'}}>— Valter Klug</div>
            </div>
          </FadeIn>
        </div>
        <style>{"@media(max-width:900px){.about-grid{grid-template-columns:1fr!important;gap:40px!important}section[style*='80px 64px']{padding:60px 24px!important}}"}</style>
      </section>

      <section style={{background:'#F5F5F5',padding:'80px 64px',borderTop:'1px solid #E8E8E8'}}>
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <FadeIn>
            <span className="lbl">Career Timeline</span>
            <h2 style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'clamp(1.5rem,3vw,2rem)',fontWeight:300,color:'#121212',letterSpacing:'-.015em',marginBottom:48,lineHeight:1.15}}>A track record built across the world's most demanding markets.</h2>
          </FadeIn>
          <div style={{display:'flex',flexDirection:'column',gap:1,background:'#E8E8E8'}}>
            {TIMELINE.map((t,i)=>(
              <FadeIn key={t.years} delay={i*.05}>
                <div style={{background:i===TIMELINE.length-1?'#121212':'#fff',padding:'24px 32px',display:'grid',gridTemplateColumns:'140px 1fr auto',gap:24,alignItems:'center'}} className="tl-row">
                  <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:12,fontWeight:500,letterSpacing:'.05em',color:i===TIMELINE.length-1?'#EA633F':'#EA633F'}}>{t.years}</div>
                  <div>
                    <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'1rem',fontWeight:500,color:i===TIMELINE.length-1?'#fff':'#121212',marginBottom:3}}>{t.role}</div>
                    <div style={{fontFamily:'Inter,sans-serif',fontSize:'.875rem',color:i===TIMELINE.length-1?'rgba(255,255,255,.5)':'#666'}}>{t.co}</div>
                  </div>
                  <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:11,fontWeight:500,letterSpacing:'.08em',textTransform:'uppercase',color:i===TIMELINE.length-1?'rgba(255,255,255,.35)':'#999',whiteSpace:'nowrap'}}>{t.loc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
          <style>{"@media(max-width:600px){.tl-row{grid-template-columns:1fr!important}}"}</style>
        </div>
      </section>

      <section style={{background:'#121212',padding:'80px 64px',borderTop:'4px solid #EA633F'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:1,background:'rgba(255,255,255,.1)'}} className="cc-grid">
          {[
            ['Embedded Leadership','I operate as a true member of your leadership team — attending your standups, owning your roadmap, accountable to your results.'],
            ['Elite Network Access','Through CC, I bring in world-class practitioners in paid media, content, SEO, data, or creative — without adding agency overhead.'],
            ['Outcome-Oriented Pricing','Engagements structured around deliverables and results — not hours and presentations.'],
          ].map(([t,d])=>(
            <FadeIn key={t}>
              <div style={{background:'#1E1E1E',padding:'40px 36px'}}>
                <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'1rem',fontWeight:500,color:'#fff',marginBottom:12}}>{t}</div>
                <div style={{fontFamily:'Inter,sans-serif',fontSize:'.875rem',color:'rgba(255,255,255,.45)',lineHeight:1.75}}>{d}</div>
              </div>
            </FadeIn>
          ))}
        </div>
        <style>{"@media(max-width:768px){.cc-grid{grid-template-columns:1fr!important}section[style*='80px 64px']{padding:60px 24px!important}}"}</style>
      </section>

      <div className="cta-strip" style={{padding:'80px 64px'}}>
        <FadeIn>
          <h2>Let's see if we're a good fit.</h2>
          <p>No pitch decks, no agency theater. Just a direct conversation about your situation.</p>
        </FadeIn>
        <Link to="/contact" className="btn btn-dark">Start a Conversation →</Link>
      </div>
    </PageWrapper>
  )
}
