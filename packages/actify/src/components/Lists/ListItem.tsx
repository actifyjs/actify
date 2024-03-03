'use client'
import React, { useId, forwardRef, useState, useMemo, useContext } from 'react'
import { Ripple } from '@actify/Ripple'
import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'
import { ListContext } from './ListContext'

const root = tv({
  base: [
    'flex',
    'pl-4',
    'py-2',
    'isolate',
    'min-h-14',
    'relative',
    'items-center',
    'leading-normal',
    'cursor-pointer'
  ]
})

interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  index?: number
}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>((props, ref) => {
  const { index, className, children, ...rest } = props
  const [current, setCurrent] = useState<string | undefined>('')
  const { layoutId, transition } = useContext(ListContext)

  const id = useId()

  const handleMouseOver = () => {
    if (typeof children === 'string') {
      setCurrent(children)
    }
    if (Array.isArray(children)) {
      setCurrent(index?.toString())
    }
  }

  const isHovered = useMemo(() => {
    if (typeof children === 'string') {
      return children == current
    }
    if (Array.isArray(children)) {
      return index == current
    }
  }, [current, children])

  return (
    <li
      id={id}
      ref={ref}
      {...rest}
      className={root({ className })}
      onMouseOver={handleMouseOver}
      onMouseOut={() => setCurrent(undefined)}
    >
      {children}
      {isHovered && (
        <motion.div
          layoutId={layoutId}
          transition={transition}
          className="absolute inset-0 bg-secondary/25 z-[-1]"
        />
      )}
      <Ripple id={id} />
    </li>
  )
})

ListItem.displayName = 'Actify.ListItem'

export { ListItem }
