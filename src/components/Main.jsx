import { tv } from 'tailwind-variants'
import { useApp } from './AppContext'
import { useLocation } from 'react-router-dom'

const variants = tv({
  base: 'container mx-auto min-h-[calc(100vh-120px)] p-4 pl-[var(--left)]',
  variants: {
    index: {
      true: '!pr-4'
    }
  }
})

const Main = ({ children }) => {
  const { left } = useApp()
  const { pathname } = useLocation()
  const index = pathname == '/' ? true : false
  const paddingLeft = index ? '16px' : left + 'px'

  return (
    <main style={{ '--left': paddingLeft }} className={variants({ index })}>
      {children}
    </main>
  )
}

export default Main
