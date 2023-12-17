import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppStore } from '@/store/appStore'
import { useShallow } from 'zustand/react/shallow'

const debounce = (fn: Function, delay: number) => {
  let timer: string | number | NodeJS.Timeout | null | undefined = null
  return function (...args: any) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      // @ts-expect-error
      fn.apply(this, args)
    }, delay)
  }
}

const Drawer: React.FC<React.HTMLAttributes<HTMLElement>> = ({ children }) => {
  const { pathname } = useLocation()
  const { top, drawer, drawerWidth, setDrawer } = useAppStore(
    useShallow((state) => ({
      top: state.top,
      drawer: state.drawer,
      setDrawer: state.setDrawer,
      drawerWidth: state.drawerWidth
    }))
  )

  useEffect(() => {
    const handleResize = debounce(() => {
      if (window.innerWidth < 768) {
        setDrawer(false)
      } else {
        if (pathname == '/') {
          setDrawer(false)
        } else {
          setDrawer(true)
        }
      }
    }, 500)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [pathname])

  return (
    <>
      <aside
        style={{
          top,
          width: drawerWidth,
          height: `calc(100vh - ${top}px)`,
          transform: `${drawer ? 'translateX(0)' : 'translateX(-100%)'}`
        }}
        className="sticky top-16 row-start-2 row-end-4 col-start-1 col-end-2 bg-surface z-50 max-w-full overflow-y-auto overflow-x-hidden shadow duration-200 will-change-transform"
      >
        {children}
      </aside>
      <div
        onClick={() => setDrawer(false)}
        className={`${
          drawer ? 'opacity-100' : 'pointer-events-none opacity-0'
        } transition-colors fixed inset-0 z-40 block md:hidden bg-inverse-surface/25`}
      ></div>
    </>
  )
}

export default Drawer
