import { Autocomplete, AutocompleteItem } from 'actify'

export default () => {
  return (
    <div className="max-sm:flex-wrap flex gap-4">
      <Autocomplete label="project">
        <AutocompleteItem>Actify</AutocompleteItem>
        <AutocompleteItem>Ngroker</AutocompleteItem>
        <AutocompleteItem>Taildoor</AutocompleteItem>
        <AutocompleteItem>Hugola</AutocompleteItem>
      </Autocomplete>
      <Autocomplete label="project" variant="outlined">
        <AutocompleteItem>Actify</AutocompleteItem>
        <AutocompleteItem>Ngroker</AutocompleteItem>
        <AutocompleteItem>Taildoor</AutocompleteItem>
        <AutocompleteItem>Hugola</AutocompleteItem>
      </Autocomplete>
    </div>
  )
}
