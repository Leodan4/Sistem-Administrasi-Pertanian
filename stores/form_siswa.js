// Script untuk Pinia Store
import { defineStore } from "pinia";
import axios from "axios";

export const useFormSiswaStore = defineStore("form_siswa", {
  state: () => ({
    daftarSiswa: [] // Menyimpan daftar siswa
  }),
  actions: {
    async transaksiSiswa(formData) {
      try {
        const response = await axios.post("/transaksi_siswa/add", formData);
        console.log("Berhasil melakukan posting data siswa", response.data);
        // Lakukan sesuatu dengan respons dari panggilan API jika diperlukan
      } catch (error) {
        console.error("Gagal melakukan posting data siswa", error);
        throw error;
      }
    },
    async fetchDataSiswa(daftarSiswa) {
      try {
        const response = await axios.get('/siswa/get');
        // Simpan data siswa ke dalam state daftarSiswa
        this.daftarSiswa = response.data;
      } catch (error) {
        console.error('Failed to fetch data siswa:', error);
        throw error;
      }
    },
  },
});
