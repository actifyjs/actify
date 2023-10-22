---
title: Toast
---

# Toast

> Toast is a popup that appears at the bottom of the screen. It can contain an icon, a title, and a message.

## Usage

<usage name="toast"></usage>

## Hook API

```js
const toast = useToast()
```

## Result

| Property | Description              | Type |
| -------- | ------------------------ | ---- |
| `toast`  | `function from useToast` |      |

## Params

| Property   | Description                                                                     | Type   | Default        |
| ---------- | ------------------------------------------------------------------------------- | ------ | -------------- |
| `duration` | Time in milliseconds that should elapse before automatically closing the toast. | number | 2000           |
| `position` | Position of the toast.                                                          | string | `bottom-right` |

## Child

| Name             | Description |
| ---------------- | ----------- |
| `ToastProvider`  |             |
| `ToastContainer` |             |
