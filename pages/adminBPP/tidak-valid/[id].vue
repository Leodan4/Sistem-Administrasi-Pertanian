<template>
  <MainLayout>
    <DetailPaket :data="$generalStore.detailData" :params="route.params.id" />
  </MainLayout>
</template>

<script setup>
import DetailPaket from "~/components/admin/DetailPaket.vue";
const route = useRoute();

const { $generalStore } = useNuxtApp();

import MainLayout from "~/layouts/MainLayoutBPP.vue";
</script>
