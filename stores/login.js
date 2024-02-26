import { defineStore } from "pinia";
import axios from "~/plugins/axios";

const $axios = axios().provide.axios;

export const useLoginStore = defineStore("login", {
  state: () => ({
    email: "",
    password: "",
    token: localStorage.getItem("token") || "", // Simpan token di sini
    error: null, // Simpan informasi kesalahan
  }),
  persist: true,
  actions: {
    async loginUser(loginData) {
      console.log(loginData);
      try {
        const response = await $axios.post(
          "/api/login",
          {
            email: loginData.email,
            password: loginData.password,
          },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        );

        // Asumsikan token dikembalikan dalam respons data
        const token = response.data.token;

        // Periksa apakah token ada
        if (token) {
          // Simpan token ke state dan local storage
          localStorage.setItem("token", token);
          this.$patch({ token: token, error: null });
          console.log("Berhasil login");
        } else {
          // Tangani respons yang tidak valid dari server
          console.error("Respon tidak valid dari server");
          this.$patch({ error: "Respon tidak valid dari server" });
        }
      } catch (error) {
        // Tangani respons error dari server
        console.error("Terjadi kesalahan saat login:", error);
        // Asumsikan error.response.data berisi pesan kesalahan dari server
        const errorMessage = error.response
          ? error.response.data.message
          : "Kesalahan tidak diketahui";
        this.$patch({ error: errorMessage });
        throw error; // Teruskan error
      }
    },
  },
});
