'use client'

import React, { useMemo } from 'react'

import { tv } from 'tailwind-variants'

const root = tv({
  base: [
    'p-1',
    'grid',
    'text-xs',
    'min-w-6',
    'min-h-6',
    'top-[4%]',
    'absolute',
    'text-white',
    'right-[2%]',
    'font-medium',
    'leading-none',
    'rounded-full',
    'translate-x-1/2',
    '-translate-y-1/2',
    'place-items-center'
  ],
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

interface BadgeProps extends React.ComponentProps<'div'> {
  value?: string | number
  color?: 'primary' | 'secondary' | 'tertiary' | 'error'
}

const Badge = (props: BadgeProps) => {
  const { color, value = '', className, children, ...rest } = props

  const badge = useMemo(() => {
    if (parseInt(value.toString()) > 999) {
      return '999+'
    } else {
      return value
    }
  }, [value])

  return (
    <div className="inline-flex relative">
      {children}
      <span className={root({ color, className })} {...rest}>
        {badge}
      </span>
    </div>
  )
}

Badge.displayName = 'Actify.Badge'

export { Badge }
