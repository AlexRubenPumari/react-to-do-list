import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://alexrubenpumari.github.io/web-clon-sf-calistenia/react-to-do-list',
})