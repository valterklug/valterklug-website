import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#1E1E1E', color: '#fff', padding: '52px 64px 32px', borderTop: '3px solid #EA633F' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 48, paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,.08)', marginBottom: 28 }} className="footer-grid">
          <div>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 16, fontWeight: 600, color: '#fff', letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 6 }}>Valter Klug</div>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, color: '#EA633F', letterSpacing: '.2em', textTransform: 'uppercase', marginBottom: 16 }}>Fractional CMO · Miami</div>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: 'rgba(255,255,255,.45)', lineHeight: 1.7 }}>
              28+ years building brands across Brazil, the UK, and the United States. Available as Fractional CMO through Chameleon Collective.
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
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: '#EA633F', marginBottom: 18 }}>Navigation</div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['/', 'Home'],['/about','About'],['/services','What I Do'],['/case-studies','Case Studies'],['/portfolio','Portfolio'],['/intelligence','Intelligence'],['/news','News'],['/contact','Contact']].map(([to, label]) => (
                <Link key={to} to={to} style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: 'rgba(255,255,255,.4)', transition: 'color .2s', textDecoration: 'none' }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.4)'}
                >{label}</Link>
              ))}
            </nav>
          </div>

          <div>
            <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: '#EA633F', marginBottom: 18 }}>Operating Through</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,.7)', marginBottom: 3 }}>Chameleon Collective</div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: 'rgba(255,255,255,.35)', lineHeight: 1.6 }}>Fractional CMO & consulting engagements</div>
                <a href="https://chameleoncollective.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, color: '#EA633F', letterSpacing: '.05em', textDecoration: 'none', display: 'inline-block', marginTop: 4 }}>chameleoncollective.com →</a>
              </div>
              <div>
                <div style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,.7)', marginBottom: 3 }}>Soundcheck Insights</div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: 'rgba(255,255,255,.35)', lineHeight: 1.6 }}>AI-powered market intelligence platform</div>
                <a href="https://soundcheckinsights.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, color: '#EA633F', letterSpacing: '.05em', textDecoration: 'none', display: 'inline-block', marginTop: 4 }}>soundcheckinsights.com →</a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, color: 'rgba(255,255,255,.2)' }}>© 2026 Valter Klug Filho. All rights reserved.</span>
          <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, color: 'rgba(255,255,255,.2)' }}>Miami, Florida · valterklug.com</span>
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
