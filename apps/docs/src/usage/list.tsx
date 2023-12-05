import { List, ListItem, ListGroup } from 'actify'

export default () => {
  const list = ['HTML', 'Tailwind CSS', 'Vue']

  return (
    <List>
      {list.map((item) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
      <ListGroup label="React">
        {['Next.js', 'Zustand', 'Framer Motion', 'Actify'].map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </ListGroup>
    </List>
  )
}
