import { Snackbar, Icon, IconButton } from 'actify'

export default () => {
  return (
    <Snackbar message={'message' + Math.random()}>
      <IconButton>
        <Icon name="plus" />
      </IconButton>
    </Snackbar>
  )
}
