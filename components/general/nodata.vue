<script setup>
import { Vue3Lottie } from "vue3-lottie";
import NoData from "@/assets/animation/no-data.json";

// Define the props with default values
const props = defineProps({
  height: {
    type: Number,
    default: 400
  },
  width: {
    type: Number,
    default: 400
  },
  text: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="flex flex-col items-center">
    <Vue3Lottie :animationData="NoData" :height="props.height" :width="props.width" />
    <p class="-mt-2 font-semibold text-gray-500 text-md font-inter">
      {{ props.text }}
    </p>
  </div>
</template>

<style lang="scss"></style>
