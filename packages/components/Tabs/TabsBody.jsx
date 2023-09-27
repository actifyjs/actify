import React, { forwardRef } from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'block w-full relative bg-transparent'
})

const TabsBody = forwardRef((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <div ref={ref} {...rest} className={variants({ className })}>
      {children}
    </div>
  )
})

export { TabsBody }
