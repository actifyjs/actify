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

export default () => {
  return (
    <Dialog>
      <DialogActivator>
        <Button>Open Dialog</Button>
      </DialogActivator>
      <DialogContent>
        <DialogHeading>
          <p>Its a simple dialog.</p>
          <Spacer />
          <DialogClose>
            <IconButton color="black">
              <Icon name="X" />
            </IconButton>
          </DialogClose>
        </DialogHeading>
        <DialogDescription>
          The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get
          these plants, twenty five years of blood sweat and tears, and I'm never giving up, I'm just getting started.
          I'm up to something. Fan luv.
        </DialogDescription>
        <div className="flex items-center gap-2 p-4">
          <Spacer />
          <Button color="error">Cancel</Button>
          <Button>Confirm</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
