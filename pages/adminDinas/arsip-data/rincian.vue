<template>
  <MainLayoutDinas>
    <section class="h-screen flex flex-col justify-center items-center bg-white">
      <div class="flex flex-row justify-center items-center gap-10">
        <div>
          <div class="flex flex-col w-[500px] py-4">
            <label for="no_doc" class="mb-2 text-lg font-semibold">No Dokumen</label>
            <input type="text" id="no_doc" v-model="formData.no_doc" readonly
              class="rounded-lg bg-gray-100 border border-gray-300" />
          </div>
          <div class="flex flex-col w-[500px] py-4">
            <label for="tanggal" class="mb-2 text-lg font-semibold">Tanggal</label>
            <input id="tanggal" type="text" v-model="formData.tanggal" readonly
              class="rounded-lg bg-gray-50 w-full border-2 border-gray-300" />
          </div>
          <div class="flex flex-col w-[500px] py-4">
            <label for="nama_penerima" class="mb-2 text-lg font-semibold">Nama Penerima</label>
            <input type="text" id="nama_penerima" v-model="formData.nama_penerima" readonly
              class="rounded-lg bg-gray-100 border border-gray-300" />
          </div>
          <div class="flex flex-col w-[500px] py-4">
            <label for="jenis_bantuan" class="mb-2 text-lg font-semibold">Jenis Bantuan</label>
            <input type="text" id="jenis_bantuan" v-model="formData.jenis_bantuan" readonly
              class="rounded-lg bg-gray-100 border border-gray-300" />
          </div>
        </div>

        <div>
          <div class="flex flex-col w-[500px] py-4">
            <label for="judul_dokumen" class="mb-2 text-lg font-semibold">Judul Dokumen</label>
            <input type="text" id="judul_dokumen" v-model="formData.judul_dokumen" readonly
              class="rounded-lg bg-gray-100 border border-gray-300" />
          </div>
          <div class="flex flex-col w-[500px] py-4">
            <label for="nama_penanggung_jawab" class="mb-2 text-lg font-semibold">Nama Penanggung Jawab</label>
            <input type="text" id="nama_penanggung_jawab" v-model="formData.nama_penanggung_jawab" readonly
              class="rounded-lg bg-gray-100 border border-gray-300" />
          </div>
          <div class="flex flex-col w-[500px] py-4">
            <label for="sumber_dana" class="mb-2 text-lg font-semibold">Sumber Dana</label>
            <input type="text" id="sumber_dana" v-model="formData.sumber_dana" readonly
              class="rounded-lg bg-gray-100 border border-gray-300" />
          </div>
          <div class="flex flex-col w-[500px] py-4">
            <label for="surat_tugas" class="mb-2 text-lg font-semibold">Surat Tugas</label>
            <input id="surat_tugas" type="file" @change="handleFileChange"
              class="rounded-lg bg-gray-50 border-2 border-gray-300" />
          </div>
        </div>
      </div>

      <div class="py-6">
        <button @click="saveFormData" class="bg-green-500 text-white border-2 rounded-xl px-10 py-2">Simpan</button>
      </div>
    </section>
  </MainLayoutDinas>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useDashboardDinasStore } from '~/stores/adminDinas/dashboardDinas';
import MainLayoutDinas from '~/layouts/MainLayoutDinas.vue';

const route = useRoute();
const dashboardStore = useDashboardDinasStore();

const formData = ref({
  no_doc: '',
  tanggal: '',
  nama_penerima: '',
  jenis_bantuan: '',
  judul_dokumen: '',
  nama_penanggung_jawab: '',
  sumber_dana: '',
  surat_tugas: null
});

const fetchDocuments = async () => {
  const id_docs = route.query.id;
  if (id_docs) {
    try {
      await dashboardStore.getAllDocuments();
      const document = dashboardStore.data.find(doc => doc.id_docs == id_docs);
      if (document) {
        formData.value = {
          no_doc: document.no_doc,
          tanggal: document.createdAt,
          nama_penerima: document.nama_penerima,
          jenis_bantuan: document.jenis_bantuan,
          judul_dokumen: document.title,
          nama_penanggung_jawab: document.nama_penanggung_jawab,
          sumber_dana: document.sumber_dana,
          surat_tugas: null
        };
      }
    } catch (error) {
      console.error('Failed to fetch document details:', error);
    }
  }
};

onMounted(() => {
  fetchDocuments();
});

const handleFileChange = (event) => {
  const file = event.target.files[0];
  formData.value.surat_tugas = file;
};

const saveFormData = async () => {
  try {
    // Add logic to save form data
    console.log('Form Data:', formData.value);
    // Example: Use the store to save data
    // await useTervalidasiDinasStore().saveDocument(formData.value);
  } catch (error) {
    console.error('Failed to save form data:', error);
  }
};
</script>

<style scoped>
.shadow-xl {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>
