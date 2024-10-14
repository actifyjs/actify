'use client'

import {
  AriaButtonProps,
  mergeProps,
  useButton,
  useFocusRing
} from 'react-aria'
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

type IconButtonProps = {
  ripple?: boolean
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button'
  variant?: VariantProps<typeof root>['variant']
} & React.ComponentProps<'button'> &
  AriaButtonProps

const IconButton = (props: IconButtonProps) => {
  const {
    id,
    disabled,
    children,
    className,
    ripple = !disabled && true
  } = props

  const buttonRef = React.useRef(null)
  const { buttonProps } = useButton(props, buttonRef)
  const iconButtonId = id || `actify-icon-button${useId()}`

  const { focusProps, isFocusVisible } = useFocusRing()

  return (
    <button
      ref={buttonRef}
      id={iconButtonId}
      disabled={disabled}
      {...mergeProps(buttonProps, focusProps)}
      className={(disabled ? 'text-outline ' : '') + root({ className })}
    >
      {/* FocusRing */}
      {isFocusVisible && <FocusRing />}
      {ripple && <Ripple id={iconButtonId} disabled={disabled} />}
      {children}
      <span className="absolute size-[max(48px,100%)]" />
    </button>
  )
}

IconButton.displayName = 'Actify.IconButton'

export { IconButton }
