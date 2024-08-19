<template>
    <div class="bg-[#0E9F6E] w-full h-min fixed top-0">
        <div class="flex justify-between items-center py-4 px-32 text-white text-2xl font-bold w-full">
            <!-- Ikon Kembali di Kiri -->
            <button @click="goBack" class="w-8 focus:outline-none">
                <img src="/public/panah_kiri.png" alt="Back" class="w-8">
            </button>

            <!-- Logo di Tengah -->
            <div class="flex-grow flex justify-center">
                <img src="/public/logo.png" alt="Logo" class="w-20"> <!-- Menyesuaikan ukuran logo -->
            </div>

            <!-- Ikon WhatsApp di Kanan -->
            <a href="https://wa.me/nomor_telepon" target="_blank">
                <img src="/public/whatsapp.png" alt="WhatsApp" class="w-6">
            </a>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
    router.push('/user/dashboard'); // Ganti '/user/dashboard' dengan rute dashboard kamu
};
</script>
