import {
  Icon,
  Button,
  Spacer,
  IconButton,
  Dialog,
  DialogActivator,
  DialogContent,
  DialogDescription,
  DialogHeading,
  DialogClose
} from 'actify'

import { loremIpsum } from 'lorem-ipsum'

export default () => {
  return (
    <Dialog>
      <DialogActivator>
        <Button>Open Dialog</Button>
      </DialogActivator>
      <DialogContent>
        <DialogHeading>
          <p>{loremIpsum({ count: 4, units: 'words' })}</p>
          <Spacer />
          <DialogClose>
            <IconButton color="black">
              <Icon name="X" />
            </IconButton>
          </DialogClose>
        </DialogHeading>
        <DialogDescription>{loremIpsum({ count: 3 })}</DialogDescription>
        <div className="flex items-center gap-2 p-4">
          <Spacer />
          <Button color="error">Cancel</Button>
          <Button>Confirm</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
