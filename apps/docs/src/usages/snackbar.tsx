import { Button, SnackbarProvider } from 'actify'

export default () => {
  return (
    <SnackbarProvider>
      {(state) => (
        <Button
          onPress={() =>
            state.add(
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, nam totam repellat tenetur accusamus cum. Perferendis hic voluptas necessitatibus autem architecto? Fuga mollitia maiores enim unde error porro, velit iste.'
            )
          }
        >
          Show toast
        </Button>
      )}
    </SnackbarProvider>
  )
}
