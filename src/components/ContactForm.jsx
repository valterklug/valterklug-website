import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'

// ── FormSubmit.co — sends to valter.klug@chameleon.co ──
const FORMSUBMIT_EMAIL = 'valter.klug@chameleon.co'

export default function ContactForm({ topics, buttonLabel = 'Send Message →', dark = false }) {
  const [status, setStatus] = useState('idle')
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

