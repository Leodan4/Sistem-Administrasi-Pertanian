<!-- File: MenuItem.vue -->

<template>
  <div class="px-4">
    <div
      :class="
        route.fullPath === navigate || route.path.includes(navigate)
          ? 'bg-[#E4262C] fill-white text-white'
          : ''
      "
      @click="router.push(navigate)"
      class="items-center justify-normal cursor-pointer transition-colors duration-200 inline-flex ease-in-out min-w-full hover:bg-[#E4262C] rounded-lg px-4 fill-[#888] hover:fill-white hover:text-white text-[#888988] py-3 space-x-2 w-full"
    >
      <component :is="iconComponent" class="" />
      <p class="block sm:text-[16px] md:text-lg">{{ menuText }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  menuText: String,
  icon: String,
  navigate: String,
});

import BsBoxSeam from "~/assets/icon/BsBoxSeam.svg?component";
import Home from "~/assets/icon/home-outline.svg?component";
import Student from "~/assets/icon/ph_student.svg?component";
import Users from "~/assets/icon/users-group-outline.svg?component";

const iconComponents = {
  BsBoxSeam,
  Home,
  Users,
  Student,
};

const iconComponent = iconComponents[props.icon];
const route = useRoute();
const router = useRouter();
</script>
