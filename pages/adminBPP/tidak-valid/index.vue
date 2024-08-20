<!-- <template>
  <MainLayoutBPP>
    <div class="w-full mt-20 text-black px-8">
      <Table :headers="tableHeader" :rows="documents">
        <template #rows="{ rows }">
          <tr v-for="(row, index) in rows" :key="index" class="text-sm text-gray-500 border">
            <td class="py-2 px-6 text-left text-black font-bold">{{ row?.no_doc }}</td>
            <td class="py-2 px-4 text-left">{{ row?.deskripsi }}</td>
            <td class="py-2 px-4 text-left">
              <span
                :class="{
                  'bg-green-100 text-green-700 font-semibold px-4 py-1 rounded-md capitalize': row?.status_baru_proposal === 'validBPP',
                  'bg-purple-100 text-purple-700 font-semibold px-4 py-1 rounded-md capitalize': row?.status_baru_proposal === 'baru',
                  'bg-red-100 text-red-800 font-semibold px-4 py-1 rounded-md capitalize': row?.status_baru_proposal === 'tidakvalid',
                  'bg-red-100 text-blue-800 font-semibold px-4 py-1 rounded-md capitalize': row?.status_baru_proposal === 'revisi',
                }"
              >
                {{ row?.status_baru_proposal }}
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
        <button
          class="bg-white hover:bg-[#DEF7EC] text-[#6B7280] hover:text-[#0E9F6E] font-bold py-2 px-3 rounded-l border-2 border-gray-300">Previous</button>
        <button
          class="bg-white hover:bg-[#DEF7EC] text-[#6B7280] hover:text-[#0E9F6E] font-bold py-2 px-6 rounded-r border-2 border-gray-300">Next</button>
      </div>

      <ModalComponent :isOpen="isModalOpen" :formData="formData" @close="closeModal" />

    </div>
  </MainLayoutBPP>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useDashboardBPPStore } from '~/stores/adminBPP/dashboardBPP';
import MainLayoutBPP from '~/layouts/MainLayoutBPP.vue';
import Table from "~/components/global/table.vue";
import ModalComponent from "~/pages/adminBPP/tidak-valid/detail.vue";


const dashboardStore = useDashboardBPPStore();

const tableHeader = ref([
  "No Dokumen",
  "Uraian",
  "Status",
  "Aksi",
]);

const isModalOpen = ref(false);
const formData = ref({});

const openModal = (row) => {
  const formattedDate = row.createdAt.split('T')[0];

  formData.value = {
    deskripsi: row.deskripsi || "-",
    no_doc: row.no_doc,
    title: row.title,
    status: row.status,
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

const documents = computed(() => dashboardStore.data);
const pagination = computed(() => dashboardStore.pagination);
</script> -->








<script setup>
import { ref, computed, onMounted } from 'vue';
import { useDashboardBPPStore } from '~/stores/adminBPP/dashboardBPP';  
import MainLayoutBPP from '~/layouts/MainLayoutBPP.vue';
import Table from "~/components/global/table.vue";
import ModalComponent from "~/pages/adminBPP/tidak-valid/detail.vue";

const dashboardStore = useDashboardBPPStore();

const tableHeader = ref([
  "No Dokumen",
  "Uraian",
  "Status",
  "Aksi",
]);

const isModalOpen = ref(false);
const formData = ref({});

const openModal = (row) => {
  const formattedDate = row.createdAt.split('T')[0];

  formData.value = {
    no_doc: row.no_doc,
    deskripsi: row.deskripsi,
    status: row.status,
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
  const filteredDocs = dashboardStore.data ? dashboardStore.data.filter(doc => doc.status_baru_proposal === 'tidakvalid') : [];
  return filteredDocs.length > 0 ? filteredDocs : [];
});

const pagination = computed(() => dashboardStore.pagination);
const hasDocuments = computed(() => documents.value.length > 0);
</script>

<template>
  <MainLayoutBPP>
    <div class="w-full mt-20 text-black px-8">
      <Table :headers="tableHeader" :rows="documents">
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
                  // 'bg-green-100 text-green-700 font-semibold px-4 py-1 rounded-md capitalize': row?.type_doc === 'validBPP',
                  // 'bg-purple-100 text-purple-700 font-semibold px-4 py-1 rounded-md capitalize': row?.type_doc === 'baru',
                  'bg-red-100 text-red-800 font-semibold px-4 py-1 rounded-md capitalize': row?.type_doc === 'tidakvalid',
                  // 'bg-red-100 text-blue-800 font-semibold px-4 py-1 rounded-md capitalize': row?.type_doc === 'revisi',
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

      <!-- Conditionally render pagination based on the presence of documents -->
      <div v-if="hasDocuments" class="flex justify-end mt-8">
        <button
          class="bg-white hover:bg-[#DEF7EC] text-[#6B7280] hover:text-[#0E9F6E] font-bold py-2 px-3 rounded-l border-2 border-gray-300">Previous</button>
        <button
          class="bg-white hover:bg-[#DEF7EC] text-[#6B7280] hover:text-[#0E9F6E] font-bold py-2 px-6 rounded-r border-2 border-gray-300">Next</button>
      </div>

      <ModalComponent :isOpen="isModalOpen" :formData="formData" @close="closeModal" />
    </div>
  </MainLayoutBPP>
</template>
