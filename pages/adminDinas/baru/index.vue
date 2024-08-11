<template>
  <MainLayoutDInas>
    <div class="w-full mt-20 text-black px-8">
      <table class="min-w-full bg-white-800 rounded-xl overflow-hidden">
        <thead class="bg-gray-100 border-2 border-gray-200 text-gray-500">
          <tr>
            <th class="py-2 px-4 text-center ">No Dokumen</th>
            <th class="py-2 px-4 text-center ">Uraian</th>
            <th class="py-2 px-4 text-center ">Status</th>
            <th class="py-2 px-4 text-center ">Aksi</th>
          </tr>
        </thead>

        <tbody class="border-2 border-gray-300">
          <tr v-for="document in documents" :key="document.id_document">
            <td class="py-2 px-4 text-center text-black font-bold">{{ document.no_doc }}</td>
            <td class="py-2 px-4 text-center">{{ document.title }}</td>
            <td class="py-2 px-4 text-center">
              <span :class="{
                'bg-green-100 text-green-700 font-semibold px-4 py-1 rounded-lg': document.status_baru_proposal === 'validBPP',
                'bg-yellow-100 text-yellow-700 font-semibold px-4 py-1 rounded-lg': document.status_baru_proposal === 'inprogres',
                'bg-red-100 text-red-700 font-semibold px-4 py-1 rounded-lg': document.status_baru_proposal === 'canceled',
              }">
                {{ document.status_baru_proposal }}
              </span>
            </td>
            <td class="py-2 px-4 text-center">
              <button class="bg-[#0E9F6E] hover:bg-green-700 text-white py-1 px-4 rounded-lg">Tinjau</button>
            </td>
          </tr>
        </tbody>


      </table>

      <div class="flex justify-end mt-8">
        <button @click="fetchDocuments(pagination.currentPage - 1)" :disabled="!pagination.hasPrev"
          class="bg-white hover:bg-[#DEF7EC] text-[#6B7280] hover:text-[#0E9F6E] font-bold py-2 px-3 rounded-l border-2 border-gray-300">
          Previous
        </button>
        <button @click="fetchDocuments(pagination.currentPage + 1)" :disabled="!pagination.hasNext"
          class="bg-white hover:bg-[#DEF7EC] text-[#6B7280] hover:text-[#0E9F6E] font-bold py-2 px-6 rounded-r border-2 border-gray-300">
          Next
        </button>
      </div>

    </div>
  </MainLayoutDInas>
</template>

<script setup>
import { computed } from 'vue';
import { onMounted } from 'vue';
import { useBaruDinasStore } from '/stores/adminDinas/baruDinas';
import MainLayoutDInas from '~/layouts/MainLayoutDinas.vue';

const baruStore = useBaruDinasStore();

const fetchDocuments = async (page = 1) => {
  try {
    await baruStore.getAllDocuments(page);
  } catch (error) {
    console.error('Failed to fetch documents:', error);
  }
};

onMounted(() => {
  fetchDocuments();
});

const documents = computed(() => baruStore.data);
const pagination = computed(() => baruStore.pagination);
</script>

<style>
/* Add any custom styles here */
</style>