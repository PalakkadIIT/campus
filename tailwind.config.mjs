/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        campus: {
          ink: '#172033',
          navy: '#e94c26',
          teal: '#f5a51f',
          leaf: '#5d8b42',
          gold: '#d59e2f',
          mist: '#f3f7f9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(23, 32, 51, 0.08)',
      },
    },
  },
  plugins: [],
};
