'use client'

import React from 'react'
import { SideSheetsProvider } from './SideSheetsContext'

type SideSheetsProps = Omit<React.ComponentProps<'div'>, 'onChange'> & {
  divider?: boolean
  onChange?: () => void
}

const SideSheets = ({ children, ...rest }: SideSheetsProps) => {
  return <SideSheetsProvider {...rest}>{children}</SideSheetsProvider>
}

SideSheets.displayName = 'Actify.SideSheets'

export { SideSheets }
