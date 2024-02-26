import { defineStore } from "pinia";
import axios from "axios";

export const useForm_SiswaStore = defineStore("form_siswa", {
  state: () => ({
    // Tambahkan properti state yang sesuai dengan kriteria validasi server
    nama_tamu: "",
    no_tlp: "",
    id_siswa: "",
    janji: "",
    jumlah_tamu: 0, // Menggunakan angka untuk jumlah tamu
    status: "",
    foto: null,
  }),
  persist: true,
  actions: {
    async transaksiSiswa(formData) {
      try {
        const response = await axios.post("/transaksi_siswa/add", formData);

        // Lakukan sesuatu dengan respons dari panggilan API jika diperlukan
        console.log("Berhasil melakukan posting data siswa", response.data);

        // Contoh: Simpan token atau informasi pengguna setelah login berhasil
        // this.$patch({ token: response.data.token }); // Asumsi terdapat token dalam respons
      } catch (error) {
        // Tangani kesalahan jika panggilan API gagal
        console.error("Gagal melakukan posting data siswa", error);
        throw error; // Meneruskan kesalahan ke pemanggil fungsi jika perlu
      }
    },
  },
});
