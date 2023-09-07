import React from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'z-50 text-on-inverse-surface bg-inverse-surface rounded flex items-center justify-between'
})

const Content = React.forwardRef((props, ref) => {
  const { style, className, children, ...rest } = props

  return (
    <div ref={ref} {...rest} style={style} className={variants({ className })}>
      {children}
    </div>
  )
})

export default Content
