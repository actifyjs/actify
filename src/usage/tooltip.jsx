import { Button } from 'actify'
import { loremIpsum } from 'lorem-ipsum'
import { Tooltip, TooltipActivator, TooltipContent } from '@/packages/components/Tooltips'

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
