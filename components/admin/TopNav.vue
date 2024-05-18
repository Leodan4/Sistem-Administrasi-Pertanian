<template>
  <div class="bg-[#0E9F6E] w-full h-min fixed z-20 top-0">
    <div class="py-4 grid px-72 text-white text-3xl font-bold">
      <h1>Daftar Proposal Baru</h1>
      <!-- {{ formattedDate }} -->
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
