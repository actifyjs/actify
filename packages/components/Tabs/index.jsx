import React, { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { TabsProvider } from './TabsContext'
import { Tab } from './Tab'
import { TabsBody } from './TabsBody'
import { TabsPanel } from './TabsPanel'
import { TabsHeader } from './TabsHeader'

const variants = tv({
  base: 'relative'
})

const TabsRoot = forwardRef((props, ref) => {
  const { value, onChange, style, className, children, ...rest } = props

  return (
    <TabsProvider value={value} onChange={onChange}>
      <div
        ref={ref}
        {...rest}
        style={style}
        className={variants({ className })}
      >
        {children}
      </div>
    </TabsProvider>
  )
})

export const Tabs = Object.assign(TabsRoot, {
  Tab,
  Body: TabsBody,
  Panel: TabsPanel,
  Header: TabsHeader
})
