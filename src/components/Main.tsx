import React from 'react'
import { tv } from 'tailwind-variants'
import { useAppStore } from './../store/appStore'
import { useShallow } from 'zustand/react/shallow'

const variants = tv({
  base: 'p-2 row-start-2 row-end-3 col-end-4',
  variants: {
    drawer: {
      true: 'col-start-2',
      false: 'col-start-1'
    }
  }
})

const Main: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  children
}) => {
  const { drawer } = useAppStore(
    useShallow((state) => ({ drawer: state.drawer }))
  )

  return <main className={variants({ drawer, className })}>{children}</main>
}

export default Main
