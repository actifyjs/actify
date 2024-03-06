import { Tabs } from 'actify'

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
    <Tabs activeTabIndex={0}>
      <Tabs.Header>
        {data.map(({ label, value }) => (
          <Tabs.Tab key={value}>{label}</Tabs.Tab>
        ))}
      </Tabs.Header>
      <Tabs.Body>
        {data.map(({ value, content }) => (
          <Tabs.Panel key={value}>{content}</Tabs.Panel>
        ))}
      </Tabs.Body>
    </Tabs>
  )
}
