import React, { forwardRef, isValidElement, cloneElement } from 'react'
import { useSideSheets } from './Context'

const Activator = forwardRef(
  ({ asChild, className, children, ...rest }, ref) => {
    const { open, setOpen } = useSideSheets()

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
