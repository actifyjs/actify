import { Checkbox, CheckboxGroup } from 'actify'

import React from 'react'

export default () => {
  return (
    <>
      <div className="flex flex-wrap gap-4">
        <Checkbox isIndeterminate aria-label="isIndeterminate" />
        <Checkbox color="primary" defaultSelected>
          Primary
        </Checkbox>
        <Checkbox color="secondary" aria-label="secondary" />
        <Checkbox color="tertiary" aria-label="tertiary" />
        <Checkbox color="error" aria-label="error" />
      </div>
      <CheckboxGroup label="Project">
        <Checkbox value="actify">Actify</Checkbox>
        <Checkbox value="ngroker">Ngroker</Checkbox>
        <Checkbox value="taildoor">Taildoor</Checkbox>
        <Checkbox value="hugola">Hugola</Checkbox>
      </CheckboxGroup>
    </>
  )
}
