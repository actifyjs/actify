import React, { useId, forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { ListContext } from './ListContext'

const variants = tv({
  base: 'py-2 bg-surface'
})

const List = forwardRef((props, ref) => {
  const { className, children, ...rest } = props
  const layoutId = useId()

  return (
    <ListContext.Provider value={{ layoutId }}>
      <ul ref={ref} {...rest} className={variants({ className })}>
        {children}
      </ul>
    </ListContext.Provider>
  )
})

List.displayName = 'Actify.List'

export { List }
