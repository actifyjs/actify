'use client'
import { useBottomSheets } from './Context'
import React, { forwardRef, isValidElement, cloneElement } from 'react'
import { Slot } from '@actify/Slot'

export interface ActivatorProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const Activator: React.FC<ActivatorProps> = forwardRef(
  (
    { asChild = true, style, className, ...rest },
    ref?: React.Ref<HTMLDivElement>
  ) => {
    const open = useBottomSheets((s) => s.open)
    const setOpen = useBottomSheets((s) => s.setOpen)

    if (asChild) {
      return (
        <Slot
          ref={ref}
          style={style}
          className={className}
          {...{ ...rest, open, onClick: () => setOpen(!open) }}
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
        onClick={() => setOpen(!open)}
      >
        {rest.children}
      </div>
    )
  }
)

export { Activator }
