'use client'
import React, { forwardRef, useState, useMemo, useContext } from 'react'
import { Ripple } from '@actify/Ripple'
import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'
import { ListContext } from './ListContext'

const variants = tv({
  base: 'relative flex items-center min-h-14 pl-4 py-2 leading-normal cursor-pointer isolate'
})

interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  index?: number
}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>((props, ref) => {
  const { index, className, children, ...rest } = props
  const [current, setCurrent] = useState<string | undefined>('')
  const { layoutId } = useContext(ListContext)

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
      ref={ref}
      {...rest}
      className={variants({ className })}
      onMouseOver={handleMouseOver}
      onMouseOut={() => setCurrent(undefined)}
    >
      {children}
      {isHovered && (
        <motion.div
          layoutId={layoutId}
          className="absolute inset-0 bg-secondary/25 z-[-1]"
        />
      )}
      <Ripple />
    </li>
  )
})

ListItem.displayName = 'Actify.ListItem'

export { ListItem }
