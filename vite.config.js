import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Базовый путь для GitHub Pages (замените 'FrontAndBack_work' на имя вашего репозитория)
  base: process.env.VITE_BASE || '/',
})

