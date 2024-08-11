import { defineStore } from "pinia";
import axios from "../plugins/axios";

const $axios = axios().provide.axios;

export const useDashboardDinasStore = defineStore("dashboardDinas", {
  state: () => ({
    data: null,
    pagination: {
      currentPage: 1,
      totalItems: 0,
      totalPages: 1,
      hasNext: false,
      hasPrev: false,
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
    async getAllDocuments(page = 1, perPage = 10, search = null, date = this.formatDate(new Date())) {
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

          // Check if pagination exists in the response
          if (response.data.pagination) {
            this.pagination.currentPage = response.data.pagination.currentPage || 1;
            this.pagination.totalItems = response.data.pagination.totalItems || 0;
            this.pagination.totalPages = response.data.pagination.totalPages || 1;
            this.pagination.hasNext = this.pagination.currentPage < this.pagination.totalPages;
            this.pagination.hasPrev = this.pagination.currentPage > 1;
          } else {
            // Handle the case where pagination is not provided
            this.pagination.currentPage = 1;
            this.pagination.totalItems = 0;
            this.pagination.totalPages = 1;
            this.pagination.hasNext = false;
            this.pagination.hasPrev = false;
          }
          resolve(response);
        } catch (error) {
          console.error("Error fetching data:", error);
          reject(error);
        }
      });
    },
  },
});
