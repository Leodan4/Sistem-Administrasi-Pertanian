// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";
export default defineNuxtConfig({
  pages: true,
  devServer: {
    port: 3000, 
    //3140,3000
  },
  ssr: false,
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
  plugins: ["~/plugins/axios.js"],
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt", "@nuxt/image"],
  vite: {
    define: {
      "process.env.API_BASE": JSON.stringify(process.env.NUXT_PUBLIC_API_BASE),
    },
    plugins: [
      svgLoader({
        defaultImport: "url",
      }),
    ],
  },
  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
