import React from 'react'
import { Fab, Icon, BottomAppBar } from 'actify'

export default () => {
  return (
    <BottomAppBar>
      <BottomAppBar.Slot name="icons">
        <Icon name="Home" />
        <Icon name="User2" />
        <Icon name="Camera" />
        <Icon name="Search" />
      </BottomAppBar.Slot>
      <BottomAppBar.Slot name="fab">
        <Fab name="fab" icon="Plus" color="bg-surface" />
      </BottomAppBar.Slot>
    </BottomAppBar>
  )
}
