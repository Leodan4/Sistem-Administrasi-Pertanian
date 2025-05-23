<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import MainLayoutDInas from '~/layouts/MainLayoutDinas.vue';
import { useDashboardDinasStore } from '~/stores/adminDinas/dashboardDinas';
import axios from "../plugins/axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const $axios = axios().provide.axios;

const route = useRoute();
const router = useRouter();
const dashboardStore = useDashboardDinasStore();

const formData = ref({
  no_doc: '',
  tanggal: '',
  judul_dokumen: '',
  nama_penerima: '',
  jenis_bantuan: '',
  nama_penangung_jawab: '',
  sumber_dana: '',
  surat_serah_terima_bantuan: null,
  id_docs: '',
});

const selectedOption = ref("");
const selectedSubOption = ref("");
const isDropdownOpen = ref(false);

const categories = [
  {
    name: "Jenis Bantuan Sarana",
    subOptions: [
      { value: "pupuk", label: "Pupuk" },
      { value: "obat_obatan", label: "Obat-obatan" },
      { value: "bibit", label: "Bibit" },
      { value: "alsin", label: "Alsin" },
      { value: "dll_sarana", label: "dll" }
    ]
  },
  {
    name: "Jenis Bantuan Prasarana",
    subOptions: [
      { value: "gabang", label: "Gabang" },
      { value: "gudang", label: "Gudang" },
      { value: "sumur_bor", label: "Sumur Bor" },
      { value: "saluran_irigasi", label: "Saluran Irigasi" },
      { value: "cetak_sawah", label: "Cetak Sawah" },
      { value: "embung", label: "Embung" },
      { value: "dll_prasarana", label: "dll" }
    ]
  },
  {
    name: "Jenis Bantuan Ketahanan Pangan",
    subOptions: [
      { value: "lumbung", label: "Lumbung" },
      { value: "bansos_modal_usaha", label: "Bansos Modal Usaha" },
      { value: "lantai_jemur", label: "Lantai Jemur" },
      { value: "alat_pengolahan_hasil", label: "Alat Pengolahan Hasil" },
      { value: "dll_pangan", label: "dll" }
    ]
  }
];

const displayedOptions = ref(categories.map(category => ({
  value: category.name,
  label: category.name,
  subOptions: category.subOptions
})));

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const onOptionSelect = (option) => {
  selectedOption.value = option.label;
  selectedSubOption.value = ""; // Clear the selected sub-option
};

const onSubOptionSelect = (subOption) => {
  selectedSubOption.value = subOption.label;
  formData.value.jenis_bantuan = subOption.label; // Update formData
  isDropdownOpen.value = false;
};

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
          nama_penangung_jawab: '',
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
  form.append('nama_penangung_jawab', formData.value.nama_penangung_jawab);
  form.append('sumber_dana', formData.value.sumber_dana);
  form.append('id_docs', formData.value.id_docs);

  if (formData.value.surat_serah_terima_bantuan) {
    form.append('surat_serah_terima_bantuan', formData.value.surat_serah_terima_bantuan);
  }

  try {
    // Debug: Log form data
    for (let [key, value] of form.entries()) {
      console.log(key, value);
    }

    const response = await $axios.post('/formhasil/addform', form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('Form submitted successfully:', response.data);
    toast.success("Upload Berhasil", {
      onClose: () => {
        router.push('/adminDinas/realisasi/'); // Use router instance
      }
    });
  } catch (error) {
    console.error('Failed to submit the form:', error.response ? error.response.data : error.message);
    toast.error('Failed to submit the form', {
      autoClose: 3000,
    })
  }
};

onMounted(() => {
  fetchDocuments();
});
</script>



