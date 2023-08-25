import React from 'react'
import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'
import { useTabs } from './TabsContext'

const variants = tv({
  base: 'relative w-full h-10 flex items-center justify-center text-base font-normal leading-relaxed select-none cursor-pointer'
})

const Tab = React.forwardRef((props, ref) => {
  const { layoutId, active, setActive } = useTabs()
  const { className, value, children, ...rest } = props

  return (
    <li
      role="tab"
      {...rest}
      ref={ref}
      data-value={value}
      onClick={() => setActive(value)}
      className={variants({ className })}
    >
      <div className="absolute z-20 gap-2 flex items-center justify-center">
        {children}
      </div>
      {active == value && (
        <motion.div
          layoutId={layoutId}
          className="absolute z-10 rounded-lg inset-0 bg-surface"
        />
      )}
    </li>
  )
})

export default Tab
