<!-- pages/index.vue -->
<template>
  <div class="flex flex-col gap-2 items-center">
    <p v-for="entry in entries" :key="entry">{{ entry }}</p>
    <PaginationControls :hasNextPage="hasNextPage" :hasPrevPage="hasPrevPage" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import PaginationControls from "~/components/admin/PaginationControllers.vue";

const data = [
  "entry 1",
  "entry 2",
  "entry 3",
  "entry 4",
  "entry 5",
  "entry 6",
  "entry 7",
  "entry 8",
  "entry 9",
  "entry 10",
];

const searchParams = ref({ page: "1", per_page: "5" });

const start = computed(
  () => (Number(searchParams.page) - 1) * Number(searchParams.per_page)
);
const end = computed(() => start.value + Number(searchParams.per_page));

const entries = computed(() => data.slice(start.value, end.value));
const hasNextPage = computed(() => end.value < data.length);
const hasPrevPage = computed(() => start.value > 0);
</script>
