'use client'

import React from 'react'
import { Slot } from './../Slot'
import { useBottomSheets } from './BottomSheetsContext'

export interface BottomSheetsActivatorProps
  extends React.ComponentProps<'div'> {
  asChild?: boolean
}

const BottomSheetsActivator = ({
  asChild,
  className,
  children,
  ...rest
}: BottomSheetsActivatorProps) => {
  const { open, setOpen } = useBottomSheets()

  const handlePress = () => {
    setOpen?.(!open)
  }

  if (asChild) {
    return (
      <Slot className={className} {...{ ...rest, open, onPress: handlePress }}>
        {children}
      </Slot>
    )
  }

  return (
    <div {...rest} role="button" className={className} onClick={handlePress}>
      {children}
    </div>
  )
}

export { BottomSheetsActivator }
