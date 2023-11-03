import React, { forwardRef } from 'react'
import { useSideSheets } from './Context'

const Activator = forwardRef(({ className, children, ...rest }, ref) => {
  const { open, setOpen } = useSideSheets()

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
})

export { Activator }
