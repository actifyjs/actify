import React from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'z-50 text-white bg-[#445159]/90 py-3 px-4 rounded grid grid-cols-[1fr_auto] items-center gap-2 overflow-hidden mt-2.5'
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
