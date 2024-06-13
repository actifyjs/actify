import { Button, Dialog, DialogRef } from 'actify'

import React from 'react'

export default () => {
  const formId = React.useId()
  const dialogRef = React.useRef<DialogRef>(null)

  return (
    <>
      <Button
        onClick={() => {
          dialogRef?.current?.show()
        }}
      >
        Open Dialog
      </Button>
      <Dialog
        ref={dialogRef}
        headline="Dialog title"
        actions={<Button form={formId}>Ok</Button>}
      >
        <form id={formId} method="dialog">
          A simple dialog with free-form content.
        </form>
      </Dialog>
    </>
  )
}
