'use client'

import { Slot } from '@actify/Slot'
import { useAccordion } from './AccordionContext'
import React, { useMemo, forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const variants = tv({
  base: 'transition-all duration-300 ease-in-out grid',
  variants: {
    active: {
      true: 'grid-rows-[1fr]',
      false: 'grid-rows-[0fr]',
      undefined: 'grid-rows-[0fr]'
    }
  }
})

export type AccordionContentProps = {
  index?: number
  asChild?: boolean
  children?: ((_?: any) => React.ReactNode) | React.ReactNode
} & VariantProps<typeof variants> &
  React.HTMLAttributes<HTMLDivElement>

const AccordionContent: React.FC<AccordionContentProps> = forwardRef(
  (props, ref?: React.Ref<HTMLDivElement>) => {
    const { index, style, className, asChild, ...rest } = props
    const { open } = useAccordion()

    const active = useMemo(() => {
      if (open !== undefined) {
        return open[index as number]
      }
    }, [open, index])

    if (asChild) {
      return (
        <Slot
          ref={ref}
          style={style}
          {...{
            active,
            ...rest
          }}
          className={variants({ className })}
        >
          {typeof rest.children === 'function'
            ? rest.children({ active })
            : rest.children}
        </Slot>
      )
    } else {
      return (
        <div
          {...rest}
          ref={ref}
          style={style}
          className={variants({ className, active })}
        >
          <p className="overflow-hidden">{rest.children}</p>
        </div>
      )
    }
  }
)

export { AccordionContent }
