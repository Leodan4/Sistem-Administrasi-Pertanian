// Script untuk Pinia Store
import { defineStore } from "pinia";
import axios from "axios";

export const useFormKurirStore = defineStore("form_guru", {
  state: () => ({
    daftarGuru: [],
    daftarSiswa: [],
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
    async fetchDataSiswa(daftarSiswa) {
        try {
          const response = await axios.get('/siswa/get');
          // Simpan data siswa ke dalam state daftarSiswa
          this.daftarSiswa = response.data;
        } catch (error) {
          console.error('Failed to fetch data guru:', error);
          throw error;
        }
      },
  },
});
