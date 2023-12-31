'use client'
import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'
import { useTabs } from './TabsContext'

const variants = tv({
  base: 'relative isolate h-10 gap-0 sm:gap-2 px-2 flex items-center justify-center text-base font-medium leading-relaxed select-none cursor-pointer'
})

type Value = number | string

export interface TabProps extends React.LiHTMLAttributes<HTMLLIElement> {
  value: Value
}

const Tab = forwardRef<HTMLLIElement, TabProps>((props, ref) => {
  const { className, value, children, ...rest } = props

  const activeValue = useTabs((_) => _.value)
  const layoutId = useTabs((_) => _.layoutId)
  const onChange = useTabs((_) => _.onChange)
  const setValue = useTabs((_) => _.setValue)

  const handleClick = (value: Value) => {
    setValue(value)
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
      {activeValue == value && (
        <motion.div
          layoutId={layoutId}
          className="absolute -z-10 w-full bottom-0"
        >
          <div className="h-0.5 rounded-lg w-full bg-primary"></div>
        </motion.div>
      )}
    </li>
  )
})

export { Tab }
