'use client'
import React from 'react'
import { tv } from 'tailwind-variants'
import { setColor } from './../../utils'

const variants = tv({
  base: 'relative before:absolute before:inset-0 before:bg-[--color]'
})

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string
  thickness?: number | string
}

const Divider: React.FC<DividerProps> = (props) => {
  const { style, color, thickness, className, ...rest } = props
  const styles = { ...style }
  if (color) {
    styles['--color'] = setColor(color)
  } else {
    styles['--color'] = 'var(--md-sys-color-outline-variant, #cac4d0)'
  }
  if (thickness) {
    styles['height'] = thickness + 'px'
  } else {
    styles['height'] = '1px'
  }

  return (
    <div {...rest} style={styles} className={variants({ className })}></div>
  )
}

Divider.displayName = 'Actify.Divider'

export default Divider
