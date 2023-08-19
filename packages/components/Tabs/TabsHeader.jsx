import { tv } from 'tailwind-variants'
import React, { forwardRef } from 'react'

const variants = tv({
  base: 'flex relative p-2 bg-secondary/10 rounded-lg'
})

const TabsHeader = forwardRef((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <nav>
      <ul ref={ref} {...rest} role="tablist" className={variants({ className })}>
        {children}
      </ul>
    </nav>
  )
})

export default TabsHeader
