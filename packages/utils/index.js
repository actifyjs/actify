export function setColor(colorString) {
  const colors = ['primary', 'secondary', 'tertiary', 'error']
  if (colors.includes(colorString)) {
    return `var(--color-${colorString})`
  } else {
    return colorString
  }
}
