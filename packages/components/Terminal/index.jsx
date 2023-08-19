import React from 'react'
import { twMerge } from 'tailwind-merge'

const Terminal = React.forwardRef((props, ref) => {
  const { title, lastlogin, hostname, username, children, className, ...rest } = props

  return (
    <div ref={ref} {...rest} className={twMerge('', className)}>
      <div className="mx-auto h-64 w-full rounded border-black bg-black subpixel-antialiased shadow-2xl">
        <div className="flex h-6 items-center rounded-t border-b border-gray-500 bg-gray-100 text-center text-black">
          <div className="ml-2 h-3 w-3 rounded-full border-red-900 bg-red-500 shadow-inner"></div>
          <div className="ml-2 h-3 w-3 rounded-full border-yellow-900 bg-yellow-500 shadow-inner"></div>
          <div className="ml-2 h-3 w-3 rounded-full border-green-900 bg-green-500 shadow-inner"></div>
          <div className="mx-auto pr-16">
            <p className="text-center text-sm">{title || 'Terminal'}</p>
          </div>
        </div>
        <div className="h-auto bg-black pl-1 pt-1 font-mono text-current text-white">
          <p className="pb-1">{lastlogin || 'Last login: Wed Sep 25 09:11:04 on ttys000'}</p>
          <p className="pb-1">
            {hostname || 'Lerte-MacBook-Pro'}:{username || 'lerte'}$ <span>{children}</span>
          </p>
        </div>
      </div>
    </div>
  )
})

Terminal.displayName = 'Actify.Terminal'

export default Terminal
