<template>
    <div class="bg-[#0E9F6E] w-full h-min fixed top-0">
        <div class="py-6 grid px-32 text-white text-3xl font-bold">
            <img src="/public/logo.png" alt="" class="w-36">
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