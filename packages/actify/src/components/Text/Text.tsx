'use client'
import React from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'text-base'
})

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const Text: React.FC<TextProps> = (props) => {
  const { style, className, children, ...rest } = props
  return (
    <p {...rest} style={style} className={variants({ className })}>
      {children}
    </p>
  )
}

export default Text
