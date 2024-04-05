// import vuetify from "vite-plugin-vuetify";
export default defineNuxtConfig({
  // modules: ['@nuxtjs/tailwindcss', '@nuxtjs/axios'],
  modules: ['@nuxtjs/tailwindcss', '@element-plus/nuxt',
    // (_options, nuxt) => {
    //   nuxt.hooks.hook('vite:extendConfig', (config) => {
    //     // @ts-expect-error
    //     config.plugins.push(vuetify({ autoImport: true }))
    //   })
    // }
  ],
  css: [
    '@/assets/css/unit.css'
  ],
  ssr: false,
  typescript: {
    shim: false,
  },
  app: {
    head: {
      title:
        "MaterialPro Free Nuxt 3 Dashboard",
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  nitro: {
    static: true,
    // serveStatic: true,
    // routeRules: {
    //   '/api': { proxy: 'http://localhost:8001/' },

    // },
    devProxy: {
      "/api": {
        // target: "http://localhost:8001/api", // 这里是接口地址
        target: "http://198.13.60.170:8001/api", // 这里是接口地址
        // target: "http://108.160.140.213:8001/api", // 这里是接口地址
        changeOrigin: true,
      },
    },

    // devProxy: {
    //   '/api': {
    //     target: 'http://localhost:8001/',
    //     changeOrigin: true
    //   }
    // }
  },
  sourcemap: { server: false, client: false }
});
