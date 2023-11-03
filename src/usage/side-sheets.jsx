import { SideSheets, Button } from 'actify'

export default () => {
  return (
    <SideSheets>
      <SideSheets.Activator>
        <Button>Open side sheet</Button>
      </SideSheets.Activator>
      <SideSheets.Content divider action={<Button>action</Button>}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, deserunt
        autem maiores reprehenderit mollitia asperiores eius voluptate
        voluptatem amet tenetur sapiente sint quasi expedita repellendus ut
        eligendi. Tempora, magnam hic.
      </SideSheets.Content>
    </SideSheets>
  )
}
