<template>
    <MainLayoutDinas>
      <section class="h-screen flex flex-col justify-center items-center bg-white">
        <div class="flex flex-row justify-center items-center gap-10">
          <div>
            <div class="flex flex-col w-[500px] py-4">
              <label for="no_doc" class="mb-2 text-lg font-semibold">No Dokumen</label>
              <input type="text" id="document-number" v-model="formData.no_doc" readonly
                class="rounded-lg bg-gray-100 border border-gray-300"
              />
            </div>
            <div class="flex flex-col w-[500px] py-4">
              <label for="tanggal" class="mb-2 text-lg font-semibold">Tanggal</label>
              <input
                id="tanggal"
                type="date"
                v-model="formData.tanggal" readonly
                class="rounded-lg bg-gray-50 w-full border-2 border-gray-300"
              />
            </div>
            <div class="flex flex-col w-[500px] py-4">
                <label for="title" class="mb-2 text-lg font-semibold">Nama Penerima</label>
              <input type="text" id="title" v-model="formData.title" readonly
                class="rounded-lg bg-gray-100 border border-gray-300"
              />
            </div>
            <div class="flex flex-col w-[500px] py-4">
                <label for="title" class="mb-2 text-lg font-semibold">Jenis Bantuan</label>
              <input type="text" id="title" v-model="formData.title" readonly
                class="rounded-lg bg-gray-100 border border-gray-300"
              />
            </div>
          </div>
  
          <div>
            <div class="flex flex-col w-[500px] py-4">
                <label for="title" class="mb-2 text-lg font-semibold">Judul Dokumen</label>
              <input type="text" id="title" v-model="formData.title" readonly
                class="rounded-lg bg-gray-100 border border-gray-300"
              />
            </div>
            <div class="flex flex-col w-[500px] py-4">
                <label for="title" class="mb-2 text-lg font-semibold">Nama Penanggung Jawab</label>
              <input type="text" id="title" v-model="formData.title" readonly
                class="rounded-lg bg-gray-100 border border-gray-300"
              />
            </div>
            <div class="flex flex-col w-[500px] py-4">
                <label for="title" class="mb-2 text-lg font-semibold">Sumber Dana</label>
              <input type="text" id="title" v-model="formData.title" readonly
                class="rounded-lg bg-gray-100 border border-gray-300"
              />
            </div>
            <div class="flex flex-col w-[500px] py-4">
              <label for="surat_tugas" class="mb-2 text-lg font-semibold">Surat Tugas</label>
              <input
                id="surat_tugas"
                type="file"
                @change="handleFileChange" readonly
                class="rounded-lg bg-gray-50 border-2 border-gray-300"
              />
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
  import { ref, onMounted } from 'vue';
  import MainLayoutDinas from '~/layouts/MainLayoutDinas.vue';
  import { useTervalidasiDinasStore } from '/stores/adminDinas/tervalidasiDinas';
  
  // Initialize formData with default values
  const formData = ref({
    no_doc: '',
    tanggal: '',
    nama_petugas_1: '',
    nama_petugas_2: '',
    nama_petugas_3: '',
    nama_petugas_4: '',
    title: '',
    surat_tugas: null // This will hold the file object
  });

  
  
  // Fetch or set default data (if applicable) on mounted
  onMounted(() => {
    // Example: Initialize formData.no_doc if needed
    // formData.value.no_doc = 'Some default value';
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
