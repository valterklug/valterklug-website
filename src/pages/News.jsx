import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { PageWrapper, FadeIn } from '../components/Animate'
import { fetchArticles, setArticlesSync, SOURCE_COLORS } from '../data/articles'

function ArticleImage({ src, alt, source, style = {} }) {
  const [failed, setFailed] = useState(false)
  const color = SOURCE_COLORS[source] || '#EA633F'

  if (failed || !src) {
    return (
      <div style={{
        width: '100%', height: '100%', minHeight: 'inherit',
        background: `linear-gradient(135deg, ${color}22 0%, ${color}44 100%)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        ...style
      }}>
        <span style={{
          fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 600,
          letterSpacing: '.08em', textTransform: 'uppercase', color: color, opacity: 0.6
        }}>{source}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', ...style }}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

export default function News() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchArticles().then(a => {
      setArticlesSync(a)
      setArticles(a)
      setLoading(false)
    })
  }, [])

  const featured = articles.find(a => a.featured) || articles[0]
  const rest = articles.filter(a => a !== featured)

  if (loading) {
    return (
      <PageWrapper>
        <section className="page-hero">
          <div className="page-hero-inner">
            <span className="lbl lbl-orange">Articles · Insights · Press</span>
            <h1 className="page-h1">Loading articles...</h1>
          </div>
        </section>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="lbl lbl-orange">Articles · Insights · Press</span>
          <h1 className="page-h1">Perspectives on international brand expansion, fractional leadership, and the US market.</h1>
          <p className="page-sub">Published articles, media features, and insights from 28 years in the business.</p>
        </div>
      </section>

      {/* ── FEATURED ── */}
      {featured && (
        <section style={{background:'#EAEAC8',padding:'80px 64px',borderTop:'1px solid rgba(18,18,18,.1)'}}>
          <div style={{maxWidth:1200,margin:'0 auto'}}>
            <FadeIn>
              <span className="lbl lbl-cream">Featured</span>
              <Link to={`/articles/${featured.slug}`} style={{textDecoration:'none',display:'block'}}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:1,background:'rgba(18,18,18,.1)',marginTop:16,cursor:'pointer'}} className="feat-grid">
                  <div style={{background:'#121212',padding:'52px 48px'}}>
                    <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:12}}>
                      <span style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:10,fontWeight:600,letterSpacing:'.08em',textTransform:'uppercase',color:'#fff',background:SOURCE_COLORS[featured.source]||'#EA633F',padding:'3px 8px',borderRadius:2}}>{featured.source}</span>
                    </div>
                    <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:11,fontWeight:500,color:'rgba(255,255,255,.3)',marginBottom:20}}>{featured.date}</div>
                    <h2 style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'clamp(1.3rem,2.5vw,1.75rem)',fontWeight:300,color:'#fff',lineHeight:1.25,marginBottom:20}}>{featured.title}</h2>
                    <span className="tlink tlink-white">Read Article →</span>
                  </div>
                  <div style={{background:'#000',position:'relative',overflow:'hidden',minHeight:300}}>
                    <ArticleImage src={featured.img} alt={featured.title} source={featured.source} style={{opacity:.85}} />
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
          <style>{"@media(max-width:768px){.feat-grid{grid-template-columns:1fr!important}section[style*='80px 64px']{padding:60px 24px!important}}"}</style>
        </section>
      )}

      {/* ── ALL ARTICLES ── */}
      <section style={{background:'#fff',padding:'80px 64px',borderTop:'1px solid #E8E8E8'}}>
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <FadeIn><span className="lbl">All Articles</span></FadeIn>
          <div style={{display:'flex',flexDirection:'column',gap:1,background:'#E8E8E8',marginTop:24}}>
            {rest.map((a,i)=>(
              <FadeIn key={a.slug} delay={i*.03}>
                <Link to={`/articles/${a.slug}`} style={{textDecoration:'none',display:'block'}}>
                  <div style={{background:'#fff',padding:0,display:'grid',gridTemplateColumns:'220px 1fr',gap:0,alignItems:'stretch',transition:'background .2s',cursor:'pointer'}}
                    onMouseEnter={e=>e.currentTarget.style.background='#F5F5F5'}
                    onMouseLeave={e=>e.currentTarget.style.background='#fff'}
                    className="article-row">
                    <div style={{position:'relative',overflow:'hidden',background:'#eee',minHeight:150}}>
                      <ArticleImage src={a.img} alt={a.title} source={a.source} />
                    </div>
                    <div style={{padding:'28px 32px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                      <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
                        <span style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:10,fontWeight:600,letterSpacing:'.08em',textTransform:'uppercase',color:'#fff',background:SOURCE_COLORS[a.source]||'#EA633F',padding:'2px 8px',borderRadius:2}}>{a.source}</span>
                        <span style={{fontFamily:'Inter,sans-serif',fontSize:12,color:'#999'}}>{a.date}</span>
                      </div>
                      <h3 style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'1rem',fontWeight:500,color:'#121212',marginBottom:12,lineHeight:1.35}}>{a.title}</h3>
                      <span className="tlink">Read Article →</span>
                    </div>
                  </div>
                </Link>
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
