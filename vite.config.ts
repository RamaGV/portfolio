import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows access from any user on the network
    port: 3000, // You can change the port if needed
    open: true, // Automatically open the app in the browser
  },
});