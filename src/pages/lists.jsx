import List from '@/packages/components/Lists'
import Code from '@/packages/components/Code'
import ListItem from '@/packages/components/Lists/ListItem'

const codeBlock = `
import { List, ListItem } from 'actify'

export default () => {
  const list = [
    {
      id: 1,
      headline: 'HTML'
    },
    {
      id: 2,
      headline: 'CSS'
    },
    {
      id: 3,
      headline: 'React'
    }
  ]
  return (
    <List>
      {list.map((item) => (
        <ListItem key={item.id} headline={item.headline} />
      ))}
    </List>
  )
}
`

export default () => {
  const list = [
    {
      id: 1,
      headline: 'HTML'
    },
    {
      id: 2,
      headline: 'CSS'
    },
    {
      id: 3,
      headline: 'React'
    }
  ]
  return (
    <>
      <List className="max-w-xs">
        {list.map((item) => (
          <ListItem key={item.id} headline={item.headline} />
        ))}
      </List>
      <div className="mt-4">
        <Code code={codeBlock} language="jsx" />
      </div>
    </>
  )
}
