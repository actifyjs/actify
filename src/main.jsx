import './main.css'
import Layout from './layout'
import routes from '~react-pages'
import ReactDOM from 'react-dom/client'
import { StrictMode, Suspense } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { LinearProgress, ToastProvider, ToastContainer } from 'actify'

const Loading = () => (
  <div className="fixed z-50 w-full top-0 left-0">
    <LinearProgress indeterminate />
  </div>
)

const App = () => (
  <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>
)

ReactDOM.createRoot(document.getElementById('app')).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <Layout>
          <App />
        </Layout>
        <ToastContainer />
      </ToastProvider>
      <Analytics />
    </BrowserRouter>
  </StrictMode>
)
