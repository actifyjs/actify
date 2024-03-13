'use client'
import React from 'react'
import { Body } from './SideSheetsBody'
import { Action } from './SideSheetsAction'
import { Header } from './SideSheetsHeader'
import { Content } from './SideSheetsContent'
import { Activator } from './SideSheetsActivator'
import { SideSheetsProvider } from './SideSheetsContext'

type SideSheetsPropTypes = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onChange'
> & {
  divider?: boolean
  onChange?: () => void
}

const SideSheets: React.FC<SideSheetsPropTypes> = ({ children, ...rest }) => {
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
