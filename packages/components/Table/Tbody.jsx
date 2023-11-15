import React from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: ''
})

const Tbody = ({ style, className, children }) => {
  return (
    <tbody style={style} className={variants({ className })}>
      {children}
    </tbody>
  )
}

export { Tbody }
