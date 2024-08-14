<template>
    <div class="bg-[#0E9F6E] w-full h-min fixed top-0">
        <div class="flex justify-between py-6 px-32 text-white text-3xl font-bold">
            <img src="/public/logo.png" alt="" class="w-36">
            <!-- {{ formattedDate }} -->
            <button @click.prevent="handleLogout"
                class="px-4 rounded-lg transition duration-300 hover:text-white hover:bg-green-500">Logout
            </button>
        </div>
    </div>
</template>

<script setup>
import { useLoginStore } from "@/stores/login";

const loginStore = useLoginStore();

const handleLogout = () => {
    loginStore.logout();
};

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