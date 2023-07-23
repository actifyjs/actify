import { lazy, Suspense } from 'react'

const Usage = ({ name }) => {
  console.log(name)
  const LazyComponent = lazy(() => import(`../../components/Usage/${name}.jsx`))
  return (
    <Suspense>
      <LazyComponent name={name} />
    </Suspense>
  )
}
export default Usage
