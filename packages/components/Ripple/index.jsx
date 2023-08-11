import { tv } from 'tailwind-variants'
import React, { useRef } from 'react'
import useRipple from '@/packages/hooks/useRipple'

const variants = tv({
  base: 'absolute overflow-hidden inset-0 rounded-[inherit]'
})

const Ripple = (props) => {
  const { className, ...rest } = props

  const ref = useRef(null)
  const ripples = useRipple(ref)
  return (
    <span ref={ref} {...rest} className={variants({ className })}>
      {ripples}
    </span>
  )
}

Ripple.displayName = 'Actify.Ripple'

export default Ripple
