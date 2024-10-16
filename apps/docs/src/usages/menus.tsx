import { Icon, IconButton, Menu, MenuItem, MenuItems } from 'actify'

import React from 'react'

export default () => {
  return (
    <div className="flex gap-8">
      <Menu
        className="p-2"
        label="Open with label"
        onAction={(key) => alert(key)}
      >
        <MenuItems>
          <MenuItem key="edit">Edit…</MenuItem>
          <MenuItem key="duplicate">Duplicate</MenuItem>
        </MenuItems>
        <MenuItems>
          <MenuItem key="move">Move…</MenuItem>
          <MenuItem key="rename">Rename…</MenuItem>
        </MenuItems>
        <MenuItems>
          <MenuItem key="archive">Archive</MenuItem>
          <MenuItem key="delete">Delete…</MenuItem>
        </MenuItems>
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
