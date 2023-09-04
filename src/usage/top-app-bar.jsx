import { TopAppBar } from 'actify'

export default () => {
  return (
    <div className="space-y-2">
      <TopAppBar title="Title Large" />
      <TopAppBar title="Title Large" size="small" />
      <TopAppBar title="Title Large" size="medium" />
      <TopAppBar title="Title Large" size="large" />
    </div>
  )
}
