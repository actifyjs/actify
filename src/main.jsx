import './main.css'
import routes from '~react-pages'
import ReactDOM from 'react-dom/client'
import { StrictMode, Suspense, lazy } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { ToastProvider, ToastContainer } from 'actify'
import Loading from '@/src/components/Loading'
import { useLocation } from 'react-router-dom'

const App = () => {
  const { pathname } = useLocation()
  let layoutName = 'default'
  if (pathname == '/' || pathname == '/playground') {
    layoutName = 'empty'
  }

  const Layout = lazy(() => import(`./layouts/${layoutName}.jsx`))

  return (
    <Suspense fallback={<Loading />}>
      <Layout>{useRoutes(routes)}</Layout>
    </Suspense>
  )
}

ReactDOM.createRoot(document.getElementById('app')).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <App />
        <ToastContainer />
      </ToastProvider>
      <Analytics />
    </BrowserRouter>
  </StrictMode>
)
