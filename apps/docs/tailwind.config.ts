import { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./src/**/*.{ts,tsx}', './../../packages/actify/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--md-sys-color-background,#fff8f3)',
        'on-background': 'var(--md-sys-color-on-background,#201b12)',
        surface: 'var(--md-sys-color-surface,#fff8f3)',
        'surface-dim': 'var(--md-sys-color-surface-dim,#e4d8cb)',
        'surface-bright': 'var(--md-sys-color-surface-bright,#fff8f3)',
        'surface-container-lowest':
          'var(--md-sys-color-surface-container-lowest,#ffffff)',
        'surface-container-low':
          'var(--md-sys-color-surface-container-low,#fef2e4)',
        'surface-container': 'var(--md-sys-color-surface-container,#f8ecde)',
        'surface-container-high':
          'var(--md-sys-color-surface-container-high,#f3e6d8)',
        'surface-container-highest':
          'var(--md-sys-color-surface-container-highest,#ede1d3)',
        'on-surface': 'var(--md-sys-color-on-surface,#201b12)',
        'surface-variant': 'var(--md-sys-color-surface-variant,#f2e0c9)',
        'on-surface-variant': 'var(--md-sys-color-on-surface-variant,#504534)',
        'inverse-surface': 'var(--md-sys-color-inverse-surface,#362f26)',
        'inverse-on-surface': 'var(--md-sys-color-inverse-on-surface,#fbefe1)',
        outline: 'var(--md-sys-color-outline,#837562)',
        'outline-variant': 'var(--md-sys-color-outline-variant,#d5c4ae)',
        shadow: 'var(--md-sys-color-shadow,#000000)',
        scrim: 'var(--md-sys-color-scrim,#000000)',
        'surface-tint': 'var(--md-sys-color-surface-tint,#7f5700)',
        primary: 'var(--md-sys-color-primary,#7f5700)',
        'on-primary': 'var(--md-sys-color-on-primary,#ffffff)',
        'primary-container': 'var(--md-sys-color-primary-container,#f7b337)',
        'on-primary-container':
          'var(--md-sys-color-on-primary-container,#442d00)',
        'inverse-primary': 'var(--md-sys-color-inverse-primary,#ffba3e)',
        secondary: 'var(--md-sys-color-secondary,#765a2b)',
        'on-secondary': 'var(--md-sys-color-on-secondary,#ffffff)',
        'secondary-container':
          'var(--md-sys-color-secondary-container,#ffdca9)',
        'on-secondary-container':
          'var(--md-sys-color-on-secondary-container,#5c4316)',
        tertiary: 'var(--md-sys-color-tertiary,#566500)',
        'on-tertiary': 'var(--md-sys-color-on-tertiary,#ffffff)',
        'tertiary-container': 'var(--md-sys-color-tertiary-container,#b6ca54)',
        'on-tertiary-container':
          'var(--md-sys-color-on-tertiary-container,#2d3600)',
        error: 'var(--md-sys-color-error,#ba1a1a)',
        'on-error': 'var(--md-sys-color-on-error,#ffffff)',
        'error-container': 'var(--md-sys-color-error-container,#ffdad6)',
        'on-error-container': 'var(--md-sys-color-on-error-container,#410002)'
      }
    }
  },
  plugins: [typography]
}

export default config
