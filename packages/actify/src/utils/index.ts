export function setColor(colorString: string) {
  const colors = ['primary', 'secondary', 'tertiary', 'error']
  if (colors.includes(colorString)) {
    return `rgb(var(--color-${colorString}))`
  } else {
    return colorString
  }
}

export function debounce(fn: () => void, delay: number) {
  let timer = null
  return function (...args) {
    timer && clearTimeout(timer)
    // @ts-ignore
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
