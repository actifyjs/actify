import React, { useRef } from 'react'
import useRipple from '@/packages/hooks/useRipple'

const Ripple = () => {
  const ref = useRef(null)
  const ripples = useRipple(ref)
  return (
    <span ref={ref} className="overflow-hidden absolute inset-0">
      {ripples}
    </span>
  )
}

Ripple.displayName = 'Actify.Ripple'

export default Ripple
