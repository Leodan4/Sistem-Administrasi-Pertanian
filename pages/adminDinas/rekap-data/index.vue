<!-- <template>
  <MainLayoutDInas>
    <div class="w-full mt-20 text-black px-8">
      <Table :headers="tableHeader" :rows="documents" >
        <template #rows="{ rows }">
          <tr v-if="rows.length === 0">
            <td colspan="4" class="py-2 px-4 text-center text-gray-500">No documents available</td>
          </tr>
          <tr v-else v-for="(row, index) in rows" :key="index" class="text-sm text-gray-500 border">
            <td class="py-2 px-6 text-left text-black font-bold">{{ row?.no_doc }}</td>
            <td class="py-2 px-4 text-left">{{ row?.deskripsi }}</td>
            <td class="py-2 px-4 text-left">
              <span
                :class="{
                  'bg-green-100 text-green-700 font-semibold px-4 py-1 rounded-md capitalize': row?.status === 'validBPP',
                  'bg-purple-100 text-purple-700 font-semibold px-4 py-1 rounded-md capitalize': row?.status === 'baru',
                  'bg-red-100 text-red-800 font-semibold px-4 py-1 rounded-md capitalize': row?.status === 'tidakvalid',
                  'bg-blue-100 text-blue-800 font-semibold px-4 py-1 rounded-md capitalize': row?.status === 'revisi',
                }"
              >
                {{ row?.status }}
              </span>
            </td>
            <td class="py-2 px-4 text-left">
              <button @click="navigateToDetail(row.id_docs)" class="bg-[#0E9F6E] hover:bg-green-700 text-white py-1 px-4 rounded">Lihat Rincian</button>
            </td>
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
  "Uraian",
  "Status",
  "Aksi",
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
  const filteredDocs = dashboardStore.data ? dashboardStore.data.filter(doc => doc.status_tidak_sesuai_proposal === 'TelahDisesuaikan' && 'belumDisesuaikan') : [];
  return filteredDocs.length > 0 ? filteredDocs : [];
});

const pagination = computed(() => dashboardStore.pagination);
const hasDocuments = computed(() => documents.value.length > 0);
</script> -->












<template>
  <MainLayoutDinas>
    <div class="w-full mt-20 text-black px-8">
      <Table :headers="tableHeader" :rows="documents">
        <template #rows="{ rows }">
          <tr v-for="(row, index) in rows" :key="index" class="text-sm text-gray-500 border">
            <td class="py-2 px-6 text-left text-black font-bold">{{ row?.no_doc }}</td>
            <td class="py-2 px-4 text-left">{{ row?.deskripsi }}</td>
            <td class="py-2 px-4 text-">
              <span
                :class="{
                  'bg-green-100 text-green-700 font-semibold px-4 py-1 rounded-md capitalize': row?.type_doc === 'tervalidasi',
                  'bg-purple-100 text-purple-700 font-semibold px-4 py-1 rounded-md capitalize': row?.type_doc === 'baru',
                  'bg-red-100 text-red-800 font-semibold px-4 py-1 rounded-md capitalize': row?.type_doc === 'tidak_valid',
                  'bg-red-100 text-blue-800 font-semibold px-4 py-1 rounded-md capitalize': row?.type_doc === 'revisi',
                }"
              >
                {{ row?.type_doc }}
              </span>
            </td>
            <td class="py-2 px-4 text-left">
              <button @click="navigateToRincian(row.id_docs)" class="bg-[#0E9F6E] hover:bg-green-700 text-white py-1 px-4 rounded">Lihat Rincian</button>
            </td>
          </tr>
        </template>
      </Table>

      <div class="flex justify-end mt-8">
        <button @click="fetchDocuments(pagination.currentPage - 1)" :disabled="!pagination.hasPrev" class="bg-white hover:bg-[#DEF7EC] text-[#6B7280] hover:text-[#0E9F6E] font-bold py-2 px-3 rounded-l border-2 border-gray-300">
          Previous
        </button>
        <button @click="fetchDocuments(pagination.currentPage + 1)" :disabled="!pagination.hasNext" class="bg-white hover:bg-[#DEF7EC] text-[#6B7280] hover:text-[#0E9F6E] font-bold py-2 px-6 rounded-r border-2 border-gray-300">
          Next
        </button>
      </div>
    </div>
  </MainLayoutDinas>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router'; 
import { useDashboardDinasStore } from '~/stores/adminDinas/dashboardDinas';
import MainLayoutDinas from '~/layouts/MainLayoutDinas.vue';
import Table from "~/components/global/table.vue";

const router = useRouter(); // Initialize router
const dashboardStore = useDashboardDinasStore();

const tableHeader = ref([
  "No Dokumen",
  "Uraian",
  "Status",
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

const navigateToRincian = (id_docs) => {
  router.push({ path: '/adminDinas/rekap-data/rincian', query: { id: id_docs } });
};

onMounted(() => {
  fetchDocuments();
});

const documents = computed(() => dashboardStore.data);
const pagination = computed(() => dashboardStore.pagination);


</script>

<style>
/* Add any custom styles here */
</style>

