import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'img/*',
          dest: 'img' // копирует файлы прямо в dist/
        }
      ]
    })
  ],
  base: '/Fookie_instructions/', // если ты деплоишь на GitHub Pages
})
