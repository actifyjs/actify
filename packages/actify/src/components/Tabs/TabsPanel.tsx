'use client'

import React from 'react'
import { tv } from 'tailwind-variants'
import { useTabs } from './TabsContext'

const variants = tv({
  base: ''
})

export interface TabsPanelProps extends React.ComponentProps<'div'> {
  index?: number
}

const TabsPanel = (props: TabsPanelProps) => {
  const { activeTabIndex } = useTabs()
  const { index, className, children, ...rest } = props

  return (
    <div {...rest} role="tabpanel" className={variants({ className })}>
      {activeTabIndex == index && children}
    </div>
  )
}

export { TabsPanel }
