'use client'
import React, { forwardRef, useMemo } from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: "absolute rounded-full p-1 text-xs font-medium content-[''] leading-none grid place-items-center top-[4%] right-[2%] translate-x-1/2 -translate-y-1/2 text-white min-w-[24px] min-h-[24px]",
  variants: {
    color: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      tertiary: 'bg-tertiary',
      error: 'bg-error'
    }
  },
  defaultVariants: {
    color: 'error'
  }
})

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string | number
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
}

const Badge: React.FC<BadgeProps> = forwardRef(
  (props, ref?: React.Ref<HTMLDivElement>) => {
    const { style, color, value = '', className, children, ...rest } = props

    const badge = useMemo(() => {
      if (parseInt(value.toString()) > 999) {
        return '999+'
      } else {
        return value
      }
    }, [value])

    return (
      <div className="inline-flex relative" ref={ref} {...rest}>
        {children}
        <span className={variants({ color, className })} style={style}>
          {badge}
        </span>
      </div>
    )
  }
)

Badge.displayName = 'Actify.Badge'

export default Badge
