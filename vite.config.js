import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /*server: {
    proxy: {
      "/api": {
        target: " https://5323-85-143-112-242.ngrok-free.app",
        changeOrigin: true,
        secure: false,
      },
    }, 
  },*/
  
})
