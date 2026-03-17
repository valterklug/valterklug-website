import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function PageWrapper({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.28, ease: 'easeInOut' }}
    >
      {children}
    </motion.main>
  )
}

export function FadeIn({ children, delay = 0, direction = 'up', style = {}, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const dirs = {
    up: { y: 22, x: 0 },
    left: { y: 0, x: 22 },
    right: { y: 0, x: -22 },
    none: { y: 0, x: 0 },
  }
  return (
    <motion.div ref={ref} style={style} className={className}
      initial={{ opacity: 0, ...dirs[direction] }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, className = '', style = {} }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} className={className} style={style}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: 0.08 } }, hidden: {} }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, style = {}, className = '' }) {
  return (
    <motion.div style={style} className={className}
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.44, ease: [0.25, 0.46, 0.45, 0.94] } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function HoverLift({ children, style = {}, className = '' }) {
  return (
    <motion.div style={style} className={className}
      whileHover={{ y: -3, transition: { duration: 0.18 } }}
    >
      {children}
    </motion.div>
  )
}
