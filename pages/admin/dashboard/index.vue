<!-- components/LiveClock.vue -->
<template>
  <MainLayout>
    <div class="w-full mt-20 text-white px-8">
      <div
        class="bg-[#E4262C] rounded-xl h-[90px] px-6 flex py-4 justify-between relative w-full"
      >
        <div class="flex flex-col justify-between">
          <h4 class="md:text-xl text-sm tracking-normal md:tracking-wide">
            Selamat Datang Di Website Buku Tamu!
          </h4>
          <p class="text-sm tracking-wide">Halo, Sugeng!</p>
        </div>
        <div class="md:block hidden">
          <NuxtImg
            class="absolute bottom-0 right-6 h-[130px]"
            src="/dashboard/welcome_dashboard.svg"
          />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
</script>
