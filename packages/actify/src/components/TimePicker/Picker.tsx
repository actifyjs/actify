// 'use client'
// import { Keyboard } from 'lucide-react'
// import { Spacer } from '@actify/Spacer'
// import { Button } from '@actify/Button'
// import React, { useEffect, useState } from 'react'
// import { IconButton } from '@actify/Button/IconButton'

// const Picker = ({ value, onChange }: { value: number; onChange: Function }) => {
//   const [setting, setSetting] = useState('Hour')
//   const [hour, setHour] = useState('12')
//   const [minute, setMinute] = useState('00')
//   const [am, setAm] = useState(false)

//   const values = [
//     {
//       value: 12,
//       style: {
//         top: '2px',
//         left: 'calc(50% - 24px)'
//       }
//     },
//     {
//       value: 1,
//       style: {
//         top: '16px',
//         right: '54px'
//       }
//     },
//     {
//       value: 2,
//       style: {
//         top: '54px',
//         right: '16px'
//       }
//     },
//     {
//       value: 3,
//       style: {
//         right: '2px',
//         top: 'calc(50% - 24px)'
//       }
//     },
//     {
//       value: 4,
//       style: {
//         right: '16px',
//         bottom: '54px'
//       }
//     },
//     {
//       value: 5,
//       style: {
//         right: '54px',
//         bottom: '16px'
//       }
//     },
//     {
//       value: 6,
//       style: {
//         bottom: '2px',
//         left: 'calc(50% - 24px)'
//       }
//     },
//     {
//       value: 7,
//       style: {
//         left: '54px',
//         bottom: '16px'
//       }
//     },
//     {
//       value: 8,
//       style: {
//         left: '16px',
//         bottom: '54px'
//       }
//     },
//     {
//       value: 9,
//       style: {
//         left: '2px',
//         top: 'calc(50% - 24px)'
//       }
//     },
//     {
//       value: 10,
//       style: {
//         left: '16px',
//         top: '54px'
//       }
//     },
//     {
//       value: 11,
//       style: {
//         left: '54px',
//         top: '16px'
//       }
//     }
//   ]

//   useEffect(() => {
//     const [hour, minute] = value.toString().split(':')
//     setHour(hour)
//     setMinute(minute)
//   }, [])

//   const getActvieClass = (value: number) => {
//     if (setting == 'Hour') {
//       if (value.toString() == hour) {
//         return 'text-white bg-primary'
//       }
//     }
//     if (setting == 'Minute') {
//       if ((value * 5).toString() == minute) {
//         return 'text-white bg-primary'
//       }
//     }
//   }

//   const getPointerRotate = () => {
//     if (setting == 'Hour') {
//       return `rotateZ(${Number(hour) * 30}deg)`
//     }
//     if (setting == 'Minute') {
//       return `rotateZ(${Number(minute) * 6}deg)`
//     }
//   }

//   const handleClick = (value: string) => {
//     if (setting == 'Hour') {
//       setHour(value)
//     }
//     if (setting == 'Minute') {
//       setMinute((Number(value) * 5).toString())
//     }
//   }

//   return (
//     <>
//       <style>
//         {`@keyframes show-up-clock {
//   0% {
//     opacity: 0;
//     transform: scale(.7);
//   }
//   100% {
//     opacity: 1;
//     transform: scale(1);
//   }
// }`}
//       </style>
//       <div className="flex flex-col items-center justify-center rounded-[28px] max-h-[calc(100%-64px)] overflow-y-auto border shadow-[0_10px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)]">
//         <div className="flex flex-col pt-6 px-6 bg-surface rounded-t-lg justify-around">
//           <div className="flex flex-wrap items-center justify-center">
//             <label className="w-full text-xs mb-5">Select time</label>
//             <div className="flex w-full justify-between">
//               <div className="flex items-center flex-1 [direction:ltr] rtl:[direction:rtl]">
//                 <div
//                   onClick={() => setSetting('Hour')}
//                   className="relative w-24 h-20 grid place-content-center"
//                 >
//                   <button
//                     type="button"
//                     className={`text-6xl ${
//                       setting == 'Hour'
//                         ? 'text-primary '
//                         : 'text-on-surface opacity-[.54]'
//                     } border-none bg-transparent p-0 cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none !opacity-100`}
//                     tabIndex={0}
//                   >
//                     {hour.toString().padStart(2, '0')}
//                   </button>
//                 </div>
//                 <div className="w-6 text-center text-6xl opacity-[.54] border-none bg-transparent p-0 text-on-surface">
//                   :
//                 </div>
//                 <div
//                   onClick={() => setSetting('Minute')}
//                   className="relative w-24 h-20 grid place-content-center"
//                 >
//                   <button
//                     type="button"
//                     className={`text-6xl ${
//                       setting == 'Minute'
//                         ? 'text-primary '
//                         : 'text-on-surface opacity-[.54]'
//                     } border-none bg-transparent p-0 cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none`}
//                     tabIndex={0}
//                   >
//                     {/* @ts-ignore */}
//                     {minute == 60 ? '00' : minute.toString().padStart(2, '0')}
//                   </button>
//                 </div>
//               </div>
//               <div className="flex flex-col w-[52px] h-20 justify-between rounded-lg border-2 border-outline">
//                 <button
//                   tabIndex={0}
//                   type="button"
//                   onClick={() => setAm(true)}
//                   className={`flex-1 bg-transparent border-none text-on-surface ${
//                     am ? '' : 'opacity-[.54]'
//                   } cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none`}
//                 >
//                   AM
//                 </button>
//                 <button
//                   tabIndex={0}
//                   type="button"
//                   onClick={() => setAm(false)}
//                   className={`flex-1 bg-transparent border-none text-on-surface ${
//                     am ? 'opacity-[.54]' : ''
//                   } cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none`}
//                 >
//                   PM
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="w-full mt-9 mb-5 px-3 overflow-x-hidden flex justify-center flex-col items-center">
//             <div className="relative rounded-full w-64 h-64 cursor-default my-0 mx-auto bg-[#00000012] dark:bg-zinc-600/50 animate-[show-up-clock_350ms_linear]">
//               <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-primary"></div>
//               <div
//                 style={{
//                   transform: getPointerRotate(),
//                   height: 'calc(40% + 1px)'
//                 }}
//                 className="absolute bg-primary bottom-1/2 h-[104px] left-[calc(50%-1px)] w-0.5 origin-[center_bottom]"
//               ></div>
//               {values.map(({ value, style }) => (
//                 <div
//                   key={value}
//                   style={style}
//                   onClick={() => handleClick(value.toString())}
//                   className={`absolute rounded-full w-12 h-12 text-center cursor-pointer flex justify-center items-center font-light focus:outline-none ${getActvieClass(
//                     value
//                   )} select-none`}
//                 >
//                   <span>{setting == 'Hour' ? value : value * 5}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="rounded-b-lg flex justify-between items-center w-full h-14 px-3 bg-white dark:bg-zinc-500">
//           <div className="w-full flex justify-between">
//             <IconButton>
//               <Keyboard />
//             </IconButton>
//             <Spacer />
//             <Button variant="text">Cancel</Button>
//             <Button variant="text" onClick={() => onChange({ hour, minute })}>
//               Ok
//             </Button>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export { Picker }
