
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLocale } from '../context/LocaleContext'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'

export default function About() {
  const { t } = useTranslation()
  const { localePath } = useLocale()
  const TIMELINE = t('about.timeline', { returnObjects: true })
  const glanceStats = t('about.glanceStats', { returnObjects: true })
  const glanceCredentials = t('about.glanceCredentials', { returnObjects: true })
  const chameleonItems = t('about.chameleonCollectiveItems', { returnObjects: true })

  return (
    <PageWrapper>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="lbl lbl-orange">{t('about.heroLabel')}</span>
          <h1 className="page-h1">{t('about.heroH1')}</h1>
          <p className="page-sub">{t('about.heroSub')}</p>
        </div>
      </section>

      <section style={{background:'#fff',padding:'80px 64px',borderTop:'1px solid #E8E8E8'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 2fr',gap:80,alignItems:'start'}} className="about-grid">
          <FadeIn>
            <span className="lbl">{t('about.glanceLabel')}</span>
            <div style={{display:'flex',flexDirection:'column',gap:1,background:'#E8E8E8',marginTop:16}}>
              {glanceStats.map(({number,label})=>(
                <div key={label} style={{background:'#fff',padding:'20px 24px',display:'flex',alignItems:'center',gap:16}}>
                  <span style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'1.75rem',fontWeight:300,color:'#EA633F',lineHeight:1,minWidth:48}}>{number}</span>
                  <span style={{fontFamily:'Inter,sans-serif',fontSize:'.875rem',color:'#666',lineHeight:1.5}}>{label}</span>
                </div>
              ))}
            </div>
            <div style={{marginTop:24,display:'flex',flexDirection:'column',gap:1,background:'#E8E8E8'}}>
              {glanceCredentials.map(({code,label})=>(
                <div key={code} style={{background:'#F5F5F5',padding:'14px 20px',display:'flex',gap:16,alignItems:'center'}}>
                  <span style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:11,fontWeight:700,color:'#EA633F',minWidth:48}}>{code}</span>
                  <span style={{fontFamily:'Inter,sans-serif',fontSize:'.8125rem',color:'#666'}}>{label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={.1}>
            <span className="lbl">{t('about.bgLabel')}</span>
            <p style={{fontFamily:'Inter,sans-serif',fontSize:'1rem',color:'#444',lineHeight:1.8,marginBottom:20}}>
              {t('about.bgP1')}
            </p>
            <p style={{fontFamily:'Inter,sans-serif',fontSize:'1rem',color:'#444',lineHeight:1.8,marginBottom:20}}>
              {t('about.bgP2')}
            </p>
            <p style={{fontFamily:'Inter,sans-serif',fontSize:'1rem',color:'#444',lineHeight:1.8,marginBottom:32}}>
              {t('about.bgP3')}
            </p>
            <div style={{background:'#121212',padding:'32px 36px'}}>
              <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:13,fontStyle:'italic',color:'rgba(255,255,255,.7)',lineHeight:1.75,marginBottom:16}}>
                "{t('about.bgQuote')}"
              </div>
              <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:12,fontWeight:500,color:'#EA633F'}}>— {t('about.bgQuoteAuthor')}</div>
            </div>
          </FadeIn>
        </div>
        <style>{"@media(max-width:900px){.about-grid{grid-template-columns:1fr!important;gap:40px!important}section[style*='80px 64px']{padding:60px 24px!important}}"}</style>
      </section>

      <section style={{background:'#F5F5F5',padding:'80px 64px',borderTop:'1px solid #E8E8E8'}}>
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <FadeIn>
            <span className="lbl">{t('about.timelineLabel')}</span>
            <h2 style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'clamp(1.5rem,3vw,2rem)',fontWeight:300,color:'#121212',letterSpacing:'-.015em',marginBottom:48,lineHeight:1.15}}>{t('about.timelineH2')}</h2>
          </FadeIn>
          <div style={{display:'flex',flexDirection:'column',gap:1,background:'#E8E8E8'}}>
            {TIMELINE.map((item,i)=>(
              <FadeIn key={item.years} delay={i*.05}>
                <div style={{background:i===TIMELINE.length-1?'#121212':'#fff',padding:'24px 32px',display:'grid',gridTemplateColumns:'140px 1fr auto',gap:24,alignItems:'center'}} className="tl-row">
                  <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:12,fontWeight:500,letterSpacing:'.05em',color:i===TIMELINE.length-1?'#EA633F':'#EA633F'}}>{item.years}</div>
                  <div>
                    <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'1rem',fontWeight:500,color:i===TIMELINE.length-1?'#fff':'#121212',marginBottom:3}}>{item.role}</div>
                    <div style={{fontFamily:'Inter,sans-serif',fontSize:'.875rem',color:i===TIMELINE.length-1?'rgba(255,255,255,.5)':'#666'}}>{item.company}</div>
                  </div>
                  <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:11,fontWeight:500,letterSpacing:'.08em',textTransform:'uppercase',color:i===TIMELINE.length-1?'rgba(255,255,255,.35)':'#999',whiteSpace:'nowrap'}}>{item.location}</div>
                </div>
              </FadeIn>
            ))}
          </div>
          <style>{"@media(max-width:600px){.tl-row{grid-template-columns:1fr!important}}"}</style>
        </div>
      </section>

      <section style={{background:'#121212',padding:'80px 64px',borderTop:'4px solid #EA633F'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:1,background:'rgba(255,255,255,.1)'}} className="cc-grid">
          {chameleonItems.map(({title,desc})=>(
            <FadeIn key={title}>
              <div style={{background:'#1E1E1E',padding:'40px 36px'}}>
                <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'1rem',fontWeight:500,color:'#fff',marginBottom:12}}>{title}</div>
                <div style={{fontFamily:'Inter,sans-serif',fontSize:'.875rem',color:'rgba(255,255,255,.45)',lineHeight:1.75}}>{desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
        <style>{"@media(max-width:768px){.cc-grid{grid-template-columns:1fr!important}section[style*='80px 64px']{padding:60px 24px!important}}"}</style>
      </section>

      <div className="cta-strip" style={{padding:'80px 64px'}}>
        <FadeIn>
          <h2>{t('about.ctaH2')}</h2>
          <p>{t('about.ctaSub')}</p>
        </FadeIn>
        <Link to={localePath('/contact')} className="btn btn-dark">{t('about.ctaBtn')}</Link>
      </div>
    </PageWrapper>
  )
}
