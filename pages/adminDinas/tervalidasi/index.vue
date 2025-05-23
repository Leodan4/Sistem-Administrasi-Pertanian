<template>
  <MainLayoutDInas>
    <div class="w-full mt-20 text-black px-8">
      <Table :headers="tableHeader" :rows="documents">
        <template #rows="{ rows }">
          <tr v-for="(row, index) in rows" :key="index" class="text-sm text-gray-500 border">
            <td class="py-2 px-6 text-left text-black font-bold">{{ row?.no_doc }}</td>
            <td class="py-2 px-4 text-left">{{ row?.deskripsi }}</td>
            <td class="py-2 px-4 text-left">
              <span
                :class="{
                  'bg-green-100 text-green-700 font-semibold px-4 py-1 rounded-md capitalize': row?.type_doc === 'tervalidasi',
                }"
              >
                {{ row?.type_doc }}
              </span>
            </td>
            <td class="py-2 px-4 text-start">
              <button @click="openModal(row.id_docs)" class="bg-[#0E9F6E] hover:bg-green-700 text-white py-1 px-4 mx-4 rounded-lg">Detail</button>
              <button @click="navigateToRealisasi(row.id_docs)" class="bg-white border border-[#0E9F6E] text-[#0E9F6E] py-1 px-4 rounded-lg">Realisasi</button>
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
import { useRouter } from 'vue-router';
import { useDashboardDinasStore } from '~/stores/adminDinas/dashboardDinas';
import MainLayoutDInas from '~/layouts/MainLayoutDinas.vue';
import Table from '~/components/global/table.vue';
import ModalComponent from '~/pages/adminDinas/tervalidasi/detail.vue';

const router = useRouter(); // Initialize router
const dashboardStore = useDashboardDinasStore();

const tableHeader = ref([
  "No Dokumen",
  "Uraian",
  "Status",
  "Aksi",
]);

const isModalOpen = ref(false);
const formData = ref({});

const openModal = (id_docs) => {
  const selectedDoc = documents.value.find(doc => doc.id_docs === id_docs);
  if (selectedDoc) {
    const formattedDate = selectedDoc.createdAt.split('T')[0];

    formData.value = {
      no_doc: selectedDoc.no_doc,
      title: selectedDoc.title,
      type_doc: selectedDoc.type_doc,
      createdAt: formattedDate,
      jenis_bantuan: selectedDoc.jenis_bantuan,
      deskripsi: selectedDoc.deskripsi || "-",
    };
    isModalOpen.value = true;
  }
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
  const filteredDocs = dashboardStore.data ? dashboardStore.data.filter(doc => doc.type_doc === 'tervalidasi') : [];
  return filteredDocs.length > 0 ? filteredDocs : [];
});

const pagination = computed(() => dashboardStore.pagination);
const hasDocuments = computed(() => documents.value.length > 0);

const navigateToRealisasi = (id_docs) => {
  router.push({ path: '/adminDinas/tervalidasi/form_realisasi', query: { id: id_docs } });
};
</script>

<style>
/* Add any custom styles here */
</style>