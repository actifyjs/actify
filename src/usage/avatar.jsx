import { Avatar } from 'actify'

export default () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Avatar />
        <Avatar rounded />
        <Avatar square />
      </div>
      <div className="flex w-max items-end gap-4">
        <Avatar size="xs" />
        <Avatar size="sm" />
        <Avatar size="md" />
        <Avatar size="lg" />
        <Avatar size="xl" />
        <Avatar size="2xl" />
      </div>
    </div>
  )
}
