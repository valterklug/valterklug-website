import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'

// ── FormSubmit.co — sends to valter.klug@chameleon.co ──
const FORMSUBMIT_EMAIL = 'valter.klug@chameleon.co'

export default function ContactForm({ topics, buttonLabel = 'Send Message →', dark = false }) {
  const [status, setStatus] = useState('idle')
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setStatus('submitting')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: `New inquiry from ${data.name} — valterklug.com`,
          _template: 'table',
        }),
      })
      if (res.ok) { setStatus('success'); reset() }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const bg = dark ? 'rgba(255,255,255,.06)' : '#F5F5F5'
  const border = dark ? 'rgba(255,255,255,.12)' : '#E8E8E8'
  const textColor = dark ? '#fff' : '#121212'
  const labelColor = dark ? 'rgba(255,255,255,.45)' : '#666'

  const field = {
    width: '100%', padding: '12px 14px',
    background: bg, border: `1px solid ${border}`,
    borderRadius: 2, color: textColor, outline: 'none',
    fontFamily: 'Inter,sans-serif', fontSize: '0.9375rem',
    transition: 'border-color .2s',
    WebkitAppearance: 'none',
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Honeypot for spam protection */}
      <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-grid-2">
        <div>
          <label style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: labelColor, display: 'block', marginBottom: 6 }}>Your Name *</label>
          <input style={field} placeholder="Full name"
            {...register('name', { required: 'Required' })}
            onFocus={e => e.target.style.borderColor = '#EA633F'}
            onBlur={e => e.target.style.borderColor = border}
          />
          {errors.name && <span style={{ fontFamily: 'Inter,sans-serif', fontSize: '.75rem', color: '#e53e3e', marginTop: 4, display: 'block' }}>{errors.name.message}</span>}
        </div>
        <div>
          <label style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: labelColor, display: 'block', marginBottom: 6 }}>Email *</label>
          <input type="email" style={field} placeholder="you@company.com"
            {...register('email', { required: 'Required', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' } })}
            onFocus={e => e.target.style.borderColor = '#EA633F'}
            onBlur={e => e.target.style.borderColor = border}
          />
          {errors.email && <span style={{ fontFamily: 'Inter,sans-serif', fontSize: '.75rem', color: '#e53e3e', marginTop: 4, display: 'block' }}>{errors.email.message}</span>}
        </div>
      </div>

      <div>
        <label style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: labelColor, display: 'block', marginBottom: 6 }}>Company / Brand</label>
        <input style={field} placeholder="Your company or brand"
          {...register('company')}
          onFocus={e => e.target.style.borderColor = '#EA633F'}
          onBlur={e => e.target.style.borderColor = border}
        />
      </div>

      {topics && (
        <div>
          <label style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: labelColor, display: 'block', marginBottom: 6 }}>I'm Interested In *</label>
          <select style={{ ...field, cursor: 'pointer' }}
            {...register('topic', { required: 'Please select a topic' })}
            onFocus={e => e.target.style.borderColor = '#EA633F'}
            onBlur={e => e.target.style.borderColor = border}
          >
            <option value="">Select a topic...</option>
            {topics.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          {errors.topic && <span style={{ fontFamily: 'Inter,sans-serif', fontSize: '.75rem', color: '#e53e3e', marginTop: 4, display: 'block' }}>{errors.topic.message}</span>}
        </div>
      )}

      <div>
        <label style={{ fontFamily: 'IBM Plex Sans,sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: labelColor, display: 'block', marginBottom: 6 }}>Tell Me More *</label>
        <textarea style={{ ...field, minHeight: 110, resize: 'vertical' }}
          placeholder="Briefly describe your situation and what you need..."
          {...register('message', { required: 'Required' })}
          onFocus={e => e.target.style.borderColor = '#EA633F'}
          onBlur={e => e.target.style.borderColor = border}
        />
        {errors.message && <span style={{ fontFamily: 'Inter,sans-serif', fontSize: '.75rem', color: '#e53e3e', marginTop: 4, display: 'block' }}>{errors.message.message}</span>}
      </div>

      <button type="submit" disabled={status === 'submitting'}
        style={{
          background: '#EA633F', color: '#fff', border: 'none',
          padding: '14px 32px', fontFamily: 'IBM Plex Sans,sans-serif',
          fontSize: 13, fontWeight: 500, letterSpacing: '.04em',
          borderRadius: 2, cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
          opacity: status === 'submitting' ? .6 : 1,
          transition: 'opacity .2s, transform .15s',
          alignSelf: 'flex-start',
        }}
        onMouseEnter={e => { if (status !== 'submitting') { e.target.style.opacity = '.85'; e.target.style.transform = 'translateY(-1px)' } }}
        onMouseLeave={e => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' }}
      >
        {status === 'submitting' ? 'Sending…' : buttonLabel}
      </button>
      <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: labelColor, marginTop: -6 }}>I typically respond within 24 hours — personally.</p>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            style={{ background: 'rgba(52,168,83,.1)', border: '1px solid rgba(52,168,83,.3)', padding: '16px 20px', borderRadius: 2, fontFamily: 'Inter,sans-serif', fontSize: '.875rem', color: '#276749', lineHeight: 1.6 }}>
            Message sent! I'll respond within 24 hours.
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            style={{ background: 'rgba(229,62,62,.08)', border: '1px solid rgba(229,62,62,.25)', padding: '16px 20px', borderRadius: 2, fontFamily: 'Inter,sans-serif', fontSize: '.875rem', color: '#c53030', lineHeight: 1.6 }}>
            Something went wrong. Email me directly: <a href="mailto:valter.klug@chameleon.co" style={{ color: '#EA633F' }}>valter.klug@chameleon.co</a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`@media(max-width:600px){.form-grid-2{grid-template-columns:1fr!important;}}`}</style>
    </form>
  )
}
