import { LinearProgress, CircularProgress } from '@/packages/components'

export default () => {
  return (
    <>
      <LinearProgress indeterminate progress={0.5} />
      <CircularProgress indeterminate />
    </>
  )
}
