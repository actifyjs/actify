import { Button, Tooltip } from 'actify'

export default () => {
  return (
    <Tooltip>
      <Tooltip.Activator>
        <Button>Show Tooltip</Button>
      </Tooltip.Activator>
      <Tooltip.Content>Hello Tooltip</Tooltip.Content>
    </Tooltip>
  )
}
