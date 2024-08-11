<template>
    <div class="relative">
        <Header></Header>
        <div class="flex min-h-screen min-w-screen bg-[#ffffff]">
            <div class="z-10 mt-[64px] flex-grow overflow-auto sm:ml-[250px]">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from "../components/user/header.vue";


onMounted(async () => {
    initFlowbite();
});
</script>