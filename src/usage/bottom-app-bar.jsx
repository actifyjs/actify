import React from 'react'
import { Fab, Icon, BottomAppBar } from 'actify'

export default () => {
  return (
    <BottomAppBar className="max-w-3xl">
      <BottomAppBar.Icons>
        <Icon name="home" />
        <Icon name="user-2" />
        <Icon name="camera" />
        <Icon name="search" />
      </BottomAppBar.Icons>
      <BottomAppBar.Fab>
        <Fab name="fab" icon="plus" color="bg-surface" />
      </BottomAppBar.Fab>
    </BottomAppBar>
  )
}
