import React from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'px-3 py-2'
})

const Th = ({ style, className, children }) => {
  return (
    <th style={style} className={variants({ className })}>
      {children}
    </th>
  )
}

export { Th }
