<template>
  <div class="h-screen w-screen bg-[#F6F7FF] relative">
    <TopNav></TopNav>
    <div class="flex w-full h-full">
      <SideNav />
      <div class="z-10 mt-[64px] flex-grow overflow-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import TopNav from "../components/admin/TopNav.vue";
import SideNav from "../components/admin/SideNav.vue";
const route = useRoute();
</script>
