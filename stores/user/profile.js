import { defineStore } from "pinia";
import axios from "../plugins/axios";

const $axios = axios().provide.axios;

export const useUserStore = defineStore("userStore", {
    state: () => ({
        user: null, 
        loading: false, 
        error: null, 
    }),
    actions: {
        async getData() {   
        this.loading = true;
        this.error = null;

        const idUsers = localStorage.getItem("id_users");

            if (!idUsers) {
                this.error = "ID pengguna tidak ditemukan di localStorage";
                this.loading = false;
                return;
            }

            try {
                const response = await $axios.get(
                `/user/?id_users=${idUsers}`
                );
                this.user = response.data;
            } catch (err) {
                this.error = err.message || "Terjadi kesalahan saat mengambil data";
            } finally {
                this.loading = false;
            }
        },
    },
});
