import { Icon, IconButton, Menu, MenuItem, MenuSection } from 'actify'

import React from 'react'

export default () => {
  return (
    <div className="flex gap-8">
      <Menu
        className="p-2"
        label="Open with label"
        onAction={(key) => alert(key)}
      >
        <MenuSection>
          <MenuItem key="edit">Edit…</MenuItem>
          <MenuItem key="duplicate">Duplicate</MenuItem>
        </MenuSection>
        <MenuSection>
          <MenuItem key="move">Move…</MenuItem>
          <MenuItem key="rename">Rename…</MenuItem>
        </MenuSection>
        <MenuSection>
          <MenuItem key="archive">Archive</MenuItem>
          <MenuItem key="delete">Delete…</MenuItem>
        </MenuSection>
      </Menu>
      <Menu
        activator={(ref, menuTriggerProps) => (
          <IconButton ref={ref} {...menuTriggerProps}>
            <Icon>More_Horiz</Icon>
          </IconButton>
        )}
        onAction={(key) => alert(key)}
      >
        <MenuItem key="copy">Copy</MenuItem>
        <MenuItem key="cut">Cut</MenuItem>
        <MenuItem key="paste">Paste</MenuItem>
      </Menu>
    </div>
  )
}
