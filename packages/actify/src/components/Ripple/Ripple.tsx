'use client'
import React, { useRef } from 'react'
import { useRipple } from './useRipple'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'absolute inset-0 overflow-hidden rounded-[inherit]'
})

interface RippleProps extends React.HTMLAttributes<HTMLSpanElement> {}

const Ripple: React.FC<RippleProps> = (props) => {
  const { className, ...rest } = props

  const ref = useRef()
  const ripples = useRipple(ref)
  return (
    <>
      <style>
        {`@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}`}
      </style>
      <span ref={ref} {...rest} className={variants({ className })}>
        {ripples}
      </span>
    </>
  )
}

Ripple.displayName = 'Actify.Ripple'

export default Ripple
