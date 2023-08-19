import React from 'react'
import { twMerge } from 'tailwind-merge'
import { useApp } from '../App/AppContext'
import debounce from '@/packages/utils/debounce'

const Drawer = React.forwardRef((props, ref) => {
  const { app, setApp, setDrawer } = useApp()
  const { width, children, className, ...rest } = props

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setDrawer(false)
    } else {
      setDrawer(true)
    }
  }

  React.useEffect(() => {
    if (width) {
      setApp({ ...app, left: width })
    }
    handleResize()
    window.addEventListener('resize', debounce(handleResize, 100))
  }, [])

  return (
    <>
      <aside
        ref={ref}
        {...rest}
        style={{
          top: app.top,
          width: `${width}px`,
          height: `calc(100vh - ${app.top}px)`,
          transform: `${app.drawer ? 'translateX(0)' : 'translateX(-100%)'}`
        }}
        className={twMerge(
          'fixed bottom-0 left-0 right-auto z-50 max-w-full overflow-y-auto overflow-x-hidden shadow duration-200 will-change-transform md:z-10 lg:flex lg:translate-x-0 lg:flex-col',
          className
        )}
      >
        {children}
      </aside>
      <div
        onClick={() => setDrawer(false)}
        className={`${
          app.drawer ? 'opacity-100' : 'pointer-events-none opacity-0'
        } absolute inset-0 z-40 block bg-black/20 md:hidden`}
      ></div>
    </>
  )
})

Drawer.displayName = 'Actify.Drawer'

export default Drawer
