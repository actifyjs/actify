'use client'
import { createStore, useStore } from 'zustand'
import React, { createContext, useId, useRef, useContext } from 'react'

interface TabsProps {
  layoutId?: string
  value?: number | string
  onChange?: (_: number | string) => void
}

interface TabsState extends TabsProps {
  setValue: (_: number | string) => void
}

type TabsStore = ReturnType<typeof createContextStore>

const TabsContext = createContext<TabsStore | null>(null)

export interface TabsProviderProps extends React.PropsWithChildren<TabsProps> {}

export const TabsProvider = ({ children, ...props }: TabsProviderProps) => {
  const layoutId = useId()
  const storeRef = useRef<TabsStore>()
  if (!storeRef.current) {
    storeRef.current = createContextStore({ layoutId, ...props })
  }

  return (
    <TabsContext.Provider value={storeRef.current}>
      {children}
    </TabsContext.Provider>
  )
}

const createContextStore = (initialProps?: Partial<TabsProps>) => {
  return createStore<TabsState>((set) => ({
    ...initialProps,
    setValue: (state) => set({ value: state })
  }))
}

export function useTabs<T>(selector: (state: TabsState) => T): T {
  const store = useContext(TabsContext)
  if (!store) {
    throw new Error('Missing TabsContext.Provider in the tree')
  }
  return useStore(store, selector)
}
