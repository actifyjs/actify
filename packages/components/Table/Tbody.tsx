'use client'
import React from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: ''
})

const Tbody: React.FC<React.TableHTMLAttributes<HTMLTableElement>> = ({
  style,
  className,
  children
}) => {
  return (
    <tbody style={style} className={variants({ className })}>
      {children}
    </tbody>
  )
}

Tbody.displayName = 'Tbody'

export { Tbody }
