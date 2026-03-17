import { Link } from 'react-router-dom'
import { PageWrapper, FadeIn, HoverLift } from '../components/Animate'

const CASES = [
  { tag:'Grupo Bimbo · Bauducco', code:'BAUDUCCO', category:'CPG + US Market Entry + Digital', title:"Bauducco — Building Brand Love in the US Market", desc:"Long-term strategic partnership helping Brazil's most iconic bread and cake brand build meaningful presence with American consumers — from brand positioning to seasonal campaign execution across digital and retail.", tags:['Brand Strategy','US Expansion','Digital Content','Retail'], bg:'#1E1E1E', accent:'#EA633F', featured:true },
  { tag:'PepsiCo · KeroCoco', code:'KEROCOCO', category:'CPG + Brand Launch + Social Media', title:"KeroCoco / PepsiCo — Launching a Natural Coconut Water Brand", desc:"Go-to-market strategy and brand identity for PepsiCo's premium coconut water brand entering the competitive US natural beverages space — positioning it against category giants.", tags:['Brand Launch','Go-to-Market','Social Media','Influencer'], bg:'#0F2040', accent:'#88E8F0' },
  { tag:'Dr Pepper / Keurig · Tropical Fantasy', code:'TROPICAL', category:'CPG + Urban Marketing + Social', title:"Tropical Fantasy — Urban Brand Activation", desc:"Multicultural digital marketing strategy for one of New York's most iconic urban beverage brands — connecting with Hispanic and Black consumers through culture-first content and social media.", tags:['Multicultural','Urban Marketing','Social Strategy','Content'], bg:'#2D1B69', accent:'#E8EB74' },
]

export default function CaseStudies() {
  return (
    <PageWrapper>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="lbl lbl-orange">Case Studies · Portfolio · Results</span>
          <h1 className="page-h1">25 years of work.<br/>A selection of the cases that defined it.</h1>
          <p className="page-sub">From global CPG giants to challenger brands — strategic marketing leadership that moved culture and delivered measurable business outcomes.</p>
        </div>
      </section>

      <section style={{background:'#F5F5F5',padding:'80px 64px',borderTop:'1px solid #E8E8E8'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'flex',flexDirection:'column',gap:2}}>
          {CASES.map((c,i)=>(
            <FadeIn key={c.code} delay={i*.07}>
              <HoverLift>
                <div style={{background:c.bg,padding:c.featured?'56px 52px':'44px 48px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:48,alignItems:'center',borderLeft:`4px solid ${c.accent}`}} className="case-row">
                  <div>
                    <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:11,fontWeight:500,letterSpacing:'.12em',textTransform:'uppercase',color:c.accent,marginBottom:12}}>{c.tag}</div>
                    <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'clamp(1.3rem,2.5vw,1.8rem)',fontWeight:c.featured?300:400,color:'#fff',lineHeight:1.2,marginBottom:14}}>{c.title}</div>
                    <p style={{fontFamily:'Inter,sans-serif',fontSize:'.9rem',color:'rgba(255,255,255,.5)',lineHeight:1.7,marginBottom:20}}>{c.desc}</p>
                    <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:24}}>
                      {c.tags.map(t=>(
                        <span key={t} style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:10,fontWeight:500,letterSpacing:'.1em',textTransform:'uppercase',background:'rgba(255,255,255,.08)',padding:'4px 10px',color:'rgba(255,255,255,.6)'}}>{t}</span>
                      ))}
                    </div>
                    <Link to="/contact" className="tlink tlink-white">Get in Touch</Link>
                  </div>
                  <div style={{display:'flex',flexDirection:'column',gap:12}}>
                    <div style={{background:'rgba(255,255,255,.05)',padding:'28px 32px'}}>
                      <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'clamp(1.8rem,4vw,3rem)',fontWeight:300,color:c.accent,lineHeight:1,marginBottom:8}}>{c.code}</div>
                      <div style={{fontFamily:'Inter,sans-serif',fontSize:'.8125rem',color:'rgba(255,255,255,.35)',lineHeight:1.5}}>{c.category}</div>
                    </div>
                  </div>
                </div>
              </HoverLift>
            </FadeIn>
          ))}
        </div>
        <style>{"@media(max-width:768px){.case-row{grid-template-columns:1fr!important;gap:28px!important}section[style*='80px 64px']{padding:60px 24px!important}}"}</style>
      </section>

      <section style={{background:'#121212',padding:'80px 64px',borderTop:'1px solid rgba(255,255,255,.06)'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 2fr',gap:80,alignItems:'start'}} className="brands-grid">
          <FadeIn>
            <span className="lbl lbl-white">Also Worked With</span>
            <h2 style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'clamp(1.4rem,2.5vw,1.8rem)',fontWeight:300,color:'#fff',letterSpacing:'-.015em',lineHeight:1.15,marginBottom:16}}>25+ years across some of the world's most recognized brands.</h2>
            <p style={{fontFamily:'Inter,sans-serif',fontSize:'.9rem',color:'rgba(255,255,255,.45)',lineHeight:1.75}}>My track record spans major global brands, Brazilian market leaders, and challenger brands entering competitive new markets.</p>
          </FadeIn>
          <FadeIn delay={.1}>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:1,background:'rgba(255,255,255,.08)'}} className="brand-grid">
              {['AB-InBev','Natura &Co','PepsiCo','Tramontina','Grendene','Inter&Co','Conchita Foods','Microsoft','AT&T','Coca-Cola','Nokia','Intel'].map(b=>(
                <div key={b} style={{background:'#1E1E1E',padding:'20px 24px',fontFamily:'IBM Plex Sans,sans-serif',fontSize:13,fontWeight:500,color:'rgba(255,255,255,.45)',letterSpacing:'.02em'}}>{b}</div>
              ))}
            </div>
          </FadeIn>
        </div>
        <style>{"@media(max-width:900px){.brands-grid{grid-template-columns:1fr!important;gap:40px!important}.brand-grid{grid-template-columns:1fr 1fr!important}}"}</style>
      </section>

      <div className="cta-strip" style={{padding:'80px 64px'}}>
        <FadeIn>
          <h2>Ready to build your next case study?</h2>
          <p>Let's talk about your brand, your market, and what winning in the US looks like for you.</p>
        </FadeIn>
        <Link to="/contact" className="btn btn-dark">Let's Talk →</Link>
      </div>
    </PageWrapper>
  )
}
