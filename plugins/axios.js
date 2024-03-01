import axios from "axios";
import { useGeneralStore } from "~/stores/general";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  axios.defaults.baseURL = process.env.API_BASE;

  axios.CancelToken;
  axios.isCancel;
  // axios.defaults.withCredentials = true4
  axios.interceptors.request.use(
    (config) => {
      useGeneralStore().setError(null, null);
      useGeneralStore().setIsLoadling(true);
      let token = localStorage.getItem("token");

      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      return config;
    },

    (error) => {
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    (response) => {
      useGeneralStore().setIsLoadling(false);
      return response;
    },
    function (err) {
      return new Promise(function () {
        useGeneralStore().setIsLoadling(false);
        if (err.response.status === 401 || err.response.status === 500) {
          localStorage.removeItem("token");
        }
        useGeneralStore().setError(
          err.response.status,
          err.response.data.message
        );
        if (err && err.config.method !== "get") {
          toast.error(err.response.data.message, {
            autoClose: 2000,
          });
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
