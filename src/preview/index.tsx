import { lazy, Suspense } from 'react'

const Preview = (props) => {
  const { name, ...rest } = props
  const LazyComponent = lazy(() => import(`./../preview/${name}.jsx`))

  return (
    <Suspense>
      <LazyComponent {...rest} />
    </Suspense>
  )
}

export default Preview
