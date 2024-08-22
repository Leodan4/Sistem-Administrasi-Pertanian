<!-- <script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useDashboardDinasStore } from '~/stores/adminDinas/dashboardDinas';
import MainLayoutDinas from '~/layouts/MainLayoutDinas.vue';
import axios from '~/plugins/axios';

const $axios = axios().provide.axios;

const route = useRoute();
const dashboardStore = useDashboardDinasStore();

const formData = ref({
    no_doc: '',
    title: '',
    surattugas: null,
    note: '',
    tanggal: '',
    petugas1: '',
    petugas2: '',
    petugas3: '',
    petugas4: '',
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
                    title: document.title,
                    note: '',
                    petugas1: '',
                    petugas2: '',
                    petugas3: '',
                    petugas4: '',
                    surattugas: null,
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
    formData.value.surattugas = file; // Ensure the file is correctly assigned
};

const submitForm = async () => {
    const form = new FormData();
    form.append('no_doc', formData.value.no_doc);
    form.append('tanggal', formData.value.tanggal);
    form.append('title', formData.value.title);
    form.append('note', formData.value.note);
    form.append('petugas1', formData.value.petugas1);
    form.append('petugas2', formData.value.petugas2);
    form.append('petugas3', formData.value.petugas3);
    form.append('petugas4', formData.value.petugas4);
    form.append('id_docs', formData.value.id_docs); 

    if (formData.value.surattugas) {
        form.append('surattugas', formData.value.surattugas); // Append the file if it exists
    } else {
        console.warn('No file selected for surattugas');
    }

    try {
        const response = await $axios.post('/form/addform', form, {
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

<style scoped>
.shadow-xl {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>


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
                        <label for="nama_penerima" class="mb-2 text-lg font-semibold">Nama Petugas 2</label>
                        <input type="text" id="nama_penerima" v-model="formData.petugas2"
                            class="rounded-lg bg-gray-100 border border-gray-300" />
                    </div>
                    <div class="flex flex-col w-[500px] py-4">
                        <label for="jenis_bantuan" class="mb-2 text-lg font-semibold">Nama Petugas 4</label>
                        <input type="text" id="jenis_bantuan" v-model="formData.petugas4" 
                            class="rounded-lg bg-gray-100 border border-gray-300" />
                    </div>
                </div>

                <div>
                    <div class="flex flex-col w-[500px] py-4">
                        <label for="judul_dokumen" class="mb-2 text-lg font-semibold">Judul Dokumen</label>
                        <input type="text" id="judul_dokumen" v-model="formData.title" readonly
                            class="rounded-lg bg-gray-100 border border-gray-300" />
                    </div>
                    <div class="flex flex-col w-[500px] py-4">
                        <label for="nama_penanggung_jawab" class="mb-2 text-lg font-semibold">Nama Petugas 1</label>
                        <input type="text" id="nama_penanggung_jawab" v-model="formData.petugas1" 
                            class="rounded-lg bg-gray-100 border border-gray-300" />
                    </div>
                    <div class="flex flex-col w-[500px] py-4">
                        <label for="sumber_dana" class="mb-2 text-lg font-semibold">Nama Petugas 3</label>
                        <input type="text" id="sumber_dana" v-model="formData.petugas3" 
                            class="rounded-lg bg-gray-100 border border-gray-300" />
                    </div>
                    <div class="flex flex-col w-[500px] py-4">
                        <label for="surat_tugas" class="mb-2 text-lg font-semibold">Surat Tugas</label>
                        <input id="surat_tugas" type="file" @change="handleFileChange()"
                            class="rounded-lg bg-gray-50 border-2 border-gray-300" />
                    </div>
                </div>
            </div>

            <div class="py-6">
                <button @click="submitForm"
                    class="bg-green-500 text-white border-2 rounded-xl px-10 py-2">Simpan</button>
            </div>
        </section>
    </MainLayoutDinas>
</template> -->



<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useDashboardDinasStore } from '~/stores/adminDinas/dashboardDinas';
import MainLayoutDinas from '~/layouts/MainLayoutDinas.vue';
import axios from '~/plugins/axios';

const $axios = axios().provide.axios;

const route = useRoute();
const dashboardStore = useDashboardDinasStore();

const formData = ref({
    no_doc: '',
    title: '',
    surattugas: null,  // Initialize as null to properly handle file uploads
    note: '',
    tanggal: '',
    petugas1: '',
    petugas2: '',
    petugas3: '',
    petugas4: '',
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
                    title: document.title,
                    note: '',
                    petugas1: '',
                    petugas2: '',
                    petugas3: '',
                    petugas4: '',
                    surattugas: null, // Initialize surattugas as null
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
    formData.value.surattugas = file; // Assign the file to surattugas in formData
};

const submitForm = async () => {
    const form = new FormData();
    form.append('no_doc', formData.value.no_doc);
    form.append('tanggal', formData.value.tanggal);
    form.append('title', formData.value.title);
    form.append('note', formData.value.note);
    form.append('petugas1', formData.value.petugas1);
    form.append('petugas2', formData.value.petugas2);
    form.append('petugas3', formData.value.petugas3);
    form.append('petugas4', formData.value.petugas4);
    form.append('id_docs', formData.value.id_docs);

    if (formData.value.surattugas) {
        form.append('surattugas', formData.value.surattugas); // Append the file if it exists
    } else {
        console.warn('No file selected for surattugas');
    }

    try {
        const response = await $axios.post('http://100.123.244.133:8000/form/addform', form, {
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

<style scoped>
.shadow-xl {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>

<template>
    <MainLayoutDinas>
        <section class="h-screen flex flex-col justify-start items-center bg-white mt-32 md:mt-32">
            <div class="flex flex-row justify-center items-center gap-5 md:gap-10">

                <div class="grid md:grid-cols-2 gap-6 px-8 md:px-20">
                    <div class="flex flex-col w-[500px] py-4">
                        <label for="no_doc" class="mb-2 text-lg font-semibold">No Dokumen</label>
                        <input type="text" id="no_doc" v-model="formData.no_doc" readonly
                            class="rounded-lg bg-gray-100 border border-gray-300" />
                    </div>

                    <div class="flex flex-col w-[500px] py-4">
                        <label for="judul_dokumen" class="mb-2 text-lg font-semibold">Judul Dokumen</label>
                        <input type="text" id="judul_dokumen" v-model="formData.title" readonly
                            class="rounded-lg bg-gray-100 border border-gray-300" />
                    </div>

                    <div class="flex flex-col w-[500px] py-4">
                        <label for="tanggal" class="mb-2 text-lg font-semibold">Tanggal</label>
                        <input id="tanggal" type="text" v-model="formData.tanggal" readonly
                            class="rounded-lg bg-gray-50 w-full border-2 border-gray-300" />
                    </div>

                    <div class="flex flex-col w-[500px] py-4">
                        <label for="nama_penanggung_jawab" class="mb-2 text-lg font-semibold">Nama Petugas 1</label>
                        <input type="text" id="nama_penanggung_jawab" v-model="formData.petugas1"
                            class="rounded-lg bg-gray-100 border border-gray-300" />
                    </div>

                    <div class="flex flex-col w-[500px] py-4">
                        <label for="nama_penerima" class="mb-2 text-lg font-semibold">Nama Petugas 2</label>
                        <input type="text" id="nama_penerima" v-model="formData.petugas2"
                            class="rounded-lg bg-gray-100 border border-gray-300" />
                    </div>

                    <div class="flex flex-col w-[500px] py-4">
                        <label for="sumber_dana" class="mb-2 text-lg font-semibold">Nama Petugas 3</label>
                        <input type="text" id="sumber_dana" v-model="formData.petugas3"
                            class="rounded-lg bg-gray-100 border border-gray-300" />
                    </div>

                    <div class="flex flex-col w-[500px] py-4">
                        <label for="jenis_bantuan" class="mb-2 text-lg font-semibold">Nama Petugas 4</label>
                        <input type="text" id="jenis_bantuan" v-model="formData.petugas4"
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
                <button @click="submitForm"
                    class="bg-green-500 text-white border-2 rounded-xl px-10 py-2">Simpan</button>
            </div>
        </section>
    </MainLayoutDinas>
</template>
