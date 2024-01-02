import './main.css'
import routes from '~react-pages'
import { createRoot } from 'react-dom/client'
import { StrictMode, Suspense, useEffect } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { version, ToastProvider, ToastContainer } from 'actify'
import Loading from './components/Loading'
import { useLocation } from 'react-router-dom'
import EmptyLayout from './layouts/empty'
import AdminLayout from './layouts/admin'
import DefaultLayout from './layouts/default'

const App = () => {
  const { pathname } = useLocation()
  let Layout = DefaultLayout
  if (pathname.startsWith('/admin')) {
    if (pathname == '/admin/login') {
      Layout = ({ children }) => <>{children}</>
    } else {
      Layout = AdminLayout
    }
  }
  if (pathname == '/' || pathname == '/playground') {
    Layout = (props) => <EmptyLayout {...props}></EmptyLayout>
  }

  useEffect(() => {
    console.log(
      '%c '.concat(`
       ___          __   _  ____      
      /   |  _____ / /_ (_)/ __/__  __
     / /| | / ___// __// // /_ / / / /
    / ___ |/ /__ / /_ / // __// /_/ / 
   /_/  |_|\___/ \__//_//_/   \__, /  
                              /____/   
              v${version}
    `),
      `color: rgb(${getComputedStyle(document.documentElement).getPropertyValue(
        '--color-primary'
      )})`
    )
  }, [])

  return (
    <Layout>
      <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>
    </Layout>
  )
}

createRoot(document.getElementById('app') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <App />
        <ToastContainer />
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>
)
