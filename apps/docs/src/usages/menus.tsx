import { Menu, MenuButton, MenuItem, MenuPopover, Submenu } from 'actify'

import React from 'react'

export default () => {
  return (
    <div className="flex gap-8">
      <MenuButton label="Open with label">
        <MenuItem>Edit</MenuItem>
        <MenuItem>Duplicate</MenuItem>
      </MenuButton>

      <MenuButton label="Actions">
        <MenuItem>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Delete</MenuItem>
        <Submenu>
          <MenuItem>Share</MenuItem>
          <MenuPopover>
            <Menu>
              <MenuItem>SMS</MenuItem>
              <MenuItem>Twitter</MenuItem>
              <Submenu>
                <MenuItem>Email</MenuItem>
                <MenuPopover>
                  <Menu>
                    <MenuItem>Work</MenuItem>
                    <MenuItem>Personal</MenuItem>
                  </Menu>
                </MenuPopover>
              </Submenu>
            </Menu>
          </MenuPopover>
        </Submenu>
      </MenuButton>
    </div>
  )
}
