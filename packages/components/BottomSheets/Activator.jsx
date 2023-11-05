import React, { forwardRef, isValidElement, cloneElement } from 'react'
import { useBottomSheets } from './Context'

const Activator = forwardRef(
  ({ asChild = false, className, children, ...rest }, ref) => {
    const { open, setOpen } = useBottomSheets()

    // `asChild` allows the user to pass any element as the activator
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        ref,
        ...rest,
        ...children.props,
        onClick: () => setOpen(!open)
      })
    }
    return (
      <div
        {...rest}
        ref={ref}
        className={className}
        onClick={() => setOpen(!open)}
      >
        {children}
      </div>
    )
  }
)

export { Activator }
