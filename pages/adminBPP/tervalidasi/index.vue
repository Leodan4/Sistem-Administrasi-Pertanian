<template>
  <MainLayoutBPP>
    <div class="w-full mt-20 text-black px-8">
      <Table :headers="tableHeader" :rows="documents">
        <template #rows="{ rows }">
          <tr v-for="(row, index) in rows" :key="index" class="text-sm text-gray-500 border">
            <td class="py-2 px-6 text-left text-black font-bold">{{ row?.no_doc }}</td>
            <td class="py-2 px-4 text-left">{{ row?.uraian }}</td>
            <td class="py-2 px-4 text-left">
              <span :class="{
                'bg-green-100 text-green-700 font-semibold px-4 py-1 rounded-md capitalize': row?.status === 'completed',
                'bg-purple-100 text-purple-700 font-semibold px-4 py-1 rounded-md capitalize': row?.status === 'inprogres',
                'bg-red-100 text-red-800 font-semibold px-4 py-1 rounded-md capitalize': row?.status === 'cancelled',
              }">
                {{ row?.status }}
              </span>
            </td>
            <td class="py-2 px-4 text-left">
              <button @click="openModal(row)"
                class="bg-[#0E9F6E] hover:bg-green-700 text-white py-1 px-4 rounded-lg">Detail/Print</button>
            </td>
          </tr>
        </template>
      </Table>

      <div class="flex justify-end mt-8">
        <button class="bg-white hover:bg-[#DEF7EC] text-[#6B7280] hover:text-[#0E9F6E] font-bold py-2 px-3 rounded-l border-2 border-gray-300">Previous</button>
        <button class="bg-white hover:bg-[#DEF7EC] text-[#6B7280] hover:text-[#0E9F6E] font-bold py-2 px-6 rounded-r border-2 border-gray-300">Next</button>
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
import ModalComponent from "~/pages/adminBPP/tervalidasi/detail.vue";

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
    uraian: row.uraian || "-",
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
</script>
