'use client'
import React, { useId, forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { Ripple } from '@actify/Ripple'
import { Elevation } from '@actify/Elevation'
import { FocusRing } from '@actify/FocusRing'

const root = tv({
  base: [
    'h-10',
    'px-6',
    'py-2',
    'gap-2',
    'text-sm',
    'relative',
    'inline-flex',
    'items-center',
    'cursor-pointer',
    'justify-center',
    'select-none',
    'rounded-full',
    'transition-all',
    'duration-300',
    'ease-in-out',
    'font-medium',
    'tracking-wide'
  ],
  variants: {
    color: {
      primary: 'interactive-bg-primary-container',
      secondary: 'interactive-bg-secondary-container',
      tertiary: 'interactive-bg-tertiary-container',
      error: 'interactive-bg-error-container'
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
    '[background-color:--_container-color]'
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

interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof root> {
  href?: string
  ripple?: boolean
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button'
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
}

const TonalButton = forwardRef(
  (props: ButtonProps, ref?: React.Ref<HTMLButtonElement>) => {
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
        <Elevation />
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

export default TonalButton
