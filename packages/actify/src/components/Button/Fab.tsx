'use client'
import React, { useId, forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { setColor } from './../../utils'
import { Ripple } from './../Ripple'
import { FocusRing } from './../FocusRing'
import { Elevation } from './../Elevation'

const root = tv({
  base: [
    'w-fit',
    'relative',
    'font-medium',
    'inline-flex',
    'items-center',
    'justify-center',
    'tracking-wide',
    'outline-none'
  ],
  variants: {
    size: {
      small: ['h-10', 'px-2', 'rounded-xl', '[--md-focus-ring-shape:12px]'],
      medium: ['h-14', 'px-4', 'rounded-2xl', '[--md-focus-ring-shape:16px]'],
      large: ['h-24', 'px-8', 'rounded-[28px]', '[--md-focus-ring-shape:28px]']
    }
  }
})

interface FabProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof root> {
  label?: string
  icon?: JSX.Element
  variant?: 'surface' | 'primary' | 'secondary' | 'tertiary'
}

const Fab = forwardRef(
  (props: FabProps, ref?: React.Ref<HTMLButtonElement>) => {
    const {
      type,
      icon,
      style,
      label,
      size = 'medium',
      color = 'primary',
      variant = 'primary',
      disabled = false,
      className,
      children,
      ...rest
    } = props

    const id = useId()
    let styles = { ...style }
    styles['color'] = setColor(color)

    return (
      <button
        ref={ref}
        {...rest}
        id={id}
        style={styles}
        disabled={disabled}
        type={type || 'button'}
        className={root({ size, className })}
      >
        {icon}
        {children}
        {label}
        <Elevation level={3} />
        <FocusRing id={id} />
        <Ripple id={id} disabled={disabled} />
      </button>
    )
  }
)

Fab.displayName = 'Actify.Fab'

export { Fab }
