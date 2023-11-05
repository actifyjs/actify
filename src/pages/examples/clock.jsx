import { useState } from 'react'

const CLOCK_RADIUS = 110

const ClockNumber = () => {
  const numbers = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]

  return (
    <div className="pointer-events-none absolute inset-0">
      {numbers.map((number, index) => (
        <div
          key={number}
          style={{ rotate: (index + 1) * 30 + 15 + 'deg' }}
          className="absolute inset-0 rounded-full"
        >
          <div
            style={{ rotate: -(index + 1) * 30 - 15 + 'deg' }}
            className="w-6 h-6 m-9 rounded-full grid place-content-center"
          >
            {number.toString().padStart(2, 0)}
          </div>
        </div>
      ))}
    </div>
  )
}

export default () => {
  const [deg, setDeg] = useState(0)

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect()
    const center = {
      x: rect.x + rect.width / 2,
      y: rect.y + rect.height / 2
    }
    const rad = Math.atan2(e.clientY - center.y, e.clientX - center.x)
    setDeg(90 + (rad * 180) / Math.PI)
  }

  return (
    <div className="p-5 bg-[#f4f4f4]">
      <div
        className="inline-block bg-surface rounded-full w-[220px] h-[220px] relative cursor-pointer touch-none"
        onClick={handleClick}
      >
        <ClockNumber />
        <svg
          width={CLOCK_RADIUS * 2}
          height={CLOCK_RADIUS * 2}
          viewBox="0 0 220 220"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            className=""
            transform={`rotate(${deg} ${CLOCK_RADIUS} ${CLOCK_RADIUS})`}
          >
            <line
              x1={CLOCK_RADIUS}
              y1={CLOCK_RADIUS}
              x2={CLOCK_RADIUS}
              y2="22"
              strokeWidth="1"
              className="stroke-primary"
            />
            <circle
              className="fill-primary"
              cx={CLOCK_RADIUS}
              cy={CLOCK_RADIUS}
              r="1.5"
            />
            <circle className="fill-primary" cx={CLOCK_RADIUS} cy="22" r="17" />
          </g>
        </svg>
      </div>
    </div>
  )
}
