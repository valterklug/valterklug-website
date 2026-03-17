import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'

const PRODUCTS = [
  {
    num: '01', badge: 'Most Popular', audience: 'International Brands → US Market',
    headline: 'Expand to the US with intelligence: invest without waste.',
    title: 'International Expansion Viability Analysis',
    sub: 'A comprehensive analysis of your brand\'s readiness and potential for the US market.',
    deliverables: ['CVE Score', 'Investment estimates', 'Strategic timeline', 'Competitor map', 'Detailed report (40+ pages)'],
    price: 'US$5,000', delivery: '14 days · Fixed Fee', featured: true,
  },
]
