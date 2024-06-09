'use client'

import React, { useMemo } from 'react'

import { Icon } from './../Icon'
import { Slot } from './../Slot'
import { Text } from './../Text'
import clsx from 'clsx'
import styles from './actify.module.css'
import { useAccordion } from './AccordionContext'

export interface AccordionHeaderProps
  extends Omit<React.ComponentProps<'div'>, 'children'> {
  index?: number
  asChild?: boolean
  children?:
    | ((props: { active?: boolean }) => React.ReactNode)
    | React.ReactNode
}

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

  const classes = clsx(styles['accordion-header'], className)

  if (asChild) {
    return (
      <Slot
        onClick={handleClick}
        {...{
          active,
          ...rest
        }}
      >
        {typeof children === 'function' ? children({ active }) : children}
      </Slot>
    )
  }

  return (
    <div {...rest} onClick={handleClick} className={classes}>
      <Text>{children as React.ReactNode}</Text>
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
