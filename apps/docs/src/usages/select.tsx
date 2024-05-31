import { Icon, Select, SelectOption } from 'actify'

export default () => {
  return (
    <div className="flex gap-2">
      <Select label="Select">
        <SelectOption>
          <div slot="start">
            <Icon>home</Icon>
          </div>
          <div slot="headline">React</div>
        </SelectOption>
        <SelectOption>Actify</SelectOption>
      </Select>
    </div>
  )
}
