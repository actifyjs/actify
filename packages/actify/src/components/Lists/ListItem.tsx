'use client'

import React, { useContext, useId, useMemo, useState } from 'react'

import { ListContext } from './ListContext'
import { Ripple } from './../Ripple'
import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'

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

interface ListItemProps extends React.ComponentProps<'li'> {
  index?: number
}

const ListItem = (props: ListItemProps) => {
  const { id, index, className, children, ...rest } = props
  const [current, setCurrent] = useState<string | undefined>('')
  const { layoutId, transition } = useContext(ListContext)

  const listItemId = id || `actify-list-item${useId()}`

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
      {...rest}
      id={listItemId}
      className={root({ className })}
      onMouseOver={handleMouseOver}
      onMouseOut={() => setCurrent(undefined)}
    >
      {children}
      {isHovered && (
        <motion.div
          layoutId={layoutId}
          transition={transition}
          className="absolute inset-0 bg-surface-variant z-[-1]"
        />
      )}
      <Ripple id={listItemId} />
    </li>
  )
}

ListItem.displayName = 'Actify.ListItem'

export { ListItem }
