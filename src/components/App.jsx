import { AppProvider } from './AppContext'
import { defaultValue } from './AppContext'

const App = ({ children }) => {
  return (
    <AppProvider>
      <div
        id="actify"
        style={{
          gridTemplateColumns: `minmax(0,${defaultValue.drawerWidth}px) 1fr`
        }}
        className="min-h-screen bg-surface grid grid-rows-[64px_auto_56px]"
      >
        {children}
      </div>
    </AppProvider>
  )
}

export default App
