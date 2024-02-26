import { defineStore } from "pinia";
import axios from "../plugins/axios";

const $axios = axios().provide.axios;

export const useDashboardSiswaStore = defineStore("dashboard_siswa", {
  state: () => ({
    data: null,
    pagination: {
      currentPage: null,
      totalItems: null,
      totalPages: null,
      hasNext: null,
      hasPrev: null,
    },
  }),
  persist: true,
  actions: {
    async getAllSiswa(page = 1, perPage = 5, search = null, date = null) {
      const params = {
        page,
        per_page: perPage,
        search,
        date,
      };
      const res = await $axios.get("/transaksi_siswa/get", { params });
      this.pagination = res.data.pagination;
      const { currentPage, totalPages } = this.pagination;
      this.pagination.hasNext = currentPage < totalPages;
      this.pagination.hasPrev = currentPage > 1;
      this.data = res.data.data;
    },
  },
});
