import React from 'react'
import { Ripple } from 'actify'
import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'
import { NavLink } from 'react-router-dom'

const variants = tv({
  base: 'relative flex items-center h-14 pl-4 leading-normal cursor-pointer isolate'
})

const ListItemLink = React.forwardRef((props, ref) => {
  const { to, className, children, ...rest } = props
  const [current, setCurrent] = React.useState()

  return (
    <li
      ref={ref}
      {...rest}
      className={variants({ className })}
      onMouseOver={() => setCurrent(children)}
      onMouseOut={() => setCurrent(undefined)}
    >
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? 'text-primary bg-black/10 w-[calc(100%+16px)] h-full flex items-center pl-4 -ml-4'
            : ''
        }
      >
        {children}
        {children == current && (
          <motion.div
            layoutId="actify-moving"
            className="absolute inset-0 bg-secondary/25 z-[-1]"
          />
        )}
        <Ripple />
      </NavLink>
    </li>
  )
})

ListItemLink.displayName = 'Actify.ListItemLink'

export default ListItemLink
