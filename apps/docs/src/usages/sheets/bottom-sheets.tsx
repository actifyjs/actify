import { Button, BottomSheets } from 'actify'

export default () => {
  return (
    <BottomSheets>
      <BottomSheets.Activator>
        <Button>Open bottom sheet</Button>
      </BottomSheets.Activator>
      <BottomSheets.Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, deserunt
        autem maiores reprehenderit mollitia asperiores eius voluptate
        voluptatem amet tenetur sapiente sint quasi expedita repellendus ut
        eligendi. Tempora, magnam hic.
      </BottomSheets.Content>
    </BottomSheets>
  )
}
