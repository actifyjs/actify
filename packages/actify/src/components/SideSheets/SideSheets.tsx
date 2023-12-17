'use client'
import React from 'react'
import { Body } from './Body'
import { Action } from './Action'
import { Header } from './Header'
import { Content } from './Content'
import { Activator } from './Activator'
import { SideSheetsProvider } from './Context'

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
