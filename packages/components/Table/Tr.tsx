'use client'
import React from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: ''
})

const Tr: React.FC<React.TableHTMLAttributes<HTMLTableElement>> = ({
  style,
  className,
  children
}) => {
  return (
    <tr style={style} className={variants({ className })}>
      {children}
    </tr>
  )
}

export { Tr }
