---
title: Text fields
---

# Text fields

> Text fields let users enter text into a UI

## Usage

<usage name="text-fields"></usage>

## Props

| Props          | Type                                      | Description                    | Default   |
| -------------- | ----------------------------------------- | ------------------------------ | --------- |
| `color`        | `primary` `secondary` `tertiaray` `error` | The color of text field        | `primary` |
| `value`        | `string`                                  | The value of text field        | `null`    |
| `defaultValue` | `string`                                  | The defaultValue of text field | `null`    |
| `variant`      | `filled` `outlined`                       | The variant of text field      | `filled`  |
| `disabled`     | `boolean`                                 | Disables the text field        | `false`   |
| `prefixText`   | `string`                                  | Prefix text of text field      | `null`    |
| `suffixText`   | `string`                                  | Suffix text of text field      | `null`    |

## Sub components

| Name                     | Description                        |
| ------------------------ | ---------------------------------- |
| `TextField.LeadingIcon`  | The leadingIcon of the text field  |
| `TextField.TrailingIcon` | The trailingIcon of the text field |

## Events

| Events     | Description              |
| ---------- | ------------------------ |
| `onChange` | fired when value changed |
