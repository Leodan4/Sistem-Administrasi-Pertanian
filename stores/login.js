import { defineStore } from "pinia";
import axios from "../plugins/axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const $axios = axios().provide.axios;

export const useLoginStore = defineStore("login", {
  state: () => ({
    username: "",
    password: "",
    token: localStorage.getItem("token") || "",
    id_users: localStorage.getItem("id_users") || "",
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
          const { token, id_users, username, docs, formhasil, Form } = response.data.data;

          localStorage.setItem("token", token);
          localStorage.setItem("username", username);
          localStorage.setItem("id_users", id_users);
          localStorage.setItem("docs", docs === "User Do Not Access" ? false : true);
          localStorage.setItem("formhasil", formhasil === "User Do Not Access" ? false : true);
          localStorage.setItem("Form", Form === "User Do Not Access" ? false : true);


          this.$patch({ 
            token: token, 
            id_users: id_users,
            username: username,
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
          : error.message;
        this.$patch({ error: errorMessage });
        toast.error(errorMessage, {
          autoClose: 2000,
        })
        throw error;
      }
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("id_users");
      this.$patch({ token: "", username: "", password: "", error: null });
      // Optionally, redirect to the login page
      window.location.href = "/login";
      console.log("User logged out successfully");
    }
  },
});
