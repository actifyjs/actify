import React from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'text-base'
})

const Text = (props) => {
  const { style, className, children, ...rest } = props
  return (
    <p {...rest} style={style} className={variants({ className })}>
      {children}
    </p>
  )
}

export { Text }
