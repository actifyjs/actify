import {
  BottomSheets,
  BottomSheetsActivator,
  BottomSheetsContent,
  Button
} from 'actify'

export default () => {
  return (
    <BottomSheets>
      <BottomSheetsActivator asChild>
        <Button>Open bottom sheet</Button>
      </BottomSheetsActivator>
      <BottomSheetsContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, deserunt
        autem maiores reprehenderit mollitia asperiores eius voluptate
        voluptatem amet tenetur sapiente sint quasi expedita repellendus ut
        eligendi. Tempora, magnam hic.
      </BottomSheetsContent>
    </BottomSheets>
  )
}
