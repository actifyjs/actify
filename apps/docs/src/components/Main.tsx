import React from 'react'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'p-2 col-start-2 col-end-3'
})

const Main: React.FC<React.ComponentProps<'main'>> = ({
  className,
  children
}) => {
  return <main className={variants({ className })}>{children}</main>
}

export default Main
