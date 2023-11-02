import React, { forwardRef } from 'react'
import { useBottomSheets } from './Context'

const Activator = forwardRef(({ className, children, ...rest }, ref) => {
  const { open, setOpen } = useBottomSheets()

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
