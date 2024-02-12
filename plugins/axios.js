import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {
  axios.defaults.baseURL = "https://pokeapi.co/api/v2";
  // axios.defaults.withCredentials = true
  return {
    provide: {
      axios: axios,
    },
  };
});
