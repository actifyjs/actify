import { Label, Ripple } from 'actify'

import { useId } from 'react'

export default () => {
  const id = useId()

  return (
    <div className="flex flex-col gap-4">
      <Label>1. Attached to the parent element</Label>
      <div className="relative border border-outline rounded-lg p-4">
        <Ripple />
        <span>span</span>
      </div>

      <Label>2. Attached to a referenced element</Label>
      <div className="relative border border-outline rounded-lg p-4">
        <Ripple id={id} />
        <button id={id} className="absolute inset-0">
          button
        </button>
      </div>
    </div>
  )
}
