import { SvgArc } from './SvgArc'
import { SvgDisk } from './SvgDisk'
import { useMemo, Fragment } from 'react'
import { PieChartLabel } from './PieChartLabel'
import { degreesInCircle } from './degreesToRadians'

const cutoutRadiusShare = 0.52

export const sum = (numbers: number[]) =>
  numbers.reduce((acc, value) => acc + value, 0)

type Item = {
  value: number
  color: string
  className: string
}
type Angle = {
  value: number
  endAngle: number
  className: string
  startAngle: number
}

const getItemsWithAngles = (items: Item[]) => {
  const total = sum(items.map((item) => item.value))

  const itemsWithAngles: Angle[] = []

  items.forEach((item, index) => {
    const startAngle = index === 0 ? 0 : itemsWithAngles[index - 1].endAngle
    const endAngle = startAngle + (item.value / total) * degreesInCircle

    itemsWithAngles.push({
      ...item,
      endAngle,
      startAngle
    })
  })

  return itemsWithAngles
}

const svgViewBoxSize = 100

export default function PieChart({ items }: { items: Item[] }) {
  const itemsWithAngles = useMemo(() => getItemsWithAngles(items), [items])

  const radius = svgViewBoxSize / 2
  const cutoutRadius = radius * cutoutRadiusShare

  const total = sum(items.map((item) => item.value))

  return (
    <svg
      className="max-w-full w-full"
      viewBox={`0 0 ${svgViewBoxSize} ${svgViewBoxSize}`}
    >
      {items.length < 2 ? (
        <SvgDisk
          radius={radius}
          cutoutRadius={cutoutRadius}
          color={items[0].color}
        />
      ) : (
        itemsWithAngles.map(
          ({ className, startAngle, endAngle, value }, index) => {
            const percentage = Math.round((value * 100) / total)

            return (
              <Fragment key={index}>
                <SvgArc
                  radius={radius}
                  endAngle={endAngle}
                  className={className}
                  startAngle={startAngle}
                  cutoutRadius={cutoutRadius}
                />
                {percentage > 5 && (
                  <PieChartLabel
                    radius={radius}
                    endAngle={endAngle}
                    startAngle={startAngle}
                    cutoutRadius={cutoutRadius}
                  />
                )}
              </Fragment>
            )
          }
        )
      )}
    </svg>
  )
}
