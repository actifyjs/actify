'use client'

import {
  BottomSheetsProvider,
  BottomSheetsProviderProps
} from './BottomSheetsContext'

const BottomSheets = (props: BottomSheetsProviderProps) => {
  const { children, ...rest } = props
  return <BottomSheetsProvider {...rest}>{children}</BottomSheetsProvider>
}

BottomSheets.displayName = 'Actify.BottomSheets'

export { BottomSheets }
