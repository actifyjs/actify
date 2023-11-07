import React, { forwardRef, isValidElement, cloneElement } from 'react'
import { useSideSheets } from './Context'

const Activator = forwardRef(
  ({ asChild, style, className, children, ...rest }, ref) => {
    const { open, setOpen } = useSideSheets()

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
