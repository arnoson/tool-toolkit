import vue from '@vitejs/plugin-vue'
import vueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vueRouter({ routesFolder: ['src/components'], extensions: ['.story.vue'] }),
    vue(),
    svgLoader(),
  ],
})
