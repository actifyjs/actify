---
title: Dialogs
---

# Dialogs

> Dialogs provide important prompts in a user flow

## Usage

<usage name="dialog"></usage>

## Open dialog with activator

<code-preview code='<Dialog>
    <Dialog.Activator>
      <Button>Open dialog with activator</Button>
    </Dialog.Activator>
    <Dialog.Content>
      <Dialog.Heading>
        <p>This dialog opened by activator</p>
        <Spacer />
        <Dialog.Close>
          <IconButton color="secondary">
            <Icon name="x" />
          </IconButton>
        </Dialog.Close>
      </Dialog.Heading>
      <Dialog.Description>
        <p>
          Amet sunt fugiat irure Lorem commodo nulla officia cupidatat ipsum
          duis quis minim Lorem incididunt. Non laboris mollit laborum cillum
          deserunt aliqua amet dolor excepteur ea aliqua commodo excepteur. Sint
          id est id deserunt magna aliquip consectetur adipisicing pariatur
          dolor mollit velit ea deserunt.
        </p>
      </Dialog.Description>
      <div className="flex items-center gap-2">
        <Spacer />
        <Dialog.Close>
          <Button color="error">Cancel</Button>
        </Dialog.Close>
        <Button>Confirm</Button>
      </div>
    </Dialog.Content></Dialog>'>
</code-preview>

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
