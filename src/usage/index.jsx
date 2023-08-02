import { lazy, Suspense } from 'react'

const Usage = ({ name }) => {
  const LazyComponent = lazy(() => import(`./${name}.jsx`))
  return (
    <Suspense>
      <LazyComponent name={name} />
    </Suspense>
  )
}
export default Usage
