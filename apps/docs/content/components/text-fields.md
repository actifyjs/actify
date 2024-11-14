---
title: Text fields
description: Text fields let users enter text into a UI
---

## Usage

<usage></usage>

## Props

| Props            | Type                                      | Description                                                 | Default     |
| ---------------- | ----------------------------------------- | ----------------------------------------------------------- | ----------- |
| `color`          | `primary` `secondary` `tertiaray` `error` | The color of text field                                     | `primary`   |
| `value`          | `string`                                  | The value of text field                                     | `null`      |
| `defaultValue`   | `string`                                  | The defaultValue of text field                              | `null`      |
| `variant`        | `filled` `outlined`                       | The variant of text field                                   | `filled`    |
| `isDisabled`     | `boolean`                                 | Disables the text field                                     | `false`     |
| `prefixText`     | `string`                                  | Prefix text of text field                                   | `null`      |
| `suffixText`     | `string`                                  | Suffix text of text field                                   | `null`      |
| `supportingText` | `string`                                  | Supporting text of text field                               | `null`      |
| `maxLength`      | `number`                                  | The maximum number of characters of text in the text field. | `null`      |
| `leadingIcon`    | `React.ReactNode`                         | leading icon of text field                                  | `undefined` |
| `trailingIcon`   | `React.ReactNode`                         | trailing icon of text field                                 | `undefined` |

## Events

| Events     | Description              |
| ---------- | ------------------------ |
| `onChange` | fired when value changed |
