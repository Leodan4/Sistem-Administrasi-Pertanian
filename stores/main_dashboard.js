import { defineStore } from "pinia";
import axios from "../plugins/axios";

const $axios = axios().provide.axios;

export const useMainDashboard = defineStore("main_dashboard", {
  state: () => ({
    dashboard: {
      labels: ["Tamu Umum", "Layanan Kirim"],
      dataPie: [0, 0],
      dataLine: [
        {
          name: "Layanan Kirim",
          data: [0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: "Tamu Umum",
          data: [0, 0, 0, 0, 0, 0, 0],
        },
      ],
      data: null,
      isLoadingLine: true,
      isLoadingPie: true,
    },
  }),
  persist: false,
  actions: {
    async getAllDashboard() {
      this.data = null;
      return new Promise(async (resolve, reject) => {
        const res = await $axios
          .get("/dashboard/get")
          .then((response) => {
            this.dashboard.data = response.data.data.totalVisitors;
            resolve(response);
            return response;
          })
          .catch((error) => {
            console.log("ini error");
            reject(error);
          });
      });
    },
    async getAllStatistik(week = 1, chartType) {
      const params = {
        week,
        chartType,
      };
      return new Promise(async (resolve, reject) => {
        const res = await $axios
          .get("/tamu/dashboard", { params })
          .then((response) => {
            if (chartType === "pie") {
              this.dashboard.labels = response.data.data.chartData.labels;
              this.dashboard.dataPie = response.data.data.chartData.data;
              this.dashboard.isLoadingPie = false;
            } else {
              this.dashboard.dataLine = response.data.data.chartData;
              this.dashboard.isLoadingLine = false;
            }
            resolve(response);
            return response;
          })
          .catch((error) => {
            console.log("ini error");
            this.dashboard.isLoadingPie = false;
            this.dashboard.isLoadingLine = false;
            reject(error);
          });
      });
    },
  },
});
