'use client'

import React, { createContext, useContext } from 'react'

import { useControllableState } from './../../hooks/useControllableState'

interface SideSheetsProps {
  open?: boolean
  defaultOpen?: boolean
  divider?: boolean
  setOpen?: (open: boolean) => void
}

const SideSheetsContext = createContext<SideSheetsProps | undefined>(undefined)

export interface SideSheetsProviderProps
  extends React.PropsWithChildren<SideSheetsProps> {}

export const SideSheetsProvider = ({
  children,
  ...props
}: SideSheetsProviderProps) => {
  const { open, defaultOpen, divider, setOpen } = props
  const [value, setValue] = useControllableState({
    value: open,
    defaultValue: defaultOpen,
    onChange: setOpen
  })

  return (
    <SideSheetsContext
      value={{ divider, open: value, setOpen: setValue }}
    >
      {children}
    </SideSheetsContext>
  )
}

export function useSideSheets() {
  const context = useContext(SideSheetsContext)
  if (!context) {
    throw new Error('SideSheets must be wrappered in the <SideSheets />')
  }
  return context
}
