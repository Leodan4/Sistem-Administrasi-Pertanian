import { defineStore } from "pinia";
import axios from "../plugins/axios";

const $axios = axios().provide.axios;

export const useLoginStore = defineStore("login", {
  state: () => ({
    username: "",
    password: "",
    token: localStorage.getItem("token") || "",
    userID: localStorage.getItem("userID") || "",
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
          const userID = response.data.data.id_users;
          // const userData = response.data.data;

          localStorage.setItem("token", token);
          // localStorage.setItem("userID", userName);
          localStorage.setItem("userID", userID);

          this.$patch({ 
            token: token, 
            // username: userData, 
            // userID: id_user,
            error: null 
          });

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
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userID");
      this.$patch({ token: "", username: "", password: "", error: null });
      // Optionally, redirect to the login page
      window.location.href = "/login";
      console.log("User logged out successfully");
    }
  },
});
