---
title: Avatar
---

# Avatar

> Avatar is a component that can be used to display a user's avatar.

## Usage

<usage name="avatar"></usage>

## Props

| Props     | Type                                             | Description                              | Default |
| --------- | ------------------------------------------------ | ---------------------------------------- | ------- |
| `square`  | `boolean`                                        | use tailwind css class name rounded-none | `false` |
| `size`    | `xs` `sm` `md` `lg` `xl` `2xl`                   | The color of the badge.                  | `md`    |
| `rounded` | `boolean` `sm` `md` `lg` `xl` `2xl` `3xl` `full` | use tailwind css class name rounded-lg   | `full`  |

## Rounded

<code-preview code='<Avatar rounded />'>
</code-preview>

## Square

<code-preview code='<Avatar square />'>
</code-preview>

## Avatar Sizes

<code-preview code='<div className="flex w-max items-end gap-4">
      <Avatar size="xs" />
      <Avatar size="sm" />
      <Avatar size="md" />
      <Avatar size="lg" />
      <Avatar size="xl" />
      <Avatar size="2xl" />
    </div>'>
</code-preview>
