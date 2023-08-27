import React from 'react'
import { Ripple } from 'actify'
import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'relative flex items-center h-14 pl-4 leading-normal cursor-pointer isolate'
})

const ListItem = React.forwardRef((props, ref) => {
  const { className, children, ...rest } = props
  const [current, setCurrent] = React.useState()

  return (
    <li
      ref={ref}
      {...rest}
      className={variants({ className })}
      onMouseOver={() => setCurrent(children)}
      onMouseOut={() => setCurrent(undefined)}
    >
      {children}
      {children == current && (
        <motion.div
          layoutId="actify-moving"
          className="absolute inset-0 bg-secondary/25 z-[-1]"
        />
      )}
      <Ripple />
    </li>
  )
})

ListItem.displayName = 'Actify.ListItem'

export default ListItem
