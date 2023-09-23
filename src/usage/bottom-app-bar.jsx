import React from 'react'
import { Fab, Icon, BottomAppBar } from 'actify'

export default () => {
  return (
    <BottomAppBar>
      <BottomAppBar.Slot name="icons">
        <Icon name="home" />
        <Icon name="user-2" />
        <Icon name="camera" />
        <Icon name="search" />
      </BottomAppBar.Slot>
      <BottomAppBar.Slot name="fab">
        <Fab name="fab" icon="plus" color="bg-surface" />
      </BottomAppBar.Slot>
    </BottomAppBar>
  )
}
