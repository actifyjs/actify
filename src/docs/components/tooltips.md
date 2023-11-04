---
title: Tooltips
---

# Tooltips

> Tooltips display brief labels or messages

## Usage

<usage name="tooltip"></usage>

## TooltipGroup

<code-preview code='<div className="grid grid-cols-3 gap-2 place-items-center">
<TooltipGroup>
    <Tooltip placement="top" content="Actify Tooltip">
        <Button>Top</Button>
    </Tooltip>
    <Tooltip placement="top-start" content="Actify Tooltip">
        <Button>Top Start</Button>
    </Tooltip>
    <Tooltip placement="top-end" content="Actify Tooltip">
      <Button>Top End</Button>
    </Tooltip>
    <Tooltip placement="right" content="Actify Tooltip">
        <Button>Right</Button>
    </Tooltip>
    <Tooltip placement="right-start" content="Actify Tooltip">
        <Button>Right Start</Button>
    </Tooltip>
    <Tooltip placement="right-end" content="Actify Tooltip">
        <Button>Right End</Button>
    </Tooltip>
    <Tooltip placement="bottom" content="Actify Tooltip">
        <Button>Bottom</Button>
    </Tooltip>
    <Tooltip placement="bottom-start" content="Actify Tooltip">
        <Button>Bottom Start</Button>
    </Tooltip>
    <Tooltip placement="bottom-end" content="Actify Tooltip">
        <Button>Bottom End</Button>
    </Tooltip>
    <Tooltip placement="left" content="Actify Tooltip">
        <Button>Left</Button>
    </Tooltip>
    <Tooltip placement="left-start" content="Actify Tooltip">
        <Button>Left Start</Button>
    </Tooltip>
    <Tooltip placement="left-end" content="Actify Tooltip">
        <Button>Left End</Button>
    </Tooltip>
</TooltipGroup></div>' 
/>

## Props

| Props     | Type                                                                                                        | Description                     | Default |
| --------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------- | ------- |
| placement | `top,top-start,top-end,right,right-start,right-end,bottom,bottom-start,bottom-end,left,left-start,left-end` | Set the placement position      | `top`   |
| content   | `string`                                                                                                    | Set tooltips content            | `null`  |
| showArrow | `boolean`                                                                                                   | Show a small triangle arrow     | `true`  |
| showDelay | `number`                                                                                                    | Show tooltip delay milliseconds | `500`   |
| hideDelay | `number`                                                                                                    | Hide tooltip delay milliseconds | `200`   |
