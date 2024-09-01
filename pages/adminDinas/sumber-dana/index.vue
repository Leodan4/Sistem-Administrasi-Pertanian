<template>
  <MainLayoutDInas>
    <div class="w-full mt-20 text-black px-8">
      <Table :headers="tableHeader" :rows="currentDocuments">
        <template #rows="{ rows }">
          <tr v-if="rows.length === 0">
            <td colspan="4" class="py-2 px-4 text-center text-gray-500">No documents available</td>
          </tr>
          <tr v-else v-for="(row, index) in rows" :key="index" class="text-sm text-gray-500 border">
            <td class="py-2 px-6 text-left text-black font-bold">{{ row?.no_doc }}</td>
            <td class="py-2 px-4 text-left">{{ row?.sumber_dana }}</td>
            <td class="py-2 px-4 text-center">
              <button class="bg-[#1C64F2] hover:bg-blue-800 text-white py-1 px-4 mx-2 rounded">Edit</button>
              <button class="bg-[#E02424] hover:bg-red-800 text-white py-1 px-4 rounded">Hapus</button>
            </td>
          </tr>
        </template>
      </Table>

      <div class="flex justify-end mt-8">
        <button @click="fetchDocuments(pagination.hasPrev - 1)" :disabled="!pagination.hasPrev"
          class="bg-white hover:bg-[#DEF7EC] text-[#6B7280] hover:text-[#0E9F6E] font-bold py-2 px-3 rounded-l border-2 border-gray-300">
          Previous
        </button>
        <button @click="fetchDocuments(pagination.hasNext + 1)" :disabled="!pagination.hasNext"
          class="bg-white hover:bg-[#DEF7EC] text-[#6B7280] hover:text-[#0E9F6E] font-bold py-2 px-6 rounded-r border-2 border-gray-300">
          Next
        </button>
      </div>
    </div>
  </MainLayoutDInas>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from '~/plugins/axios';
import MainLayoutDInas from '~/layouts/MainLayoutDinas.vue';
import Table from '~/components/global/table.vue';

const $axios = axios().provide.axios;

const tableHeader = ref([
  "No Dokumen",
  "Sumber Dana",
  "Aksi",
]);

const documents = ref([]);
const pagination = ref({
  currentPage: 1,
  hasPrev: false,
  hasNext: false,
  totalPages: 0,
});

const limit = 7;

const fetchDocuments = async (page = 1) => {
  try {
    const offset = (page - 1) * limit;
    const response = await $axios.get(`/formhasil/docs?limit=${limit}&offset=${offset}`);
    documents.value = response.data.data || [];
    pagination.value = {
      currentPage: page,
      hasPrev: page > 1,
      hasNext: response.data.hasMore, // Ensure `hasMore` is returned from your API
      totalPages: Math.ceil(response.data.total / limit) // Total pages based on total items
    };
  } catch (error) {
    console.error('Failed to fetch documents:', error);
  }
};

// Computed property to slice documents based on current page
const currentDocuments = computed(() => {
  const start = (pagination.value.currentPage - 1) * limit;
  const end = start + limit;
  return documents.value.slice(start, end);
});

onMounted(() => {
  fetchDocuments();
});
</script>
