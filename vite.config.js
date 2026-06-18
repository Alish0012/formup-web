import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// React ve Tailwind'i Vite'a tanıtıyoruz
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})