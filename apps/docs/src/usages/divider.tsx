import { Divider } from 'actify'

export default () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        Content above
        <Divider />
        Content below
      </div>
      <div className="flex">
        Content left
        <Divider orientation="vertical" />
        Content right
      </div>
    </div>
  )
}
