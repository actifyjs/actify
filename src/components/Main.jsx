import { useApp } from './AppContext'
import { tv } from 'tailwind-variants'

const variants = tv({
  base: 'p-2 row-start-2 row-end-3 col-end-4',
  variants: {
    drawer: {
      true: 'col-start-2',
      false: 'col-start-1'
    }
  }
})

const Main = ({ className, children }) => {
  const { drawer } = useApp()

  return <main className={variants({ drawer, className })}>{children}</main>
}

export default Main
