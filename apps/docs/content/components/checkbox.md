---
title: Checkbox
description: Checkboxes let users select one or more items from a list, or turn an item on or off
---

## Usage

<usage></usage>

## Props

| Props             | Type                                      | Description                              | Default |
| ----------------- | ----------------------------------------- | ---------------------------------------- | ------- |
| `color`           | `primary` `secondary` `tertiaray` `error` | The color of the checkbox                | `null`  |
| `value`           | `boolean`                                 | Checkbox value                           | `null`  |
| `isDisabled`      | `boolean`                                 | Whether the checkbox is disabled         | `false` |
| `isSelected`      | `boolean`                                 | whether the checkbox is selected         | `false` |
| `isIndeterminate` | `boolean`                                 | whether the item is toggled on or off.   | `false` |
| `defaultSelected` | `boolean`                                 | whether the checkbox is default selected | `false` |

## Events

| Events     | Description              |
| ---------- | ------------------------ |
| `onChange` | fired when value changed |
