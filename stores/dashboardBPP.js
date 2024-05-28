import { defineStore } from "pinia";
import axios from "../plugins/axios";

const $axios = axios().provide.axios;

export const useDashboardBPPStore = defineStore("dashboardBPP", {
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
    formatDate(date) {
      const d = new Date(date),
        month = (d.getMonth() + 1).toString().padStart(2, "0"),
        day = d.getDate().toString().padStart(2, "0"),
        year = d.getFullYear();

      return `${year}-${month}-${day}`;
    },
    async getAllDocuments(page = 1, perPage = 5, search = null, date = this.formatDate(new Date())) {
      const params = {
        page,
        limit: perPage,
        search,
        startDate: date,
      };
      this.data = null;
      return new Promise(async (resolve, reject) => {
        try {
          const response = await $axios.get("/doc/", { params });
          this.data = response.data.data;
          this.pagination = response.data.pagination;
          const { currentPage, totalPages } = this.pagination;
          this.pagination.hasNext = currentPage < totalPages;
          this.pagination.hasPrev = currentPage > 1;
          resolve(response);
        } catch (error) {
          console.error("Error fetching data:", error);
          reject(error);
        }
      });
    },
  },
});
