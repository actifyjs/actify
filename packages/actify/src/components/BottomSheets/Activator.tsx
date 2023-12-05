'use client'
import React, { forwardRef, isValidElement, cloneElement } from 'react'
import { useBottomSheets } from './Context'

export interface ActivatorProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const Activator: React.FC<ActivatorProps> = forwardRef(
  (
    { asChild = false, style, className, children, ...rest },
    ref?: React.Ref<HTMLDivElement>
  ) => {
    const open = useBottomSheets((s) => s.open)
    const setOpen = useBottomSheets((s) => s.setOpen)

    // `asChild` allows the user to pass any element as the activator
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        ref,
        ...rest,
        ...children.props,
        role: 'button',
        onClick: () => setOpen(!open)
      })
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
        {children}
      </div>
    )
  }
)

export { Activator }
