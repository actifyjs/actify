'use client'

import React, { useId } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

import { Elevation } from './../Elevation'
import { FocusRing } from './../FocusRing'
import { Ripple } from './../Ripple'

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
  icon?: React.ReactNode
  variant?: 'surface' | 'primary' | 'secondary' | 'tertiary'
}

const Fab = (props: FabProps) => {
  const {
    id,
    icon,
    label,
    type = 'button',
    size = 'medium',
    variant = 'primary',
    disabled = false,
    className,
    children,
    ...rest
  } = props

  const fabId = id || `actify-fab${useId()}`

  return (
    <button
      {...rest}
      id={fabId}
      type={type}
      disabled={disabled}
      className={root({ size, className })}
    >
      {icon}
      {children}
      {label}
      <Elevation className="[--md-elevation-level:3]" />
      <FocusRing id={fabId} />
      <Ripple id={fabId} disabled={disabled} />
    </button>
  )
}

Fab.displayName = 'Actify.Fab'

export { Fab }
