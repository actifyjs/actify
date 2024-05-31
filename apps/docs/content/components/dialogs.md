---
title: Dialogs
description: Dialogs provide important prompts in a user flow
---

## Usage

<usage></usage>

## Open dialog with activator

<preview code='<Dialog>
    <Dialog.Activator>
      <Button>
        Open dialog with activator
      </Button>
    </Dialog.Activator>
    <Dialog.Content>
      <Dialog.Heading>
        <p>This dialog opened by activator</p>
        <Spacer />
        <Dialog.Close>
          <IconButton color="secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
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
</preview>

## Props

| Prop           | Type       | Description                                 | Default    |
| -------------- | ---------- | ------------------------------------------- | ---------- |
| `open`         | `boolean`  | Whether the dialog is open                  | `false`    |
| `onOpenChange` | `function` | Callback function when dialog open or close | `() => {}` |

## Sub components

| Name               | Description                    |
| ------------------ | ------------------------------ |
| Dialog.Activator   | The activator of the dialog    |
| Dialog.Heading     | The header of the dialog       |
| Dialog.Content     | The content of the dialog      |
| Dialog.Close       | The close button of the dialog |
| Dialog.Description | The description of the dialog  |

## Activator Props

| Props     | Type      | Description                                | Default |
| --------- | --------- | ------------------------------------------ | ------- |
| `asChild` | `boolean` | set true pass any element as the activator | `false` |
