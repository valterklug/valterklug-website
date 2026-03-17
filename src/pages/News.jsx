import { Link } from 'react-router-dom'
import { PageWrapper, FadeIn } from '../components/Animate'

const ARTICLES = [
  { cat:'Market Entry', date:'January 2026', featured:true,
    title:'5 Mistakes Brazilian Brands Make When Entering the US Market',
    intro:"After helping dozens of brands navigate the world's most competitive consumer market, I keep seeing the same avoidable errors — from timing to pricing to distribution assumptions. Here's what to watch for." },
  { cat:'Fractional CMO', date:'January 2026',
    title:"When Is the Right Time to Hire a Fractional CMO?",
    intro:"Not every company needs a full-time CMO — and not every stage of growth is right for the fractional model either. Here's a practical framework for figuring out which situation you're in." },
  { cat:'AI + Marketing', date:'December 2025',
    title:"How AI Is Changing Market Research — And What That Means for Brand Strategy",
    intro:"The traditional market research industry charges $40K and takes six months. AI-powered platforms can now deliver equivalent depth in two weeks. What does that change about how we build strategy?" },
  { cat:'Culture + Brand', date:'November 2025',
    title:"Brazilian vs. American Consumer Psychology: What Every Brand Needs to Know",
    intro:"The differences go far beyond language. Understanding how American consumers relate to brands, authority, and purchase decisions is fundamental to any successful US market entry strategy." },
  { cat:'CPG', date:'October 2025',
    title:"The US CPG Market in 2026: Trends Every International Brand Needs to Understand",
    intro:"Shelf space is shrinking, DTC is maturing, and private label is winning. Here's how the landscape has shifted — and what it means for brands trying to enter from the outside." },
  { cat:'International Expansion', date:'September 2025',
    title:"Why Most International Brands Underestimate the US Market — And How to Not Be One of Them",
    intro:"The US is not one market. It's fifty — each with distinct retail ecosystems, consumer behaviors, and competitive dynamics. The brands that win understand this before they launch." },
]

export default function News() {
  const [featured, ...rest] = ARTICLES
  return (
    <PageWrapper>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="lbl lbl-orange">News · Insights · Press</span>
          <h1 className="page-h1">Perspectives on international brand expansion, fractional leadership, and the US market.</h1>
          <p className="page-sub">Sharing what I'm learning — from client engagements, industry trends, and 25 years in the business.</p>
        </div>
      </section>

      <section style={{background:'#EAEAC8',padding:'80px 64px',borderTop:'1px solid rgba(18,18,18,.1)'}}>
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <FadeIn>
            <span className="lbl lbl-cream">Featured</span>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:1,background:'rgba(18,18,18,.1)',marginTop:16}} className="feat-grid">
              <div style={{background:'#121212',padding:'52px 48px'}}>
                <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:11,fontWeight:500,letterSpacing:'.12em',textTransform:'uppercase',color:'#EA633F',marginBottom:12}}>{featured.cat}</div>
                <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:11,fontWeight:500,color:'rgba(255,255,255,.3)',marginBottom:20}}>{featured.date}</div>
                <h2 style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'clamp(1.3rem,2.5vw,1.75rem)',fontWeight:300,color:'#fff',lineHeight:1.25,marginBottom:20}}>{featured.title}</h2>
                <p style={{fontFamily:'Inter,sans-serif',fontSize:'.9375rem',color:'rgba(255,255,255,.55)',lineHeight:1.75,marginBottom:28}}>{featured.intro}</p>
                <Link to="/contact" className="tlink tlink-white">Read Article</Link>
              </div>
              <div style={{background:'rgba(18,18,18,.05)',padding:'52px 48px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'clamp(2.5rem,5vw,4rem)',fontWeight:300,color:'rgba(18,18,18,.12)',lineHeight:1,marginBottom:24}}>5</div>
                <p style={{fontFamily:'Inter,sans-serif',fontSize:'.9375rem',color:'#555',lineHeight:1.75}}>The same mistakes appear across almost every market entry engagement I've worked on. Knowing them before you launch is worth far more than discovering them after.</p>
              </div>
            </div>
          </FadeIn>
        </div>
        <style>{"@media(max-width:768px){.feat-grid{grid-template-columns:1fr!important}section[style*='80px 64px']{padding:60px 24px!important}}"}</style>
      </section>

      <section style={{background:'#fff',padding:'80px 64px',borderTop:'1px solid #E8E8E8'}}>
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <FadeIn><span className="lbl">Recent Articles</span></FadeIn>
          <div style={{display:'flex',flexDirection:'column',gap:1,background:'#E8E8E8',marginTop:24}}>
            {rest.map((a,i)=>(
              <FadeIn key={a.title} delay={i*.05}>
                <div style={{background:'#fff',padding:'32px 36px',display:'grid',gridTemplateColumns:'120px 1fr',gap:28,alignItems:'start',transition:'background .2s'}}
                  onMouseEnter={e=>e.currentTarget.style.background='#F5F5F5'}
                  onMouseLeave={e=>e.currentTarget.style.background='#fff'}
                  className="article-row">
                  <div>
                    <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:10,fontWeight:500,letterSpacing:'.12em',textTransform:'uppercase',color:'#EA633F',marginBottom:4}}>{a.cat}</div>
                    <div style={{fontFamily:'Inter,sans-serif',fontSize:12,color:'#999'}}>{a.date}</div>
                  </div>
                  <div>
                    <h3 style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'1rem',fontWeight:500,color:'#121212',marginBottom:10,lineHeight:1.35}}>{a.title}</h3>
                    <p style={{fontFamily:'Inter,sans-serif',fontSize:'.875rem',color:'#666',lineHeight:1.65,marginBottom:16}}>{a.intro}</p>
                    <Link to="/contact" className="tlink">Read More</Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <style>{"@media(max-width:600px){.article-row{grid-template-columns:1fr!important}}"}</style>
        </div>
      </section>

      <div className="cta-strip" style={{padding:'80px 64px'}}>
        <FadeIn>
          <h2>Want these insights in your inbox?</h2>
          <p>I occasionally share perspectives on international brand expansion and the US market. No fluff — only when I have something worth saying.</p>
        </FadeIn>
        <Link to="/contact" className="btn btn-dark">Get in Touch →</Link>
      </div>
    </PageWrapper>
  )
}
