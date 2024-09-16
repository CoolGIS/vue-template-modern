import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { analyzer } from 'vite-bundle-analyzer'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue(), vueDevTools({ launchEditor: 'webstorm' }), analyzer({ analyzerMode: 'static' })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@styled': fileURLToPath(new URL('./styled-system', import.meta.url))
    }
  }
})