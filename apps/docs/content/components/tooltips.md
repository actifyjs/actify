---
title: Tooltips
description: Tooltips display brief labels or messages
---

## Usage

<usage></usage>

## Props

### TooltipTrigger

| Name        | Type        | Default | Description                                                                     |
| ----------- | ----------- | ------- | ------------------------------------------------------------------------------- |
| children    | `ReactNode` | —       |                                                                                 |
| isDisabled  | `boolean`   | —       | Whether the tooltip should be disabled, independent from the trigger.           |
| delay       | `number`    | 1500    | The delay time for the tooltip to show up.                                      |
| closeDelay  | `number`    | 500     | The delay time for the tooltip to close.                                        |
| trigger     | `focus`     | —       | By default, opens for both focus and hover. Can be made to open only for focus. |
| isOpen      | `boolean`   | 12      | Whether the overlay is open by default (controlled).                            |
| defaultOpen | `boolean`   | 0       | Whether the overlay is open by default (uncontrolled).                          |

### Tooltip

| Name                     | Type                                                                                                                       | Default       | Description                                                                                                                                                                        |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| triggerRef               | `RefObject<Element \| null>`                                                                                               | —             | The ref for the element which the tooltip positions itself with respect to. When used within a TooltipTrigger this is set automatically. It is only required when used standalone. |
| isEntering               | `boolean`                                                                                                                  | —             | Whether the tooltip is currently performing an entry animation.                                                                                                                    |
| isExiting                | `boolean`                                                                                                                  | —             | Whether the tooltip is currently performing an exit animation.                                                                                                                     |
| UNSTABLE_portalContainer | `Element`                                                                                                                  | document.body | The container element in which the overlay portal will be placed. This may have unknown behavior depending on where it is portalled to.                                            |
| placement                | <tooltip>`Placement`</tooltip>                                                                                             | 'top'         | The placement of the tooltip with respect to the trigger.                                                                                                                          |
| containerPadding         | `number`                                                                                                                   | 12            | The placement padding that should be applied between the element and its surrounding container.                                                                                    |
| offset                   | `number`                                                                                                                   | 0             | The additional offset applied along the main axis between the element and its anchor element.                                                                                      |
| crossOffset              | `number`                                                                                                                   | 0             | The additional offset applied along the cross axis between the element and its anchor element.                                                                                     |
| shouldFlip               | `boolean`                                                                                                                  | true          | Whether the element should flip its orientation (e.g. top to bottom or left to right) when there is insufficient room for it to render completely.                                 |
| isOpen                   | `boolean`                                                                                                                  | —             | Whether the element is rendered.                                                                                                                                                   |
| arrowBoundaryOffset      | `number`                                                                                                                   | 0             | The minimum distance the arrow's edge should be from the edge of the overlay element.                                                                                              |
| defaultOpen              | `boolean`                                                                                                                  | —             | Whether the overlay is open by default (uncontrolled).                                                                                                                             |
| children                 | `ReactNode                     \| (values: TooltipRenderProps & { defaultChildren: ReactNode \| undefined }) => ReactNode` | —             | The children of the component. A function may be provided to alter the children based on component state.                                                                          |
| className                | `string \| (values: TooltipRenderProps & { defaultClassName: string \| undefined}) => string`                              | —             | The CSS className for the element. A function may be provided to compute the class based on component state.                                                                       |
| style                    | `CSSProperties \| (values: TooltipRenderProps & {defaultStyle: CSSProperties}) => CSSProperties \| undefined`              | —             | The inline style for the element. A function may be provided to compute the style based on component state.                                                                        |
