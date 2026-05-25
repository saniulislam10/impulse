import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1b9883',
        'accent-gold': '#D1BC94',
        'background-light': '#ffffff',
        'background-dark': '#1a1a1a',
        'surface-light': '#f8f8f8',
        'surface-dark': '#262626',
      },
      fontFamily: {
        'display': ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        'DEFAULT': '0.25rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}
export default config
