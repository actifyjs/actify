import React, { forwardRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'mx-auto h-64 overflow-hidden rounded shadow-2xl bg-black'
})

const Terminal = forwardRef((props, ref) => {
  const { title, lastlogin, hostname, username, children, className, ...rest } =
    props

  const _lastLogin = useMemo(
    () => dayjs(lastlogin).format('ddd MMM DD HH:mm:ss'),
    [lastlogin]
  )

  return (
    <div ref={ref} {...rest} className={variants({ className })}>
      <div className="flex h-6 items-center border-b bg-surface">
        <div className="ml-2 h-3 w-3 rounded-full border-red-900 bg-red-500 shadow-inner"></div>
        <div className="ml-2 h-3 w-3 rounded-full border-yellow-900 bg-yellow-500 shadow-inner"></div>
        <div className="ml-2 h-3 w-3 rounded-full border-green-900 bg-green-500 shadow-inner"></div>
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

Terminal.propTypes = {
  title: PropTypes.string,
  lastlogin: PropTypes.instanceOf(Date),
  hostname: PropTypes.string,
  username: PropTypes.string,
  children: PropTypes.node
}

Terminal.defaultProps = {
  title: 'Terminal',
  lastlogin: new Date(),
  hostname: 'Lerte-MacBook-Pro',
  username: 'lerte'
}

Terminal.displayName = 'Actify.Terminal'

export { Terminal }
