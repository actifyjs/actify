import React from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'flex-1'
})

const Spacer = ({ className }) => {
  return <div className={variants({ className })}></div>
}

Spacer.displayName = 'Actify.Spacer'

export { Spacer }
