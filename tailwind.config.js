/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Centralized design system - change here to update entire site
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          50: 'rgb(var(--color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--color-primary-900) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
          50: 'rgb(var(--color-secondary-50) / <alpha-value>)',
          100: 'rgb(var(--color-secondary-100) / <alpha-value>)',
          200: 'rgb(var(--color-secondary-200) / <alpha-value>)',
          300: 'rgb(var(--color-secondary-300) / <alpha-value>)',
          400: 'rgb(var(--color-secondary-400) / <alpha-value>)',
          500: 'rgb(var(--color-secondary-500) / <alpha-value>)',
          600: 'rgb(var(--color-secondary-600) / <alpha-value>)',
          700: 'rgb(var(--color-secondary-700) / <alpha-value>)',
          800: 'rgb(var(--color-secondary-800) / <alpha-value>)',
          900: 'rgb(var(--color-secondary-900) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          50: 'rgb(var(--color-accent-50) / <alpha-value>)',
          100: 'rgb(var(--color-accent-100) / <alpha-value>)',
          200: 'rgb(var(--color-accent-200) / <alpha-value>)',
          300: 'rgb(var(--color-accent-300) / <alpha-value>)',
          400: 'rgb(var(--color-accent-400) / <alpha-value>)',
          500: 'rgb(var(--color-accent-500) / <alpha-value>)',
          600: 'rgb(var(--color-accent-600) / <alpha-value>)',
          700: 'rgb(var(--color-accent-700) / <alpha-value>)',
          800: 'rgb(var(--color-accent-800) / <alpha-value>)',
          900: 'rgb(var(--color-accent-900) / <alpha-value>)',
        },
        success: 'rgb(var(--color-success) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',
        error: 'rgb(var(--color-error) / <alpha-value>)',
      },
      // fontFamily: {
      //   sans: ['Inter', 'system-ui', 'sans-serif'],
      //   display: ['Montserrat', 'system-ui', 'sans-serif'],
      //   mono: ['JetBrains Mono', 'monospace'],
      // },
      fontFamily: {
  sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
  display: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
  mono: ['var(--font-jetbrains)', 'monospace'],
},
      spacing: {
        section: 'clamp(5rem, 10vw, 9rem)',
        gutter: 'clamp(1.5rem, 4vw, 3rem)',
      },
      fontSize: {
        'display-1': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.04em', fontWeight: '800' }],
        'display-2': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '700' }],
        'heading': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'eyebrow': ['0.75rem', { lineHeight: '1', letterSpacing: '0.2em', fontWeight: '600' }],
      },
      borderRadius: {
        'none': '0px',
        'sharp': '2px',
        'soft': '4px',
      },
      boxShadow: {
        'elevate-1': '0 1px 2px rgba(11,11,12,0.04), 0 1px 3px rgba(11,11,12,0.06)',
        'elevate-2': '0 4px 12px rgba(11,11,12,0.06), 0 2px 4px rgba(11,11,12,0.04)',
        'elevate-3': '0 12px 32px rgba(11,11,12,0.08), 0 4px 8px rgba(11,11,12,0.04)',
        'glow-accent': '0 0 24px rgba(0,71,255,0.25)',
      },
      transitionTimingFunction: {
        'precise': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      maxWidth: {
        'content': '1280px',
        'wide': '1440px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-in': 'slideIn 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
