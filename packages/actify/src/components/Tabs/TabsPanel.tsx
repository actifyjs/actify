'use client'
import React, { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { useTabs } from './TabsContext'

const variants = tv({
  base: ''
})

export interface TabsPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const TabsPanel = forwardRef<HTMLDivElement, TabsPanelProps>((props, ref) => {
  // @ts-ignore
  const { active } = useTabs()
  const { value, className, children, ...rest } = props

  return (
    <div
      ref={ref}
      {...rest}
      role="tabpanel"
      data-value={value}
      className={variants({ className })}
    >
      {active == value && children}
    </div>
  )
})

export { TabsPanel }
