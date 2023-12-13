'use client'
import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'
import { useTabs } from './TabsContext'
import { useShallow } from 'zustand/react/shallow'

const variants = tv({
  base: 'relative isolate h-10 gap-0 sm:gap-2 px-2 flex items-center justify-center text-base font-normal leading-relaxed select-none cursor-pointer'
})

type Value = number | string

export interface TabProps extends React.LiHTMLAttributes<HTMLLIElement> {
  value: Value
}

const Tab = forwardRef<HTMLLIElement, TabProps>((props, ref) => {
  const {
    layoutId,
    value: activeValue,
    setValue,
    onChange
  } = useTabs(
    useShallow((_) => ({
      value: _.value,
      onChange: _.onChange,
      layoutId: _.layoutId,
      setValue: _.setValue
    }))
  )
  const { className, value, children, ...rest } = props

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
          className="absolute -z-10 rounded-lg inset-0 bg-surface"
        />
      )}
    </li>
  )
})

export { Tab }
