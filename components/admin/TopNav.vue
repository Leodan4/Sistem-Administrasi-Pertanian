<template>
  <div class="bg-[#0E9F6E] w-full h-min fixed z-20 top-0">
    <div class="relative flex justify-between items-center py-4 md:px-72 px-4 text-white text-2xl md:text-3xl font-bold">
      <!-- Judul Halaman -->
      <div class="flex-grow text-center md:text-left">
        <h1 class="block md:hidden">SIBP</h1> <!-- Teks singkat untuk tampilan kecil -->
        <h1 class="hidden md:block">Sistem Informasi Bantuan Pertanian</h1> <!-- Teks lengkap untuk tampilan besar -->
        <!-- Jika ingin menampilkan tanggal, bisa uncomment kode berikut -->
        <!-- <p>{{ formattedDate }}</p> -->
      </div>

      <!-- Tombol WhatsApp di Sisi Kanan -->
      <a href="https://wa.me/nomor_telepon" target="_blank" class="ml-auto md:ml-0 md:absolute md:right-0 md:mr-8">
        <img src="/public/whatsapp.png" alt="WhatsApp" class="w-6 md:w-8">
      </a>
    </div>
  </div>
</template>

<script setup>
const currentDate = new Date();

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const formatter = new Intl.DateTimeFormat("id-ID", options);

const formattedDate = formatter.format(currentDate);
</script>
