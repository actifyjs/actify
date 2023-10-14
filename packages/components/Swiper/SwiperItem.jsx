import React, { forwardRef } from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'w-full h-full inline-block flex-none [transition:var(--transition)] [transform:translateX(var(--transform))]'
})

const SwiperItem = forwardRef((props, ref) => {
  const { style, className, children, ...rest } = props
  return (
    <div ref={ref} {...rest} style={style} className={variants({ className })}>
      {children}
    </div>
  )
})

export { SwiperItem }
