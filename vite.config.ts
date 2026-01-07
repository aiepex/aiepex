import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    Sitemap({
      hostname: 'https://aiepex.com', // Change this to your actual domain
      dynamicRoutes: [
        '/',
        '/about',
        '/blog',
        '/contact',
        '/portfolio',
        '/services'
      ],
      // This ensures the sitemap is placed in your dist folder correctly
      outDir: 'dist',
    }),
  ],
})