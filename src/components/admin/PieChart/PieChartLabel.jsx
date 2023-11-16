import { degreesInCircle } from './degreesToRadians'
import { getPointOnCircle } from './getPointOnCircle'

const labelWrapperSize = 20

export const PieChartLabel = ({
  startAngle,
  endAngle,
  radius,
  cutoutRadius
}) => {
  const labelAngle = startAngle + (endAngle - startAngle) / 2
  const labelPosition = getPointOnCircle(
    radius,
    cutoutRadius + (radius - cutoutRadius) / 2,
    labelAngle
  )
  labelPosition.x -= labelWrapperSize / 2
  labelPosition.y -= labelWrapperSize / 2

  return (
    <g>
      <rect
        fill="transparent"
        {...labelPosition}
        width={labelWrapperSize}
        height={labelWrapperSize}
      />
      <text
        textAnchor="middle"
        className="fill-surface"
        dominantBaseline="middle"
        x={labelPosition.x + labelWrapperSize / 2}
        y={labelPosition.y + labelWrapperSize / 2}
      >
        {Math.round(((endAngle - startAngle) * 100) / degreesInCircle)}
        <tspan fontSize={5}>%</tspan>
      </text>
    </g>
  )
}
