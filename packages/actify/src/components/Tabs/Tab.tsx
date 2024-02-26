'use client'
import React, { useId, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'
import { useTabs } from './TabsContext'
import { Ripple } from '@actify/Ripple'
import { Elevation } from '@actify/Elevation'
import { FocusRing } from '@actify/FocusRing'

const root = tv({
  base: [
    'h-10',
    'flex',
    'px-2',
    'gap-0',
    'isolate',
    'sm:gap-2',
    'relative',
    'text-base',
    'select-none',
    'font-medium',
    'items-center',
    'justify-center',
    'cursor-pointer',
    'leading-relaxed'
  ]
})

const button = tv({
  base: ['outline-none', 'flex', 'items-center', 'gap-1']
})

type Value = number | string

export interface TabProps extends React.ComponentProps<'li'> {
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

  const id = useId()

  return (
    <li
      role="tab"
      {...rest}
      ref={ref}
      data-value={value}
      onClick={() => handleClick(value)}
      className={root({ className })}
    >
      <FocusRing id={id} />
      <Elevation />
      <Ripple id={id} />
      <button id={id} className={button()}>
        {children}
      </button>
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
