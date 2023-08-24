import React from 'react'
import { tv } from 'tailwind-variants'
import { motion } from 'framer-motion'

const variants = tv({
  base: 'cursor-pointer hover:text-on-secondary hover:bg-secondary p-2 rounded'
})

const SelectOption = React.forwardRef((props, ref) => {
  const { className, children, ...rest } = props
  return (
    <motion.li
      ref={ref}
      {...rest}
      className={variants({ className })}
      variants={{
        open: {
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 300, damping: 24 }
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
      }}
    >
      {children}
    </motion.li>
  )
})

SelectOption.displayName = 'Actify.SelectOption'

export default SelectOption
