import { tv } from 'tailwind-variants'
import React, { forwardRef } from 'react'

const variants = tv({
  base: 'block w-full relative bg-transparent overflow-hidden'
})

const TabsBody = forwardRef((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <div ref={ref} {...rest} className={variants({ className })}>
      {children}
    </div>
  )
})

export default TabsBody
