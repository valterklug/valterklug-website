
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'
import { useLocale } from '../context/LocaleContext'

export default function Services() {
  const { t } = useTranslation()
  const { localePath } = useLocale()
  const [open, setOpen] = useState(null)
  const SERVICES = t('services.services', { returnObjects: true })
  return (
    <PageWrapper>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="lbl lbl-orange">{t('services.heroLabel')}</span>
          <h1 className="page-h1" dangerouslySetInnerHTML={{__html: t('services.heroH1')}}></h1>
          <p className="page-sub">{t('services.heroSub')}</p>
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
                          <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:11,fontWeight:500,letterSpacing:'.12em',textTransform:'uppercase',color:'#999',marginBottom:16}}>{t('services.whatThisIncludes')}</div>
                          <div style={{display:'flex',flexDirection:'column',gap:8}}>
                            {s.deliverables.map(d=>(
                              <div key={d} style={{display:'flex',gap:12,alignItems:'flex-start'}}>
                                <span style={{color:'#EA633F',flexShrink:0,marginTop:2,lineHeight:1}}>—</span>
                                <span style={{fontFamily:'Inter,sans-serif',fontSize:'.875rem',color:'#444',lineHeight:1.55}}>{d}</span>
                              </div>
                            ))}
                          </div>
                          <Link to={localePath('/contact')} className="tlink" style={{marginTop:24,display:'inline-flex'}}>{t('services.inquire')}</Link>
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
            <span className="lbl lbl-cream">{t('services.howLabel')}</span>
            <h2 style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'clamp(1.5rem,3vw,2rem)',fontWeight:300,color:'#121212',letterSpacing:'-.015em',lineHeight:1.15,marginBottom:20}}>{t('services.howH2')}</h2>
            <p style={{fontFamily:'Inter,sans-serif',fontSize:'.9375rem',color:'#444',lineHeight:1.8,marginBottom:16}}>{t('services.howP1')}</p>
            <p style={{fontFamily:'Inter,sans-serif',fontSize:'.9375rem',color:'#444',lineHeight:1.8}}>{t('services.howP2')}</p>
            <Link to={localePath('/intelligence')} className="tlink" style={{marginTop:24,display:'inline-flex'}}>{t('services.seeIntel')}</Link>
          </FadeIn>
          <FadeIn delay={.1}>
            <div style={{display:'flex',flexDirection:'column',gap:1,background:'rgba(18,18,18,.1)'}}>
              {t('services.howSteps', { returnObjects: true }).map((step)=>(
                <div key={step.number} style={{background:'#fff',padding:'24px 28px',display:'grid',gridTemplateColumns:'40px 1fr',gap:16}}>
                  <span style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'1.5rem',fontWeight:300,color:'#EA633F',lineHeight:1}}>{step.number}</span>
                  <div>
                    <div style={{fontFamily:'IBM Plex Sans,sans-serif',fontSize:'.9375rem',fontWeight:500,color:'#121212',marginBottom:4}}>{step.title}</div>
                    <div style={{fontFamily:'Inter,sans-serif',fontSize:'.8125rem',color:'#666',lineHeight:1.6}}>{step.desc}</div>
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
          <h2>{t('services.ctaH2')}</h2>
          <p>{t('services.ctaSub')}</p>
        </FadeIn>
        <Link to={localePath('/contact')} className="btn btn-dark">{t('services.ctaBtn')}</Link>
      </div>
    </PageWrapper>
  )
}
