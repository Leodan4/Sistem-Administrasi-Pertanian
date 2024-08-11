<script setup>
import { ref, computed, onMounted } from 'vue';
import { useDashboardBPPStore } from '~/stores/adminBPP/dashboardBPP';
import MainLayoutBPP from '~/layouts/MainLayoutBPP.vue';
import Table from "~/components/global/table.vue";

const dashboardStore = useDashboardBPPStore();

const tableHeader = ref([
  "Kelengkapan Dokumen",
  "Info",
  "Aksi",
]);

const fetchDocuments = async (page = 1) => {
  try {
    await dashboardStore.getAllDocuments(page);
    console.log("Documents after fetch:", documents.value);  // Log the documents after fetch
  } catch (error) {
    console.error('Failed to fetch documents:', error);
  }
};

onMounted(() => {
  fetchDocuments();
});

const documents = computed(() => dashboardStore.data);
const pagination = computed(() => dashboardStore.pagination);
</script>


<template>
  <MainLayoutBPP>
    <div class="w-full mt-20 text-black px-8">
      <Table :headers="tableHeader" :rows="documents">
        <template #rows="{ rows }">

          <tr v-for="(row, index) in rows" :key="index" class="text-sm text-gray-500 border">
            <td class="py-2 px-6 text-left text-black font-bold">{{ row?.no_doc }}</td>
            <!-- <td class="py-2 px-4 text-center">{{ row?.title }}</td> -->
            <td class="py-2 px-6 text-left">
              <button class="bg-[#0E9F6E] hover:bg-green-700 text-white py-1 px-4 rounded-md">Detail</button>
            </td>
            <td class="py-2 px-7 text-left">
              <input type="checkbox" class="custom-checkbox" />
            </td>
          </tr>

        </template>
      </Table>

      <!-- <div class="flex justify-end mt-8">
        <button @click="fetchDocuments(pagination.currentPage - 1)" :disabled="!pagination.hasPrev"
          class="bg-white hover:bg-[#DEF7EC] text-[#6B7280] hover:text-[#0E9F6E] font-bold py-2 px-3 rounded-l border-2 border-gray-300">
          Previous
        </button>
        <button @click="fetchDocuments(pagination.currentPage + 1)" :disabled="!pagination.hasNext"
          class="bg-white hover:bg-[#DEF7EC] text-[#6B7280] hover:text-[#0E9F6E] font-bold py-2 px-6 rounded-r border-2 border-gray-300">
          Next
        </button>
      </div> -->

      <div class="my-5 w-full border rounded-lg font-bold ">
        <thead class="min-w-full bg overflow-hidden bg-gray-100 w-full border-2 border-gray-200 text-gray-500">
          <th class="w-full text-md">Catatan</th>
        </thead>
        <tbody class="border-2 border-gray-300">
          <tr>
            <td>And here's some amazing content. It's very engaging. Right?</td>
          </tr>
        </tbody>
      </div>
    </div>
  </MainLayoutBPP>
</template>


<style>
.custom-checkbox {
  appearance: none;
  background-color: #fff;
  border: 2px solid #0E9F6E;
  border-radius: 4px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
  outline: none;
}

.custom-checkbox:checked {
  background-color: #0E9F6E;
  border-color: #0E9F6E;
}

.custom-checkbox:checked::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 6px;
  width: 6px;
  height: 10px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
</style>