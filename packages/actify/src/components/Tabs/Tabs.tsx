'use client'
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

type TabsProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  value: number | string
  onChange?: (value: number | string) => void
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
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

export default Object.assign(Tabs, {
  Tab,
  Body: TabsBody,
  Panel: TabsPanel,
  Header: TabsHeader
})
