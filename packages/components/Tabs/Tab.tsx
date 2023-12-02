'use client'
import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'
import { useTabs } from './TabsContext'

const variants = tv({
  base: 'relative isolate h-10 gap-0 sm:gap-2 px-2 flex items-center justify-center text-base font-normal leading-relaxed select-none cursor-pointer'
})

export interface TabProps extends React.LiHTMLAttributes<HTMLLIElement> {}

const Tab = forwardRef<HTMLLIElement, TabProps>((props, ref) => {
  // @ts-ignore
  const { layoutId, active, setActive, onChange } = useTabs()
  const { className, value, children, ...rest } = props

  const handleClick = (value) => {
    setActive(value)
    onChange?.(value)
  }

  return (
    <li
      role="tab"
      {...rest}
      ref={ref}
      data-value={value}
      onClick={() => handleClick(value)}
      className={variants({ className })}
    >
      {children}
      {active == value && (
        <motion.div
          layoutId={layoutId}
          className="absolute -z-10 rounded-lg inset-0 bg-surface"
        />
      )}
    </li>
  )
})

export { Tab }
