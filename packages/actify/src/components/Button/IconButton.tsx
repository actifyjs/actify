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
import clsx from 'clsx'

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
  type?: 'submit' | 'reset' | 'button'
  variant?: VariantProps<typeof root>['variant']
} & Omit<React.ComponentProps<'button'>, 'disabled'> &
  AriaButtonProps

const IconButton = (props: IconButtonProps) => {
  const { id, ref, ripple, children, className, isDisabled } = props

  const buttonRef = React.useRef(null)
  const { buttonProps } = useButton(props, buttonRef)
  const iconButtonId = id || `actify-icon-button${useId()}`

  const { focusProps, isFocusVisible } = useFocusRing()

  return (
    <button
      id={iconButtonId}
      ref={ref || buttonRef}
      {...mergeProps(buttonProps, focusProps)}
      className={clsx(isDisabled && 'text-outline', root({ className }))}
    >
      {/* FocusRing */}
      {isFocusVisible && <FocusRing />}
      {ripple && <Ripple id={iconButtonId} disabled={isDisabled} />}
      {children}
      <span className="absolute size-[max(48px,100%)]" />
    </button>
  )
}

IconButton.displayName = 'Actify.IconButton'

export { IconButton }
