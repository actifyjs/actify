import { forwardRef } from 'react'
import { useApp } from './App/AppContext'
import { useLocation } from 'react-router-dom'

const Main = forwardRef((props, ref) => {
  const { app } = useApp()
  const { pathname } = useLocation()
  const { children, className, ...rest } = props
  const paddingLeft = pathname == '/' ? '0' : app.left

  return (
    <main ref={ref} {...rest} style={{ paddingLeft }} className="container mx-auto min-h-[calc(100vh-120px)] p-4">
      {children}
    </main>
  )
})

export default Main
