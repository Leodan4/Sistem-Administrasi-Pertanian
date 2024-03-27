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
