---
title: Side sheets
---

# Side sheets

> Side sheets are surfaces containing supplementary content or actions to support tasks as part of a flow. They are typically anchored on the right edge of larger screens like tablets and desktops.

## Usage

<usage name="side-sheets"></usage>

## Slots

| Name      | Description                        |
| --------- | ---------------------------------- |
| Activator | The activator of the bottom sheets |
| Content   | The content of the bottom sheets   |

## Activator Props

| Props     | Type      | Description                                | Default |
| --------- | --------- | ------------------------------------------ | ------- |
| `asChild` | `boolean` | set true pass any element as the activator | `false` |

## Content Props

| Props     | Type              | Description                | Default |
| --------- | ----------------- | -------------------------- | ------- |
| `divider` | `boolean`         | show divider top at action | `false` |
| `action`  | `React.ReactNode` | bottom action              | `null`  |
