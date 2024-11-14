import { Icon, IconButton, Item, Menu, Section } from 'actify'

import React from 'react'

export default () => {
  return (
    <div className="flex gap-8">
      <Menu
        className="p-2"
        label="Open with label"
        onAction={(key) => alert(key)}
      >
        <Section>
          <Item key="edit">Edit…</Item>
          <Item key="duplicate">Duplicate</Item>
        </Section>
        <Section>
          <Item key="move">Move…</Item>
          <Item key="rename">Rename…</Item>
        </Section>
        <Section>
          <Item key="archive">Archive</Item>
          <Item key="delete">Delete…</Item>
        </Section>
      </Menu>
      <Menu
        activator={(ref, menuTriggerProps) => (
          <IconButton ref={ref} {...menuTriggerProps}>
            <Icon>More_Horiz</Icon>
          </IconButton>
        )}
        onAction={(key) => alert(key)}
      >
        <Item key="copy">Copy</Item>
        <Item key="cut">Cut</Item>
        <Item key="paste">Paste</Item>
      </Menu>
    </div>
  )
}
