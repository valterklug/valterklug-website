import { useState, useEffect, useCallback } from 'react'

/* ── CONFIG ── */
const REPO = 'valterklug/valterklug-website'
const FILE_PATH = 'public/articles.json'
const BRANCH = 'main'
const ADMIN_PASS = 'sambarock2025' // Change this!

const SOURCES = ['Forbes', 'Samba Rock', 'LinkedIn', 'Estadão', 'Chameleon Collective', 'Other']
const SOURCE_COLORS = { Forbes: '#B91C1C', 'Samba Rock': '#EA633F', 'Estadão': '#1E40AF', LinkedIn: '#0A66C2', 'Chameleon Collective': '#121212' }

/* ── GITHUB HELPERS ── */
async function ghFetch(path, token, opts = {}) {
  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}?ref=${BRANCH}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json', ...opts.headers },
    ...opts,
  })
  return res
}

async function loadArticles(token) {
  const res = await ghFetch(FILE_PATH, token)
  if (!res.ok) return { articles: [], sha: null }
  const data = await res.json()
  const json = JSON.parse(atob(data.content))
  return { articles: json, sha: data.sha }
}

async function saveArticles(articles, sha, token) {
  const content = btoa(unescape(encodeURIComponent(JSON.stringify(articles, null, 2))))
  const body = { message: `CMS: update articles (${new Date().toISOString().slice(0,10)})`, content, sha, branch: BRANCH }
  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(`GitHub save failed: ${res.status}`)
  const data = await res.json()
  return data.content.sha
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80)
}

/* ── STYLES ── */
const S = {
  page: { fontFamily: 'Inter, system-ui, sans-serif', background: '#f8f8f6', minHeight: '100vh', color: '#121212' },
  container: { maxWidth: 900, margin: '0 auto', padding: '24px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32, paddingBottom: 16, borderBottom: '2px solid #EA633F' },
  h1: { fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 24, fontWeight: 600, margin: 0 },
  card: { background: '#fff', borderRadius: 6, padding: 24, marginBottom: 16, border: '1px solid #e5e5e5' },
  label: { display: 'block', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: '#666', marginBottom: 6 },
  input: { width: '100%', padding: '10px 12px', border: '1px solid #ddd', borderRadius: 4, fontSize: 14, fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' },
  textarea: { width: '100%', padding: '10px 12px', border: '1px solid #ddd', borderRadius: 4, fontSize: 14, fontFamily: 'Inter, sans-serif', minHeight: 300, boxSizing: 'border-box', lineHeight: 1.6, resize: 'vertical' },
  select: { padding: '10px 12px', border: '1px solid #ddd', borderRadius: 4, fontSize: 14, fontFamily: 'Inter, sans-serif', background: '#fff' },
  row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 },
  row3: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 16 },
  btn: { padding: '10px 24px', border: 'none', borderRadius: 4, fontSize: 13, fontWeight: 600, fontFamily: 'IBM Plex Sans, sans-serif', cursor: 'pointer', letterSpacing: '.03em' },
  btnPrimary: { background: '#EA633F', color: '#fff' },
  btnDark: { background: '#121212', color: '#fff' },
  btnGhost: { background: 'transparent', border: '1px solid #ddd', color: '#666' },
  btnDanger: { background: '#fff', border: '1px solid #e53e3e', color: '#e53e3e' },
  badge: (color) => ({ display: 'inline-block', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: '#fff', background: color, padding: '2px 8px', borderRadius: 2 }),
  articleRow: { display: 'flex', alignItems: 'center', gap: 16, padding: '12px 0', borderBottom: '1px solid #f0f0f0' },
  status: { padding: '20px 0', textAlign: 'center', color: '#666', fontSize: 14 },
}

