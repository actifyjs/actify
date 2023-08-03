import { lazy, Suspense } from 'react'

const Usage = (props) => {
  const { name, ...rest } = props
  const LazyComponent = lazy(() => import(`../usage/${name}.jsx`))
  return (
    <Suspense>
      <LazyComponent name={name} {...rest} />
    </Suspense>
  )
}
export default Usage
