import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Ensures it binds to all network interfaces
    port: process.env.PORT || 5173, // Uses Render's assigned port or defaults to 5173
  }
})

