import React from 'react'
import { TextField } from 'actify'
import { motion } from 'framer-motion'

const Select = React.forwardRef((props, ref) => {
  const { label, children } = props
  const [isOpen, setIsOpen] = React.useState(false)
  const MotionTextField = motion(TextField)

  return (
    <motion.nav ref={ref} initial={false} animate={isOpen ? 'open' : 'closed'}>
      <MotionTextField
        label={label}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      />
      <motion.ul
        variants={{
          open: {
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            },
            clipPath: 'inset(0% 0% 0% 0% round 10px)'
          },
          closed: {
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.3
            },
            clipPath: 'inset(10% 50% 90% 50% round 10px)'
          }
        }}
        className={`bg-surface p-2 ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {children}
      </motion.ul>
    </motion.nav>
  )
})

export default Select
