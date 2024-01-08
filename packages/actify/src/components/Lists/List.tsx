'use client'
import React, { useId, forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { ListContext } from './ListContext'
import { type Transition } from 'framer-motion'

const variants = tv({
  base: 'py-2 bg-surface overflow-hidden'
})

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  transition?: Transition
}

const List = forwardRef<HTMLUListElement, ListProps>((props, ref) => {
  const { className, children, transition, ...rest } = props
  const layoutId = useId()

  return (
    <ListContext.Provider value={{ layoutId, transition }}>
      <ul ref={ref} {...rest} className={variants({ className })}>
        {children}
      </ul>
    </ListContext.Provider>
  )
})

List.displayName = 'Actify.List'

export default List
