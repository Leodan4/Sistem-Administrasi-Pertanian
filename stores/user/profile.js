import { defineStore } from "pinia";
import axios from "../plugins/axios";

const $axios = axios().provide.axios;

export const useUserStore = defineStore("userStore", {
    state: () => ({
        user: null, // State untuk menyimpan data pengguna
        loading: false, // State untuk mengindikasikan status loading
        error: null, // State untuk menyimpan error jika ada
    }),
    actions: {
        async getData() {
        this.loading = true;
        this.error = null;

        // Ambil id_users dari localStorage
        const idUsers = localStorage.getItem("id_users");

        // Periksa apakah id_users ada di localStorage
        if (!idUsers) {
            this.error = "ID pengguna tidak ditemukan di localStorage";
            this.loading = false;
            return;
        }

        try {
            const response = await $axios.get(
            `/user/${idUsers}`
            );
            this.user = response.data; // Menyimpan data pengguna ke state
        } catch (err) {
            this.error = err.message || "Terjadi kesalahan saat mengambil data";
        } finally {
            this.loading = false;
        }
        },
    },
});
