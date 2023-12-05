import React, { lazy, Suspense } from 'react'

interface PreviewProps extends React.HTMLAttributes<HTMLElement> {
  name: string
}
const Preview: React.FC<PreviewProps> = (props) => {
  const { name, ...rest } = props
  const LazyComponent = lazy(() => import(`./../preview/${name}.tsx`))

  return (
    <Suspense>
      <LazyComponent {...rest} />
    </Suspense>
  )
}

export default Preview
