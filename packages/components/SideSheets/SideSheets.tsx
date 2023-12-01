'use client'
import { Content } from './Content'
import { Activator } from './Activator'
import { Header } from './Header'
import { Body } from './Body'
import { Action } from './Action'
import React, { forwardRef } from 'react'
import { SideSheetsProvider } from './Context'

interface SideSheetsPropTypes extends React.HTMLAttributes<HTMLDivElement> {}

const SideSheets = forwardRef<HTMLDivElement, SideSheetsPropTypes>(
  (props, ref) => {
    const { children, ...rest } = props
    return (
      <SideSheetsProvider ref={ref} {...rest}>
        {children}
      </SideSheetsProvider>
    )
  }
)

SideSheets.displayName = 'Actify.SideSheets'

export default Object.assign(SideSheets, {
  Activator,
  Content,
  Header,
  Body,
  Action
})
