import { motion } from 'framer-motion'

// Small scroll-into-view animation wrapper. Respects prefers-reduced-motion
// automatically because framer-motion reads the OS setting.
export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </MotionTag>
  )
}
