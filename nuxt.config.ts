// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  ssr: false,
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  vite: {
    define: {
      "process.env.NUXT_API_ENDPOINT_BASE_URL": JSON.stringify(
        process.env.NUXT_API_ENDPOINT_BASE_URL
      ),
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
