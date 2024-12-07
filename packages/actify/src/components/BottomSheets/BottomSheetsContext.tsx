'use client'

import React, { createContext, useContext } from 'react'

import { useControllableState } from './../../hooks/useControllableState'

interface BottomSheetsProps {
  open?: boolean
  defaultOpen?: boolean
  setOpen?: (open: boolean) => void
}

const BottomSheetsContext = createContext<BottomSheetsProps | undefined>(
  undefined
)

export interface BottomSheetsProviderProps
  extends React.PropsWithChildren<BottomSheetsProps> {}

export const BottomSheetsProvider = ({
  children,
  ...props
}: BottomSheetsProviderProps) => {
  const { open, defaultOpen, setOpen } = props
  const [value, setValue] = useControllableState({
    value: open,
    defaultValue: defaultOpen,
    onChange: setOpen
  })

  return (
    <BottomSheetsContext value={{ open: value, setOpen: setValue }}>
      {children}
    </BottomSheetsContext>
  )
}

export function useBottomSheets() {
  const context = useContext(BottomSheetsContext)
  if (!context) {
    throw new Error(
      'BottomSheets components must be wrapped in <BottomSheets />'
    )
  }
  return context
}
