'use client'
import { createStore, useStore } from 'zustand'
import React, { createContext, useRef, useContext } from 'react'

interface SideSheetsProps {
  open?: boolean
  divider?: boolean
  onChange?: () => void
}

interface SideSheetsState extends SideSheetsProps {
  setOpen: (open: boolean) => void
}

type SideSheetsStore = ReturnType<typeof createContextStore>

const SideSheetsContext = createContext<SideSheetsStore | null>(null)

export interface SideSheetsProviderProps
  extends React.PropsWithChildren<SideSheetsProps> {}

export const SideSheetsProvider = ({
  children,
  ...props
}: SideSheetsProviderProps) => {
  const storeRef = useRef<SideSheetsStore>()
  if (!storeRef.current) {
    storeRef.current = createContextStore(props)
  }

  return (
    <SideSheetsContext.Provider value={storeRef.current}>
      {children}
    </SideSheetsContext.Provider>
  )
}

const createContextStore = (initProps?: Partial<SideSheetsProps>) => {
  const DEFAULT_PROPS: SideSheetsProps = {
    open: false,
    divider: false
  }
  return createStore<SideSheetsState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setOpen: (state: boolean) => set({ open: state })
  }))
}

export function useSideSheets<T>(selector: (state: SideSheetsState) => T): T {
  const store = useContext(SideSheetsContext)
  if (!store) {
    throw new Error('Missing SideSheetsContext.Provider in the tree')
  }
  return useStore(store, selector)
}
