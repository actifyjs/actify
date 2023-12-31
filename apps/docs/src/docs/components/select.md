---
title: Select
---

# Select

> Select fields components are used for collecting user provided information from a list of options.

## Usage

<usage name="select"></usage>

## Props

| Props                    | Type      | Description                                                                | Default            |
| ------------------------ | --------- | -------------------------------------------------------------------------- | ------------------ |
| `value`                  | `object`  | Current value of select field.                                             | `null`             |
| `classNames`             | `object`  | This prop allows you to style most of the components used by this library. | `undefined`        |
| `clearable`              | `boolean` | Indicates if you can empty the select field.                               | `true`             |
| `disabled`               | `boolean` | Indicates if you can disable the select field.                             | `false`            |
| `loading`                | `boolean` | Indicates if you want a loader to appear in the field.                     | `false`            |
| `multiple`               | `boolean` | Indicates if you can do a multiple selection.                              | `false`            |
| `searchable`             | `boolean` | Indicates if you can search the elements of the select field.              | `false`            |
| `placeholder`            | `string`  | Placeholder of the select field.                                           | `Select...`        |
| `searchInputPlaceholder` | `string`  | Placeholder of the search input.                                           | `Search...`        |
| `noOptionsMessage`       | `string`  | Message that appears when there are no options to display.                 | `No results found` |

## Events

| Events     | Description                                                                      |
| ---------- | -------------------------------------------------------------------------------- |
| `onChange` | This callback, if present, is triggered when the select field value is modified. |
