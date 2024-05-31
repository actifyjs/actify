'use client'

import React, { useId } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

import { FocusRing } from './../FocusRing'
import { Ripple } from './../Ripple'

const root = tv({
  base: [
    'size-10',
    'relative',
    'cursor-pointer',
    'text-current',
    'outline-none',
    'ease-in-out',
    'inline-flex',
    'rounded-full',
    'duration-300',
    'items-center',
    'justify-center',
    'transition-all'
  ],
  variants: {
    variant: {
      standard: '',
      outlined: '',
      filled: '',
      'filled-tonal': ''
    }
  }
})

interface IconButtonProps extends React.ComponentProps<'button'> {
  ripple?: boolean
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button'
  variant?: VariantProps<typeof root>['variant']
}

const IconButton = (props: IconButtonProps) => {
  const {
    id,
    disabled,
    children,
    className,
    ripple = true,
    type = 'button',
    variant = 'standard',
    ...rest
  } = props

  const iconButtonId = id || `actify-icon-button${useId()}`

  return (
    <button
      {...rest}
      id={iconButtonId}
      disabled={disabled}
      className={root({ className })}
    >
      <FocusRing id={iconButtonId} />
      {ripple && <Ripple id={iconButtonId} disabled={disabled} />}
      {children}
      <span className="absolute size-[max(48px,100%)]" />
    </button>
  )
}

IconButton.displayName = 'Actify.IconButton'

export { IconButton }
