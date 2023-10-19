import './main.css'
import Layout from './layout'
import routes from '~react-pages'
import ReactDOM from 'react-dom/client'
import { StrictMode, Suspense } from 'react'
import ToastContainer from '@/packages/components/Toast/ToastContainer'
import { ToastProvider } from '@/packages/components/Toast/ToastContext'
import { BrowserRouter, useRoutes } from 'react-router-dom'

const App = () => (
  <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
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
    </BrowserRouter>
  </StrictMode>
)
