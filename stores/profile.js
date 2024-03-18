import { defineStore } from "pinia";
import axios from "../plugins/axios";

const $axios = axios().provide.axios;

export const useProfileStore = defineStore("profile", {
  state: () => ({
    data: null,
    IsSave: false,
  }),
  persist: true,
  actions: {
    async getUserLogin() {
      const res = await $axios.get("/api/profile");
      this.data = res.data;
      this.IsSave = true;
    },
    async logout() {
      this.data = null;
      this.IsSave = false;
      localStorage.removeItem("token");
    },
    async editProfile(payload, type) {
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
      if (res.status === 200) {
        this.IsSave = false;
      }
    },
  },
});
