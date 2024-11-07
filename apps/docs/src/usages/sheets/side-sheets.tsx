import {
  Button,
  SideSheets,
  SideSheetsAction,
  SideSheetsActivator,
  SideSheetsBody,
  SideSheetsContent,
  SideSheetsHeader
} from 'actify'

export default () => {
  return (
    <SideSheets divider>
      <SideSheetsActivator asChild>
        <Button>Open side sheet</Button>
      </SideSheetsActivator>
      <SideSheetsContent>
        <SideSheetsHeader>Tittle</SideSheetsHeader>
        <SideSheetsBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          deserunt autem maiores reprehenderit mollitia asperiores eius
          voluptate voluptatem amet tenetur sapiente sint quasi expedita
          repellendus ut eligendi. Tempora, magnam hic.
        </SideSheetsBody>
        <SideSheetsAction>
          <Button>action</Button>
        </SideSheetsAction>
      </SideSheetsContent>
    </SideSheets>
  )
}
