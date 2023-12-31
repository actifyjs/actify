'use client'
import React, { forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { setColor } from './../../utils'
import { Ripple } from '@actify/Ripple'
import { Elevation } from '@actify/Elevation'

const variants = tv({
  base: 'relative inline-flex items-center justify-center w-fit font-medium tracking-wide',
  variants: {
    size: {
      small: 'h-10 px-2 rounded-xl',
      medium: 'h-14 px-4 rounded-2xl',
      large: 'h-24 px-8 rounded-[28px]'
    }
  }
})

interface FabProps
  extends VariantProps<typeof variants>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  icon?: JSX.Element
  variant?: 'surface' | 'primary' | 'secondary' | 'tertiary'
}

const Fab: React.FC<FabProps> = forwardRef(
  (props, ref?: React.Ref<HTMLButtonElement>) => {
    const {
      label,
      style,
      icon,
      size = 'medium',
      color = 'primary',
      variant = 'primary',
      type,
      className,
      children,
      ...rest
    } = props

    let styles = { ...style }
    styles['color'] = setColor(color)

    return (
      <button
        ref={ref}
        {...rest}
        style={styles}
        type={type || 'button'}
        className={variants({ size, className })}
      >
        {icon}
        {children}
        {label}
        <Ripple />
        <Elevation level={3} />
      </button>
    )
  }
)

Fab.displayName = 'Actify.Fab'

export { Fab }
