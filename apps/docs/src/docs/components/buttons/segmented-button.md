---
title: Segmented button
---

# Segmented button

> Segmented buttons help people select options, switch views, or sort elements

## Usage

<usage name="segmented-button"></usage>

## Props

| Props       | Type                                          | Description         | Default   |
| ----------- | --------------------------------------------- | ------------------- | --------- |
| color       | `primary` `secondary` `tertiary` `error`      | button color        | `primary` |
| variant     | `elevated` `filled` `tonal` `outlined` `text` | button type variant | `filled`  |
| multiple    | `boolean`                                     | single or multiple  | `false`   |
| activeIndex | `number[]`                                    | button active index | `null`    |

## Events

| Events     | Description                    |
| ---------- | ------------------------------ |
| `onChange` | fired when activeIndex changed |
