'use client'

import React, { useId } from 'react'

import { ListContext } from './ListContext'
import { Transition } from 'framer-motion'
import { tv } from 'tailwind-variants'

const root = tv({
  base: 'py-2 bg-surface overflow-hidden'
})

interface ListProps extends React.ComponentProps<'ul'> {
  transition?: Transition
}

const List = (props: ListProps) => {
  const { className, children, transition, ...rest } = props
  const layoutId = useId()

  return (
    <ListContext.Provider value={{ layoutId, transition }}>
      <ul {...rest} className={root({ className })}>
        {children}
      </ul>
    </ListContext.Provider>
  )
}

List.displayName = 'Actify.List'

export { List }
