import { defineStore } from "pinia";
import axios from "../plugins/axios";

const $axios = axios().provide.axios;

export const useDashboardDinasStore = defineStore("dashboardBPP", {
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
          console.log("Data fetched:", response.data.data);  // Log the fetched data
          this.data = response.data.data || [];
          if (response.data.pagination) {
            this.pagination = {
              ...response.data.pagination,
              hasNext: response.data.pagination.currentPage < response.data.pagination.totalPages,
              hasPrev: response.data.pagination.currentPage > 1,
            };
          } else {
            // Fallback to default pagination if not present in response
            this.pagination = {
              currentPage: page,
              totalItems: this.data.length,
              totalPages: Math.ceil(this.data.length / perPage),
              hasNext: page < Math.ceil(this.data.length / perPage),
              hasPrev: page > 1,
            };
          }
          resolve(response);
        } catch (error) {
          console.error("Error fetching data:", error);
          reject(error);
        }
      });
    }    
  },
});
