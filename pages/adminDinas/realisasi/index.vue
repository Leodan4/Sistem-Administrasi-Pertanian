<!-- <template>
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
                'bg-green-100 text-green-700 font-semibold px-4 py-1 rounded-lg': document.status_terferivikasi_lapangan_proposal === 'terverifikasi',
                'bg-red-100 text-red-700 font-semibold px-4 py-1 rounded-lg': document.status_terferivikasi_lapangan_proposal === 'belumVerifikasi',
              }">
                {{ document.status_terferivikasi_lapangan_proposal }}
              </span>
            </td>
            <td class="py-2 px-4 text-center">
              <button class="bg-[#0E9F6E] hover:bg-green-700 text-white py-1 px-4 rounded">Pengumuman Hasil</button>
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
import { useRealisasiDinasStore } from '/stores/adminDinas/realisasiDinas';
import MainLayoutDInas from '~/layouts/MainLayoutDinas.vue';

const realisasiStore = useRealisasiDinasStore();

const fetchDocuments = async (page = 1) => {
  try {
    await realisasiStore.getAllDocuments(page);
  } catch (error) {
    console.error('Failed to fetch documents:', error);
  }
};

onMounted(() => {
  fetchDocuments();
});

const documents = computed(() => realisasiStore.data);
const pagination = computed(() => realisasiStore.pagination);


</script>

<style>
/* Add any custom styles here */
</style> -->


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
              <button @click="navigateToHasil(row.id_docs)" class="bg-[#0E9F6E] hover:bg-green-700 text-white py-1 px-4 mx-4 rounded-lg">Pengumuman Hasil</button>
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

    </div>
  </MainLayoutDInas>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { useDashboardDinasStore } from '~/stores/adminDinas/dashboardDinas';
import { useRouter } from 'vue-router';
import MainLayoutDInas from '~/layouts/MainLayoutDinas.vue';
import Table from '~/components/global/table.vue';

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

const navigateToHasil = (id_docs) => {
  router.push({ path: '/adminDinas/realisasi/Pengumuman_hasil', query: { id: id_docs } });
};


// const navigateToRealisasi = (id_docs) => {
//   router.push({ path: '/adminDinas/tervalidasi/form_realisasi', query: { id: id_docs } });
// };
</script>

<style>
/* Add any custom styles here */
</style>