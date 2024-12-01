import { TableHeaderProps } from 'react-stately'

const TableHeader = <T extends object>(props: TableHeaderProps<T>) => {
  return <>{props.children}</>
}

export { TableHeader }
