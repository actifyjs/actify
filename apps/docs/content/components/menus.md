---
title: Menus
description: Menus display a list of choices on a temporary surface
---

## Usage

<usage></usage>

## Props
### MenuButton

| Name                | Type                | Description                                                                 | Default |
| ------------------- | ------------------- | --------------------------------------------------------------------------- | ------- |
| `label`             | `React.ReactNode`   | The text to show on the menu button.                                        | —       |
| `popoverProps`      | `PopoverProps`      | Props that allow changing the popover placement, flip behavior, style etc.  | —       |

### MenuItem

| Name                | Type                  | Description                                                                       | Default |
| ------------------- | --------------------- | --------------------------------------------------------------------------------- | ------- |
| `textValue`         | `string`              | A string representation of the item's contents, used for features like typeahead. | —       |
| `isDisabled`        | `boolean`             | Whether the item is disabled.                                                     | `false` |
| `className`         | `string`              | —                                                                                 | —       |
| `style`             | `React.CSSProperties` | —                                                                                 | —       |

## Events
### MenuItem

| Name              | Type                              | Description                                              |
| ----------------- | --------------------------------- | -------------------------------------------------------- |
| `onAction`        | `() => void`                      | Handler that is called when the item is selected.        |
| `onHoverChange`   | `(isHovering: boolean) => void`   | Handler that is called when the hover state changes.     |
| `onHoverStart`    | `(e: HoverEvent) => void`         | Handler that is called when a hover interaction starts.  |
| `onHoverEnd`      | `(e: HoverEvent) => void`         | Handler that is called when a hover interaction ends.    |