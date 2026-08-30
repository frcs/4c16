import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // On Vercel, deploy to root '/'; on GitHub Pages, deploy to subpath '/4c16/'
  base: process.env.VERCEL ? '/' : (process.env.VITE_BASE_PATH || '/4c16/'),
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})