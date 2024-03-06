'use client'
import React, { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { useTabs } from './TabsContext'

const variants = tv({
  base: ''
})

export interface TabsPanelProps extends React.ComponentProps<'div'> {
  index?: number
}

const TabsPanel = forwardRef<HTMLDivElement, TabsPanelProps>((props, ref) => {
  const { activeTabIndex } = useTabs()
  const { index, className, children, ...rest } = props

  return (
    <div
      ref={ref}
      {...rest}
      role="tabpanel"
      className={variants({ className })}
    >
      {activeTabIndex == index && children}
    </div>
  )
})

export { TabsPanel }
