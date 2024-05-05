'use client'
import React, { useId, forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { Ripple } from './../Ripple'
import { ButtonProps } from './Button'
import { Elevation } from './../Elevation'
import { FocusRing } from './../FocusRing'
import { ButtonBase } from './ButtonBase'

const root = tv({
  extend: ButtonBase,
  base: [
    '[outline:none]',
    'interactive-bg-surface',
    '[--container-color:var(--md-elevated-button-container-color,var(--md-sys-color-surface-container-low,#f7f2fa))]',
    '[--leading-space:var(--md-filled-button-leading-space,24px)]',
    '[--trailing-space:var(--md-filled-button-trailing-space,24px)]',
    '[--pressed-label-text-color:var(--md-elevated-button-pressed-label-text-color,var(--md-sys-color-primary,#6750a4))]'
  ],
  variants: {
    color: {
      primary: 'text-primary hover:bg-primary/5',
      secondary: 'text-secondary hover:bg-secondary/5',
      tertiary: 'text-tertiary hover:bg-tertiary/5',
      error: 'text-error hover:bg-error/5'
    },
    disabled: {
      true: 'pointer-events-none'
    }
  },
  defaultVariants: {
    color: 'primary'
  }
})

const background = tv({
  base: [
    'absolute',
    'inset-0',
    'rounded-[inherit]',
    '[background-color:--container-color]'
  ]
})

const button = tv({
  base: [
    '[text-overflow:inherit]',
    'rounded-[inherit]',
    '[cursor:inherit]',
    'inline-flex',
    'items-center',
    'justify-center',
    '[border:none]',
    '[outline:none]',
    'appearance-none',
    '[vertical-align:middle]',
    'bg-[#00000000]',
    '[text-decoration:none]',
    '[min-width:calc(64px_-_var(--leading-space)_-_var(--trailing-space))]',
    'p-0',
    'z-0',
    'size-full',
    '[font:inherit]',
    '[color:var(--label-text-color)]',
    '[gap:inherit]'
  ]
})

const touch = tv({
  base: ['absolute', 'top-1/2', 'h-12', 'left-0', 'right-0', '-translate-y-1/2']
})

const label = tv({
  base: ['flex', 'gap-2', 'items-center', 'overflow-hidden']
})

const ElevatedButton = forwardRef(
  (props: Omit<ButtonProps, 'variant'>, ref?: React.Ref<HTMLButtonElement>) => {
    const {
      href,
      style,
      disabled = false,
      children,
      className,
      ripple = true,
      color = 'primary',
      ...rest
    } = props

    const id = useId()
    const Tag = href ? 'a' : 'button'

    return (
      <div
        className={root({
          color,
          disabled,
          className
        })}
      >
        <Elevation level={1} />
        <div className={background()}></div>
        <FocusRing id={id} />
        {ripple && <Ripple id={id} disabled={disabled} />}
        <Tag
          // @ts-expect-error
          ref={ref}
          id={id}
          {...rest}
          href={href}
          style={style}
          className={button()}
          disabled={disabled}
        >
          <span className={touch()}></span>
          <span className={label()}>{children}</span>
        </Tag>
      </div>
    )
  }
)

export default ElevatedButton
