import React from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'border-b text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400'
})

const Thead = ({ style, className, children }) => {
  return (
    <thead style={style} className={variants({ className })}>
      {children}
    </thead>
  )
}

export { Thead }
