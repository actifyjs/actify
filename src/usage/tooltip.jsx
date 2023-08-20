import { Button, Tooltip, TooltipActivator, TooltipContent } from 'actify'

export default () => {
  return (
    <Tooltip>
      <TooltipActivator>
        <Button>Show Tooltip</Button>
      </TooltipActivator>
      <TooltipContent>Hello Tooltip</TooltipContent>
    </Tooltip>
  )
}
