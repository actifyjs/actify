'use client'

import {
  ColorMode,
  changeColor,
  changeColorAndMode,
  changeColorMode,
  getCurrentMode,
  getCurrentSeedColor,
  getCurrentThemeString
} from '@/utils/theme'
import {
  Icon,
  IconButton,
  Label,
  Menu,
  SegmentedButton,
  SegmentedButtonSet,
  Slider
} from 'actify'
import { hctFromHex, hexFromHct } from '@/utils/material-color-helpers'

import React from 'react'
import { useAutoTheme } from '../hooks/useAutoTheme'
import { useTheme } from 'next-themes'

export const ThemeChanger = () => {
  const { setTheme } = useTheme()
  const [open, setOpen] = React.useState(false)
  const [hue, setHue] = React.useState<number>(0)
  const [chroma, setChroma] = React.useState<number>(0)
  const [tone, setTone] = React.useState<number>(0)
  const [hexColor, setHexColor] = React.useState<string>('')
  const [selectedColorMode, setSelectedColorMode] =
    React.useState<ColorMode | null>(null)
  useAutoTheme()

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    if (name == 'hue') {
      setHue(parseInt(value))
    }
    if (name == 'chroma') {
      setChroma(parseInt(value))
    }
    if (name == 'tone') {
      setTone(parseInt(value))
    }
    const hexColor = hexFromHct(hue, chroma, tone)
    setHexColor(hexColor)
    changeColor(hexColor)
  }

  const handleChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: color } = event.target
    setHexColor(color)
    changeColor(color)
    updateHctFromHex(color)
  }

  const handleChangeColorMode = (mode: ColorMode) => {
    changeColorMode(mode)
    setSelectedColorMode(mode)
    setTheme(mode)
  }

  const updateHctFromHex = (hexColor: string) => {
    const { hue, chroma, tone } = hctFromHex(hexColor)
    React.startTransition(() => {
      setHue(hue)
      setChroma(chroma)
      setTone(tone)
    })
  }

  React.useLayoutEffect(() => {
    if (!getCurrentThemeString()) {
      changeColorAndMode('#ECAA2E', 'system')
    }
  }, [])
  React.useEffect(() => {
    if (!selectedColorMode) {
      const _selectedColorMode = getCurrentMode()
      setSelectedColorMode(_selectedColorMode)
    }
    if (!hexColor) {
      const _hexColor = getCurrentSeedColor()!
      setHexColor(_hexColor)
      updateHctFromHex(_hexColor)
      changeColor(_hexColor)
    }
  }, [selectedColorMode, hexColor])

  return (
    <div className="relative text-on-surface">
      <IconButton
        title="change theme"
        id="theme-menu-anchor"
        onClick={() => {
          setOpen(!open)
        }}
      >
        <Icon>palette</Icon>
      </IconButton>
      <Menu style={{ right: '0px' }} open={open} setOpen={setOpen}>
        <div className="flex flex-col w-56 my-3 mx-4 *:[margin-block-end:16px]">
          <section className="flex relative">
            <h2 className="text-2xl tracking-tighter leading-none">
              Theme Controls
            </h2>
            <div className="static h-6">
              <IconButton
                className="absolute inset-[-8px_0_auto_auto]"
                title="Copy current theme to clipboard"
              >
                <Icon>content_copy</Icon>
              </IconButton>
            </div>
          </section>
          <section className="flex items-center p-3 rounded-2xl text-on-surface-variant bg-surface-variant">
            <Label htmlFor="hex" className="grow">
              Hex Source Color
            </Label>
            <div className="rounded-full size-12 relative border border-on-secondary-container">
              <div className="size-full rounded-[inherit] flex items-center justify-center overflow-hidden">
                <input
                  id="hex"
                  type="color"
                  value={hexColor}
                  onChange={handleChangeColor}
                  className="min-w-[200%] min-h-[200%] appearance-none"
                />
              </div>
            </div>
          </section>

          <section className="px-3 rounded-2xl text-on-surface-variant bg-surface-variant [--md-slider-inactive-track-color:rgb(var(--md-sys-color-on-surface-variant))]">
            <div className="[margin-block:24px]">
              <Label className="block leading-tight ms-2.5 me-2.5">Hue</Label>
              <Slider
                labeled
                max={360}
                name="hue"
                value={hue}
                onChange={handleInput}
              />
              <div
                className="ms-2.5 ml-2.5 h-6 rounded-xl border border-current"
                style={{
                  background:
                    'linear-gradient(to right, #e7007d 0%, #e90070 1%, #ea0064 2%, #eb0057 3%, #ec044a 4%, #ec0e3d 5%, #eb162f 6%, #ea1c1f 7%, #e92207 8%, #e03400 9%, #d84200 10%, #d04b00 11%, #ca5100 12%, #c45600 13%, #bf5b00 14%, #ba5e00 15%, #b56100 16%, #b16400 17%, #ad6600 18%, #a96800 19%, #a56a00 20%, #a26c00 21%, #9e6e00 22%, #9b7000 23%, #977100 24%, #937300 25%, #907400 26%, #8c7600 27%, #887700 28%, #847800 29%, #7f7a00 30%, #7a7b00 31%, #757d00 32%, #6f7e00 33%, #698000 34%, #618200 35%, #588300 36%, #4c8500 37%, #3d8700 38%, #238a00 39%, #008b18 40%, #008a2f 41%, #008a3d 42%, #008948 43%, #008951 44%, #008858 45%, #00885f 46%, #008865 47%, #00876a 48%, #00876f 49%, #008673 50%, #008677 51%, #00867b 52%, #00857f 53%, #008583 54%, #008586 55%, #00848a 56%, #00848d 57%, #008491 58%, #008394 59%, #008398 60%, #00829c 61%, #00829f 62%, #0081a3 63%, #0081a7 64%, #0080ac 65%, #007fb1 66%, #007fb6 67%, #007ebb 68%, #007dc1 69%, #007bc8 70%, #007ad0 71%, #0078da 72%, #0075e5 73%, #0072f2 74%, #126eff 75%, #326bff 76%, #4568ff 77%, #5365ff 78%, #5f62ff 79%, #695fff 80%, #735bff 81%, #7d57ff 82%, #8653ff 83%, #8e4eff 84%, #9748ff 85%, #a040ff 86%, #aa37ff 87%, #b329ff 88%, #be0dff 89%, #c400f6 90%, #ca00ea 91%, #ce00de 92%, #d300d2 93%, #d600c6 94%, #da00ba 95%, #dd00ad 96%, #e000a1 97%, #e20095 98%, #e50089 99%)'
                }}
              />
            </div>
            <div className="[margin-block:24px]">
              <Label className="block leading-tight ms-2.5 me-2.5">
                Chroma
              </Label>
              <Slider
                labeled
                max={150}
                name="chroma"
                value={chroma}
                onChange={handleInput}
              />
              <div
                className="ms-2.5 ml-2.5 h-6 rounded-xl border border-current"
                style={{
                  background:
                    'linear-gradient(to right, rgb(119, 119, 119) 0%, rgb(122, 118, 116) 1%, rgb(123, 118, 113) 2%, rgb(125, 118, 110) 3%, rgb(126, 118, 107) 4%, rgb(128, 117, 104) 5%, rgb(129, 117, 101) 6%, rgb(131, 117, 98) 7%, rgb(132, 117, 95) 8%, rgb(134, 116, 92) 9%, rgb(135, 116, 89) 10%, rgb(137, 116, 85) 11%, rgb(138, 116, 82) 12%, rgb(139, 115, 79) 13%, rgb(141, 115, 75) 14%, rgb(142, 115, 72) 15%, rgb(143, 114, 69) 16%, rgb(145, 114, 65) 17%, rgb(146, 114, 62) 18%, rgb(147, 113, 58) 19%, rgb(148, 113, 55) 20%, rgb(149, 113, 51) 21%, rgb(151, 112, 47) 22%, rgb(152, 112, 43) 23%, rgb(153, 112, 39) 24%, rgb(154, 111, 34) 25%, rgb(155, 111, 29) 26%, rgb(156, 111, 24) 27%, rgb(157, 110, 17) 28%, rgb(158, 110, 8) 29%, rgb(159, 110, 0) 30%, rgb(159, 110, 0) 31%, rgb(159, 110, 0) 32%, rgb(159, 110, 0) 33%, rgb(159, 110, 0) 34%, rgb(159, 110, 0) 35%, rgb(159, 110, 0) 36%, rgb(159, 110, 0) 37%, rgb(159, 110, 0) 38%, rgb(159, 110, 0) 39%, rgb(159, 110, 0) 40%, rgb(159, 110, 0) 41%, rgb(159, 110, 0) 42%, rgb(159, 110, 0) 43%, rgb(159, 110, 0) 44%, rgb(159, 110, 0) 45%, rgb(159, 110, 0) 46%, rgb(159, 110, 0) 47%, rgb(159, 110, 0) 48%, rgb(159, 110, 0) 49%, rgb(159, 110, 0) 50%, rgb(159, 110, 0) 51%, rgb(159, 110, 0) 52%, rgb(159, 110, 0) 53%, rgb(159, 110, 0) 54%, rgb(159, 110, 0) 55%, rgb(159, 110, 0) 56%, rgb(159, 110, 0) 57%, rgb(159, 110, 0) 58%, rgb(159, 110, 0) 59%, rgb(159, 110, 0) 60%, rgb(159, 110, 0) 61%, rgb(159, 110, 0) 62%, rgb(159, 110, 0) 63%, rgb(159, 110, 0) 64%, rgb(159, 110, 0) 65%, rgb(159, 110, 0) 66%, rgb(159, 110, 0) 67%, rgb(159, 110, 0) 68%, rgb(159, 110, 0) 69%, rgb(159, 110, 0) 70%, rgb(159, 110, 0) 71%, rgb(159, 110, 0) 72%, rgb(159, 110, 0) 73%, rgb(159, 110, 0) 74%, rgb(159, 110, 0) 75%, rgb(159, 110, 0) 76%, rgb(159, 110, 0) 77%, rgb(159, 110, 0) 78%, rgb(159, 110, 0) 79%, rgb(159, 110, 0) 80%, rgb(159, 110, 0) 81%, rgb(159, 110, 0) 82%, rgb(159, 110, 0) 83%, rgb(159, 110, 0) 84%, rgb(159, 110, 0) 85%, rgb(159, 110, 0) 86%, rgb(159, 110, 0) 87%, rgb(159, 110, 0) 88%, rgb(159, 110, 0) 89%, rgb(159, 110, 0) 90%, rgb(159, 110, 0) 91%, rgb(159, 110, 0) 92%, rgb(159, 110, 0) 93%, rgb(159, 110, 0) 94%, rgb(159, 110, 0) 95%, rgb(159, 110, 0) 96%, rgb(159, 110, 0) 97%, rgb(159, 110, 0) 98%, rgb(159, 110, 0) 99%)'
                }}
              />
            </div>
            <div className="[margin-block:24px]">
              <Label className="block leading-tight ms-2.5 me-2.5">Tone</Label>
              <Slider
                labeled
                max={100}
                name="tone"
                value={tone}
                onChange={handleInput}
              />
              <div
                className="ms-2.5 me-2.5 h-6 rounded-xl border border-current"
                style={{
                  background:
                    'linear-gradient(to right, #000000 0%, #040404 1%, #070707 2%, #0b0b0b 3%, #0e0e0e 4%, #111111 5%, #131313 6%, #151515 7%, #181818 8%, #191919 9%, #1b1b1b 10%, #1d1d1d 11%, #1f1f1f 12%, #222222 13%, #242424 14%, #262626 15%, #282828 16%, #2a2a2a 17%, #2c2c2c 18%, #2e2e2e 19%, #303030 20%, #323232 21%, #353535 22%, #373737 23%, #393939 24%, #3b3b3b 25%, #3e3e3e 26%, #404040 27%, #424242 28%, #444444 29%, #474747 30%, #494949 31%, #4b4b4b 32%, #4e4e4e 33%, #505050 34%, #525252 35%, #555555 36%, #575757 37%, #595959 38%, #5c5c5c 39%, #5e5e5e 40%, #616161 41%, #636363 42%, #666666 43%, #686868 44%, #6a6a6a 45%, #6d6d6d 46%, #6f6f6f 47%, #727272 48%, #747474 49%, #777777 50%, #797979 51%, #7c7c7c 52%, #7f7f7f 53%, #818181 54%, #848484 55%, #868686 56%, #898989 57%, #8b8b8b 58%, #8e8e8e 59%, #919191 60%, #939393 61%, #969696 62%, #989898 63%, #9b9b9b 64%, #9e9e9e 65%, #a0a0a0 66%, #a3a3a3 67%, #a6a6a6 68%, #a8a8a8 69%, #ababab 70%, #aeaeae 71%, #b0b0b0 72%, #b3b3b3 73%, #b6b6b6 74%, #b9b9b9 75%, #bbbbbb 76%, #bebebe 77%, #c1c1c1 78%, #c4c4c4 79%, #c6c6c6 80%, #c9c9c9 81%, #cccccc 82%, #cfcfcf 83%, #d1d1d1 84%, #d4d4d4 85%, #d7d7d7 86%, #dadada 87%, #dddddd 88%, #dfdfdf 89%, #e2e2e2 90%, #e5e5e5 91%, #e8e8e8 92%, #ebebeb 93%, #eeeeee 94%, #f1f1f1 95%, #f3f3f3 96%, #f6f6f6 97%, #f9f9f9 98%, #fcfcfc 99%)'
                }}
              />
            </div>
          </section>

          <section className="flex items-center ![margin-block-end:0]">
            <SegmentedButtonSet
              role="presentation"
              className="w-full"
              aria-label="Color mode"
            >
              <div
                role="group"
                className="h-10 grid w-full grid-flow-col auto-rows-auto auto-cols-[1fr]"
              >
                <SegmentedButton
                  title="dark"
                  data-value="dark"
                  className="rounded-l-full"
                  selected={selectedColorMode == 'dark'}
                  onClick={() => handleChangeColorMode('dark')}
                  icon={<Icon>dark_mode</Icon>}
                />
                <SegmentedButton
                  title="auto"
                  data-value="auto"
                  selected={selectedColorMode == 'system'}
                  onClick={() => handleChangeColorMode('system')}
                  icon={<Icon>brightness_medium</Icon>}
                />
                <SegmentedButton
                  title="light"
                  data-value="light"
                  className="rounded-r-full"
                  selected={selectedColorMode == 'light'}
                  onClick={() => handleChangeColorMode('light')}
                  icon={<Icon>light_mode</Icon>}
                />
              </div>
            </SegmentedButtonSet>
          </section>
        </div>
      </Menu>
    </div>
  )
}
