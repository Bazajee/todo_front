import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    port: 5175,
    open: true,
    proxy: {
       '^/api/.*': {
          target: 'http://localhost:7890/',
          ws: true,
          secure: false,
          changeOrigin: true,
       },
    }
 },
})
