'use client'

import {
  BottomSheetsProvider,
  BottomSheetsProviderProps
} from './BottomSheetsContext'

import { Activator } from './BottomSheetsActivator'
import { Content } from './BottomSheetsContent'

const BottomSheets = (props: BottomSheetsProviderProps) => {
  const { children, ...rest } = props
  return <BottomSheetsProvider {...rest}>{children}</BottomSheetsProvider>
}

BottomSheets.displayName = 'Actify.BottomSheets'

export default Object.assign(BottomSheets, {
  Activator,
  Content
})
