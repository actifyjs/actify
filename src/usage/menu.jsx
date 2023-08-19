import { Menu, MenuItem } from 'actify'

export default () => {
  return (
    <Menu label="Menu">
      <MenuItem label="Undo" onClick={() => console.log('Undo')} />
      <MenuItem label="Redo" disabled />
      <MenuItem label="Cut" />
      <Menu label="Copy as">
        <MenuItem label="Text" />
        <MenuItem label="Video" />
        <Menu label="Image">
          <MenuItem label=".png" />
          <MenuItem label=".jpg" />
          <MenuItem label=".svg" />
          <MenuItem label=".gif" />
        </Menu>
        <MenuItem label="Audio" />
      </Menu>
      <Menu label="Share">
        <MenuItem label="Mail" />
        <MenuItem label="Instagram" />
      </Menu>
    </Menu>
  )
}
