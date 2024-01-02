import { loadEnv } from 'vite';
const envName = process.env.npm_lifecycle_script?.match(/--mode\s(.*)/)?.[1] || '';
const envData = loadEnv(envName, process.cwd()) // 获取.env文件中的配置
Object.assign(process.env, envData); // 将环境配置信息，添加到process.env

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    // seo
    head: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "demo",
      meta: [{ name: "description", content: "demo" }],
    },
  },
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  runtimeConfig: {
    public: {
      apiBase: '/api',
    }
  },
})
