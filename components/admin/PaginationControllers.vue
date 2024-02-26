<!-- components/PaginationControls.vue -->
<template>
  <div class="flex gap-2">
    <button
      class="bg-blue-500 text-white p-1"
      :disabled="!hasPrevPage"
      @click="prevPage"
    >
      prev page
    </button>
    <div>{{ currentPage }} / {{ totalPages }}</div>
    <button
      class="bg-blue-500 text-white p-1"
      :disabled="!hasNextPage"
      @click="nextPage"
    >
      next page
    </button>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";
import { useRouter, useRoute } from "vue-router";

// Mendefinisikan props
const props = defineProps(["hasNextPage", "hasPrevPage"]);

const route = useRoute();
const router = useRouter();

// Mengambil nilai dari parameter pencarian 'page' dan 'per_page'
const page = ref(Number(route.query.page) || 1);
const per_page = ref(Number(route.query.per_page) || 5);

// Menghitung total halaman berdasarkan data dan per_page
const totalPages = computed(() => Math.ceil(10 / Number(per_page.value)));

// Menghandle perpindahan ke halaman berikutnya
const nextPage = () => {
  router.push(`/?page=${page.value + 1}&per_page=${per_page.value}`);
};

// Menghandle perpindahan ke halaman sebelumnya
const prevPage = () => {
  router.push(`/?page=${page.value - 1}&per_page=${per_page.value}`);
};
</script>
