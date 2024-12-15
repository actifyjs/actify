'use client'

import React, { useId } from 'react'

import { ListContext } from './ListContext'
import { Transition } from 'motion/react'
import clsx from 'clsx'
import styles from './list.module.css'

interface ListProps extends React.ComponentProps<'ul'> {
  transition?: Transition
}

const List = (props: ListProps) => {
  const { className, children, transition, ...rest } = props
  const layoutId = useId()

  return (
    <ListContext value={{ layoutId, transition }}>
      <ul {...rest} className={clsx(styles['ul'], className)}>
        {children}
      </ul>
    </ListContext>
  )
}

List.displayName = 'Actify.List'

export { List }
