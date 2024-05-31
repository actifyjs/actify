'use client'

import React from 'react'
import { Slot } from './../Slot'
import { useSideSheets } from './SideSheetsContext'

export interface ActivatorProps extends React.ComponentProps<'div'> {
  asChild?: boolean
}
const Activator = ({
  asChild,
  className,
  children,
  ...rest
}: ActivatorProps) => {
  const { open, setOpen } = useSideSheets()

  const handleClick = () => {
    setOpen?.(!open)
  }

  if (asChild) {
    return (
      <Slot className={className} {...{ ...rest, open, onClick: handleClick }}>
        {children}
      </Slot>
    )
  }

  return (
    <div {...rest} role="button" className={className} onClick={handleClick}>
      {children}
    </div>
  )
}

export { Activator }
