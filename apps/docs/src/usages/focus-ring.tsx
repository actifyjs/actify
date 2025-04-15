import { FocusRing, useFocusRing } from 'actify'

import React from 'react'

function FocusRingInput({ inward }: { inward?: boolean }) {
  const { isFocused, focusProps } = useFocusRing()

  return (
    <span className="relative">
      <input {...focusProps} className="outline-none text-primary bg-[field]" />
      {isFocused && <FocusRing type={inward ? 'inward' : 'outward'} />}
    </span>
  )
}

export default () => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative mb-2">
        <h6>type outward</h6>
        <FocusRingInput />
      </div>
      <div className="relative mb-2">
        <h6>type inward</h6>
        <FocusRingInput inward />
      </div>
    </div>
  )
}
