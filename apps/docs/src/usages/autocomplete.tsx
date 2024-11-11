import { Autocomplete, Item } from 'actify'

export default () => {
  const options = [
    { id: 1, name: 'Actify' },
    { id: 2, name: 'Ngroker' },
    { id: 3, name: 'Taildoor' },
    { id: 4, name: 'Hugola' }
  ]

  return (
    <div className="max-sm:flex-wrap flex gap-4">
      <Autocomplete label="project" onSelectionChange={(e) => console.log(e)}>
        {options.map(({ id, name }) => (
          <Item key={id}>{name}</Item>
        ))}
      </Autocomplete>
      <Autocomplete variant="outlined" label="project">
        {options.map(({ id, name }) => (
          <Item key={id}>{name}</Item>
        ))}
      </Autocomplete>
    </div>
  )
}
