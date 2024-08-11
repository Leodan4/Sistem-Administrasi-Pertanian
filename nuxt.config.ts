// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "SIBP",
      link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }],
    },
  },
  pages: true,
  devServer: {
    port: 3000,
  },
  ssr: false,
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_API_BASE,
      imageUrl: process.env.NUXT_PUBLIC_IMAGE,
    },
  },
  plugins: [
    { src: "~/plugins/axios" },
    { src: "~/plugins/stores" },
    { src: "~/plugins/apexchart" },
    { src: "~/plugins/vuedatepicker" },
    // { src: "~/plugins/fontawesome.js"}
  ],
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
