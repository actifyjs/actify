---
title: Select
description: Select fields components are used for collecting user provided information from a list of options.
---

## Usage

<usage></usage>

## Props

| Name                  | Type                  | Default        | Description                                                                                                   |
| --------------------- | --------------------- | -------------- | ------------------------------------------------------------------------------------------------------------- |
| `label`               | `React.ReactNode`     | —              | The content to display as the label.                                                                          |
| `selectedKey`         | `Key`                 | —              | The currently selected key in the collection (controlled).                                                    |
| `disabledKeys`        | `Iterable<Key>`       | —              | The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.       |
| `isOpen`              | `boolean`             | `false`        | Sets the open state of the menu.                                                                              |
| `isDisabled`          | `boolean`             | `false`        | Whether the input is disabled.                                                                                |
| `isRequired`          | `boolean`             | `false`        | Whether user input is required on the input before form submission.                                           |
| `isInvalid`           | `boolean`             | `false`        | Whether the input value is invalid.                                                                           |
| `validationBehavior`  | `aria` `native`       | `aria`         | Whether to use native HTML form validation to prevent form submission when the value is missing or invalid, or mark the field as required or invalid via ARIA. |
| `validate`            | `(value: Key) => ValidationError` `true` | — | A function that returns an error message if a given value is invalid. Validation errors are displayed to the user when the form is submitted if validationBehavior="native". For realtime validation, use the isInvalid prop instead. |
| `variant`             | `filled` `outlined`   | `filled`       | The type of the Select.                                                                                       |
| `popoverProps`        | `PopoverProps`        | —              | Props that allow changing the popover placement, flip behavior, style etc.                                    |
| `className`           | `string`              | —              | —                                                                                                             |
| `style`               | `React.CSSProperties` | —              | —                                                                                                             |

## Events

| Name                | Type                            | Description                                                       |
| ------------------- | ------------------------------- | ----------------------------------------------------------------- |
| `onSelectionChange` | `(key: Key) => void`            | Handler that is called when the selection changes.                |
| `onBlur`            | `(e: React.FocusEvent) => void` | Handler that is called when the element loses focus.              |
| `onFocus`           | `(e: React.FocusEvent) => void` | Handler that is called when the element receives focus.           |
| `onFocusChange`     | `(isFocused: boolean) => void`  | Handler that is called when the element's focus status changes.   |
| `onOpenChange`      | `(isOpened: boolean) => void`   | Method that is called when the open state of the menu changes.    |
