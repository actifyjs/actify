import { tv } from 'tailwind-variants'
import React, { forwardRef } from 'react'

const variants = tv({
  base: 'flex relative bg-black/5 dark:bg-white/5 rounded-t-lg p-1 flex-row'
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
