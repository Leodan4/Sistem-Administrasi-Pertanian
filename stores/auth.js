import { defineStore } from "pinia";
import axios from "../plugins/axios";
import { useRouter } from "vue-router";

const $axios = axios().provide.axios.API_BASE;
const router = useRouter();

export const useAuth = defineStore("auth", {
  state: () => ({
    user_data: null,
    isAuth_data: false,
    tokenExpired: false,
  }),
  persist: true,
  actions: {
    async getApiPokemon(type) {
      try {
        let res = await $axios.get(`/user/login`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        if (res.status == 200) {
          this.isAuth_data = true;
          this.user_data = res.data;
          return router.push("/adminBPP/dashboard");
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Handle token expiration
          this.tokenExpired = true;
          // Perform logout or redirect to login page
          await this.logout(); // Assuming logout clears token and resets authentication state
          // Redirect to login page
          return router.push("/login");
        }
        throw error;
      }
    },

    logout() {
      return new Promise((resolve) => {
        localStorage.removeItem("token");
        this.isAuth_data = false;
        this.user_data = {};
        this.tokenExpired = false;
        resolve();
      });
    },
  },
});
