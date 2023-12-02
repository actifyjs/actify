'use client'
import { Icon } from 'actify'
import { tv } from 'tailwind-variants'
import { AccordionContext } from '../AccordionContext'

import React, {
  useContext,
  forwardRef,
  cloneElement,
  isValidElement
} from 'react'
import { Text } from './../../Text'

const variants = tv({
  base: 'font-black cursor-pointer flex items-center justify-between',
  variants: {
    open: {
      true: 'text-primary',
      false: '',
      undefined: ''
    }
  }
})

export type AccordionHeaderProps = {
  index?: number
  asChild?: boolean
} & React.HTMLAttributes<HTMLDivElement>

const AccordionHeader: React.FC<AccordionHeaderProps> = forwardRef(
  (props, ref?: React.Ref<HTMLDivElement>) => {
    const { index, style, className, asChild, children, ...rest } = props
    const { multiple, open, setOpen } = useContext(AccordionContext)

    const handleClick = () => {
      let arr: boolean[] = []
      if (multiple) {
        arr = [...open]
      } else {
        arr = open.map((_, i) => i != index && false)
      }
      arr[index] = !arr[index]
      setOpen(arr)
    }

    // `asChild` allows the user to pass any element as the header
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        ref,
        ...rest,
        ...children.props,
        onClick: handleClick,
        className: variants({ className: children.props.className })
      })
    }

    return (
      <div
        {...rest}
        ref={ref}
        style={style}
        onClick={handleClick}
        className={variants({ className, open: open[index] })}
      >
        <Text>{children}</Text>

        <div
          className={`transition-transform duration-300 ${
            open[index] ? 'rotate-90' : 'rotate-0'
          }`}
        >
          <Icon name="chevron-down" />
        </div>
      </div>
    )
  }
)

export { AccordionHeader }
