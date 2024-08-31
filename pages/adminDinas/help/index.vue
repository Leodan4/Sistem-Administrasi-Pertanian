<template>
  <MainLayoutDinas>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <div class="text-center text-gray-800">
        <h1 class="text-4xl font-bold mb-4">Selamat Datang di Sistem Informasi Bantuan Pertanian</h1>
        <p class="text-lg">Ini adalah halaman bantuan.</p>
      </div>
    </div>
  </MainLayoutDinas>
</template>

<script setup>
import { useRouter } from 'vue-router'; 
import MainLayoutDinas from '~/layouts/MainLayoutDinas.vue';

const router = useRouter(); // Initialize router
</script>

<style scoped>
/* Anda bisa menambahkan styling tambahan di sini jika diperlukan */
</style>