<template>
  <MainLayoutDInas>
      <section class="h-screen flex flex-col justify-start items-center bg-white mt-12 md:mt-24 px-4">
          <div class="w-full max-w-6xl">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="flex flex-col w-full">
                      <label for="no_doc" class="mb-2 text-lg font-semibold">No Dokumen</label>
                      <input type="text" id="no_doc" v-model="formData.no_doc" readonly
                          class="rounded-lg bg-gray-50 w-full border-2 border-gray-400" />
                  </div>

                  <div class="flex flex-col w-full">
                      <label for="judul_doc" class="mb-2 text-lg font-semibold">Judul Dokumen</label>
                      <input type="text" id="judul_doc" v-model="formData.judul_dokumen" readonlyxx
                          class="rounded-lg bg-gray-50 w-full border-2 border-gray-400" />
                  </div>

                  <div class="flex flex-col w-full">
                      <label for="tanggal" class="mb-2 text-lg font-semibold">Tanggal</label>
                      <input id="tanggal" type="text" v-model="formData.tanggal" readonly
                          class="rounded-lg bg-gray-50 w-full border-2 border-gray-400" />
                  </div>

                  <div class="flex flex-col w-full">
                      <label for="nama_penanggung_jawab" class="mb-2 text-lg font-semibold">Nama Penanggung Jawab</label>
                      <input id="nama_penanggung_jawab" type="text" v-model="formData.nama_penangung_jawab"
                          class="rounded-lg bg-gray-50 w-full border-2 border-gray-400" />
                  </div>

                  <div class="flex flex-col w-full">
                      <label for="nama_penerima" class="mb-2 text-lg font-semibold">Nama Penerima</label>
                      <input id="nama_penerima" type="text" v-model="formData.nama_penerima"
                          class="rounded-lg bg-gray-50 w-full border-2 border-gray-400" />
                  </div>

                  <div class="flex flex-col w-full">
                      <label for="sumber_dana" class="mb-2 text-lg font-semibold">Sumber Dana</label>
                      <select id="sumber_dana" v-model="formData.sumber_dana"
                          class="rounded-lg bg-gray-50 w-full border-2 border-gray-400">
                          <option value="" disabled selected>Pilih Sumber Dana</option>
                          <option value="APBN">APBN</option>
                          <option value="APBD">APBD</option>
                      </select>
                  </div>

                  <div class="flex flex-col w-full">
                      <label for="jenis_bantuan" class="mb-2 text-lg font-semibold">Jenis Bantuan</label>
                      <div class="relative">
                          <div @click="toggleDropdown"
                              class="rounded-lg bg-white border-2 border-gray-400 p-2 cursor-pointer">
                              <span v-if="!selectedSubOption">{{ selectedOption ? selectedOption : 'Pilih Jenis Bantuan' }}</span>
                              <span v-if="selectedSubOption">{{ selectedSubOption }}</span>
                          </div>
                          <div v-if="isDropdownOpen"
                              class="absolute z-10 mt-1 w-full rounded-lg bg-white border-2 border-gray-400">
                              <ul>
                                  <li v-for="option in displayedOptions" :key="option.value"
                                      @click="onOptionSelect(option)"
                                      :class="{ 'bg-white text-grey-500': selectedOption === option.label }"
                                      class="text-black p-2 cursor-pointer">
                                      <span>{{ option.label }}</span>
                                      <ul v-if="selectedOption === option.label" class="pl-4">
                                          <li v-for="subOption in option.subOptions" :key="subOption.value"
                                              @click.stop="onSubOptionSelect(subOption)"
                                              class="p-2 cursor-pointer hover:bg-green-500 hover:text-white"
                                              :class="{ 'text-green-500': selectedSubOption === subOption.label }">
                                              {{ subOption.label }}
                                          </li>
                                      </ul>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>

                  <div class="flex flex-col w-full">
                      <label for="surat_tugas" class="mb-2 text-lg font-semibold">Surat Serah Terima Bantuan</label>
                      <input id="surat_tugas" type="file" @change="handleFileChange"
                          class="rounded-lg bg-gray-50 w-full border-2 border-gray-400" />
                  </div>
              </div>
          </div>

          <div class="py-6">
              <button @click="submitForm"
                  class="bg-green-500 text-white border-2 rounded-xl px-10 py-2">Simpan</button>
          </div>
      </section>
  </MainLayoutDInas>
</template>


<style scoped>
.shadow-xl {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>
