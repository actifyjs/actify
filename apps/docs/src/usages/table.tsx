import {
  Cell,
  Column,
  Pagination,
  Row,
  Table,
  TableBody,
  TableHeader,
  useAsyncList
} from 'actify'

import { useState } from 'react'

interface StarWarsChar {
  name: string
  url: string
  [x: string]: string
}

export default () => {
  const totalPages = 20
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const list = useAsyncList<StarWarsChar>({
    async load({ signal }) {
      let res = await fetch('https://swapi.py4e.com/api/people/?search', {
        signal
      })
      let json = await res.json()
      return {
        items: json.results
      }
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          // @ts-ignore
          const first = a[sortDescriptor.column]
          // @ts-ignore
          const second = b[sortDescriptor.column]

          let cmp =
            (parseInt(first, 10) || first) < (parseInt(second, 10) || second)
              ? -1
              : 1
          if (sortDescriptor.direction === 'descending') {
            cmp *= -1
          }
          return cmp
        })
      }
    }
  })

  return (
    <>
      <Table
        selectionMode="multiple"
        selectionBehavior="toggle"
        onSortChange={list.sort}
        sortDescriptor={list.sortDescriptor}
        aria-label="Example static collection table"
        style={{ height: '210px', maxWidth: '400px' }}
        paginator={
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        }
      >
        <TableHeader>
          <Column key="name" allowsSorting>
            Name
          </Column>
          <Column key="height" allowsSorting>
            Height
          </Column>
          <Column key="mass" allowsSorting>
            Mass
          </Column>
          <Column key="birth_year" allowsSorting>
            Birth year
          </Column>
        </TableHeader>
        <TableBody items={list.items}>
          {(item) => (
            <Row key={item.name}>
              {(columnKey) => <Cell>{item[columnKey]}</Cell>}
            </Row>
          )}
        </TableBody>
      </Table>
    </>
  )
}
