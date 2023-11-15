import React from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: ''
})

const Tr = ({ style, className, children }) => {
  return (
    <tr style={style} className={variants({ className })}>
      {children}
    </tr>
  )
}

export { Tr }
