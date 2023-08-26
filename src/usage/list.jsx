import { List, ListItem } from 'actify'

export default () => {
  const list = ['HTML', 'Tailwind CSS', 'Vue', 'React']

  return (
    <List>
      {list.map((item) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </List>
  )
}
