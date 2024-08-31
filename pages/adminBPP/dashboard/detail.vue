<template>
  <MainLayoutBPP>
    <div class="w-full mt-10 text-black px-8">
      <Table :headers="tableHeader" :rows="documentDetails">
        <template #rows="{ rows }">
          <tr v-for="(row, index) in rows" :key="index" class="text-sm text-gray-500 border">
            <td class="py-2 px-6 text-left">{{ row.label }}</td>
            <td class="py-2 px-6 text-left">
              <button @click="handleDetailClick(row.value)"
                class="bg-[#0E9F6E] hover:bg-green-700 text-white my-2 py-1 px-4 rounded-md">
                Detail
              </button>
            </td>
            <td class="py-2 px-6 text-left">
              <input type="checkbox" class="custom-checkbox" :value="row.value"
                @change="handleCheckboxChange(row.value, $event)" />
            </td>
          </tr>
        </template>
      </Table>

      <div class="flex flex-col w-full pt-5">
        <label for="status text-black font-semibold">Pilih Status</label>
        <select v-model="formData.type_doc" id="type_doc" class="bg-gray-100 border border-gray-300 rounded-lg">
          <option value="" disabled selected>Pilih Jenis Bantuan</option>
          <option value="baru">Baru</option>
          <option value="tervalidasi">Valid BPP</option>
          <option value="revisi">Revisi</option>
          <option value="tidak_valid">Tidak Valid</option>
        </select>

      </div>

      <div class="my-5 w-full border rounded-lg bg-white shadow-sm">
        <div class="bg-gray-100 border-b-2 border-gray-200 p-3">
          <h3 class="text-md font-semibold text-gray-600">Catatan</h3>
        </div>
        <div class="p-4">
          <textarea v-model="formData.note" id="note"
            class="w-full h-24 bg-gray-50 border border-gray-300 rounded-lg p-2 text-sm text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Input text"></textarea>
        </div>
      </div>

      <div class="flex gap-4 justify-end">
        <button class="border-2 border-green-500 text-green-500 rounded-xl px-6 py-2">Revisi</button>
        <button @click="updateDocument" class="bg-green-500 text-white border rounded-xl px-6 py-2">Lanjutkan</button>
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
import axios from "../plugins/axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const $axios = axios().provide.axios;

const route = useRoute();
const router = useRouter();
const dashboardStore = useDashboardBPPStore();

const tableHeader = ref([
  "Kelengkapan Dokumen",
  "Info",
  "Aksi"
]);

const documentDetails = ref([]);

const formData = ref({
  type_doc: '',  
  note: ''       
});


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


const updateDocument = async () => {
  try {
    const response = await $axios.put(`/doc/${route.query.id}`, {
      type_doc: formData.value.type_doc,
      note: formData.value.note,
    });
    console.log('Document updated successfully:', response.data);
    toast.success('Document updated successfully', {
      autoClose: 3000
    });
  } catch (error) {
    console.error('Failed to update document:', error);
    toast.error('Failed to update document', {
      autoClose: 3000,
    });
  }
};

const handleDetailClick = (filePath) => {
  const baseUrl = "https://pertanian.harvestdigital.online/hars6496/New%20directory/";
  if (filePath) {
    const fullUrl = `${baseUrl}${filePath}`;
    window.open(fullUrl, '_blank');
  } else {
    console.log("Invalid file path:", filePath);
  }
};

const handleCheckboxChange = (value, event) => {
  if (event.target.checked) {
    console.log(`Checked: ${value}`);
    // Perform actions when checked
  } else {
    console.log(`Unchecked: ${value}`);
    // Perform actions when unchecked
  }
};


onMounted(() => {
  fetchDocumentDetails();
});
</script>

<style>
/* Add any custom styles here */
</style>
