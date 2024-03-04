import { defineStore } from "pinia";
import axios from "axios";

export const useForgetPasswordStore = defineStore("forgetpassword", {
  state: () => ({
    email: "",
    newPassword: "",
    confirmPassword: "",
    token: "",
    error: null, // Simpan informasi kesalahan
  }),
  persist: true,
  actions: {
    async resetPassword(resetData) {
      try {
        const response = await axios.post("/api/forgot-password",
          {
            email: resetData.email,
          },
        );

        console.log(response);
        console.log("Reset password request successful");

      } catch (error) {
        console.error("Error occurred while resetting password:", error);
        const errorMessage = error.response
          ? error.response.data.message
          : "Unknown error occurred";
        this.$patch({ error: errorMessage });
        throw error; // Rethrow the error if necessary
      }
    },

    async setNewPassword(newPasswordData) {
      try {
        const response = await axios.put(
          "/api/reset-password",
          {
            newPassword: newPasswordData.newPassword,
            confirmPassword: newPasswordData.confirmPassword,
            token: newPasswordData.token
          }
        );

        console.log(response);
        console.log("New password set successfully");

      } catch (error) {
        console.error("Error occurred while setting new password:", error);
        const errorMessage = error.response
          ? error.response.data.message
          : "Unknown error occurred";
        this.$patch({ error: errorMessage });
        throw error; // Rethrow the error if necessary
      }
    },
  },
});
