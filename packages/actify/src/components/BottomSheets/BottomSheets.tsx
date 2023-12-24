'use client'
import React from 'react'
import { Content } from './BottomSheetsContent'
import { Activator } from './BottomSheetsActivator'
import {
  BottomSheetsProvider,
  BottomSheetsProviderProps
} from './BottomSheetsContext'

const BottomSheets: React.FC<BottomSheetsProviderProps> = (props) => {
  const { children, ...rest } = props
  return <BottomSheetsProvider {...rest}>{children}</BottomSheetsProvider>
}

BottomSheets.displayName = 'Actify.BottomSheets'

export default Object.assign(BottomSheets, {
  Activator,
  Content
})
