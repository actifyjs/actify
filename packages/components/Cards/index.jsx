import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { Ripple, Elevation } from 'actify'

const Card = forwardRef((props, ref) => {
  const { ripple, children, className, ...rest } = props

  return (
    <div ref={ref} {...rest} className={clsx('relative inline-flex flex-col rounded-lg', className)}>
      {children}
      {ripple && <Ripple />}
      <Elevation level="1" />
    </div>
  )
})

Card.displayName = 'Actify.Card'

export default Card
