import { defineStore } from "pinia";
import axios from "../plugins/axios";

const $axios = axios().provide.axios;

export const useDashboardDinasStore = defineStore("dashboardDinas", {
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
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
    async getAllSiswa(
      page = 1,
      perPage = 5,
      search = null,
      date = this.formatDate(new Date())
    ) {
      const params = {
        page,
        limit: perPage,
        search,
        startDate: date,
      };
      this.data = null;
      return new Promise(async (resolve, reject) => {
        const res = await $axios
          .get("/transaksi_siswa/get", { params })
          .then((response) => {
            this.data = response.data.data;
            this.pagination = response.data.pagination;
            const { currentPage, totalPages } = this.pagination;
            this.pagination.hasNext = currentPage < totalPages;
            this.pagination.hasPrev = currentPage > 1;
            resolve(response);
            return response;
          })
          .catch((error) => {
            console.log("ini error");
            reject(error);
          });
      });
    },
  },
});
