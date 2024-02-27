import { defineStore } from "pinia";
import axios from "../plugins/axios";

const $axios = axios().provide.axios;

export const useProfileStore = defineStore("profile", {
  state: () => ({
    data: null,
  }),
  persist: true,
  actions: {
    async getUserLogin() {
      const res = await $axios.get("/api/profile");
      this.data = res.data;
    },
    // async editProfile(payload) {
    //   const post = await $axios.post("/api/edit_profile", )
    // }
  },
});
