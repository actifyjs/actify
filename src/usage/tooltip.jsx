import { loremIpsum } from 'lorem-ipsum'
import { Button, Tooltip, TooltipActivator, TooltipContent } from 'actify'

export default () => {
  return (
    <Tooltip>
      <TooltipActivator>
        <Button>Show Tooltip</Button>
      </TooltipActivator>
      <TooltipContent>{loremIpsum()}</TooltipContent>
    </Tooltip>
  )
}
