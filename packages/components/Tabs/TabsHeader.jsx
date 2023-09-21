import React from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'flex gap-2 p-2 bg-secondary/10 rounded-lg'
})

const TabsHeader = React.forwardRef((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <nav className="w-full">
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
