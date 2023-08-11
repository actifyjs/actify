import { tv } from 'tailwind-variants'
import React, { forwardRef } from 'react'
import { Ripple, Elevation } from 'actify'

const variants = tv({
  base: 'relative inline-flex flex-col rounded-lg'
})

const Card = forwardRef((props, ref) => {
  const { ripple, children, className, ...rest } = props

  return (
    <div ref={ref} {...rest} className={variants({ className })}>
      {children}
      {ripple && <Ripple />}
      <Elevation level="1" />
    </div>
  )
})

Card.displayName = 'Actify.Card'

export default Card
