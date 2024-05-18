<template>
  <MainLayout>
    <Detail type="siswa" :data="$generalStore.detailData" :params="route.params.id" />
  </MainLayout>
</template>

<script setup>
import Detail from "~/components/admin/Detail.vue";
const route = useRoute();

const { $generalStore } = useNuxtApp();

import MainLayout from "~/layouts/MainLayout.vue";
</script>
