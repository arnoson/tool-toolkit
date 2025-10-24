import vue from '@vitejs/plugin-vue'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import vueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import svgLoader from 'vite-svg-loader'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      name: 'tool-toolkit',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue', 'reka-ui'],
    },
  },
  plugins: [
    vueRouter({ routesFolder: ['src/components'], extensions: ['.story.vue'] }),
    vue(),
    svgLoader(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      exclude: ['src/App.vue', 'src/main.ts'],
    }),
  ],
})
