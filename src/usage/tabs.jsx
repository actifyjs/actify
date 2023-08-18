import { loremIpsum } from 'lorem-ipsum'
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from 'actify'

export default () => {
  const data = [
    {
      label: 'HTML',
      value: 'html'
    },
    {
      label: 'React',
      value: 'react'
    },
    {
      label: 'Vue',
      value: 'vue'
    },
    {
      label: 'Angular',
      value: 'angular'
    },
    {
      label: 'Svelte',
      value: 'svelte'
    }
  ]

  return (
    <Tabs value="react">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value }) => (
          <TabPanel key={value} value={value}>
            {loremIpsum()}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  )
}
