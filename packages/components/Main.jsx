import { forwardRef } from 'react'
import { useApp } from './App/AppContext'

const Main = forwardRef((props, ref) => {
  const { app } = useApp()
  const { children, className, ...rest } = props

  return (
    <main
      ref={ref}
      {...rest}
      style={{ paddingLeft: app.left }}
      className="container mx-auto min-h-[calc(100vh-120px)] py-4"
    >
      {children}
    </main>
  )
})

export default Main
