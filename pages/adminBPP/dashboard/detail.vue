<!-- <script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useDashboardBPPStore } from '~/stores/adminBPP/dashboardBPP';
import MainLayoutBPP from '~/layouts/MainLayoutBPP.vue';
import Table from "~/components/global/table.vue";

const route = useRoute();
const dashboardStore = useDashboardBPPStore();

const tableHeader = ref([
  "Kelengkapan Dokumen",
  "Info",
  "Aksi",
]);

const fetchDocumentDetail = async () => {
  try {
    const id = route.query.id;
    if (id) {
      await dashboardStore.getAllDocuments(); // Get all documents first
      const document = dashboardStore.data.find(doc => doc.id_docs === id);
      if (document) {
        selectedDocument.value = document;
      }
    }
  } catch (error) {
    console.error('Failed to fetch document details:', error);
  }
};

const selectedDocument = ref({});

onMounted(() => {
  fetchDocuments();
});
</script>

<template>
  <MainLayoutBPP>
    <div class="w-full mt-20 text-black px-8">
      <Table :headers="tableHeader" :rows="[selectedDocument]">
        <template #rows="{ rows }">
          <tr v-for="(row, index) in rows" :key="index" class="text-sm text-gray-500 border">
            <td class="py-2 px-6 text-left">{{ row?.lembar_persetujuan_kepala_desa }}</td>
            <td class="py-2 px-4 text-left">{{ row?.lembar_persetujuan_PPL_Mantri }}</td>
            <td class="py-2 px-4 text-left">{{ row?.lembar_persetujuan_kecamatan }}</td>
            <td class="py-2 px-4 text-left">{{ row?.lembar_persetujuan_BPP }}</td>
            <td class="py-2 px-4 text-left">{{ row?.sk_pembentukan_kelompok }}</td>
            <td class="py-2 px-4 text-left">{{ row?.keanggotaan_SIMHULTAN }}</td>
            <td class="py-2 px-4 text-left">{{ row?.Daftar_anggota_dan_ktp_anggota }}</td>
          </tr>
        </template>
      </Table>

      /// Area Catatan
      <div class="my-5 w-full border rounded-lg font-bold">
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
</template> -->



<template>
  <MainLayoutBPP>
    <div class="w-full mt-20 text-black px-8">
      <Table :headers="tableHeader" :rows="documentDetails">
        <template #rows="{ rows }">
          <tr v-for="(row, index) in rows" :key="index" class="text-sm text-gray-500 border">
            <td class="py-2 px-6 text-left">{{ row.label }}</td>
            <td class="py-2 px-6 text-left">
              <button 
                @click="handleDetailClick(row.value)" 
                class="bg-[#0E9F6E] hover:bg-green-700 text-white my-2 py-1 px-4 rounded-md"
              >
                Detail
              </button>
            </td>
          </tr>
        </template>
      </Table>

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

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useDashboardBPPStore } from '~/stores/adminBPP/dashboardBPP';
import MainLayoutBPP from '~/layouts/MainLayoutBPP.vue';
import Table from "~/components/global/table.vue";

const route = useRoute();
const router = useRouter(); // Initialize router
const dashboardStore = useDashboardBPPStore();

const tableHeader = ref([
  "Kelengkapan Dokumen",
  "Info",
]);

const documentDetails = ref([]);

const fetchDocumentDetails = async () => {
  const id_docs = route.query.id;
  if (id_docs) {
    try {
      await dashboardStore.getAllDocuments();
      const document = dashboardStore.data.find(doc => doc.id_docs == id_docs);
      if (document) {
        documentDetails.value = [
          { label: "Lembar Persetujuan Kepala Desa", value: document.lembar_persetujuan_kepala_desa },
          { label: "Lembar Persetujuan PPL Mantri", value: document.lembar_persetujuan_PPL_Mantri },
          { label: "Lembar Persetujuan Kecamatan", value: document.lembar_persetujuan_kecamatan },
          { label: "Lembar Persetujuan BPP", value: document.lembar_persetujuan_BPP },
          { label: "SK Pembentukan Kelompok", value: document.sk_pembentukan_kelompok },
          { label: "Keanggotaan SIMHULTAN", value: document.keanggotaan_SIMHULTAN },
          { label: "Daftar Anggota dan KTP Anggota", value: document.Daftar_anggota_dan_ktp_anggota },
        ];
      }
    } catch (error) {
      console.error('Failed to fetch document details:', error);
    }
  }
};

const handleDetailClick = (filePath) => {
  if (filePath) {
    window.open(filePath, '_blank');
  } else {
    console.log("Invalid file path:", filePath);
  // Navigate or perform actions based on `value` if needed
  }
};

onMounted(() => {
  fetchDocumentDetails();
});
</script>

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
