import React, { forwardRef } from 'react'
import { List } from 'actify'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'min-h-[80px] w-full bg-surface flex items-center justify-center',
  variants: {
    variant: {}
  },
  defaultVariants: {
    variant: ''
  }
})

const NavigationBarRoot = forwardRef((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <div ref={ref} {...rest} className={variants({ className })}>
      <List className="pt-3 pb-4 px-2 h-full w-full grid gap-2 grid-cols-4">
        {children}
      </List>
    </div>
  )
})

NavigationBarRoot.displayName = 'Actify.NavigationBar'

export const NavigationBar = Object.assign(NavigationBarRoot, {})
