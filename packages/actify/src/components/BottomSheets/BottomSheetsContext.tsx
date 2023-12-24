'use client'
import { createStore, useStore } from 'zustand'
import React, { createContext, useRef, useContext } from 'react'

interface BottomSheetsProps {
  open?: boolean
}
interface BottomSheetsState extends BottomSheetsProps {
  setOpen: (open: boolean) => void
}
type BottomSheetsStore = ReturnType<typeof createContextStore>

const BottomSheetsContext = createContext<BottomSheetsStore | null>(null)

export interface BottomSheetsProviderProps
  extends React.PropsWithChildren<BottomSheetsProps> {}

export const BottomSheetsProvider = ({
  children,
  ...props
}: BottomSheetsProviderProps) => {
  const storeRef = useRef<BottomSheetsStore>()
  if (!storeRef.current) {
    storeRef.current = createContextStore(props)
  }

  return (
    <BottomSheetsContext.Provider value={storeRef.current}>
      {children}
    </BottomSheetsContext.Provider>
  )
}

const createContextStore = (initProps?: Partial<BottomSheetsProps>) => {
  const DEFAULT_PROPS: BottomSheetsProps = {
    open: false
  }
  return createStore<BottomSheetsState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setOpen: (state: boolean) => set({ open: state })
  }))
}

export function useBottomSheets<T>(
  selector: (state: BottomSheetsState) => T
): T {
  const store = useContext(BottomSheetsContext)
  if (!store) {
    throw new Error('Missing BottomSheetsContext.Provider in the tree')
  }
  return useStore(store, selector)
}
