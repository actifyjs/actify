import { forwardRef } from 'react'
import { cn } from '@/packages/utils'
import { cva } from 'class-variance-authority'

const variants = cva('', {
  variants: {
    variant: {}
  },
  defaultVariants: {
    variant: ''
  }
})

const Template = forwardRef((props, ref) => {
  const { children, className, ...rest } = props
  return (
    <div ref={ref} {...rest} className={cn(variants({ className }))}>
      {children}
    </div>
  )
})

Template.displayName = 'Actify.Template'

export default Template
