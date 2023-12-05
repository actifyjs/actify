'use client'
import React, { forwardRef } from 'react'

const CrouselItem = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { style, className, children, ...rest } = props

  return (
    <div ref={ref} {...rest} style={style} className={className}>
      {children}
    </div>
  )
})

export { CrouselItem }
