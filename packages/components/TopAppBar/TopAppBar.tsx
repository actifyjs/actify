'use client'
import React, { forwardRef } from 'react'
import { Icon, Spacer } from 'actify'
import { tv, VariantProps } from 'tailwind-variants'

const variants = tv({
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
  extends VariantProps<typeof variants>,
    React.HTMLAttributes<HTMLDivElement> {}

const TopAppBar = forwardRef<HTMLDivElement, TopAppBarProps>((props, ref) => {
  const { title, size, className, ...rest } = props
  return (
    <div ref={ref} {...rest} className={variants({ size, className })}>
      <div className="inline-flex h-12 w-12 flex-col items-center justify-center gap-2.5">
        <div className="inline-flex items-center justify-center gap-2.5 rounded-[100px]">
          <div className="flex items-center justify-center gap-2.5 p-2">
            <div className="relative h-6 w-6 text-on-surface">
              <Icon name="menu" size={24} />
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
      <div className="inline-flex h-12 w-12 flex-col items-center justify-center gap-2.5">
        <div className="inline-flex items-center justify-center gap-2.5 rounded-[100px]">
          <div className="flex items-center justify-center gap-2.5 p-2">
            <div className="relative h-6 w-6 text-on-surface">
              <Icon name="user" size={24} />
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
})

TopAppBar.displayName = 'Actify.TopAppBar'

export default TopAppBar
