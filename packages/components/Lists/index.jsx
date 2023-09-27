import React, { forwardRef } from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'py-2 bg-surface'
})

const List = forwardRef((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <ul ref={ref} {...rest} className={variants({ className })}>
      {children}
    </ul>
  )
})

List.displayName = 'Actify.List'

export { List }
