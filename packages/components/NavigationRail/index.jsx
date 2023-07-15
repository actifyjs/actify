import { forwardRef } from 'react'
import { cn } from '@/packages/utils'
import { cva } from 'class-variance-authority'

const variants = cva('fixed h-full left-[256px] px-2 gap-2 flex flex-col items-center bg-black/5 dark:bg-white/5', {
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
    <div ref={ref} {...rest} className={cn(variants({ className }))}>
      {children}
    </div>
  )
})

NavigationRail.displayName = 'Actify.NavigationRail'

export default NavigationRail
