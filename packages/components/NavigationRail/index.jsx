import React, { forwardRef } from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'min-h-[540px] w-20 bg-surface flex items-center justify-center',
  variants: {
    variant: {}
  },
  defaultVariants: {
    variant: ''
  }
})

const NavigationRail = forwardRef((props, ref) => {
  const { children, className, ...rest } = props
  return (
    <div ref={ref} {...rest} className={variants({ className })}>
      {children}
    </div>
  )
})

NavigationRail.displayName = 'Actify.NavigationRail'

export { NavigationRail }
