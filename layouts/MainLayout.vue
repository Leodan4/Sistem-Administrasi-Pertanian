<template>
  <div class="h-screen bg-[#F6F7FF] relative">
    <TopNav></TopNav>
    <div class="flex">
      <SideNav />
      <div class="z-10 mt-[64px] flex-grow">
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
