import { useState, useEffect } from 'react'
import { useInterval } from 'usehooks-ts'
import { LinearProgress, CircularProgress } from 'actify'

const Loading = () => {
  const [step, setStep] = useState(0.5)
  const [value, setValue] = useState(50)
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    return () => {
      setIsLoading(false)
    }
  }, [])

  useInterval(
    () => {
      setValue((_) => _ + step)
      const _progress =
        Math.round((Math.atan(value) / (Math.PI / 2)) * 100 * 1000) / 1000
      if (_progress >= 100) {
        setIsLoading(false)
      } else if (_progress >= 70) {
        setStep(0.1)
      }
      setProgress(_progress)
    },
    isLoading ? 100 : null
  )

  return (
    <>
      <div className="fixed z-50 w-full top-0 left-0">
        <LinearProgress value={progress} />
      </div>
      <div className="grid h-screen place-content-center">
        <CircularProgress indeterminate className="w-40 h-40" />
      </div>
    </>
  )
}

export default Loading
