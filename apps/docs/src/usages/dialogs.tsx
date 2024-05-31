import { Button, Dialog } from 'actify'

import React from 'react'

export default () => {
  const dialogRef = React.useRef(null)

  return (
    <>
      <Button
        onClick={() => {
          // @ts-ignore
          dialogRef?.current?.show()
        }}
      >
        Open Dialog
      </Button>
      <Dialog ref={dialogRef}>
        <div slot="headline">Dialog title</div>
        <form slot="content" id="form-id" method="dialog">
          A simple dialog with free-form content.
        </form>
        <div slot="actions">
          <Button form="form-id">Ok</Button>
        </div>
      </Dialog>
    </>
  )
}
