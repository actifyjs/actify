'use client'
import React, { forwardRef, useState } from 'react'
import { Icon, Ripple } from 'actify'
import { tv, VariantProps } from 'tailwind-variants'

const variants = tv({
  base: 'relative inline-flex items-center gap-2 px-4 h-8 rounded-lg text-sm border border-outline no-underline bg-surface hover:bg-surface/10',
  variants: {
    type: {
      assist: '',
      filter: '',
      input: '',
      suggestion: ''
    }
  }
})

interface ChipProps
  extends VariantProps<typeof variants>,
    React.HTMLAttributes<HTMLAnchorElement | HTMLDivElement> {
  label?: string
  icon?: string
  href?: string
  target?: string
  ripple?: boolean
  selected?: boolean
}

const Chip = forwardRef<HTMLAnchorElement | HTMLDivElement, ChipProps>(
  (props, ref) => {
    const [show, setShow] = useState(true)
    const [selected, setSelected] = useState(false)
    const {
      label,
      ripple = true,
      type = 'assist',
      color = 'primary',
      icon,
      style,
      className,
      children,
      ...rest
    } = props

    const handleClick = (e) => {
      rest.onClick?.(e)
      if (type == 'filter') {
        setSelected(!selected)
      }
    }

    const Tag =
      // @ts-ignore
      ['assist', 'suggestion'].includes(type) && rest.href ? 'a' : 'div'

    return (
      show && (
        <Tag
          // @ts-ignore
          ref={ref}
          {...rest}
          style={style}
          onClick={handleClick}
          className={variants({ type, className })}
        >
          {type == 'filter' && (
            <Icon
              size={18}
              color={color}
              name={`${selected ? 'check' : 'circle'}`}
            />
          )}
          {label}
          {ripple && <Ripple />}
          {type == 'input' && (
            <Icon name="x" size={18} onClick={() => setShow(false)} />
          )}
        </Tag>
      )
    )
  }
)

Chip.displayName = 'Actify.Chip'

export default Chip
