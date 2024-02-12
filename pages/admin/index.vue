<!-- components/LiveClock.vue -->
<template>
  <div>
    <p>{{ currentTime }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const getCurrentTime = () => {
  const now = new Date();
  return now.toLocaleTimeString();
};

const currentTime = ref(getCurrentTime());

const updateCurrentTime = () => {
  currentTime.value = getCurrentTime();
};

const timer = setInterval(updateCurrentTime, 1000);

onMounted(() => {
  updateCurrentTime();
});

onBeforeUnmount(() => {
  // Clear the interval to stop updating the time when the component is destroyed
  clearInterval(timer);
});
</script>
