import { Icon, Button, Spacer, Dialog, IconButton } from 'actify'

import { useState } from 'react'

export default () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center gap-2">
      <Dialog>
        <Dialog.Activator>
          <Button>Open dialog with activator</Button>
        </Dialog.Activator>
        <Dialog.Content>
          <Dialog.Heading>
            <p>This dialog opened by activator</p>
            <Spacer />
            <Dialog.Close>
              <IconButton color="secondary">
                <Icon name="X" />
              </IconButton>
            </Dialog.Close>
          </Dialog.Heading>
          <Dialog.Description>
            <p>
              Amet sunt fugiat irure Lorem commodo nulla officia cupidatat ipsum
              duis quis minim Lorem incididunt. Non laboris mollit laborum
              cillum deserunt aliqua amet dolor excepteur ea aliqua commodo
              excepteur. Sint id est id deserunt magna aliquip consectetur
              adipisicing pariatur dolor mollit velit ea deserunt.
            </p>
          </Dialog.Description>
          <div className="flex items-center gap-2">
            <Spacer />
            <Dialog.Close>
              <Button color="error">Cancel</Button>
            </Dialog.Close>
            <Button>Confirm</Button>
          </div>
        </Dialog.Content>
      </Dialog>

      <Button onClick={() => setOpen(true)} color="tertiary">
        Open dialog without activator
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <Dialog.Content>
          <Dialog.Heading>
            <p>This dialog opened by out anchor</p>
            <Spacer />
            <Dialog.Close>
              <IconButton color="secondary">
                <Icon name="X" />
              </IconButton>
            </Dialog.Close>
          </Dialog.Heading>
          <Dialog.Description>
            <p>
              Ea ipsum mollit Lorem enim. Sunt consectetur veniam adipisicing
              reprehenderit est laborum anim ea fugiat. Commodo labore nostrud
              ut tempor dolor nulla veniam est ad adipisicing nisi exercitation.
            </p>
          </Dialog.Description>
          <div className="flex items-center gap-2">
            <Spacer />
            <Button color="error">Cancel</Button>
            <Dialog.Close>
              <Button>Confirm</Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog>
    </div>
  )
}
