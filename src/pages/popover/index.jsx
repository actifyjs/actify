import { loremIpsum } from 'lorem-ipsum'
import Popover from '@/packages/components/Popover'
import PopoverContent from '@/packages/components/Popover/PopoverContent'
import PopoverActivator from '@/packages/components/Popover/PopoverActivator'

export default () => {
  return (
    <Popover>
      <PopoverActivator>Popover</PopoverActivator>
      <PopoverContent>{loremIpsum({ count: 3 })}</PopoverContent>
    </Popover>
  )
}
