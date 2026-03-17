import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'What I Do', to: '/services' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Intelligence', to: '/intelligence' },
  { label: 'News', to: '/news' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
