import React from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: '[margin-inline-start:4px] min-w-[48px] flex h-full relative items-center justify-center'
})

const TrailingIcon = ({ style, className, children }) => {
  return (
    <div style={style} className={variants({ className })}>
      {children}
    </div>
  )
}

TrailingIcon.displayName = 'TrailingIcon'

export { TrailingIcon }
