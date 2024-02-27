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
    async logout() {
      localStorage.removeItem("token");
    },
    async editProfile(payload, type) {
      console.log(payload, type);

      if (type === 1) {
        delete payload.password;
      }

      if (type === 2) {
        for (const key in payload) {
          if (key !== "password") {
            delete payload[key];
          }
        }
      }

      const formData = new FormData();
      for (const key in payload) {
        formData.append(key, payload[key]);
      }

      const res = await $axios.put("/api/edit_profile", formData);
      console.log(res);
    },
  },
});
