import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { useApp } from './App/AppContext'
import { useLocation } from 'react-router-dom'

const variants = tv({
  base: 'container mx-auto min-h-[calc(100vh-120px)] p-4 lg:pr-64 pl-[var(--left)]',
  variants: {
    index: {
      true: '!pr-4'
    }
  }
})

const Main = forwardRef((props, ref) => {
  const { left } = useApp()
  const { pathname } = useLocation()
  const { children, className, ...rest } = props
  const index = pathname == '/' ? true : false
  const paddingLeft = index ? '16px' : left + 'px'

  return (
    <main
      ref={ref}
      {...rest}
      style={{ '--left': paddingLeft }}
      className={variants({ index, className })}
    >
      {children}
    </main>
  )
})

export default Main
