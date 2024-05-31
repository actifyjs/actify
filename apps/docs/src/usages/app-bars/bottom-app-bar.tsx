import { BottomAppBar, Fab, Icon } from 'actify'

export default () => {
  return (
    <BottomAppBar className="max-w-3xl">
      <BottomAppBar.Icons>
        <Icon>home</Icon>
        <Icon>person</Icon>
        <Icon>photo_camera</Icon>
        <Icon>search</Icon>
      </BottomAppBar.Icons>
      <BottomAppBar.Fab>
        <Fab name="fab" icon={<Icon>add</Icon>} color="bg-surface" />
      </BottomAppBar.Fab>
    </BottomAppBar>
  )
}
