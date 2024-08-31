<template>
  <MainLayoutDInas>
    <div class="w-full mt-20 text-black px-8">
      <Table :headers="tableHeader" :rows="documents" >
        <template #rows="{ rows }">
          <tr v-if="rows.length === 0">
            <td colspan="4" class="py-2 px-4 text-center text-gray-500">No documents available</td>
          </tr>
          <tr v-else v-for="(row, index) in rows" :key="index" class="text-sm text-gray-500 border">
            <td class="py-2 px-6 text-left text-black font-bold">{{ row?.no_doc }}</td>
            <td class="py-2 px-4 text-left">{{ row?.nama_kelompok }}</td>
            <td class="py-2 px-4 text-left">{{ row?.alamat_bpp }}</td>
            <td class="py-2 px-14 text-left">{{ row?.jenis_bantuan }}</td>
            <td class="py-2 px-4 text-left">{{ row?.sumber_dana }}</td>
          </tr>
        </template>
      </Table>

      <div class="flex justify-end mt-8">
        <button
          class="bg-white hover:bg-[#DEF7EC] text-[#6B7280] hover:text-[#0E9F6E] font-bold py-2 px-3 rounded-l border-2 border-gray-300">Previous</button>
        <button
          class="bg-white hover:bg-[#DEF7EC] text-[#6B7280] hover:text-[#0E9F6E] font-bold py-2 px-6 rounded-r border-2 border-gray-300">Next</button>
      </div>

    </div>
  </MainLayoutDInas>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useDashboardDinasStore } from '/stores/adminDinas/dashboardDinas';
import MainLayoutDInas from '~/layouts/MainLayoutDinas.vue';
// import ModalComponent from "~/pages/adminDinas/tidak-sesuai/detail.vue";
import Table from '~/components/global/table.vue';

const dashboardStore = useDashboardDinasStore();

const tableHeader = ref([
  "No Dokumen",
  "Nama Kelompok",
  "Alamat BPP",
  "Jenis Bantuan",
  "Sumber Dana",
]);

const fetchDocuments = async (page = 1) => {
  try {
    await dashboardStore.getAllDocuments(page);
    console.log("Documents after fetch:", documents.value);
  } catch (error) {
    console.error('Failed to fetch documents:', error);
  }
};

onMounted(() => {
  fetchDocuments();
});

const documents = computed(() => {
  return dashboardStore.data || [];
});

const pagination = computed(() => dashboardStore.pagination);
const hasDocuments = computed(() => documents.value.length > 0);
</script>