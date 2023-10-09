export function setColor(colorString) {
  const colors = ['primary', 'secondary', 'tertiary', 'error']
  if (colors.includes(colorString)) {
    return `rgb(var(--color-${colorString}))`
  } else {
    return colorString
  }
}

export function debounce(fn, delay) {
  let timer = null
  return function (...args) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
