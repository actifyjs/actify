'use client'
import React, { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { TabsProvider } from './TabsContext'
import { Tab } from './Tab'
import { TabsBody } from './TabsBody'
import { TabsPanel } from './TabsPanel'
import { TabsHeader } from './TabsHeader'

const root = tv({
  base: ['flex', 'relative', 'flex-col', 'overflow-auto', 'scroll-smooth']
})

type TabsProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  value: number | string
  onChange?: (value: number | string) => void
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const { value, onChange, style, className, children, ...rest } = props

  return (
    <TabsProvider value={value} onChange={onChange}>
      <div ref={ref} {...rest} style={style} className={root({ className })}>
        {children}
      </div>
    </TabsProvider>
  )
})

export default Object.assign(Tabs, {
  Tab,
  Body: TabsBody,
  Panel: TabsPanel,
  Header: TabsHeader
})
