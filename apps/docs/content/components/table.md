---
title: Table
description: Table is a component that allows you to display tabular data.
---

## Usage

<usage></usage>

## Sub Components

| Name        | Description |
| ----------- | ----------- |
| Table.Thead | thead tag   |
| Table.Tbody | tbody tag   |
| Table.Tfoot | tfoot tag   |
| Table.Th    | th tag      |
| Table.Tr    | tr tag      |
| Table.Td    | td tag      |

## Props

| Props     | Type      | Description  | Default     |
| --------- | --------- | ------------ | ----------- |
| `headers` | `array`   | table header | `undefined` |
| `items`   | `array`   | table body   | `undefined` |
| `actions` | `boolean` | actions      | `undefined` |
| `pageSizes` | `array` | supported number of rows per page   | `undefined` |
| `initialPaginationState` | `object` | initial pagination state | `undefined` |

## Events

| Events         | Description                         |
| -------------- | ----------------------------------- |
| `onItemEdit`   | fired when item edit icon clicked   |
| `onItemDelete` | fired when item delete icon clicked |
