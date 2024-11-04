import { Button } from 'actify'

export default () => {
  return (
    <div className="flex flex-col gap-4 *:text-xl">
      <p>Elevated Button</p>
      <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(160px,1fr))]">
        <Button variant="elevated" color="primary">
          primary
        </Button>
        <Button variant="elevated" color="secondary">
          secondary
        </Button>
        <Button variant="elevated" color="tertiary">
          tertiary
        </Button>
        <Button variant="elevated" color="error">
          error
        </Button>
        <Button variant="elevated" isDisabled>
          disabled
        </Button>
      </div>
      <p>Filled Button</p>
      <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(160px,1fr))]">
        <Button variant="filled">primary</Button>
        <Button variant="filled" color="secondary">
          secondary
        </Button>
        <Button variant="filled" color="tertiary">
          tertiary
        </Button>
        <Button variant="filled" color="error">
          error
        </Button>
        <Button variant="filled" isDisabled>
          disabled
        </Button>
      </div>
      <p>Tonal Button</p>
      <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(160px,1fr))]">
        <Button variant="tonal">primary</Button>
        <Button variant="tonal" color="secondary">
          secondary
        </Button>
        <Button variant="tonal" color="tertiary">
          tertiary
        </Button>
        <Button variant="tonal" color="error">
          error
        </Button>
        <Button variant="tonal" isDisabled>
          disabled
        </Button>
      </div>
      <p>Outlined Button</p>
      <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(160px,1fr))]">
        <Button variant="outlined">primary</Button>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="outlined" color="tertiary">
          tertiary
        </Button>
        <Button variant="outlined" color="error">
          error
        </Button>
        <Button variant="outlined" isDisabled>
          disabled
        </Button>
      </div>
      <p>Text Button</p>
      <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(160px,1fr))]">
        <Button variant="text">primary</Button>
        <Button variant="text" color="secondary">
          secondary
        </Button>
        <Button variant="text" color="tertiary">
          tertiary
        </Button>
        <Button variant="text" color="error">
          error
        </Button>
        <Button variant="text" isDisabled>
          disabled
        </Button>
      </div>
    </div>
  )
}
