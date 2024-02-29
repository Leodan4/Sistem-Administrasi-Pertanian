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
       
      } catch (error) {
        console.error("Gagal mengirimkan data", error);
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
