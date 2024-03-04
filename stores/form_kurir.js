// Script untuk Pinia Store
import { defineStore } from "pinia";
import axios from "axios";

export const useFormKurirStore = defineStore("form_kurir", {
  state: () => ({
    daftarMoklet: [],
  }),
  actions: {
    async transaksiKurir(formData) {
      try {
        const response = await axios.post("/transaksi_kurir/add", formData);
        console.log("Berhasil mengirimkan data", response.data);
       
      } catch (error) {
        console.error("Gagal mengirimkan data", error);
        throw error;
      }
    },
    async fetchDataMoklet(daftarMoklet) {
      try {
        const response = await axios.get('/transaksi_kurir/getMoklet');
        // Simpan data siswa ke dalam state daftarSiswa
        this.daftarMoklet = response.data;
        // console.log(response.data.data.guru)
      } catch (error) {
        console.error('Failed to fetch data guru:', error);
        throw error;
      }
    },

  },
});
