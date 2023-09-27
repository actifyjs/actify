import React, { forwardRef, useRef } from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'flex gap-2 p-2 bg-secondary/10 rounded-lg overflow-x-auto [&::-webkit-scrollbar]:hidden'
})

const TabsHeader = forwardRef((props, ref) => {
  const tabRef = ref || useRef()
  const { children, className, ...rest } = props

  return (
    <nav className="w-full">
      <ul
        ref={tabRef}
        {...rest}
        role="tablist"
        className={variants({ className })}
      >
        {children}
      </ul>
    </nav>
  )
})

export { TabsHeader }
