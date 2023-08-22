export function setColor(str) {
  // 'primary', 'secondary', 'tertiary', 'error'
  if (str == 'primary' || str == 'secondary' || str == 'tertiary' || str == 'error') {
    return `rgb(var(--color-${str}))`
  } else {
    return str
  }
}
