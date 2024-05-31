---
title: Accordion
description: Accordion display a list of high-level options that can expand/collapse to reveal more information.
---

## Usage

<usage></usage>

## Props

| Props      | Type      | Description                                                                  | Default     |
| ---------- | --------- | ---------------------------------------------------------------------------- | ----------- |
| `open`     | `array`   | Set which index item is open. eg. [,true] stands for the second item is open | `[]`        |
| `multiple` | `boolean` | Allow multiple items to be expanded at the same time.                        | `undefined` |

## Sub components

| Name                | Description                                     |
| ------------------- | ----------------------------------------------- |
| `Accordion.Item`    | The Accordion item root wrap                    |
| `Accordion.Header`  | The Accordion item header, can use asChild api  |
| `Accordion.Content` | The Accordion item content, can use asChild api |
