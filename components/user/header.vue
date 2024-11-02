<template>
     <div class="bg-[#0E9F6E] w-full md:w-full h-max fixed top-0 right-0">
        <div class="flex justify-between items-center py-4 px-10 md:px-32 text-white text-2xl font-bold w-full md:w-full">
            <div class="relative">
            <button @click="toggleDropdown" class="w-8 focus:outline-none">
                    <img src="/public/user-circle.png" alt="User" class="w-8">
                </button>
                <div v-if="dropdownOpen" class="absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 text-sm">
                    <a href="/user/profile" class="block px-4 py-2 text-gray-800 hover:bg-green-500 hover:text-white">Profile</a>
                    <a href="/user/help" class="block px-4 py-2 text-gray-800 hover:bg-green-500 hover:text-white">Help</a>
                    <button @click="handleLogout" class="block w-full text-left px-4 py-2 text-gray-800 hover:bg-green-500 hover:text-white">
                        Logout
                    </button>
                </div></div>

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
import { ref } from 'vue';
import { useLoginStore } from "~/stores/login";


const router = useRouter();

const goBack = () => {
    router.push('/user/dashboard'); // Ganti '/user/dashboard' dengan rute dashboard kamu
};

const loginStore = useLoginStore();
const dropdownOpen = ref(false);

const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
};

const handleLogout = () => {
    loginStore.logout();
};
</script>
