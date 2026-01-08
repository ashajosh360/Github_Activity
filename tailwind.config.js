/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#14B8A6', // Teal that evokes trust and technical precision - teal-500
        'primary-50': '#F0FDFA', // Very light teal - teal-50
        'primary-100': '#CCFBF1', // Light teal - teal-100
        'primary-200': '#99F6E4', // Light teal - teal-200
        'primary-300': '#5EEAD4', // Medium light teal - teal-300
        'primary-400': '#2DD4BF', // Medium teal - teal-400
        'primary-500': '#14B8A6', // Base teal - teal-500
        'primary-600': '#0D9488', // Dark teal - teal-600
        'primary-700': '#0F766E', // Darker teal - teal-700
        'primary-800': '#115E59', // Very dark teal - teal-800
        'primary-900': '#134E4A', // Darkest teal - teal-900

        // Secondary Colors
        'secondary': '#6366F1', // Indigo for secondary actions - indigo-500
        'secondary-50': '#EEF2FF', // Very light indigo - indigo-50
        'secondary-100': '#E0E7FF', // Light indigo - indigo-100
        'secondary-200': '#C7D2FE', // Light indigo - indigo-200
        'secondary-300': '#A5B4FC', // Medium light indigo - indigo-300
        'secondary-400': '#818CF8', // Medium indigo - indigo-400
        'secondary-500': '#6366F1', // Base indigo - indigo-500
        'secondary-600': '#4F46E5', // Dark indigo - indigo-600
        'secondary-700': '#4338CA', // Darker indigo - indigo-700
        'secondary-800': '#3730A3', // Very dark indigo - indigo-800
        'secondary-900': '#312E81', // Darkest indigo - indigo-900

        // Accent Colors
        'accent': '#F59E0B', // Amber for attention-drawing elements - amber-500
        'accent-50': '#FFFBEB', // Very light amber - amber-50
        'accent-100': '#FEF3C7', // Light amber - amber-100
        'accent-200': '#FDE68A', // Light amber - amber-200
        'accent-300': '#FCD34D', // Medium light amber - amber-300
        'accent-400': '#FBBF24', // Medium amber - amber-400
        'accent-500': '#F59E0B', // Base amber - amber-500
        'accent-600': '#D97706', // Dark amber - amber-600
        'accent-700': '#B45309', // Darker amber - amber-700
        'accent-800': '#92400E', // Very dark amber - amber-800
        'accent-900': '#78350F', // Darkest amber - amber-900

        // Background Colors
        'background': '#0F172A', // Deep slate background - slate-900
        'surface': '#1E293B', // Elevated slate for cards - slate-800
        'surface-light': '#334155', // Lighter surface - slate-700
        'surface-lighter': '#475569', // Even lighter surface - slate-600

        // Text Colors
        'text-primary': '#F8FAFC', // Near-white for primary content - slate-50
        'text-secondary': '#94A3B8', // Muted slate for supporting text - slate-400
        'text-tertiary': '#64748B', // More muted slate - slate-500

        // Status Colors
        'success': '#10B981', // Emerald for positive states - emerald-500
        'success-50': '#ECFDF5', // Very light emerald - emerald-50
        'success-100': '#D1FAE5', // Light emerald - emerald-100
        'success-200': '#A7F3D0', // Light emerald - emerald-200
        'success-300': '#6EE7B7', // Medium light emerald - emerald-300
        'success-400': '#34D399', // Medium emerald - emerald-400
        'success-500': '#10B981', // Base emerald - emerald-500
        'success-600': '#059669', // Dark emerald - emerald-600
        'success-700': '#047857', // Darker emerald - emerald-700
        'success-800': '#065F46', // Very dark emerald - emerald-800
        'success-900': '#064E3B', // Darkest emerald - emerald-900

        'warning': '#F59E0B', // Amber for caution states - amber-500
        'warning-50': '#FFFBEB', // Very light amber - amber-50
        'warning-100': '#FEF3C7', // Light amber - amber-100
        'warning-200': '#FDE68A', // Light amber - amber-200
        'warning-300': '#FCD34D', // Medium light amber - amber-300
        'warning-400': '#FBBF24', // Medium amber - amber-400
        'warning-500': '#F59E0B', // Base amber - amber-500
        'warning-600': '#D97706', // Dark amber - amber-600
        'warning-700': '#B45309', // Darker amber - amber-700
        'warning-800': '#92400E', // Very dark amber - amber-800
        'warning-900': '#78350F', // Darkest amber - amber-900

        'error': '#EF4444', // Red for critical issues - red-500
        'error-50': '#FEF2F2', // Very light red - red-50
        'error-100': '#FEE2E2', // Light red - red-100
        'error-200': '#FECACA', // Light red - red-200
        'error-300': '#FCA5A5', // Medium light red - red-300
        'error-400': '#F87171', // Medium red - red-400
        'error-500': '#EF4444', // Base red - red-500
        'error-600': '#DC2626', // Dark red - red-600
        'error-700': '#B91C1C', // Darker red - red-700
        'error-800': '#991B1B', // Very dark red - red-800
        'error-900': '#7F1D1D', // Darkest red - red-900

        // Border Colors
        'border': 'rgba(148, 163, 184, 0.1)', // Subtle border - slate-400 with opacity
        'border-light': 'rgba(148, 163, 184, 0.05)', // Very subtle border
        'border-medium': 'rgba(148, 163, 184, 0.2)', // Medium border
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'elevated': '0 4px 6px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.32)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '150': '150ms',
        '300': '300ms',
      },
      animation: {
        'pulse-live': 'pulse-live 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-live': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.7',
          },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      zIndex: {
        '100': '100',
        '150': '150',
        '200': '200',
        '300': '300',
      },
    },
  },
  plugins: [],
}