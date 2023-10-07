import React, { useState } from 'react'
import { Button, IconButton, Icon, Spacer } from 'actify'

const Picker = () => {
  const [setting, setSetting] = useState('Hour')
  const [hour, setHour] = useState('12')
  const [minute, setMinute] = useState('00')
  const [am, setAm] = useState(false)

  const values = [
    {
      value: 12,
      style: {
        left: '114px',
        bottom: '224px'
      }
    },
    {
      value: 1,
      style: {
        left: '169px',
        bottom: '209px'
      }
    },
    {
      value: 2,
      style: {
        left: '209px',
        bottom: '169px'
      }
    },
    {
      value: 3,
      style: {
        left: '224px',
        bottom: '114px'
      }
    },
    {
      value: 4,
      style: {
        left: '209px',
        bottom: '59px'
      }
    },
    {
      value: 5,
      style: {
        left: '169px',
        bottom: '18.7372px'
      }
    },
    {
      value: 6,
      style: {
        left: '114px',
        bottom: '4px'
      }
    },
    {
      value: 7,
      style: {
        left: '59px',
        bottom: '18.7372px'
      }
    },
    {
      value: 8,
      style: {
        left: '18.7372px',
        bottom: '59px'
      }
    },
    {
      value: 9,
      style: {
        left: '4px',
        bottom: '114px'
      }
    },
    {
      value: 10,
      style: {
        left: '18.7372px',
        bottom: '169px'
      }
    },
    {
      value: 11,
      style: {
        left: '59px',
        bottom: '209.263px'
      }
    }
  ]

  return (
    <>
      <style>
        {`@keyframes show-up-clock {
  0% {
    opacity: 0;
    transform: scale(.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}`}
      </style>
      <div className="flex items-center justify-center flex-col max-h-[calc(100%-64px)] overflow-y-auto shadow-[0_10px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)] min-[320px]:max-[825px]:landscape:rounded-lg">
        <div className="flex flex-col min-w-[310px] min-h-[325px] bg-white rounded-t-[0.6rem] min-[320px]:max-[825px]:landscape:!flex-row min-[320px]:max-[825px]:landscape:min-w-[auto] min-[320px]:max-[825px]:landscape:min-h-[auto] min-[320px]:max-[825px]:landscape:overflow-y-auto justify-around">
          <div className="bg-primary dark:bg-zinc-700 h-[100px] rounded-t-lg pr-4 pl-[50px] py-[10px] min-[320px]:max-[825px]:landscape:rounded-tr-none min-[320px]:max-[825px]:landscape:rounded-bl-none min-[320px]:max-[825px]:landscape:p-[10px] min-[320px]:max-[825px]:landscape:pr-[10px] min-[320px]:max-[825px]:landscape:h-auto min-[320px]:max-[825px]:landscape:min-h-[305px] flex flex-row items-center justify-center">
            <div className="min-[320px]:max-[825px]:landscape:flex-col flex w-full justify-evenly">
              <div className="[direction:ltr] rtl:[direction:rtl]">
                <span className="relative h-full">
                  <button
                    type="button"
                    className="pointer-events-none text-6xl text-white border-none bg-transparent p-0 min-[320px]:max-[825px]:landscape:text-5xl min-[320px]:max-[825px]:landscape:font-normal cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none !opacity-100"
                    tabIndex="0"
                  >
                    12
                  </button>
                </span>
                <span className="text-6xl opacity-[.54] border-none bg-transparent p-0 text-white min-[320px]:max-[825px]:landscape:text-[3rem] min-[320px]:max-[825px]:landscape:font-normal">
                  :
                </span>
                <span className="relative h-full">
                  <button
                    type="button"
                    className="text-6xl text-white opacity-[.54] border-none bg-transparent p-0 min-[320px]:max-[825px]:landscape:text-5xl min-[320px]:max-[825px]:landscape:font-normal cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none"
                    tabIndex="0"
                  >
                    00
                  </button>
                </span>
              </div>
              <div className="flex flex-col justify-center text-lg text-[#ffffff8a] min-[320px]:max-[825px]:landscape:!justify-around min-[320px]:max-[825px]:landscape:!flex-row">
                <button
                  type="button"
                  className="p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none"
                  tabIndex="0"
                >
                  AM
                </button>
                <button
                  className="p-0 bg-transparent border-none text-white cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none !opacity-100"
                  tabIndex="0"
                >
                  PM
                </button>
              </div>
            </div>
          </div>
          <div className="min-w-[310px] max-w-[325px] min-h-[305px] overflow-x-hidden h-full flex justify-center flex-col items-center dark:bg-zinc-500">
            <div className="relative rounded-full w-[260px] h-[260px] cursor-default my-0 mx-auto bg-[#00000012] dark:bg-zinc-600/50 animate-[show-up-clock_350ms_linear]">
              <span className="absolute top-1/2 left-1/2 w-1.5 h-1.5 -translate-y-1/2 -translate-x-1/2 rounded-full bg-primary"></span>
              <div
                className="absolute bg-primary bottom-1/2 h-2/5 left-[calc(50%-1px)] rtl:!left-auto origin-[center_bottom_0] rtl:!origin-[50%_50%_0] w-0.5"
                style={{
                  transform: 'rotateZ(0)',
                  height: 'calc(40% + 1px)'
                }}
              >
                <div className="absolute bg-primary -top-[21px] -left-[15px] w-1 border-[14px] border-solid border-primary h-1 box-content rounded-full"></div>
              </div>
              {values.map(({ value, style }) => (
                <span
                  key={value}
                  className="absolute rounded-full w-8 h-8 text-center cursor-pointer bg-transparent flex justify-center items-center font-light focus:outline-none selection:bg-transparent"
                  style={style}
                >
                  <span>{value}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-b-lg flex justify-between items-center w-full h-14 px-3 bg-white dark:bg-zinc-500">
          <div className="w-full flex justify-between">
            <IconButton>
              <Icon name="keyboard" />
            </IconButton>
            <Spacer />
            <Button variant="text">Cancel</Button>
            <Button variant="text">Ok</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Picker
