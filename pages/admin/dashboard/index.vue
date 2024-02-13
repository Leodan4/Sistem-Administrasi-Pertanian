<!-- components/LiveClock.vue -->
<template>
  <MainLayout>
    <div class="w-full mt-20 text-white px-10">
      <div
        class="bg-[#E4262C] rounded-xl h-[88px] px-6 flex justify-between relative"
      >
        <div class="flex flex-col py-4 justify-between">
          <h4 class="text-xl tracking-wide">
            Selamat Datang Di Website Buku Tamu!
          </h4>
          <p class="text-sm tracking-wide">Halo, Sugeng!</p>
        </div>
        <div class="bg-black relative bottom-0">
          <NuxtImg class="" src="/dashboard/welcome_dashboard.svg" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
</script>
