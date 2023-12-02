'use client'
import React, { forwardRef } from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'block w-full relative bg-transparent'
})

export interface TabsBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const TabsBody = forwardRef<HTMLDivElement, TabsBodyProps>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <div ref={ref} {...rest} className={variants({ className })}>
      {children}
    </div>
  )
})

export { TabsBody }
