import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from 'actify'

export default () => {
  const data = [
    {
      label: 'HTML',
      value: 'html',
      content: 'HTML content'
    },
    {
      label: 'React',
      value: 'react',
      content: 'React content'
    },
    {
      label: 'Vue',
      value: 'vue',
      content: 'Vue content'
    },
    {
      label: 'Angular',
      value: 'angular',
      content: 'Angular content'
    },
    {
      label: 'Svelte',
      value: 'svelte',
      content: 'Svelte content'
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
        {data.map(({ value, content }) => (
          <TabPanel key={value} value={value}>
            {content}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  )
}
