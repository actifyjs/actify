'use client'
import React, { useId, forwardRef, useState, useContext } from 'react'
import { Ripple } from '@actify/Ripple'
import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'
import { NavLink } from 'react-router-dom'
import { ListContext } from './ListContext'

const variants = tv({
  base: [
    'flex',
    'pl-4',
    'h-14',
    'isolate',
    'relative',
    'items-center',
    'leading-normal',
    'cursor-pointer'
  ]
})

interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  to: string
}

const ListItemLink = forwardRef<HTMLLIElement, ListItemProps>((props, ref) => {
  const { to, className, children, ...rest } = props
  const [current, setCurrent] = useState<string | undefined>('')
  const { layoutId } = useContext(ListContext)

  const id = useId()

  return (
    <li
      id={id}
      ref={ref}
      {...rest}
      className={variants({ className })}
      onMouseOver={() => setCurrent(children?.toString())}
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
            layoutId={layoutId}
            className="absolute inset-0 bg-secondary/25 z-[-1]"
          />
        )}
        <Ripple id={id} />
      </NavLink>
    </li>
  )
})

ListItemLink.displayName = 'Actify.ListItemLink'

export { ListItemLink }
