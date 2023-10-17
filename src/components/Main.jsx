import { useApp } from './AppContext'

const Main = ({ children }) => {
  const { drawer, drawerWidth } = useApp()

  return (
    <main
      style={{
        marginLeft: drawer ? drawerWidth : 0
      }}
      className="px-2"
    >
      {children}
    </main>
  )
}

export default Main
