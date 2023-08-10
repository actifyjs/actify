import clsx from 'clsx'
import React, { forwardRef } from 'react'
import Ripple from '@/packages/components/Ripple'
import Elevation from '@/packages/components/Elevation'

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
