'use client'

import { VariantProps, tv } from 'tailwind-variants'

import { Icon } from './../Icon'
import React from 'react'
import { Spacer } from './../Spacer'

const root = tv({
  base: 'inline-flex w-full items-center justify-start bg-surface px-4 py-2',
  variants: {
    size: {
      default: 'h-16 text-center gap-1.5', // Center-aligned top app bar
      small: 'h-16 gap-1',
      medium: 'h-28 gap-1',
      large: 'h-40 gap-10'
    }
  },
  defaultVariants: {
    size: 'default'
  }
})

interface TopAppBarProps
  extends VariantProps<typeof root>,
    React.ComponentProps<'div'> {}

const TopAppBar = (props: TopAppBarProps) => {
  const { title, size, className, ...rest } = props
  return (
    <div {...rest} className={root({ size, className })}>
      <div className="inline-flex size-12 flex-col items-center justify-center gap-2.5">
        <div className="inline-flex items-center justify-center gap-2.5 rounded-[100px]">
          <div className="flex items-center justify-center gap-2.5 p-2">
            <div className="relative size-6 text-on-surface">
              <Icon>menu</Icon>
            </div>
          </div>
        </div>
      </div>
      {size == 'medium' || size == 'large' ? (
        <Spacer />
      ) : (
        <div className="shrink grow basis-0 text-[22px] font-normal leading-7 text-on-surface">
          {title}
        </div>
      )}
      <div className="inline-flex size-12 flex-col items-center justify-center gap-2.5">
        <div className="inline-flex items-center justify-center gap-2.5 rounded-[100px]">
          <div className="flex items-center justify-center gap-2.5 p-2">
            <div className="relative size-6 text-on-surface">
              <Icon>person</Icon>
            </div>
          </div>
        </div>
      </div>

      {size == 'medium' || size == 'large' ? (
        <div className="w-full items-start justify-start gap-2.5 self-stretch px-4">
          <div className="text-on-surface text-[24px] font-normal leading-loose">
            {title}
          </div>
        </div>
      ) : null}
    </div>
  )
}

TopAppBar.displayName = 'Actify.TopAppBar'

export { TopAppBar }
