import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{port:7000,
    proxy:{
      '/admin':{
        target:'http://localhost:5000',
        changeOrigin:true
      }
    }
    
 }
})
