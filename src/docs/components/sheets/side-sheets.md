---
title: Side sheets
---

# Side sheets

> Side sheets are surfaces containing supplementary content or actions to support tasks as part of a flow. They are typically anchored on the right edge of larger screens like tablets and desktops.

## Usage

<usage name="side-sheets"></usage>

## Slots

| Name       | Description                      |
| ---------- | -------------------------------- |
| Activator  | The activator of the side sheets |
| Content    | The content of the side sheets   |
| \|- Header | The header of the side sheets    |
| \|- Body   | The body of the side sheets      |
| \|- Action | The action of the side sheets    |

## Activator Props

| Props     | Type      | Description                                | Default |
| --------- | --------- | ------------------------------------------ | ------- |
| `asChild` | `boolean` | set true pass any element as the activator | `false` |
| `open`    | `boolean` | Whether the sheets is open or not          | `false` |

## Content Props

| Props     | Type      | Description                | Default |
| --------- | --------- | -------------------------- | ------- |
| `divider` | `boolean` | show divider top at action | `false` |
