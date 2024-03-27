// Script untuk Pinia Store
import { defineStore } from "pinia";
import axios from "axios";

export const useFormGuruStore = defineStore("form_guru", {
  state: () => ({
    daftarGuru: []
  }),
  actions: {
    async transaksiGuru(formData) {
      try {
        const response = await axios.post("/transaksi_guru/add", formData);
        console.log("Berhasil mengirimkan data", response.data);
        
        if (response.data.success) {
          useNuxtApp().$toast.success(`Berhasil menyimpan data`, {
            autoClose: 2000,
          });
        } else {
          useNuxtApp().$toast.error(`Gagal menyimpan data: ${response.data.message}`, { 
            autoClose: 2000,
          });
        }

      } catch (error) {
        console.error("Gagal melakukan posting data siswa", error);
        throw error;
      }
    },
    async fetchDataGuru(daftarGuru) {
      try {
        const response = await axios.get('/guru/get');
        // Simpan data siswa ke dalam state daftarSiswa
        this.daftarGuru = response.data;
      } catch (error) {
        console.error('Failed to fetch data guru:', error);
        throw error;
      }
    },
  },
});
