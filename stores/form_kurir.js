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
    async fetchDataMoklet() {
      try {
        const response = await axios.get('/transaksi_kurir/getMoklet');
        // Manipulasi data Moklet di sini
        console.log(response.data.data.data)
        const manipulatedData = response.data.data.data.map(item => {
          return {
            id_moklet: item.id_siswa || item.id_guru, // Sesuaikan dengan logika Anda
            nama_moklet: item.nama_siswa || item.nama_guru // Contoh, sesuaikan dengan data yang Anda miliki
          };
        });
        // Simpan data Moklet yang sudah dimanipulasi ke dalam state daftarMoklet
        this.daftarMoklet = manipulatedData;
        console.log(manipulatedData);
      } catch (error) {
        console.error('Failed to fetch data Moklet', error);
        throw error;
      }
    },
  },
});