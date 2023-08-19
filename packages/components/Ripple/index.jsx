import React from 'react'
import useRipple from './useRipple'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'absolute overflow-hidden inset-0 rounded-[inherit]'
})

const Ripple = (props) => {
  const { className, ...rest } = props

  const ref = React.useRef(null)
  const ripples = useRipple(ref)
  return (
    <span ref={ref} {...rest} className={variants({ className })}>
      {ripples}
    </span>
  )
}

Ripple.displayName = 'Actify.Ripple'

export default Ripple
