// script: upload_dokumen.js
import { defineStore } from "pinia";
import axios from "../plugins/axios";

const $axios = axios().provide.axios;

export const useUploadDokumen = defineStore("form", {
    state: () => ({
        formData: new FormData(), 
        responseMessage: "",
        error: null,
    }),
    actions: {
        async submitForm() {
            try {
                // Submit the form data to the server
                const response = await $axios.post("/doc/addDoc", this.formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                if (response && response.data) {
                    // Update state if the submission is successful
                    this.$patch({
                        responseMessage: "Form submitted successfully!",
                        error: null,
                    });
                    return response.data;
                } else {
                    console.error("Invalid response from server");
                    this.$patch({ error: "Invalid response from server" });
                    throw new Error("Invalid response from server");
                }
            } catch (error) {
                console.error("Error occurred while submitting the form:", error);
                const errorMessage =
                    error.response && error.response.data && error.response.data.message
                        ? error.response.data.message
                        : "Unknown error occurred";
                this.$patch({ error: errorMessage });
                throw error;
            }
        },
    },
});
