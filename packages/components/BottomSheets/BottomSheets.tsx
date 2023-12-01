'use client'
import { Content } from './Content'
import { Activator } from './Activator'
import React, { forwardRef } from 'react'
import { BottomSheetsProvider } from './Context'

type BottomSheetsProps = {
  open?: boolean
} & React.HTMLAttributes<HTMLDivElement>

const BottomSheets: React.FC<BottomSheetsProps> = forwardRef((props, ref) => {
  const { children, ...rest } = props
  return (
    <BottomSheetsProvider ref={ref} {...rest}>
      {children}
    </BottomSheetsProvider>
  )
})

BottomSheets.displayName = 'Actify.BottomSheets'

export default Object.assign(BottomSheets, {
  Activator,
  Content
})
