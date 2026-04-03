import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLocale } from '../context/LocaleContext'

export default function Footer() {
  const { t } = useTranslation()
  const { localePath } = useLocale()

  return (
    <footer style={{ background: '#1E1E1E', color: '#fff', padding: '52px 64px 32px', borderTop: '3px solid #EA633F' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 48, paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,.08)', marginBottom: 28 }} className="footer-grid">
          <div>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 16, fontWeight: 600, color: '#fff', letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 6 }}>{t('footer.name')}</div>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, color: '#EA633F', letterSpacing: '.2em', textTransform: 'uppercase', marginBottom: 16 }}>{t('footer.subtitle')}</div>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: 'rgba(255,255,255,.45)', lineHeight: 1.7 }}>
              {t('footer.bio')}
            </p>
            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="mailto:valter.klug@chameleon.co" style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: 'rgba(255,255,255,.4)', transition: 'color .2s', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.4)'}
              >valter.klug@chameleon.co</a>
              <a href="https://linkedin.com/in/valterklug" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: 'rgba(255,255,255,.4)', transition: 'color .2s', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.4)'}
              >linkedin.com/in/valterklug</a>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: '#EA633F', marginBottom: 18 }}>{t('footer.navigationTitle')}</div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['/', 'footer.navigationLinks.home'],['/about','footer.navigationLinks.about'],['/services','footer.navigationLinks.services'],['/case-studies','footer.navigationLinks.caseStudies'],['/portfolio','footer.navigationLinks.portfolio'],['/intelligence','footer.navigationLinks.intelligence'],['/articles','footer.navigationLinks.articles'],['/contact','footer.navigationLinks.contact']].map(([to, labelKey]) => (
                <Link key={to} to={localePath(to)} style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: 'rgba(255,255,255,.4)', transition: 'color .2s', textDecoration: 'none' }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.4)'}
                >{t(labelKey)}</Link>
              ))}
            </nav>
          </div>

          <div>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: '#EA633F', marginBottom: 18 }}>{t('footer.operatingThroughTitle')}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,.7)', marginBottom: 3 }}>Chameleon Collective</div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: 'rgba(255,255,255,.35)', lineHeight: 1.6 }}>{t('footer.chameleonCollective')}</div>
                <a href="https://chameleoncollective.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, color: '#EA633F', letterSpacing: '.05em', textDecoration: 'none', display: 'inline-block', marginTop: 4 }}>chameleoncollective.com →</a>
              </div>
              <div>
                <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,.7)', marginBottom: 3 }}>Soundcheck Insights</div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: 'rgba(255,255,255,.35)', lineHeight: 1.6 }}>{t('footer.soundcheckInsights')}</div>
                <a href="https://soundcheckinsights.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, color: '#EA633F', letterSpacing: '.05em', textDecoration: 'none', display: 'inline-block', marginTop: 4 }}>soundcheckinsights.com →</a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, color: 'rgba(255,255,255,.2)' }}>{t('footer.copyright')}</span>
          <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, color: 'rgba(255,255,255,.2)' }}>{t('footer.location')}</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          footer { padding: 40px 24px 24px !important; }
        }
      `}</style>
    </footer>
  )
}