/* ── LOGIN SCREEN ── */
function LoginScreen({ onLogin }) {
  const [pass, setPass] = useState('')
  const [token, setToken] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (pass !== ADMIN_PASS) { setError('Wrong password'); return }
    if (!token.startsWith('github_pat_') && !token.startsWith('ghp_')) { setError('Enter a valid GitHub PAT'); return }
    onLogin(token)
  }

  return (
    <div style={S.page}>
      <div style={{ ...S.container, maxWidth: 420, paddingTop: 80 }}>
        <div style={S.card}>
          <h1 style={{ ...S.h1, marginBottom: 24, textAlign: 'center' }}>Article CMS</h1>
          <div style={{ marginBottom: 16 }}>
            <label style={S.label}>Admin Password</label>
            <input type="password" style={S.input} value={pass} onChange={e => setPass(e.target.value)} placeholder="Enter password" onKeyDown={e => e.key === 'Enter' && handleLogin()} />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={S.label}>GitHub Personal Access Token</label>
            <input type="password" style={S.input} value={token} onChange={e => setToken(e.target.value)} placeholder="github_pat_..." onKeyDown={e => e.key === 'Enter' && handleLogin()} />
            <div style={{ fontSize: 11, color: '#999', marginTop: 4 }}>Needs repo contents write access</div>
          </div>
          {error && <div style={{ color: '#e53e3e', fontSize: 13, marginBottom: 12 }}>{error}</div>}
          <button style={{ ...S.btn, ...S.btnPrimary, width: '100%' }} onClick={handleLogin}>Sign In</button>
        </div>
      </div>
    </div>
  )
}

/* ── IMAGE UPLOAD ── */
async function uploadImageToGitHub(file, slug, token) {
  const filename = slug + '-' + Date.now() + '.' + file.name.split('.').pop().toLowerCase()
  const ghPath = `public/news/${filename}`

  // Read file as base64
  const base64 = await new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result.split(',')[1])
    reader.onerror = reject
    reader.readAsDataURL(file)
  })

  // Check if file already exists
  const checkRes = await fetch(`https://api.github.com/repos/${REPO}/contents/${ghPath}?ref=${BRANCH}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json' },
  })
  const existingSha = checkRes.ok ? (await checkRes.json()).sha : undefined

  // Upload to GitHub
  const body = {
    message: `CMS: upload image ${filename}`,
    content: base64,
    branch: BRANCH,
    ...(existingSha ? { sha: existingSha } : {}),
  }
  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${ghPath}`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(`Image upload failed: ${res.status}`)
  return `/news/${filename}`
}

