'use client'

import React, { useContext, useId, useState } from 'react'

import { ListContext } from './ListContext'
import { Ripple } from './../Ripple'
import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'

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

interface ListItemProps extends React.ComponentProps<'li'> {
  to?: string
}

const ListItemLink = (props: ListItemProps) => {
  const { id, to, className, children, ...rest } = props
  const [current, setCurrent] = useState<string | undefined>('')
  const { layoutId } = useContext(ListContext)

  const itemLinkId = id || `actify-item-link${useId()}`

  return (
    <li
      {...rest}
      id={itemLinkId}
      className={variants({ className })}
      onMouseOver={() => setCurrent(children?.toString())}
      onMouseOut={() => setCurrent(undefined)}
    >
      <a
        href={to}
        className="text-primary bg-black/10 w-[calc(100%+16px)] h-full flex items-center pl-4 -ml-4"
      >
        {children}
        {children == current && (
          <motion.div
            layoutId={layoutId}
            className="absolute inset-0 bg-secondary/25 z-[-1]"
          />
        )}
        <Ripple id={itemLinkId} />
      </a>
    </li>
  )
}

ListItemLink.displayName = 'Actify.ListItemLink'

export { ListItemLink }
