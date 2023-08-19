import React from 'react'
import { tv } from 'tailwind-variants'

const variants = tv('fixed h-full left-[256px] px-2 gap-2 flex flex-col items-center bg-black/5 dark:bg-white/5', {
  variants: {
    variant: {}
  },
  defaultVariants: {
    variant: ''
  }
})

const NavigationRail = React.forwardRef((props, ref) => {
  const { children, className, ...rest } = props
  return (
    <div ref={ref} {...rest} className={variants({ className })}>
      {children}
    </div>
  )
})

NavigationRail.displayName = 'Actify.NavigationRail'

export default NavigationRail
