import { defineStore } from "pinia";
import axios from "../plugins/axios";

const $axios = axios().provide.axios;

export const useGeneralStore = defineStore("general", {
  state: () => ({
    name: "",
    data: null,
  }),
  persist: true,
  actions: {
    Hello(name) {
      this.name = name;
      return "Hello" + this.name;
    },

    async getApiPokemon(type) {
      let res = await $axios.get(`/`);
      this.data = res;
    },
  },
});
