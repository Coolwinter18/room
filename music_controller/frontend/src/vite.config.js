import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Vite configuration file.
 * @module vite.config
 */

// Export the configuration object
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
})