/* ── ARTICLE FORM ── */
function ArticleForm({ article, onSave, onCancel, token }) {
  const [form, setForm] = useState({
    title: '', source: 'Forbes', date: '', originalUrl: '', img: '', content: '', featured: false, slug: '',
    ...article,
    content: article?.content || '',
  })
  const [uploading, setUploading] = useState(false)
  const [imgPreview, setImgPreview] = useState(article?.img || '')

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  // Auto-generate slug from title
  useEffect(() => {
    if (!article && form.title) set('slug', slugify(form.title))
  }, [form.title, article])

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) { alert('Please select an image file'); return }
    if (file.size > 5 * 1024 * 1024) { alert('Image must be under 5MB'); return }

    // Show local preview immediately
    const localUrl = URL.createObjectURL(file)
    setImgPreview(localUrl)

    setUploading(true)
    try {
      const slug = form.slug || slugify(form.title) || 'article'
      const imgPath = await uploadImageToGitHub(file, slug, token)
      set('img', imgPath)
      setImgPreview(imgPath)
    } catch (err) {
      alert('Upload failed: ' + err.message)
      setImgPreview(form.img)
    }
    setUploading(false)
  }

  const handleSave = () => {
    if (!form.title || !form.source || !form.date) { alert('Title, source and date are required'); return }
    const slug = form.slug || slugify(form.title)
    onSave({ ...form, slug })
  }

  return (
    <div style={S.card}>
      <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 18, fontWeight: 500, marginBottom: 20 }}>
        {article ? 'Edit Article' : 'New Article'}
      </h2>

      <div style={{ marginBottom: 16 }}>
        <label style={S.label}>Title *</label>
        <input style={S.input} value={form.title} onChange={e => set('title', e.target.value)} placeholder="Article title" />
      </div>

      <div style={S.row3}>
        <div>
          <label style={S.label}>Source *</label>
          <select style={S.select} value={form.source} onChange={e => set('source', e.target.value)}>
            {SOURCES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label style={S.label}>Date *</label>
          <input style={S.input} value={form.date} onChange={e => set('date', e.target.value)} placeholder="e.g. Mar 17, 2026" />
        </div>
        <div>
          <label style={S.label}>Slug</label>
          <input style={S.input} value={form.slug} onChange={e => set('slug', e.target.value)} placeholder="auto-generated" />
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={S.label}>Original URL</label>
        <input style={S.input} value={form.originalUrl} onChange={e => set('originalUrl', e.target.value)} placeholder="https://..." />
      </div>

      {/* Hero Image: Upload OR URL */}
      <div style={{ marginBottom: 16 }}>
        <label style={S.label}>Hero Image</label>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          {/* Upload button */}
          <div style={{ flex: '0 0 auto' }}>
            <label style={{
              ...S.btn, ...S.btnDark, display: 'inline-flex', alignItems: 'center', gap: 6,
              opacity: uploading ? 0.5 : 1, pointerEvents: uploading ? 'none' : 'auto',
            }}>
              {uploading ? 'Uploading...' : 'Upload Image'}
              <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
            </label>
            <div style={{ fontSize: 11, color: '#999', marginTop: 4 }}>JPG, PNG, WebP — max 5MB</div>
          </div>
          {/* OR divider */}
          <div style={{ flex: '0 0 auto', padding: '10px 0', fontSize: 12, color: '#999', fontWeight: 500 }}>or</div>
          {/* URL input */}
          <div style={{ flex: 1 }}>
            <input style={S.input} value={form.img} onChange={e => { set('img', e.target.value); setImgPreview(e.target.value) }} placeholder="Paste image URL..." />
          </div>
        </div>
        {/* Preview */}
        {imgPreview && (
          <div style={{ marginTop: 12, borderRadius: 4, overflow: 'hidden', maxHeight: 200, background: '#f0f0f0' }}>
            <img src={imgPreview} alt="Preview" style={{ width: '100%', maxHeight: 200, objectFit: 'cover', display: 'block' }}
              onError={e => { e.target.style.display = 'none' }} />
          </div>
        )}
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ ...S.label, display: 'flex', alignItems: 'center', gap: 8 }}>
          <input type="checkbox" checked={form.featured} onChange={e => set('featured', e.target.checked)} />
          Featured article (shown at the top of Articles page)
        </label>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={S.label}>Article Content</label>
        <textarea
          style={S.textarea}
          value={form.content}
          onChange={e => set('content', e.target.value)}
          placeholder="Paste the full article text here. Use blank lines to separate paragraphs. Lines starting with ## become headings. Lines starting with - become bullet points."
        />
        <div style={{ fontSize: 11, color: '#999', marginTop: 4 }}>
          Paragraphs = blank line between text. Headings = start line with ##. Bullets = start line with -
        </div>
      </div>

      <div style={{ display: 'flex', gap: 12 }}>
        <button style={{ ...S.btn, ...S.btnPrimary }} onClick={handleSave}>
          {article ? 'Update Article' : 'Publish Article'}
        </button>
        <button style={{ ...S.btn, ...S.btnGhost }} onClick={onCancel}>Cancel</button>
      </div>
    </div>
  )
}

