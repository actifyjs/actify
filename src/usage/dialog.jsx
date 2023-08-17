import {
  Icon,
  Button,
  Spacer,
  Dialog,
  IconButton,
  DialogClose,
  DialogContent,
  DialogHeading,
  DialogActivator,
  DialogDescription
} from 'actify'

import { useState } from 'react'
import { loremIpsum } from 'lorem-ipsum'

export default () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex gap-2">
      <Dialog>
        <DialogActivator>
          <Button>Open dialog with activator</Button>
        </DialogActivator>
        <DialogContent>
          <DialogHeading>
            <p>{loremIpsum({ count: 4, units: 'words' })}</p>
            <Spacer />
            <DialogClose>
              <IconButton color="secondary">
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

      <Button onClick={() => setOpen(true)}>Open dialog without activator</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeading>
            <p>{loremIpsum({ count: 4, units: 'words' })}</p>
            <Spacer />
            <DialogClose>
              <IconButton color="secondary">
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
    </div>
  )
}
