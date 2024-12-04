---
title: Button
description: Buttons have label text that describes the action that will occur if a user taps a button.
---

## Usage

<usage></usage>

> Notice! Button component under react-router Link component will cause refresh page.

- Solution 1: add onPress(e=>e.preventDefault()) to Button component
- Solution 2: put Link component under Button component

## Props

| Name                | Type                                          | Default   | Description                                                                                                                                                     |
| ------------------- | --------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| form                | `string`                                      | —         | The <form> element to associate the button with. The value of this attribute must be the id of a <form> in the same document.                                   |
| formAction          | `string`                                      | —         | The URL that processes the information submitted by the button. Overrides the action attribute of the button's form owner.                                      |
| formEncType         | `string`                                      | —         | Indicates how to encode the form data that is submitted.                                                                                                        |
| formMethod          | `string`                                      | —         | Indicates the HTTP method used to submit the form.                                                                                                              |
| formNoValidate      | `boolean`                                     | —         | Indicates that the form is not to be validated when it is submitted.                                                                                            |
| formTarget          | `string`                                      | —         | Overrides the target attribute of the button's form owner.                                                                                                      |
| name                | `string`                                      | —         | Submitted as a pair with the button's value as part of the form data.                                                                                           |
| value               | `string`                                      | —         | The value associated with the button's name when it's submitted with the form data.                                                                             |
| isPending           | `boolean`                                     | —         | Whether the button is in a pending state. This disables press and hover events while retaining focusability, and announces the pending state to screen readers. |
| isDisabled          | `boolean`                                     | —         | Whether the button is disabled.                                                                                                                                 |
| autoFocus           | `boolean`                                     | —         | Whether the element should receive focus on render.                                                                                                             |
| type                | `button` `submit` `reset`                     | 'button'  | The behavior of the button when used in an HTML form.                                                                                                           |
| preventFocusOnPress | `boolean`                                     | —         | Whether to prevent focus from moving to the button when pressing it.                                                                                            |
| children            | `React.ReactNode`                             | —         | The children of the component. A function may be provided to alter the children based on component state.                                                       |
| className           | `string`                                      | —         | The CSS className for the element. A function may be provided to compute the class based on component state.                                                    |
| style               | `React.CSSProperties`                         | —         | The inline style for the element. A function may be provided to compute the style based on component state.                                                     |
| color               | `primary` `secondary` `tertiary` `error`      | 'primary' |                                                                                                                                                                 |
| variant             | `elevated` `filled` `tonal` `outlined` `text` | 'filled'  |                                                                                                                                                                 |

## Events

| Name            | Type                              | Description                                                                                                             |
| --------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `onPress`       | `(e: PressEvent) => void`         | Handler that is called when the press is released over the target.                                                      |
| `onPressStart`  | `(e: PressEvent) => void`         | Handler that is called when a press interaction starts.                                                                 |
| `onPressEnd`    | `(e: PressEvent) => void`         | Handler that is called when a press interaction ends, either over the target or when the pointer leaves the target.     |
| `onPressChange` | `(e: PressEvent) => void`         | Handler that is called when the press state changes.                                                                    |
| `onPressUp`     | `(e: PressEvent) => void`         | Handler that is called when a press is released over the target, regardless of whether it started on the target or not. |
| `onFocus`       | `(e: FocusEvent<Target>) => void` | Handler that is called when the element receives focus.                                                                 |
| `onBlur`        | `(e: FocusEvent<Target>) => void` | Handler that is called when the element loses focus.                                                                    |
| `onFocusChange` | `(isFocused: boolean) => void`    | Handler that is called when the element's focus status changes.                                                         |
| `onKeyDown`     | `(e: KeyboardEvent) => void`      | Handler that is called when a key is pressed.                                                                           |
| `onKeyUp`       | `(e: KeyboardEvent) => void`      | Handler that is called when a key is released.                                                                          |
| `onHoverStart`  | `(e: HoverEvent) => void`         | Handler that is called when a hover interaction starts.                                                                 |
| `onHoverEnd`    | `(e: HoverEvent) => void`         | Handler that is called when a hover interaction ends.                                                                   |
| `onHoverChange` | `(isHovering: boolean) => void`   | Handler that is called when the hover state changes.                                                                    |

### Layout

| Name   | Type            | Description                                                                                                                                                                                                    |
| ------ | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `slot` | `string` `null` | A slot name for the component. Slots allow the component to receive props from a parent component. An explicit null value indicates that the local props completely override all props received from a parent. |
