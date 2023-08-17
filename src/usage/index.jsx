import Code from '@/packages/components/Code'
import { lazy, Suspense, useState, useEffect } from 'react'

const Usage = (props) => {
  const [rawString, setRawString] = useState('')
  const { name, hidecode, ...rest } = props
  const LazyComponent = lazy(() => import(`./${name}.jsx`))

  useEffect(() => {
    async function loadData() {
      const raw = await import(`./${name}.jsx?raw`)
      setRawString(raw.default)
    }
    loadData()
  }, [])

  return (
    <Suspense>
      <LazyComponent name={name} {...rest} />
      {!hidecode && (
        <Code className="mt-4" language="jsx">
          {rawString}
        </Code>
      )}
    </Suspense>
  )
}
export default Usage
