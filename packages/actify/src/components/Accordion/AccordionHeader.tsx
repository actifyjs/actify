'use client'

import React, { useMemo } from 'react'

import { Icon } from './../Icon'
import { Slot } from './../Slot'
import { Text } from './../Text'
import clsx from 'clsx'
import styles from './accordion.module.css'
import { useAccordion } from './AccordionContext'

export type AccordionHeaderProps = {
  index?: number
  asChild?: boolean
  children?: ((_?: any) => React.ReactNode) | React.ReactNode
} & React.ComponentProps<'div'>

const AccordionHeader = (props: AccordionHeaderProps) => {
  const { index, asChild, className, children, ...rest } = props
  const { multiple, open, setOpen } = useAccordion()

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
        onClick={handleClick}
        {...{
          active,
          ...rest
        }}
        className={clsx(styles['a-accordion-header'], className)}
      >
        {typeof children === 'function' ? children({ active }) : children}
      </Slot>
    )
  }

  return (
    <div
      {...rest}
      onClick={handleClick}
      className={clsx('a-accordion-header', className)}
    >
      <Text>{children}</Text>
      <div
        style={{
          transitionDuration: '300ms',
          transitionProperty: 'rotate',
          rotate: active ? '90deg' : 'none'
        }}
      >
        <Icon>keyboard_arrow_down</Icon>
      </div>
    </div>
  )
}

export { AccordionHeader }
