<template>
  <MainLayoutDInas>
    <div class="w-full mt-20 text-black px-8">
      <Table :headers="tableHeader" :rows="documents">
        <template #rows="{ rows }">
          <tr v-if="rows.length === 0">
            <td colspan="4" class="py-2 px-4 text-center text-gray-500">No documents available</td>
          </tr>
          <tr v-else v-for="(row, index) in rows" :key="index" class="text-sm text-gray-500 border">
            <td class="py-2 px-6 text-left text-black font-bold">{{ row?.no_doc }}</td>
            <td class="py-2 px-4 text-left">{{ row?.note }}</td>
            <td class="py-2 px-4 text-left">
              <span
                :class="{
                  'bg-green-100 text-green-700 font-semibold px-4 py-1 rounded-md capitalize': row?.type_doc === 'tervalidasi',
                  'bg-red-100 text-red-800 font-semibold px-4 py-1 rounded-md capitalize': row?.type_doc === 'tidak_valid',
                }"
              >
                {{ row?.type_doc }}
              </span>
            </td>
            <td class="py-2 px-4 text-left">
              <button @click="openModal(row)"
                class="bg-[#0E9F6E] hover:bg-green-700 text-white py-1 px-4 rounded-lg">Tinjau Ulang</button>
            </td>
          </tr>
        </template>
      </Table>

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

      <ModalComponent :isOpen="isModalOpen" :formData="formData" @close="closeModal" />
    </div>
  </MainLayoutDInas>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useDashboardDinasStore } from '~/stores/adminDinas/dashboardDinas';
import MainLayoutDInas from '~/layouts/MainLayoutDinas.vue';
import ModalComponent from "~/pages/adminDinas/tidak-sesuai/detail.vue";
import Table from '~/components/global/table.vue';

const dashboardStore = useDashboardDinasStore();

const tableHeader = ref([
  "No Dokumen",
  "Catatan Revisi",
  "Status",
  "Aksi",
]);

const isModalOpen = ref(false);
const formData = ref({});

const openModal = (row) => {
  const formattedDate = row.createdAt.split('T')[0];

  formData.value = {
    no_doc: row.no_doc,
    title: row.title,
    note: row.note,
    deskripsi: row.deskripsi,
    status: row.type_doc,
    status_tidak_sesuai_proposal: row.status_tidak_sesuai_proposal,
    createdAt: formattedDate,
    jenis_bantuan: row.jenis_bantuan,
    deskripsi: row.deskripsi || "-",
  };
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

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
  const filteredDocs = dashboardStore.data ? dashboardStore.data.filter(doc => doc.type_doc === 'tidak_valid' || doc.type_doc === 'tervalidasi') : [];
  return filteredDocs.length > 0 ? filteredDocs : [];
});

const pagination = computed(() => dashboardStore.pagination);
const hasDocuments = computed(() => documents.value.length > 0);
</script>

<style>
/* Add any custom styles here */
</style>