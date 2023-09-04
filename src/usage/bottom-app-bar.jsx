import React from 'react'
import { Fab, Icon, BottomAppBar } from 'actify'

export default () => {
  return (
    <BottomAppBar>
      <React.Fragment key="icons">
        <Icon name="Home" />
        <Icon name="User2" />
        <Icon name="Camera" />
        <Icon name="Search" />
      </React.Fragment>
      <Fab key="fab" icon="Plus" />
    </BottomAppBar>
  )
}
