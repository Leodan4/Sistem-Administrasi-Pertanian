<template>
    <div class="bg-[#0E9F6E] w-full h-min fixed top-0">
        <div class="flex justify-between items-center py-4 px-32 text-white text-2xl font-bold w-full">
            <!-- Ikon User di Kiri dengan Dropdown -->
            <div class="relative">
                <button @click="toggleDropdown" class="w-8 focus:outline-none">
                    <img src="/public/user-circle.png" alt="User" class="w-8">
                </button>
                <div v-if="dropdownOpen" class="absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 text-sm">
                    <a href="/user/profile" class="block px-4 py-2 text-gray-800 hover:bg-green-500 hover:text-white">Profile</a>
                    <button @click="handleLogout" class="block w-full text-left px-4 py-2 text-gray-800 hover:bg-green-500 hover:text-white">
                        Logout
                    </button>
                </div>
            </div>

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
import { ref } from 'vue';
import { useLoginStore } from "@/stores/login";

const loginStore = useLoginStore();
const dropdownOpen = ref(false);

const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
};

const handleLogout = () => {
    loginStore.logout();
};
</script>
