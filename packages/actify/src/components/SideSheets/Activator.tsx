'use client'
import { Slot } from '@actify/Slot'
import React, { forwardRef } from 'react'
import { useSideSheets } from './Context'

export interface ActivatorProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}
const Activator: React.FC<ActivatorProps> = forwardRef(
  ({ asChild, style, className, ...rest }, ref?: React.Ref<HTMLDivElement>) => {
    const open = useSideSheets((_) => _.open)
    const setOpen = useSideSheets((_) => _.setOpen)

    const handleClick = () => {
      setOpen(!open)
    }

    if (asChild) {
      return (
        <Slot
          ref={ref}
          style={style}
          className={className}
          {...{ ...rest, open, onClick: handleClick }}
        />
      )
    }

    return (
      <div
        {...rest}
        ref={ref}
        role="button"
        style={style}
        className={className}
        onClick={() => handleClick}
      >
        {rest.children}
      </div>
    )
  }
)

export { Activator }
