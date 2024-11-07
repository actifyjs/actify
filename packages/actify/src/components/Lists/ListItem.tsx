'use client'

import React, { useContext, useId, useMemo, useState } from 'react'

import { ListContext } from './ListContext'
import { Ripple } from './../Ripple'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import styles from './list-item.module.css'

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
      onMouseOver={handleMouseOver}
      onMouseOut={() => setCurrent(undefined)}
      className={clsx(styles['root'], className)}
    >
      {children}
      {isHovered && (
        <motion.div
          layoutId={layoutId}
          transition={transition}
          // @ts-ignore
          className={styles['hovered']}
        />
      )}
      <Ripple id={listItemId} />
    </li>
  )
}

ListItem.displayName = 'Actify.ListItem'

export { ListItem }
