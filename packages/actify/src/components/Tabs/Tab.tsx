'use client'

import { Button } from './../Button'
import React from 'react'
import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'
import { useTabs } from './TabsContext'

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

const Tab = (props: TabProps) => {
  const { index, className, children, ...rest } = props

  const { layoutId, activeTabIndex, scrollToTab } = useTabs()

  const handleClick = (index: number) => {
    scrollToTab?.(index)
  }

  return (
    <li
      role="tab"
      {...rest}
      className={root({ className })}
      onClick={() => handleClick(index!)}
    >
      <Button
        variant="text"
        style={
          {
            '--_container-shape-start-start': 0,
            '--_container-shape-start-end': 0,
            '--_container-shape-end-start': 0,
            '--_container-shape-end-end': 0
          } as React.CSSProperties
        }
      >
        {children}
      </Button>
      {activeTabIndex == index && (
        <motion.div
          layoutId={layoutId}
          // @ts-ignore
          className="absolute -z-10 w-full bottom-0"
        >
          <div className="h-0.5 rounded-lg w-full bg-primary"></div>
        </motion.div>
      )}
    </li>
  )
}

export { Tab }
