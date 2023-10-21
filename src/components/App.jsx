import { AppProvider } from './AppContext'

const App = ({ children }) => {
  return (
    <AppProvider>
      <div
        id="actify"
        className="min-h-screen grid grid-cols-1 gap-4 grid-rows-[64px_auto_56px] bg-surface"
      >
        {children}
      </div>
    </AppProvider>
  )
}

export default App
