import { defineStore } from "pinia";
import axios from "../plugins/axios";

const $axios = axios().provide.axios.API_BASE;

export const useAuth = defineStore("auth", {
  state: () => ({
    user_data: null,
    isAuth_data: false,
  }),
  persist: true,
  actions: {
    Hello(name) {
      this.name = name;
      return "Hello" + this.name;
    },

    async getApiPokemon(type) {
      let res = await $axios.get(`/login`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (res.status == 200) {
        this.isAuth_data = true;
        this.user_data = res.data;
        return navigateTo("/dasboard");
      }
      if (res.status == 401) {
        localStorage.removeItem("token");
        this.isAuth_data = false;
        return navigateTo("/login");
      }

      this.data = res;
    },

    logout() {
      return new Promise(async (resolve) => {
        useCookie("counter").value = "";
        useCookie("token").value = "";
        this.isAuth_data = false;
        this.user_data = {};
        this.token_data = "";

        resolve();
      });
    },
    setLoading(isLoading) {
      this.isLoading_data = isLoading;
    },
  },
});




