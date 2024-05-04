'use client'
import React, { useState, useId, createContext, useContext } from 'react'

type Tab = {}
export interface TabsProps {
  tabs?: Tab[]
  activeTab?: Tab
  layoutId?: string
  activeTabIndex?: number
  autoActivate?: boolean
  scrollToTab?: (index: number) => void
}

const TabsContext = createContext<TabsProps>({})

interface TabsProviderProps extends React.PropsWithChildren<TabsProps> {}
export const TabsProvider = (props: TabsProviderProps) => {
  const layoutId = useId()
  const { children, activeTabIndex = 0 } = props
  const [index, setIndex] = useState(activeTabIndex)
  return (
    <TabsContext.Provider
      value={{ layoutId, activeTabIndex: index, scrollToTab: setIndex }}
    >
      {children}
    </TabsContext.Provider>
  )
}

export const useTabs = () => {
  const context = useContext(TabsContext)
  if (context == null) {
    throw new Error('Tab components must be wrapped in <Tabs />')
  }
  return context
}
