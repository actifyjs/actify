'use client'

import {
  AriaButtonProps,
  mergeProps,
  useButton,
  useFocusRing
} from 'react-aria'
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

type FabProps = {
  label?: string
  icon?: React.ReactNode
  variant?: 'surface' | 'primary' | 'secondary' | 'tertiary'
} & Omit<React.ComponentProps<'button'>, 'disabled'> &
  VariantProps<typeof root> &
  AriaButtonProps

const Fab = (props: FabProps) => {
  const {
    id,
    icon,
    label,
    size = 'medium',
    isDisabled = false,
    className,
    children
  } = props

  const fabRef = React.useRef(null)
  const { buttonProps } = useButton(props, fabRef)
  const fabId = id || `actify-fab${useId()}`
  const { focusProps, isFocusVisible } = useFocusRing()

  return (
    <button
      id={fabId}
      ref={fabRef}
      className={root({ size, className })}
      {...mergeProps(buttonProps, focusProps)}
    >
      {icon}
      {children}
      {label}
      <Elevation className="[--md-elevation-level:3]" />
      {isFocusVisible && <FocusRing />}
      <Ripple id={fabId} disabled={isDisabled} />
    </button>
  )
}

Fab.displayName = 'Actify.Fab'

export { Fab }
