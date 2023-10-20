---
title: Dialogs
---

# Dialogs

> Dialogs provide important prompts in a user flow

## Usage

<usage name="dialog"></usage>

## Props

| Prop           | Type       | Description                                 | Default    |
| -------------- | ---------- | ------------------------------------------- | ---------- |
| `open`         | `boolean`  | Whether the dialog is open                  | `false`    |
| `onOpenChange` | `function` | Callback function when dialog open or close | `() => {}` |

## Slots

| Name        | Description                    |
| ----------- | ------------------------------ |
| Activator   | The activator of the dialog    |
| Heading     | The header of the dialog       |
| Content     | The content of the dialog      |
| Close       | The close button of the dialog |
| Description | The description of the dialog  |
