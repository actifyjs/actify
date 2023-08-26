import React from 'react'
import { Ripple } from 'actify'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'relative flex items-center h-14 pl-4 leading-normal cursor-pointer hover:bg-secondary'
})

const ListItem = React.forwardRef((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <li ref={ref} className={variants({ className })} {...rest}>
      {children}
      <Ripple />
    </li>
  )
})

ListItem.displayName = 'Actify.ListItem'

export default ListItem
