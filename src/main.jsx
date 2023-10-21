import './main.css'
import Layout from './layout'
import routes from '~react-pages'
import ReactDOM from 'react-dom/client'
import { useInterval } from 'usehooks-ts'
import { Analytics } from '@vercel/analytics/react'
import { StrictMode, Suspense, useState, useEffect } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { LinearProgress, ToastProvider, ToastContainer } from 'actify'

const Loading = () => {
  const [step, setStep] = useState(0.5)
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    return () => {
      setIsLoading(false)
    }
  }, [])

  useInterval(
    () => {
      setProgress((_) => _ + step)
      if (progress >= 100) {
      } else if (progress >= 70) {
        setStep(0.1)
      }
    },
    isLoading ? 100 : null
  )

  return (
    <div className="fixed z-50 w-full top-0 left-0">
      <LinearProgress value={progress} />
    </div>
  )
}

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