/* ── MAIN ADMIN ── */
export default function Admin() {
  const [token, setToken] = useState(null)
  const [articles, setArticles] = useState([])
  const [sha, setSha] = useState(null)
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [view, setView] = useState('list') // list | new | edit
  const [editArticle, setEditArticle] = useState(null)
  const [msg, setMsg] = useState('')

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const { articles: a, sha: s } = await loadArticles(token)
      setArticles(a)
      setSha(s)
    } catch (e) {
      setMsg('Failed to load articles: ' + e.message)
    }
    setLoading(false)
  }, [token])

  useEffect(() => { if (token) load() }, [token, load])

  const handleSave = async (formData) => {
    setSaving(true)
    setMsg('')
    try {
      // Parse content text into structured blocks
      const contentBlocks = parseContent(formData.content)
      const articleData = {
        slug: formData.slug,
        source: formData.source,
        date: formData.date,
        title: formData.title,
        originalUrl: formData.originalUrl || '',
        img: formData.img || '',
        featured: formData.featured || false,
        content: contentBlocks,
      }

      let updated
      if (editArticle) {
        updated = articles.map(a => a.slug === editArticle.slug ? articleData : a)
      } else {
        // Check for duplicate slug
        if (articles.some(a => a.slug === articleData.slug)) {
          setMsg('An article with this slug already exists!')
          setSaving(false)
          return
        }
        updated = [articleData, ...articles]
      }

      const newSha = await saveArticles(updated, sha, token)
      setSha(newSha)
      setArticles(updated)
      setView('list')
      setEditArticle(null)
      setMsg(editArticle ? 'Article updated!' : 'Article published!')
    } catch (e) {
      setMsg('Save failed: ' + e.message)
    }
    setSaving(false)
  }

  const handleDelete = async (slug) => {
    if (!confirm('Delete this article? This cannot be undone.')) return
    setSaving(true)
    try {
      const updated = articles.filter(a => a.slug !== slug)
      const newSha = await saveArticles(updated, sha, token)
      setSha(newSha)
      setArticles(updated)
      setMsg('Article deleted.')
    } catch (e) {
      setMsg('Delete failed: ' + e.message)
    }
    setSaving(false)
  }

  const startEdit = (article) => {
    setEditArticle(article)
    setView('edit')
  }

  if (!token) return <LoginScreen onLogin={setToken} />

  return (
    <div style={S.page}>
      <div style={S.container}>
        <div style={S.header}>
          <h1 style={S.h1}>Article CMS</h1>
          <div style={{ display: 'flex', gap: 8 }}>
            {view !== 'list' && <button style={{ ...S.btn, ...S.btnGhost }} onClick={() => { setView('list'); setEditArticle(null) }}>← Back</button>}
            {view === 'list' && <button style={{ ...S.btn, ...S.btnPrimary }} onClick={() => setView('new')}>+ New Article</button>}
            <a href="/articles" style={{ ...S.btn, ...S.btnGhost, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>View Site →</a>
          </div>
        </div>

        {msg && <div style={{ padding: '10px 16px', background: msg.includes('fail') || msg.includes('error') ? '#fee' : '#efe', borderRadius: 4, marginBottom: 16, fontSize: 13 }}>{msg}</div>}
        {saving && <div style={S.status}>Saving to GitHub...</div>}

        {/* NEW / EDIT */}
        {(view === 'new' || view === 'edit') && (
          <ArticleForm
            article={view === 'edit' ? { ...editArticle, content: contentToText(editArticle.content) } : null}
            onSave={handleSave}
            onCancel={() => { setView('list'); setEditArticle(null) }}
            token={token}
          />
        )}

        {/* LIST */}
        {view === 'list' && (
          <div style={S.card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <span style={{ fontSize: 14, color: '#666' }}>{articles.length} articles</span>
              <button style={{ ...S.btn, ...S.btnGhost, fontSize: 12 }} onClick={load}>↻ Refresh</button>
            </div>
            {loading && <div style={S.status}>Loading from GitHub...</div>}
            {!loading && articles.length === 0 && <div style={S.status}>No articles yet. Click "+ New Article" to add one.</div>}
            {articles.map(a => (
              <div key={a.slug} style={S.articleRow}>
                <span style={S.badge(SOURCE_COLORS[a.source] || '#EA633F')}>{a.source}</span>
                <span style={{ flex: 1, fontSize: 14, fontWeight: 500 }}>{a.title}</span>
                <span style={{ fontSize: 12, color: '#999', whiteSpace: 'nowrap' }}>{a.date}</span>
                {a.featured && <span style={{ fontSize: 10, color: '#EA633F', fontWeight: 600 }}>★</span>}
                <button style={{ ...S.btn, ...S.btnGhost, padding: '4px 12px', fontSize: 11 }} onClick={() => startEdit(a)}>Edit</button>
                <button style={{ ...S.btn, ...S.btnDanger, padding: '4px 12px', fontSize: 11 }} onClick={() => handleDelete(a.slug)}>Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/* ── CONTENT HELPERS ── */
function parseContent(text) {
  if (!text) return []
  if (Array.isArray(text)) return text // already structured
  return text.split(/\n\n+/).map(block => {
    const trimmed = block.trim()
    if (!trimmed) return null
    if (trimmed.startsWith('## ')) return { tag: 'h2', text: trimmed.slice(3).trim() }
    if (trimmed.startsWith('### ')) return { tag: 'h3', text: trimmed.slice(4).trim() }
    if (trimmed.startsWith('- ') || trimmed.startsWith('• ')) return { tag: 'li', text: trimmed.slice(2).trim() }
    if (trimmed.startsWith('> ')) return { tag: 'blockquote', text: trimmed.slice(2).trim() }
    return { tag: 'p', text: trimmed }
  }).filter(Boolean)
}

function contentToText(content) {
  if (!content) return ''
  if (typeof content === 'string') return content
  return content.map(block => {
    if (block.tag === 'h2') return '## ' + block.text
    if (block.tag === 'h3') return '### ' + block.text
    if (block.tag === 'li') return '- ' + block.text
    if (block.tag === 'blockquote') return '> ' + block.text
    return block.text
  }).join('\n\n')
}
