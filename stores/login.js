import { defineStore } from "pinia";
import axios from "~/plugins/axios";

const $axios = axios().provide.axios;

export const useLoginStore = defineStore("login", {
    state: () => ({
        email: "",
        password: "",
    }),
    persist: true,
    actions: {
        async loginUser() {
            try {
                const response = await $axios.post("/login", {
                    email: this.email,
                    password: this.password
                });

                // Lakukan sesuatu dengan respons dari panggilan API jika diperlukan
                console.log("Succes to login", response.data);

                // Contoh: Simpan token atau informasi pengguna setelah login berhasil
                this.$patch({ token: response.data.token });
            } catch (error) {
                // Tangani kesalahan jika panggilan API gagal
                console.error("Invalid to login", error);
                throw error; // Meneruskan kesalahan ke pemanggil fungsi jika perlu
            }
        }
    }
});
