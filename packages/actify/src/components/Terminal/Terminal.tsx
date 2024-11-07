'use client'

import React, { useMemo } from 'react'

import clsx from 'clsx'
import { format } from 'date-fns'
import styles from './terminal.module.css'

interface TerminalProps extends React.ComponentProps<'div'> {
  title?: string
  lastlogin?: Date
  hostname?: string
  username?: string
}

const Terminal = (props: TerminalProps) => {
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
    () => format(lastlogin, 'ddd MMM dd HH:mm:ss'),
    [lastlogin]
  )

  return (
    <div {...rest} className={clsx(styles['root'], className)}>
      <div className={styles['traffic-light']}>
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
}

Terminal.displayName = 'Actify.Terminal'

export { Terminal }
