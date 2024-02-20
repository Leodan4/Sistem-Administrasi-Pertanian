import { defineStore } from "pinia";
import axios from "../plugins/axios";

const $axios = axios().provide.axios;

export const useDashboardSiswaStore = defineStore("dashboard_siswa", {
  state: () => ({
    data: null,
  }),
  persist: true,
  actions: {
    async getData(value) {
      this.data = value;
    },
  },
});
