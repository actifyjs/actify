import './main.css'
import routes from '~react-pages'
import ReactDOM from 'react-dom/client'
import { StrictMode, Suspense } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { ToastProvider, ToastContainer } from 'actify'
import Loading from '@/src/components/Loading'
import { useLocation } from 'react-router-dom'
import EmptyLayout from '@/src/layouts/empty.jsx'
import DefaultLayout from '@/src/layouts/default.jsx'

const App = () => {
  const { pathname } = useLocation()
  let Layout = DefaultLayout
  if (pathname == '/' || pathname == '/playground') {
    Layout = EmptyLayout
  }

  return (
    <Layout>
      <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>
    </Layout>
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
