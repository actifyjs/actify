export function setColor(colorString) {
  const colors = ['primary', 'secondary', 'tertiary', 'error']
  if (colors.includes(colorString)) {
    return `rgb(var(--color-${colorString}))`
  } else {
    return colorString
  }
}
