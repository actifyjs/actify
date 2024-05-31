'use client'

import { Action } from './SideSheetsAction'
import { Activator } from './SideSheetsActivator'
import { Body } from './SideSheetsBody'
import { Content } from './SideSheetsContent'
import { Header } from './SideSheetsHeader'
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

export default Object.assign(SideSheets, {
  Activator,
  Content,
  Header,
  Body,
  Action
})
