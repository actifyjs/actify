'use client'
import React, { forwardRef } from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'min-h-[540px] w-20 bg-surface flex items-center justify-center'
})

interface NavigationRailProps extends React.HTMLAttributes<HTMLDivElement> {}

const NavigationRail = forwardRef<HTMLDivElement, NavigationRailProps>(
  (props, ref) => {
    const { children, className, ...rest } = props
    return (
      <div ref={ref} {...rest} className={variants({ className })}>
        {children}
      </div>
    )
  }
)

NavigationRail.displayName = 'Actify.NavigationRail'

export default NavigationRail
