import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import * as path from 'path'
import { ManifestOptions, VitePWA } from 'vite-plugin-pwa'

const manifest: Partial<ManifestOptions> = {
  theme_color: '#468fe5',
  background_color: '#fafafa',
  icons: [
    {
      purpose: 'maskable',
      sizes: '512x512',
      src: '/pwa/app-icons/icon512_maskable.png',
      type: 'image/png',
    },
    {
      purpose: 'any',
      sizes: '512x512',
      src: '/pwa/app-icons/icon512_rounded.png',
      type: 'image/png',
    },
  ],
  screenshots: [
    {
      src: '/pwa/screenshots/desktop.png',
      type: 'image/png',
      sizes: '862x485',
      form_factor: 'wide',
    },
    {
      src: '/pwa/screenshots/mobile.png',
      type: 'image/png',
      sizes: '696x383',
      form_factor: 'narrow',
    },
  ],
  orientation: 'any',
  display: 'standalone',
  lang: 'ru',
  start_url: 'https://it-quiz-git-dev-technosamurais-projects.vercel.app/',
  name: 'it-quiz',
  short_name: 'it-quiz',
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: { globPatterns: ['**/*.{js,css,html,ico,png,svg}'] },
      manifest,
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    open: true,
    port: 3000,
  },
  build: {
    rollupOptions: {
      external: ['workbox-window'],
    },
  },
})
