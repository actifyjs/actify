import React from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'flex p-2 bg-secondary/10 rounded-lg'
})

const TabsHeader = React.forwardRef((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <nav>
      <ul
        ref={ref}
        {...rest}
        role="tablist"
        className={variants({ className })}
      >
        {children}
      </ul>
    </nav>
  )
})

export default TabsHeader
