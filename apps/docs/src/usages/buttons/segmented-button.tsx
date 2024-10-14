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
            label="dark"
            data-value="dark"
            className="rounded-l-full"
            selected={selectedColorMode == 'dark'}
            icon={<Icon>dark_mode</Icon>}
            onPress={() => handleChangeColorMode('dark')}
          />

          <SegmentedButton
            title="auto"
            data-value="auto"
            selected={selectedColorMode == 'system'}
            icon={<Icon>brightness_medium</Icon>}
            onPress={() => handleChangeColorMode('system')}
          />
          <SegmentedButton
            title="light"
            label="light"
            data-value="light"
            className="rounded-r-full"
            selected={selectedColorMode == 'light'}
            icon={<Icon slot="icon">light_mode</Icon>}
            onPress={() => handleChangeColorMode('light')}
          />
        </div>
      </SegmentedButtonSet>
    </div>
  )
}
