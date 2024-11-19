'use client'

import {
  AriaButtonProps,
  mergeProps,
  useButton,
  useFocusRing
} from 'react-aria'
import React, { useId } from 'react'

import { Elevation } from './../Elevation'
import { FocusRing } from './../FocusRing'
import { Ripple } from './../Ripple'
import clsx from 'clsx'
import styles from './fab.module.css'

type FabProps = {
  label?: string
  icon?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  variant?: 'surface' | 'primary' | 'secondary' | 'tertiary'
} & Omit<React.ComponentProps<'button'>, 'disabled'> &
  AriaButtonProps

const Fab = (props: FabProps) => {
  const {
    id,
    ref,
    icon,
    label,
    size = 'medium',
    isDisabled = false,
    className,
    children
  } = props

  const fabRef = ref || React.useRef(null)
  const { buttonProps } = useButton(
    props,
    fabRef as React.RefObject<HTMLButtonElement>
  )
  const fabId = id || `actify-fab${useId()}`
  const { focusProps, isFocusVisible } = useFocusRing()

  return (
    <button
      id={fabId}
      ref={fabRef}
      className={clsx(styles['fab'], styles[size], className)}
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
