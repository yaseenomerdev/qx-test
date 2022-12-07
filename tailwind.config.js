module.exports = {
  content: [],

  mode: 'jit',

  theme: {
    fontFamily: {
      // sans: ['AvenirArabic'],
    },
    borderColor: (theme) => ({
      muted: 'var(--border-muted)',
      muted2: 'var(--border-muted2)',
      'muted-btn': 'var(--border-muted-btn)',
      primary: 'var(--border-primary)',
      inverted: 'var(--border-inverted)',
    }),

    screens: {
      xs: '375px',
      sm: '768px',
      lg: '1024px',
      xl: '1032px',
    },
    colors: {
      // Primary Colors
      'c-p-blue': '#377dff',
      'c-p-blue-hover': '#0a60ff',

      'c-p-green': '#2bdaad',
      'c-p-green-hover': '#1fad8a',

      'c-p-red': '#f2415f',
      'c-p-red-hover': '#ef1a3e',

      'c-p-purple': '#41456e',
      'c-p-purple-hover': '#35385a',

      'c-p-gold': '#fed604',
      'c-p-gold-hover': '#D8B503',

      'c-p-uts': '#03698E',
      'c-p-uts-hover': '#035471',

      // Secondary Colors
      'c-s-blue': '#99bdff',
      'c-s-green': '#74e7ca',
      'c-s-red': '#f78d9e',
      'c-s-purple': '#656aa4',
      'c-s-gold': '#fee771',

      // Background Colors
      'c-b-gray-light': '#f5f7f8',
      'c-b-gray-common': '#f5f5f5',
      'c-b-gray-border': '#eaeaea',
      'c-b-gray-dark': '#c1c7d0',
      'c-b-gray-lighter': '#e4e4e4',
      'c-b-gray-inputs': '#e9ecf4',
      'c-b-bluish-light': '#f8f9ff',
      'c-b-gray-lighte2': '#f7f9fc',
      'c-b-gray-lighte3': '#f8fafc',
      'c-b-gray-lighte4': '#edf0f4',
      // other Colors
      peach: '#fee7b4',
      card: '#1a1f71',
      'progress-right-red': '#f4a79c',
      'progress-left-red': '#ef405e',
      'progress-right-blue': '#00cdff',
      'progress-left-blue': '#007cff',
      'topic-row': '#f4f6fd',
      'topic-row-hover': '#dce3f9',
      'lesson-row': '#8EA5D2',
      'purple-dis': '#5959c7',
      'purple-lighter': '#f3f2fc',
      white: '#fff',

      active: 'var(--bg-active)',
      hover: 'var(--bg-hover)',
    },
    extend: {
      spacing: {
        340: '340px',
        '2px': '2px',
        '19px': '-19px',
        '90px': '90px',
      },
      textColor: {
        'base-color': 'var(--text-base)',
        inverted: 'var(--text-inverted)',
        muted: 'var(--text-muted)',
        active: 'var(--text-active)',
        disabled: 'var(--text-disabled)',
        error: 'var(--text-error)',
      },
      backgroundColor: {
        base: 'var(--bg-base)',
        muted: 'var(--bg-muted)',
        muted2: 'var(--bg-muted2)',
        row: 'var(--bg-row)',
        active: 'var(--bg-active)',
        hover: 'var(--bg-hover)',
        primary: 'var(--btn-primary)',
        secondary: 'var(--btn-secondary)',
        disabled: 'var(--bg-disabled)',
        inverted: 'var(--bg-inverted)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwindcss-rtl')],
}
