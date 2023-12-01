'use client'
import React from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'px-3 py-2'
})

const Td: React.FC<React.TableHTMLAttributes<HTMLTableElement>> = ({
  style,
  className,
  children
}) => {
  return (
    <td style={style} className={variants({ className })}>
      {children}
    </td>
  )
}

export { Td }
