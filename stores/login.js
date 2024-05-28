import { defineStore } from "pinia";
import axios from "../plugins/axios";

const $axios = axios().provide.axios;

export const useLoginStore = defineStore("login", {
  state: () => ({
    username: "",
    password: "",
    token: localStorage.getItem("token") || "",
    error: null,
  }),
  persist: true,
  actions: {
    async loginUser(loginData) {
      try {
        const response = await $axios.post(
          "/user/login",
          {
            username: loginData.username,
            password: loginData.password,
          }
        );

        if (response && response.data && response.data.data && response.data.data.token) {
          const token = response.data.data.token;
          localStorage.setItem("token", token);
          this.$patch({ token: token, error: null });
          return response.data;
        } else {
          console.error("Respon tidak valid dari server");
          this.$patch({ error: "Respon tidak valid dari server" });
          throw new Error("Respon tidak valid dari server");
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat login:", error);
        const errorMessage = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "Kesalahan tidak diketahui";
        this.$patch({ error: errorMessage });
        throw error;
      }
    },
  },
});
