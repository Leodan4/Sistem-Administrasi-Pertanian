
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import MainLayoutDInas from '~/layouts/MainLayoutDinas.vue';  
import { useDashboardDinasStore } from '~/stores/adminDinas/dashboardDinas';
import axios from "../plugins/axios";

const $axios = axios().provide.axios;

const route = useRoute();
const dashboardStore = useDashboardDinasStore();

const formData = ref({
    no_doc: '',
    tanggal: '',
    judul_dokumen: '',
    nama_penerima: '',
    jenis_bantuan: '',
    nama_penanggung_jawab: '',
    sumber_dana: '',
    surat_serah_terima_bantuan: null,
    id_docs: '',
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
                    judul_dokumen: document.title,
                    nama_penerima: '',  
                    jenis_bantuan: '',  
                    nama_penanggung_jawab: '',  
                    sumber_dana: '',  
                    surat_serah_terima_bantuan: null,
                    id_docs: document.id_docs  
                };
            }
        } catch (error) {
            console.error('Failed to fetch document details:', error);
        }
    }
};


const handleFileChange = (event) => {
    const file = event.target.files[0];
    formData.value.surat_serah_terima_bantuan = file;
};

const submitForm = async () => {
    const form = new FormData();
    form.append('no_doc', formData.value.no_doc);
    form.append('tanggal', formData.value.tanggal);
    form.append('title', formData.value.judul_dokumen);
    form.append('nama_penerima', formData.value.nama_penerima);
    form.append('jenis_bantuan', formData.value.jenis_bantuan);
    form.append('nama_penanggung_jawab', formData.value.nama_penanggung_jawab);
    form.append('sumber_dana', formData.value.sumber_dana);
    form.append('id_docs', formData.value.id_docs); // Include id_docs

    if (formData.value.surat_serah_terima_bantuan) {
        form.append('surat_serah_terima_bantuan', formData.value.surat_serah_terima_bantuan);
    }

    try {
        // Debug: Log form data
        for (let [key, value] of form.entries()) {
            console.log(key, value);
        }

        const response = await $axios.post('https://pertanian.harvestdigital.online/formhasil/addform', form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log('Form submitted successfully:', response.data);
        // Add further logic here, such as redirecting the user or showing a success message
    } catch (error) {
        console.error('Failed to submit the form:', error.response ? error.response.data : error.message);
    }
};

onMounted(() => {
    fetchDocuments();
});

</script>

<template>
  <MainLayoutDInas>
    <section class="h-screen flex flex-col justify-center items-center bg-white">
      <div class="flex flex-row justify-center items-center gap-10 ">
        <div class="">

          <div class="flex flex-col w-[500px] py-4">
            <label for="no_doc" class="mb-2 text-lg font-semibold">No Dokumen</label>
            <input id="no_doc" type="text" name="no_doc" placeholder="Input No Dokumen"
              class="rounded-lg bg-gray-50  border-2 border-gray-300" v-model="formData.no_doc" readonly />
          </div>

          <div class="flex flex-col w-[500px] py-4">
            <label for="tanggal" class="mb-2 text-lg font-semibold">Tanggal</label>
            <input id="tanggal" type="date" name="tanggal" placeholder=""
              class="rounded-lg bg-gray-50 w-full  border-2   border-gray-300" v-model="formData.tanggal" readonly />
          </div>

          <div class="flex flex-col w-[500px] py-4">
            <label for="nama_penerima" class="mb-2 text-lg font-semibold">Nama Penerima</label>
            <input id="nama_penerima" type="text" name="nama_penerima" placeholder="Input Nama Penerima"
              class="rounded-lg bg-gray-50  border-2   border-gray-300" v-model="formData.nama_penerima" />
          </div>

          <div class="flex flex-col w-[500px] py-4">
            <label for="jenis_bantuan" class="mb-2 text-lg font-semibold">Jenis Bantuan</label>
            <input id="jenis_bantuan" type="text" name="jenis_bantuan" placeholder="Input Jenis Bantuan"
              class="rounded-lg bg-gray-50  border-2   border-gray-300" v-model="formData.jenis_bantuan" />
          </div>

        </div>

        <div class="">

          <div class="flex flex-col w-[500px] py-4">
            <label for="judul_doc" class="mb-2 text-lg font-semibold">Judul Dokumen</label>
            <input id="judul_doc" type="text" name="judul_doc" placeholder="Input Judul Dokumen"
              class="rounded-lg bg-gray-50 w-full  border-2 border-gray-300" v-model="formData.judul_dokumen" readonly />
          </div>

          <div class="flex flex-col w-[500px] py-4">
            <label for="nama_penanggung_jawab" class="mb-2 text-lg font-semibold">Nama Penanggung Jawab</label>
            <input id="nama_penanggung_jawab" type="text" name="nama_penanggung_jawab" placeholder="Input Nama Penanggung Jawab"
              class="rounded-lg bg-gray-50  border-2   border-gray-300" v-model="formData.nama_penanggung_jawab" />
          </div>

          <div class="flex flex-col w-[500px] py-4">
            <label for="sumber_dana" class="mb-2 text-lg font-semibold">Sumber Dana</label>
            <select id="sumber_dana" name="sumber_dana" class="rounded-lg bg-gray-50 border-2 border-gray-300" v-model="formData.sumber_dana">
              <option value="" disabled selected>Pilih Sumber Dana</option>
              <option value="APBN">APBN</option>
              <option value="APBD">APBD</option>
              <!-- <option value="dana3">Dana 3</option> -->
              <!-- Tambahkan opsi lain sesuai kebutuhan -->
            </select>
          </div>

          <div class="flex flex-col w-[500px] py-4">
            <label for="surat_tugas" class="mb-2 text-lg font-semibold">Surat Serah Terima Bantuan</label>
            <input id="surat_tugas" type="file" name="surat_tugas" placeholder="Input Nama"
              class="rounded-lg bg-gray-50  border-2   border-gray-300" @change="handleFileChange" />
          </div>

        </div>
      </div>

      <div class="py-6">
        <button @click="submitForm" class="bg-green-500 text-white border-2 rounded-xl px-10 py-2">Simpan</button>
      </div>
    </section>
  </MainLayoutDInas>
</template>

<style scoped>
.shadow-xl {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>
