import './main.css'
import Layout from './layout'
import routes from '~react-pages'
import ReactDOM from 'react-dom/client'
import { StrictMode, Suspense } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { ToastProvider, ToastContainer } from 'actify'
import Loading from '@/src/components/Loading'

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
