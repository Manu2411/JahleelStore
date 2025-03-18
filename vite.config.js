import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/webpruebas',
  resolve: {
    alias: [
      {
        find: '@components',
        // eslint-disable-next-line no-undef
        replacement: path.resolve(path.join(__dirname, 'src/components')),
      },
      {
        find: '@css',
        // eslint-disable-next-line
        replacement: path.resolve(path.join(__dirname, 'src/assets/css')),
      },
    ],
  },
})
