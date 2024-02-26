import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", {
  state: () => ({
    isLoading: false,
    detailData: null,
    error: {
      status: null,
      message: null,
    },
  }),
  persist: true,
  actions: {
    async detail(value) {
      this.detailData = value;
    },

    setIsLoadling(value) {
      this.isLoading = value;
    },
    setError(code, message) {
      this.error = {
        status: code,
        message: message,
      };
    },
  },
});
