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
            <p>This dialog opened by activator</p>
            <Spacer />
            <DialogClose>
              <IconButton color="secondary">
                <Icon name="X" />
              </IconButton>
            </DialogClose>
          </DialogHeading>
          <DialogDescription>
            <p>
              Amet sunt fugiat irure Lorem commodo nulla officia cupidatat ipsum duis quis minim Lorem incididunt. Non
              laboris mollit laborum cillum deserunt aliqua amet dolor excepteur ea aliqua commodo excepteur. Sint id
              est id deserunt magna aliquip consectetur adipisicing pariatur dolor mollit velit ea deserunt.
            </p>
          </DialogDescription>
          <div className="flex items-center gap-2 p-4">
            <Spacer />
            <DialogClose>
              <Button color="error">Cancel</Button>
            </DialogClose>
            <Button>Confirm</Button>
          </div>
        </DialogContent>
      </Dialog>

      <Button onClick={() => setOpen(true)} color="tertiary">
        Open dialog without activator
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeading>
            <p>This dialog opened by out anchor</p>
            <Spacer />
            <DialogClose>
              <IconButton color="secondary">
                <Icon name="X" />
              </IconButton>
            </DialogClose>
          </DialogHeading>
          <DialogDescription>
            <p>
              Ea ipsum mollit Lorem enim. Sunt consectetur veniam adipisicing reprehenderit est laborum anim ea fugiat.
              Commodo labore nostrud ut tempor dolor nulla veniam est ad adipisicing nisi exercitation.
            </p>
          </DialogDescription>
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
