'use client'
import { tv } from 'tailwind-variants'
import { ChevronDown } from 'lucide-react'
import { AccordionContext } from '../AccordionContext'

import React, { useMemo, useContext, forwardRef } from 'react'

import { Text } from '@actify/Text'
import { Slot } from '@actify/Slot'

const variants = tv({
  base: 'font-black cursor-pointer flex items-center justify-between',
  variants: {
    active: {
      true: 'text-primary',
      false: '',
      undefined: ''
    }
  }
})

export type AccordionHeaderProps = {
  index?: number
  asChild?: boolean
} & React.HTMLAttributes<HTMLElement>

const AccordionHeader: React.FC<AccordionHeaderProps> = forwardRef(
  (props, ref?: React.Ref<HTMLDivElement>) => {
    const { index, asChild, className, ...rest } = props
    const { multiple, open, setOpen } = useContext(AccordionContext)

    const active = useMemo(() => {
      if (open !== undefined) {
        return open[index as number]
      }
    }, [open, index])

    const handleClick = () => {
      let arr: boolean[] = []
      if (multiple) {
        arr = [...(open as boolean[])]
        arr[index as number] = !arr[index as number]
      } else {
        arr[index as number] = !open?.[index as number]
      }
      setOpen?.([...arr])
    }

    if (asChild) {
      return (
        <Slot
          ref={ref}
          onClick={handleClick}
          {...{
            active,
            ...rest
          }}
          className={variants({ className })}
        >
          {typeof rest.children === 'function'
            ? // @ts-expect-error
              rest.children({ active })
            : rest.children}
        </Slot>
      )
    }

    return (
      <div
        ref={ref}
        {...rest}
        onClick={handleClick}
        className={variants({ active, className })}
      >
        <Text>{rest.children}</Text>
        <div
          className={`transition-transform duration-300 ${
            active ? 'rotate-90' : 'rotate-0'
          }`}
        >
          <ChevronDown />
        </div>
      </div>
    )
  }
)

export { AccordionHeader }
