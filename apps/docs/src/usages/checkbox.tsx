import React, { useEffect, useState } from 'react'

import { Checkbox } from 'actify'

export default () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Checkbox isIndeterminate aria-label="isIndeterminate" />
      <Checkbox color="primary" defaultSelected>
        Primary
      </Checkbox>
      <Checkbox color="secondary" aria-label="secondary" />
      <Checkbox color="tertiary" aria-label="tertiary" />
      <Checkbox color="error" aria-label="error" />
      <Checkbox isDisabled aria-label="isDisabled" />
    </div>
  )
}
