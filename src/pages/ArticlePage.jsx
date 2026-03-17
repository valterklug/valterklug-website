import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { PageWrapper, FadeIn } from '../components/Animate'
import { getArticleBySlug, loadArticleContent, SOURCE_COLORS } from '../data/articles'

function ArticleContent({ content }) {
  return content.map((block, i) => {
    if (block.tag === 'h2') return <h2 key={i} style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(1.25rem,2.5vw,1.6rem)', fontWeight: 500, color: '#121212', margin: '36px 0 14px', lineHeight: 1.25 }}>{block.text}</h2>
    if (block.tag === 'h3') return <h3 key={i} style={{ fontFamily: 'var(--fd)', fontSize: '1.15rem', fontWeight: 600, color: '#121212', margin: '28px 0 10px', lineHeight: 1.3 }}>{block.text}</h3>
    if (block.tag === 'h4') return <h4 key={i} style={{ fontFamily: 'var(--fd)', fontSize: '1rem', fontWeight: 600, color: '#333', margin: '22px 0 8px', lineHeight: 1.35 }}>{block.text}</h4>
    if (block.tag === 'li') return <li key={i} style={{ fontFamily: 'var(--fb)', fontSize: '1.0625rem', color: '#333', lineHeight: 1.75, marginBottom: 6, marginLeft: 20 }}>{block.text}</li>
    if (block.tag === 'blockquote') return <blockquote key={i} style={{ fontFamily: 'var(--fd)', fontSize: '1.15rem', fontStyle: 'italic', color: '#555', borderLeft: '3px solid var(--orange)', paddingLeft: 20, margin: '24px 0' }}>{block.text}</blockquote>
    return <p key={i} style={{ fontFamily: 'var(--fb)', fontSize: '1.0625rem', color: '#333', lineHeight: 1.75, marginBottom: 18 }}>{block.text}</p>
  })
}

export default function ArticlePage() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!article) { setLoading(false); return }
    loadArticleContent(slug).then(data => {
      setContent(data)
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [slug, article])

  if (!article) {
    return (
      <PageWrapper>
        <section style={{ background: '#1E1E1E', padding: '120px 64px 80px', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--fd)', fontSize: '2rem', fontWeight: 300, color: '#fff' }}>Article not found</h1>
          <Link to="/news" className="btn btn-ghost" style={{ marginTop: 24, display: 'inline-flex' }}>← Back to News</Link>
        </section>
      </PageWrapper>
    )
  }

  const srcColor = SOURCE_COLORS[article.source] || '#EA633F'

  return (
    <PageWrapper>
      {/* Hero */}
      <section style={{ background: '#121212', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '100px 64px 60px', position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <Link to="/news" style={{ fontFamily: 'var(--fd)', fontSize: 12, fontWeight: 500, letterSpacing: '.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 28 }}>
              ← Back to News
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span style={{ fontFamily: 'var(--fd)', fontSize: 10, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: '#fff', background: srcColor, padding: '3px 10px', borderRadius: 2 }}>{article.source}</span>
              <span style={{ fontFamily: 'var(--fb)', fontSize: 13, color: 'rgba(255,255,255,.35)' }}>{article.date}</span>
            </div>
            <h1 style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 300, color: '#fff', lineHeight: 1.12, letterSpacing: '-.02em', marginBottom: 0 }}>{article.title}</h1>
          </FadeIn>
        </div>
      </section>

      {/* Hero Image */}
      {article.img && (
        <section style={{ background: '#000' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <img
              src={article.img}
              alt={article.title}
              style={{ width: '100%', maxHeight: 480, objectFit: 'cover', display: 'block', opacity: 0.9 }}
              loading="lazy"
              onError={e => { e.target.style.display = 'none' }}
            />
          </div>
        </section>
      )}

      {/* Article Body */}
      <section style={{ background: '#fff', padding: '60px 64px 80px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <FadeIn>
            {/* Author byline */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 40, paddingBottom: 24, borderBottom: '1px solid #E8E8E8' }}>
              <img src="/headshot.png" alt="Valter Klug" style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover' }} onError={e => { e.target.style.display = 'none' }} />
              <div>
                <div style={{ fontFamily: 'var(--fd)', fontSize: 14, fontWeight: 500, color: '#121212' }}>Valter Klug</div>
                <div style={{ fontFamily: 'var(--fb)', fontSize: 12, color: '#999' }}>Originally published on {article.source} · {article.date}</div>
              </div>
            </div>

            {/* Content */}
            {loading && (
              <div style={{ textAlign: 'center', padding: '40px 0', color: '#999', fontFamily: 'var(--fb)' }}>Loading article...</div>
            )}
            {!loading && content && (
              <div className="article-body">
                <ArticleContent content={content} />
              </div>
            )}
            {!loading && !content && (
              <div style={{ padding: '40px 0', textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--fb)', fontSize: '1rem', color: '#666', marginBottom: 20 }}>
                  This article was originally published on {article.source}. Read the full article below.
                </p>
                <a href={article.originalUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Read on {article.source} →
                </a>
              </div>
            )}

            {/* View Original button */}
            <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid #E8E8E8', display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
              <a href={article.originalUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: 13 }}>
                View Original on {article.source} →
              </a>
              <Link to="/news" className="btn btn-dark" style={{ fontSize: 13 }}>
                ← All Articles
              </Link>
            </div>
          </FadeIn>
        </div>
        <style>{`
          @media(max-width:768px){
            section[style*='60px 64px']{padding:40px 24px 60px!important}
            section[style*='100px 64px']{padding:80px 24px 48px!important}
          }
        `}</style>
      </section>

      {/* CTA */}
      <div className="cta-strip" style={{ padding: '80px 64px' }}>
        <FadeIn>
          <h2>Want these insights in your inbox?</h2>
          <p>I occasionally share perspectives on international brand expansion and the US market.</p>
        </FadeIn>
        <Link to="/contact" className="btn btn-dark">Get in Touch →</Link>
      </div>
    </PageWrapper>
  )
}
