'use client'
import { Ripple } from '@actify/Ripple'
import { X, Check, Circle } from 'lucide-react'
import React, { forwardRef, useState } from 'react'
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
  href?: string
  target?: string
  ripple?: boolean
  selected?: boolean
  icon?: React.ReactNode
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
          {type == 'filter' && selected ? (
            <Check size={18} color={color} />
          ) : (
            <Circle size={18} color={color} />
          )}
          {label}
          {ripple && <Ripple />}
          {type == 'input' && (
            <X size={18} color={color} onClick={() => setShow(false)} />
          )}
        </Tag>
      )
    )
  }
)

Chip.displayName = 'Actify.Chip'

export default Chip
