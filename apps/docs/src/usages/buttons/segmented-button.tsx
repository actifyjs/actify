import { Icon, SegmentedButton, SegmentedButtonSet } from 'actify'

import React from 'react'

export default () => {
  const [selectedColorMode, setSelectedColorMode] = React.useState('system')
  const handleChangeColorMode = (mode: string) => {
    setSelectedColorMode(mode)
  }
  return (
    <div className="flex items-center gap-4">
      <SegmentedButtonSet
        role="presentation"
        className="w-full"
        aria-label="Color mode"
      >
        <div
          role="group"
          className="h-10 grid w-full grid-flow-col auto-rows-auto auto-cols-[1fr]"
        >
          <SegmentedButton
            title="dark"
            data-value="dark"
            className="rounded-l-full"
            selected={selectedColorMode == 'dark'}
            onClick={() => handleChangeColorMode('dark')}
            icon={<Icon>dark_mode</Icon>}
          />

          <SegmentedButton
            title="auto"
            data-value="auto"
            selected={selectedColorMode == 'system'}
            onClick={() => handleChangeColorMode('system')}
            icon={<Icon>brightness_medium</Icon>}
          />
          <SegmentedButton
            title="light"
            data-value="light"
            className="rounded-r-full"
            selected={selectedColorMode == 'light'}
            onClick={() => handleChangeColorMode('light')}
            icon={<Icon slot="icon">light_mode</Icon>}
          />
        </div>
      </SegmentedButtonSet>
    </div>
  )
}
