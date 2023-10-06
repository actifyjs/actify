import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: ''
})

const Terminal = forwardRef((props, ref) => {
  const { title, lastlogin, hostname, username, children, className, ...rest } =
    props

  return (
    <div ref={ref} {...rest} className={variants({ className })}>
      <div className="mx-auto h-fit w-full rounded subpixel-antialiased shadow-2xl">
        <div className="flex h-6 items-center rounded-t border-b bg-gray-100 text-center text-black">
          <div className="ml-2 h-3 w-3 rounded-full border-red-900 bg-red-500 shadow-inner"></div>
          <div className="ml-2 h-3 w-3 rounded-full border-yellow-900 bg-yellow-500 shadow-inner"></div>
          <div className="ml-2 h-3 w-3 rounded-full border-green-900 bg-green-500 shadow-inner"></div>
          <div className="mx-auto pr-16">
            <p className="text-center text-sm">{title || 'Terminal'}</p>
          </div>
        </div>
        <div className="min-h-[256px] bg-black pl-1 pt-1 font-mono text-current text-white">
          <p className="pb-1">{lastlogin}</p>
          <p className="pb-1">
            {hostname}:{username}$ <span>{children}</span>
          </p>
        </div>
      </div>
    </div>
  )
})

Terminal.propTypes = {
  title: PropTypes.string,
  lastlogin: PropTypes.string,
  hostname: PropTypes.string,
  username: PropTypes.string
}

Terminal.defaultProps = {
  title: 'Terminal',
  lastlogin: `Last login: ${dayjs()
    .subtract(1, 'day')
    .format('dddd MMMM DD HH:mm:ss')} on ttys000`,
  hostname: 'Lerte-MacBook-Pro',
  username: 'lerte'
}

Terminal.displayName = 'Actify.Terminal'

export { Terminal }
