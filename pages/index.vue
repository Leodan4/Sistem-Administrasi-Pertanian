<template>
  <div>{{ $generalStore.data }}</div>
</template>

<script setup>
const { $generalStore } = useNuxtApp();

onMounted(async () => {
  try {
    const res = await $generalStore.getApiPokemon();
  } catch (error) {
    console.log(error);
  }
});
</script>

<style lang="scss" scoped></style>
