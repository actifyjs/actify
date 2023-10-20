---
title: Toast
---

# Toast

> Toast is a popup that appears at the bottom of the screen. It can contain an icon, a title, and a message.

## Usage

<usage name="toast"></usage>

## Hook API

```js
const toast = useToast(2000)
```

## Result

| Property | Description              | Type |
| -------- | ------------------------ | ---- |
| `toast`  | `function from useToast` |      |

## Params

| Property | Description          | Type   | Default |
| -------- | -------------------- | ------ | ------- |
| `delay`  | automatic close time | number | 2000    |

## Child

| Name             | Description |
| ---------------- | ----------- |
| `ToastProvider`  |             |
| `ToastContainer` |             |
