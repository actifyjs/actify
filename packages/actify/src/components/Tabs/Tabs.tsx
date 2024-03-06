import React from 'react'
import { Tab } from './Tab'
import { TabsBody } from './TabsBody'
import { TabsPanel } from './TabsPanel'
import { TabsHeader } from './TabsHeader'
import { TabsProps, TabsProvider } from './TabsContext'

const Tabs = (props: React.ComponentProps<'div'> & TabsProps) => {
  const { className, children, ...rest } = props

  return (
    <TabsProvider {...rest}>
      <div className={className}>{children}</div>
    </TabsProvider>
  )
}

Tabs.displayName = 'Actify.Tabs'

export default Object.assign(Tabs, {
  Tab,
  Body: TabsBody,
  Panel: TabsPanel,
  Header: TabsHeader
})
