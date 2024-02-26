'use client'
import React, { useId, forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { Ripple } from '@actify/Ripple'
import { Elevation } from '@actify/Elevation'
import { FocusRing } from '@actify/FocusRing'
import { ButtonProps } from './Button'
import { ButtonBase } from './ButtonBase'

const root = tv({
  extend: ButtonBase,
  base: [
    '[--with-leading-icon-leading-space:16px]',
    '[--with-leading-icon-trailing-space:24px]',
    '[--with-trailing-icon-leading-space:24px]',
    '[--with-trailing-icon-trailing-space:16px]',
    '[--disabled-container-opacity:.12]',
    '[--disabled-container-color:var(--md-filled-button-disabled-container-color,var(--md-sys-color-on-surface,#1d1b20))]'
  ],
  variants: {
    color: {
      primary: 'interactive-bg-primary',
      secondary: 'interactive-bg-secondary',
      tertiary: 'interactive-bg-tertiary',
      error: 'interactive-bg-error'
    },
    hasIcon: {
      true: ''
    },
    trailingIcon: {
      true: ''
    },
    disabled: {
      true: 'pointer-events-none'
    }
  },
  compoundVariants: [
    {
      hasIcon: true,
      trailingIcon: false,
      className:
        'ps-[--with-leading-icon-leading-space] pe-[--with-leading-icon-trailing-space]'
    },
    {
      hasIcon: true,
      trailingIcon: true,
      className:
        'ps-[--with-trailing-icon-leading-space] pe-[--with-trailing-icon-trailing-space]'
    }
  ],
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
  ],
  variants: {
    disabled: {
      true: [
        'opacity-[--disabled-container-opacity]',
        '[background-color:--disabled-container-color]'
      ]
    }
  }
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
    'w-full',
    'z-0',
    'h-full',
    '[font:inherit]',
    '[color:var(--label-text-color)]',
    'p-0',
    '[gap:inherit]'
  ]
})

const touch = tv({
  base: ['absolute', 'top-1/2', 'h-12', 'left-0', 'right-0', '-translate-y-1/2']
})

const label = tv({
  base: ['flex', 'gap-2', 'items-center', 'overflow-hidden']
})

const FilledButton = forwardRef(
  (props: Omit<ButtonProps, 'variant'>, ref?: React.Ref<HTMLButtonElement>) => {
    const {
      href,
      style,
      children,
      className,
      ripple = true,
      disabled = false,
      trailingIcon = false,
      color = 'primary',
      ...rest
    } = props

    const id = useId()
    const Tag = href ? 'a' : 'button'

    const hasIcon = React.Children.toArray(children).find(
      (child) =>
        // @ts-expect-error
        child?.type?.displayName == 'Actify.Icon'
    )
      ? true
      : false

    return (
      <div
        role="presentation"
        className={root({
          color,
          hasIcon,
          disabled,
          trailingIcon,
          className
        })}
      >
        <Elevation />
        <div className={background({ disabled })}></div>
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

          {hasIcon &&
            !trailingIcon &&
            React.Children.toArray(children).filter(
              // @ts-expect-error
              (child) => child?.type?.displayName == 'Actify.Icon'
            )}

          <span className={label()}>
            {React.Children.toArray(children).filter(
              // @ts-expect-error
              (child) => child?.type?.displayName != 'Actify.Icon'
            )}
          </span>

          {hasIcon &&
            trailingIcon &&
            React.Children.toArray(children).filter(
              // @ts-expect-error
              (child) => child?.type?.displayName == 'Actify.Icon'
            )}
        </Tag>
      </div>
    )
  }
)

export default FilledButton
