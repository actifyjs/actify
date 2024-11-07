import {
  BottomAppBar,
  BottomAppBarFab,
  BottomAppBarIcons,
  Fab,
  Icon
} from 'actify'

export default () => {
  return (
    <BottomAppBar className="max-w-3xl text-on-primary">
      <BottomAppBarIcons>
        <Icon>home</Icon>
        <Icon>person</Icon>
        <Icon>photo_camera</Icon>
        <Icon>search</Icon>
      </BottomAppBarIcons>
      <BottomAppBarFab>
        <Fab name="fab" icon={<Icon>add</Icon>} color="bg-surface" />
      </BottomAppBarFab>
    </BottomAppBar>
  )
}
