import { ChipGroup, ChipItem, useListData, type Selection } from 'actify'

import React from 'react'

export default () => {
  const [selected, setSelected] = React.useState<Selection>(new Set(['Actify']))
  const list = useListData({
    initialItems: [
      { id: 1, name: 'Actify' },
      { id: 2, name: 'Ngroker' },
      { id: 3, name: 'Taildoor' },
      { id: 4, name: 'Hugola' }
    ]
  })

  return (
    <div className="flex flex-col gap-4">
      <ChipGroup label="Project">
        <ChipItem>Actify</ChipItem>
        <ChipItem>Ngroker</ChipItem>
        <ChipItem>Taildoor</ChipItem>
        <ChipItem>Hugola</ChipItem>
      </ChipGroup>
      <ChipGroup
        label="Categories with remove"
        items={list.items}
        onRemove={(keys) => list.remove(...keys)}
      >
        {(item) => <ChipItem>{item.name}</ChipItem>}
      </ChipGroup>
      <ChipGroup
        label="selection example"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <ChipItem key="laundry">Laundry</ChipItem>
        <ChipItem key="fitness">Fitness center</ChipItem>
        <ChipItem key="parking">Parking</ChipItem>
        <ChipItem key="pool">Swimming pool</ChipItem>
        <ChipItem key="breakfast">Breakfast</ChipItem>
      </ChipGroup>
      <p>
        Current selection (controlled):{' '}
        {selected === 'all' ? 'all' : [...selected].join(', ')}
      </p>
      <ChipGroup label="Links">
        <ChipItem href="https://actifyjs.com/" target="_blank">
          Actifyjs
        </ChipItem>
        <ChipItem href="https://ngroker.com/" target="_blank">
          Ngroker
        </ChipItem>
        <ChipItem href="https://taildoor.com/" target="_blank">
          Taildoor
        </ChipItem>
        <ChipItem href="https://hugola.app/" target="_blank">
          Hugola
        </ChipItem>
      </ChipGroup>
    </div>
  )
}
