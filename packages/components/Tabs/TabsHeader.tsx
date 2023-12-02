'use client'
import React, { forwardRef, useRef } from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'flex gap-2 p-2 bg-secondary/10 rounded-lg overflow-x-auto [&::-webkit-scrollbar]:hidden'
})

export interface TabsHeaderProps
  extends React.HTMLAttributes<HTMLUListElement> {}
const TabsHeader = forwardRef<HTMLUListElement, TabsHeaderProps>(
  (props, ref) => {
    const tabRef = ref || useRef()
    const { children, className, ...rest } = props

    return (
      <nav className="w-full">
        <ul
          {...rest}
          ref={tabRef}
          role="tablist"
          className={variants({ className })}
        >
          {children}
        </ul>
      </nav>
    )
  }
)

export { TabsHeader }
