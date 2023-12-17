export const SvgDisk = ({
  color,
  radius,
  cutoutRadius
}: {
  color: string
  radius: number
  cutoutRadius: number
}) => (
  <circle
    cx={radius}
    cy={radius}
    stroke={color}
    fill="transparent"
    strokeWidth={radius - cutoutRadius}
    r={radius - (radius - cutoutRadius) / 2}
  />
)
