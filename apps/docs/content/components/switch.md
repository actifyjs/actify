---
title: Switch
description: Switches toggle the state of an item on or off
---

## Usage

<usage></usage>

## Props

| Name              | Type                                                                                        | Default | Description                                                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `icons`           | `boolean`                                                                                   | —       | Show x or √ icon                                                                                                                                              |
| `color`           | `primary` `secondary` `tertiaray` `error`                                                   | —       | The color of the switch                                                                                                                                       |
| `defaultSelected` | `boolean`                                                                                   | —       | Whether the Switch should be selected (uncontrolled).                                                                                                         |
| `isSelected`      | `boolean`                                                                                   | —       | Whether the Switch should be selected (controlled).                                                                                                           |
| `isDisabled`      | `boolean`                                                                                   | —       | Whether the input is disabled.                                                                                                                                |
| `isReadOnly`      | `boolean`                                                                                   | —       | Whether the input can be selected but not changed by the user.                                                                                                |
| `autoFocus`       | `boolean`                                                                                   | —       | Whether the element should receive focus on render.                                                                                                           |
| `name`            | `string`                                                                                    | —       | The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname). |
| `children`        | `string` `React.ReactNode`                                                                  | —       | The children of the component. A function may be provided to alter the children based on component state.                                                     |
| `className`       | `string` `(values: SwitchRenderProps & { defaultClassName: string \| undefined}) => string` | —       | The CSS className for the element. A function may be provided to compute the class based on component state.                                                  |
| `style`           | `React.CSSProperties`                                                                       | —       | The inline style for the element. A function may be provided to compute the style based on component state.                                                   |

## Events

| Name            | Type                            | Description                                                       |
| --------------- | ------------------------------- | ----------------------------------------------------------------- |
| `onChange`      | (isSelected: boolean) => void   | Handler that is called when the Switch's selection state changes. |
| `onFocus`       | (e: FocusEvent<Target>) => void | Handler that is called when the element receives focus.           |
| `onBlur`        | (e: FocusEvent<Target>) => void | Handler that is called when the element loses focus.              |
| `onFocusChange` | (isFocused: boolean) => void    | Handler that is called when the element's focus status changes.   |
| `onKeyDown`     | (e: KeyboardEvent) => void      | Handler that is called when a key is pressed.                     |
| `onKeyUp`       | (e: KeyboardEvent) => void      | Handler that is called when a key is released.                    |
| `onHoverStart`  | (e: HoverEvent) => void         | Handler that is called when a hover interaction starts.           |
| `onHoverEnd`    | (e: HoverEvent) => void         | Handler that is called when a hover interaction ends.             |
| `onHoverChange` | (isHovering: boolean) => void   | Handler that is called when the hover state changes.              |
