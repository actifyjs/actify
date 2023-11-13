---
title: Switch
---

# Switch

> Switches toggle the state of an item on or off

## Usage

<usage name="switch"></usage>

## Props

| Props             | Type                                               | Description                    | Default   |
| ----------------- | -------------------------------------------------- | ------------------------------ | --------- |
| `icons`           | `boolean`                                          | Show x or √ icon               | `false`   |
| `color`           | `primary` `secondary` `tertiaray` `error` `string` | The color of the switch        | `primary` |
| `disabled`        | `boolean`                                          | Whether the switch is disabled | `false`   |
| `selected`        | `boolean`                                          | Whether the switch is checked  | `null`    |
| `defaultSelected` | `boolean`                                          | The switch default selected    | `false`   |

## Events

| Events     | Description                 |
| ---------- | --------------------------- |
| `onChange` | fired when selected changed |
