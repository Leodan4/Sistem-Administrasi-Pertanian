<template>
  <div class="bg-[#0E9F6E] w-full h-min fixed z-20 top-0">
    <div class="relative flex justify-between items-center py-4 px-72 text-white text-3xl font-bold">
      <!-- Judul Halaman -->
      <div class="flex-grow">
        <h1>Daftar Proposal Baru</h1>
        <!-- Jika ingin menampilkan tanggal, bisa uncomment kode berikut -->
        <!-- <p>{{ formattedDate }}</p> -->
      </div>

      <!-- Tombol WhatsApp di Sisi Kanan -->
      <a href="https://wa.me/nomor_telepon" target="_blank" class="absolute right-0 mr-8">
        <img src="/public/whatsapp.png" alt="WhatsApp" class="w-8">
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
