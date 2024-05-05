'use client'
import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'
import { useTabs } from './TabsContext'
import { Button } from './../Button'

const root = tv({
  base: [
    'h-10',
    'flex',
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

export interface TabProps extends React.ComponentProps<'li'> {
  index?: number
}

const Tab = forwardRef<HTMLLIElement, TabProps>((props, ref) => {
  const { index, className, children, ...rest } = props

  const { layoutId, activeTabIndex, scrollToTab } = useTabs()

  const handleClick = (index: number) => {
    scrollToTab?.(index)
  }

  return (
    <li
      role="tab"
      ref={ref}
      {...rest}
      className={root({ className })}
      onClick={() => handleClick(index!)}
    >
      <Button variant="text" className="rounded-none">
        {children}
      </Button>
      {activeTabIndex == index && (
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
