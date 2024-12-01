---
title: Table
description: Table is a component that allows you to display tabular data.
---

## Usage

<usage></usage>

## Props

### Table

| Name                   | Type                     | Default     | Description                                                                                                  |
| ---------------------- | ------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------ |
| children               | `ReactNode`              | —           | The elements that make up the table. Includes the TableHeader, TableBody, Columns, and Rows.                 |
| selectionBehavior      | `SelectionBehavior`      | 'toggle'    | How multiple selection should behave in the collection.                                                      |
| disabledBehavior       | `DisabledBehavior`       | 'selection' | Whether disabledKeys applies to all interactions, or only selection.                                         |
| dragAndDropHooks       | `DragAndDropHooks`       | —           | The drag and drop hooks returned by useDragAndDrop used to enable drag and drop behavior for the Table.      |
| disabledKeys           | `Iterable<Key>`          | —           | A list of row keys to disable.                                                                               |
| selectionMode          | `SelectionMode`          | —           | The type of selection that is allowed in the collection.                                                     |
| disallowEmptySelection | `boolean`                | —           | Whether the collection allows empty selection.                                                               |
| selectedKeys           | `'all' \| Iterable<Key>` | —           | The currently selected keys in the collection (controlled).                                                  |
| defaultSelectedKeys    | `'all' \| Iterable<Key>` | —           | The initial selected keys in the collection (uncontrolled).                                                  |
| sortDescriptor         | `SortDescriptor`         | —           | The current sorted column and direction.                                                                     |
| className              | `string`                 | —           | The CSS className for the element. A function may be provided to compute the class based on component state. |
| style                  | `React.CSSProperties`    | —           | The inline style for the element. A function may be provided to compute the style based on component state.  |

### Events

| Name              | Type                                  | Description                                                                                                                   |
| ----------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| onRowAction       | `(key: Key) => void`                  | Handler that is called when a user performs an action on the row.                                                             |
| onSelectionChange | `(keys: Selection) => void`           | Handler that is called when the selection changes.                                                                            |
| onSortChange      | `(descriptor: SortDescriptor) => any` | Handler that is called when the sorted column or direction changes.                                                           |
| onScroll          | `(e: UIEvent<Element>) => void`       | Handler that is called when a user scrolls. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll_event). |

### TableHeader

| Name         | Type                                          | Description                                                                                                  |
| ------------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| columns      | `object[]`                                    | A list of table columns.                                                                                     |
| children     | `ReactNode \| (item: object) => ReactElement` | A list of Column(s) or a function. If the latter, a list of columns must be provided using the columns prop. |
| dependencies | `any[]`                                       | Values that should invalidate the column cache when using dynamic collections.                               |
| className    | `string`                                      | The CSS className for the element. A function may be provided to compute the class based on component state. |
| style        | `React.CSSProperties`                         | The inline style for the element. A function may be provided to compute the style based on component state.  |
