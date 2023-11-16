export const SvgDisk = ({ color, radius, cutoutRadius }) => (
  <circle
    cx={radius}
    cy={radius}
    fill="transparent"
    stroke={color.toCssValue()}
    strokeWidth={radius - cutoutRadius}
    r={radius - (radius - cutoutRadius) / 2}
  />
)
