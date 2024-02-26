import axios from "axios";
import { useGeneralStore } from "~/stores/general";

export default defineNuxtPlugin((nuxtApp) => {
  axios.defaults.baseURL = process.env.API_BASE;

  axios.CancelToken;
  axios.isCancel;
  // axios.defaults.withCredentials = true4
  axios.interceptors.request.use(
    (config) => {
      useGeneralStore().setIsLoadling(true);
      // if (['post', 'put', 'patch', 'delete'].includes(config.method)) {
      //   config.data = { data: { ...encrypt(JSON.parse(JSON.stringify(config.data))) } }
      // }
      return config;
    },

    (error) => {
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    (response) => {
      useGeneralStore().setIsLoadling(false);
      useGeneralStore().setError(null, null);
      return response;
    },
    function (err) {
      return new Promise(function () {
        if (err) {
          console.log("Test 123");
          useGeneralStore().setIsLoadling(false);
          useGeneralStore().setError(
            err.response.status,
            err.response.data.message
          );
        }
      });
    }
  );
  return {
    provide: {
      axios: axios,
    },
  };
});
