'use client'
import dayjs from 'dayjs'
import { tv } from 'tailwind-variants'
import React, { forwardRef, useMemo } from 'react'

const variants = tv({
  base: 'mx-auto h-64 overflow-hidden rounded shadow-2xl bg-black'
})

interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  lastlogin?: Date
  hostname?: string
  username?: string
}

const Terminal = forwardRef<HTMLDivElement, TerminalProps>((props, ref) => {
  const {
    title = 'Terminal',
    username = 'lerte',
    lastlogin = new Date(),
    hostname = 'Lerte-MacBook-Pro',
    children,
    className,
    ...rest
  } = props

  const _lastLogin = useMemo(
    () => dayjs(lastlogin).format('ddd MMM DD HH:mm:ss'),
    [lastlogin]
  )

  return (
    <div ref={ref} {...rest} className={variants({ className })}>
      <div className="flex h-6 items-center border-b bg-surface">
        <div className="ml-2 size-3 rounded-full border-red-900 bg-red-500 shadow-inner"></div>
        <div className="ml-2 size-3 rounded-full border-yellow-900 bg-yellow-500 shadow-inner"></div>
        <div className="ml-2 size-3 rounded-full border-green-900 bg-green-500 shadow-inner"></div>
        <div className="mx-auto pr-16">
          <p className="text-center text-sm">{title}</p>
        </div>
      </div>
      <div className="pl-1 pt-1 font-mono text-current text-white">
        <p className="pb-1">Last login: {_lastLogin} on ttys000</p>
        <p className="pb-1">
          {hostname}:{username}$ <span>{children}</span>
        </p>
      </div>
    </div>
  )
})

Terminal.displayName = 'Actify.Terminal'

export default Terminal
