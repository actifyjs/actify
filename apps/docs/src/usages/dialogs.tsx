import {
  Button,
  Dialog,
  DialogActivator,
  Modal,
  TextField,
  useDialogState
} from 'actify'

import React from 'react'

export default () => {
  const state = useDialogState({})
  return (
    <div className="flex gap-4">
      <DialogActivator label="Open Dialog with activator">
        {(close) => (
          <Dialog title="Enter your name">
            <form className="mt-4 flex flex-col gap-2">
              <TextField label="username" />
              <TextField label="password" />
              <Button onPress={close}>Submit</Button>
            </form>
          </Dialog>
        )}
      </DialogActivator>
      <Button variant="outlined" onPress={state.open}>
        Open Dialog with button
      </Button>
      <Modal state={state}>
        <Dialog title="Enter your name">
          <form className="mt-4 flex flex-col gap-2">
            <TextField label="username" variant="outlined" />
            <TextField label="password" variant="outlined" />
            <Button color="error" onPress={state.close}>
              Cancel
            </Button>
            <Button>Confirm</Button>
          </form>
        </Dialog>
      </Modal>
    </div>
  )
}
