'use client'
import React, { forwardRef } from 'react'

const CrouselItem: React.FC<React.HTMLAttributes<HTMLDivElement>> = forwardRef(
  (props, ref?: React.Ref<HTMLDivElement>) => {
    const { style, className, children, ...rest } = props

    return (
      <div ref={ref} {...rest} style={style} className={className}>
        {children}
      </div>
    )
  }
)

export { CrouselItem }
