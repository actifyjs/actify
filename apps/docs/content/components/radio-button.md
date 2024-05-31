---
title: Radio button
description: Radio buttons let people select one option from a set of options
---

## Usage

<usage></usage>

## Props

| Props          | Type     | Description                   | Default |
| -------------- | -------- | ----------------------------- | ------- |
| `value`        | `string` | The value of the radio        | `null`  |
| `defaultValue` | `string` | The defaultValue of the radio | `null`  |

## Events

| Events     | Description              |
| ---------- | ------------------------ |
| `onChange` | fired when value changed |

## SubComponent

| Name         | Description |
| ------------ | ----------- |
| `Radio.Item` | Radio Item  |

## SubComponent Props

| Props      | Type                                      | Description                        | Default   |
| ---------- | ----------------------------------------- | ---------------------------------- | --------- |
| `value`    | `string`                                  | The value of the radio item        | `false`   |
| `disabled` | `boolean`                                 | Whether the radio item is disabled | `false`   |
| `color`    | `primary` `secondary` `tertiaray` `error` | The color of the radio item        | `primary` |
