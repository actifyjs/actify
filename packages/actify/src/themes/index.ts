import { tv } from 'tailwind-variants'

const themes = tv({
  slots: {
    scrim: 'z-50 bg-black/40 dark:bg-[rgba(3,3,3,.8)]',
    hover: 'bg-surface bg-surface/25',
    'hover-inverse': 'bg-surface bg-surface/25',
    border: 'border border-outline/50'
  }
})

export default themes
