import React, {
  Children,
  forwardRef,
  cloneElement,
  isValidElement
} from 'react'
import { tv, VariantProps } from 'tailwind-variants'

enum SIZE {
  xs = 16,
  sm = 18,
  md = 24,
  lg = 30,
  xl = 36,
  '2xl' = 40
}

const root = tv({
  base: [
    '[--icon-color:--color-on-primary]',
    '[--disabled-icon-opacity:var(--md-filled-button-disabled-icon-opacity,0.38)]',
    '[--disabled-icon-color:var(--md-filled-button-disabled-icon-color,var(--md-sys-color-on-surface,#1d1b20))]',
    'relative',
    'shrink-0',
    'inline-flex',
    'fill-current',
    'text-[--icon-color]',
    '[font-size:--icon-size]',
    '[inline-size:--icon-size]',
    '[block-size:--icon-size]',
    '[writing-mode:horizontal-tb]'
  ],
  variants: {
    size: {
      xs: `[--icon-size:${SIZE.xs}px]`,
      sm: `[--icon-size:${SIZE.sm}px]`,
      md: `[--icon-size:${SIZE.md}px]`,
      lg: `[--icon-size:${SIZE.lg}px]`,
      xl: `[--icon-size:${SIZE.xl}px]`,
      '2xl': `[--icon-size:${SIZE['2xl']}px]`
    },
    disabled: {
      true: [
        'text-[--disabled-icon-color]',
        'opacity-[--disabled-icon-opacity]'
      ]
    }
  },
  defaultVariants: {
    size: 'sm',
    disabled: false
  }
})

interface IconProps
  extends React.ComponentProps<'i'>,
    VariantProps<typeof root> {}

const Icon = forwardRef((props: IconProps, ref?: React.Ref<HTMLElement>) => {
  const { size, style, disabled = false, className, children } = props

  return (
    <i
      ref={ref}
      style={style}
      aria-hidden="true"
      className={root({
        size,
        disabled,
        className
      })}
    >
      {Children.map(
        children,
        (child) =>
          isValidElement(child) &&
          cloneElement(child, {
            size: SIZE[size!],
            ...child.props
          })
      )}
    </i>
  )
})

Icon.displayName = 'Actify.Icon'

export default Icon
