<template>
  <div>
    {{ $generalStore.isLoading ? "Loading.." : $dashboardSiswaStore.data }}
  </div>
</template>

<script setup>
const { $generalStore, $dashboardSiswaStore } = useNuxtApp();

onMounted(async () => {
  try {
    await $dashboardSiswaStore.getAllSiswa();
  } catch (error) {
    console.log(error);
  }
});

definePageMeta({ middleware: "auth" });
</script>

<style lang="scss" scoped></style>
