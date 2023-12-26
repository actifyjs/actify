import { Menu, MenuItem } from 'actify'
import { ScissorsIcon } from 'lucide-react'

export default () => {
  return (
    <Menu label="Menu">
      <MenuItem label="Undo" onClick={() => console.log('Undo')} />
      <MenuItem label="Redo" disabled />
      <MenuItem label="Cut" leading={<ScissorsIcon />} />
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
        <MenuItem
          label="Mail"
          description="Your default email app will be opened."
        />
        <MenuItem label="Instagram" />
      </Menu>
    </Menu>
  )
}
