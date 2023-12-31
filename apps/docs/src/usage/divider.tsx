import { Divider } from 'actify'

export default () => {
  return (
    <div className="flex flex-col gap-2">
      <Divider />
      <Divider thickness={20} color="error" />
    </div>
  )
}
