<!-- <template>
    <section class="h-screen flex flex-col justify-start items-center bg-white mt-32 md:mt-32">
        <Header2 />
        <div class="text-2xl font-bold mb-10">Revisi Dokumen</div>

        <div class="flex flex-col justify-center items-center gap-5 md:gap-10">
            <div class="grid md:grid-cols-2 w-full gap-6 px-8 md:px-20">
                <div class="flex flex-col w-full">
                    <label for="judul_proposal_1" class="mb-2 text-lg font-semibold">Judul Proposal</label>
                    <input id="judul_proposal_1" type="text" v-model="documentData.judul_proposal"
                        placeholder="Input Judul Proposal" class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="tanggal" class="mb-2 text-lg font-semibold">Tanggal</label>
                    <input id="tanggal" type="date" v-model="documentData.tanggal"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>
            </div>

            <div class="flex flex-col w-full px-8 md:px-20">
                <label for="catatan_revisi" class="mb-2 text-lg font-semibold">Catatan Revisi</label>
                <input id="catatan_revisi" type="text" v-model="documentData.catatan_revisi"
                    placeholder="Input Catatan Revisi" class="rounded-lg bg-gray-50 border-2 border-gray-400 h-20" />
            </div>

            <div class="grid md:grid-cols-2 gap-6 px-8 md:px-20">
                <div class="flex flex-col w-full">
                    <label for="lembar_persetujuan_kepala_desa" class="mb-2 text-lg font-semibold">Lembar Persetujuan
                        Kepala Desa</label>
                    <input id="lembar_persetujuan_kepala_desa" type="file"
                        @change="handleFileUpload('lembar_persetujuan_kepala_desa', $event)"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="lembar_persetujuan_PPL_Mantri" class="mb-2 text-lg font-semibold">Lembar Persetujuan
                        PPL/Mantri</label>
                    <input id="lembar_persetujuan_PPL_Mantri" type="file"
                        @change="handleFileUpload('lembar_persetujuan_PPL_Mantri', $event)"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="lembar_persetujuan_BPP" class="mb-2 text-lg font-semibold">Lembar Persetujuan
                        BPP</label>
                    <input id="lembar_persetujuan_BPP" type="file"
                        @change="handleFileUpload('lembar_persetujuan_BPP', $event)"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="lembar_persetujuan_kecamatan" class="mb-2 text-lg font-semibold">Lembar Persetujuan
                        Kecamatan</label>
                    <input id="lembar_persetujuan_kecamatan" type="file"
                        @change="handleFileUpload('lembar_persetujuan_kecamatan', $event)"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="sk_pembentukan_kelompok" class="mb-2 text-lg font-semibold">SK Pembentukan
                        Kelompok</label>
                    <input id="sk_pembentukan_kelompok" type="file"
                        @change="handleFileUpload('sk_pembentukan_kelompok', $event)"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="keanggotaan_SIMHULTAN" class="mb-2 text-lg font-semibold">Keanggotaan SIMHULTAN</label>
                    <input id="keanggotaan_SIMHULTAN" type="file"
                        @change="handleFileUpload('keanggotaan_SIMHULTAN', $event)"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="Daftar_anggota_dan_ktp_anggota" class="mb-2 text-lg font-semibold">Daftar Anggota dan
                        KTP Anggota</label>
                    <input id="Daftar_anggota_dan_ktp_anggota" type="file"
                        @change="handleFileUpload('Daftar_anggota_dan_ktp_anggota', $event)"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="Rincian_proposal" class="mb-2 text-lg font-semibold">Rincian Proposal (Luas lahan,
                        komoditas, geo, rincian permohonan)</label>
                    <input id="Rincian_proposal" type="file" @change="handleFileUpload('Rincian_proposal', $event)"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>
            </div>



        </div>

        <div class="py-6">
            <button class="bg-green-500 text-white border rounded-xl px-10 py-2" @click="submitRevisi">Reupload
                Dokumen</button>
        </div>

        <div class="py-6">
            <button class="bg-green-500 text-white border rounded-xl px-10 py-2"
                @click="handleUploadDokumen">Simpan</button>
        </div>
    </section>
</template>

<script setup>
import Header2 from '~/components/user/header_2.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useDashboardDinasStore } from '~/stores/adminDinas/dashboardDinas';
import axios from "../plugins/axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const $axios = axios().provide.axios;

const router = useRouter();
const dashboardStore = useDashboardDinasStore();

const documentData = ref({
    judul_proposal: '',
    catatan_revisi: '',
    tanggal: ''
});

let idDokumen = null;

const fetchDocuments = async (page = 1) => {
    const id_users = localStorage.getItem('id_users'); 
    if (!id_users) {
        console.error('User ID not found in local storage');
        return;
    }

    try {
        await dashboardStore.getAllDocuments(page, 5, null, null); 
        const fetchedData = dashboardStore.data?.find(doc => doc.id_users === parseInt(id_users)); 
        if (fetchedData) {
            idDokumen = fetchedData.id_docs;
            documentData.value.judul_proposal = fetchedData.title || '';
            documentData.value.catatan_revisi = fetchedData.catatan_revisi || '';
            documentData.value.tanggal = dashboardStore.formatDate(fetchedData.createdAt) || '';
        }
    } catch (error) {
        console.error('Failed to fetch documents:', error);
    }
};


const submitRevisi = async () => {
    if (!idDokumen) {
        console.error('Document ID not found');
        return;
    }

    try {
        const response = await $axios.put(`/doc/${idDokumen}`, {
            title: documentData.value.judul_proposal,
            note: documentData.value.catatan_bpp,
            catatan_revisi: documentData.value.catatan_revisi,
            createdAt: documentData.value.tanggal,
            updatedAt: new Date().toISOString()
        });
        console.log('Document updated successfully:', response.data);

        toast.success("Dokumen berhasil direvisi", {

            onClose: () => {
                router.push('/user/dashboard');
            }
        });
    } catch (error) {
        console.error('Failed to update document:', error);
        toast.error("Dokumen gagal direvisi");
    }
};

const handleFileUpload = (fieldName, event) => {
    const file = event.target.files[0];
    if (file) {
        console.log(`File selected for ${fieldName}: ${file.name}`);
    }
};

const handleUploadDokumen = () => {
    console.log('Handle Upload Dokumen');
};

onMounted(() => {
    fetchDocuments();
});
</script> -->








<template>
    <section class="h-screen flex flex-col justify-start items-center bg-white mt-32 md:mt-32">
        <Header2 />
        <div class="text-2xl font-bold mb-10">Revisi Dokumen</div>

        <div class="flex flex-col justify-center items-center gap-5 md:gap-10">
            <div class="grid md:grid-cols-2 w-full gap-6 px-8 md:px-20">
                <!-- Existing fields -->
                <div class="flex flex-col w-full">
                    <label for="judul_proposal_1" class="mb-2 text-lg font-semibold">Judul Proposal</label>
                    <input id="judul_proposal_1" type="text" v-model="documentData.judul_proposal"
                        placeholder="Input Judul Proposal" class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="tanggal" class="mb-2 text-lg font-semibold">Tanggal</label>
                    <input id="tanggal" type="date" v-model="documentData.tanggal"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>
            </div>

            <div class="flex flex-col w-full px-8 md:px-20">
                <label for="catatan_revisi" class="mb-2 text-lg font-semibold">Catatan Revisi</label>
                <input id="catatan_revisi" type="text" v-model="documentData.catatan_revisi"
                    placeholder="Input Catatan Revisi" class="rounded-lg bg-gray-50 border-2 border-gray-400 h-20" />
            </div>

            <div class="grid md:grid-cols-2 gap-6 px-8 md:px-20">
                <div class="flex flex-col w-full">
                    <label for="lembar_persetujuan_kepala_desa" class="mb-2 text-lg font-semibold">Lembar Persetujuan
                        Kepala Desa</label>
                    <input id="lembar_persetujuan_kepala_desa" type="file"
                        @change="handleFileUpload('lembar_persetujuan_kepala_desa', $event)"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="lembar_persetujuan_PPL_Mantri" class="mb-2 text-lg font-semibold">Lembar Persetujuan
                        PPL/Mantri</label>
                    <input id="lembar_persetujuan_PPL_Mantri" type="file"
                        @change="handleFileUpload('lembar_persetujuan_PPL_Mantri', $event)"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="lembar_persetujuan_BPP" class="mb-2 text-lg font-semibold">Lembar Persetujuan
                        BPP</label>
                    <input id="lembar_persetujuan_BPP" type="file"
                        @change="handleFileUpload('lembar_persetujuan_BPP', $event)"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="lembar_persetujuan_kecamatan" class="mb-2 text-lg font-semibold">Lembar Persetujuan
                        Kecamatan</label>
                    <input id="lembar_persetujuan_kecamatan" type="file"
                        @change="handleFileUpload('lembar_persetujuan_kecamatan', $event)"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="sk_pembentukan_kelompok" class="mb-2 text-lg font-semibold">SK Pembentukan
                        Kelompok</label>
                    <input id="sk_pembentukan_kelompok" type="file"
                        @change="handleFileUpload('sk_pembentukan_kelompok', $event)"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="keanggotaan_SIMHULTAN" class="mb-2 text-lg font-semibold">Keanggotaan SIMHULTAN</label>
                    <input id="keanggotaan_SIMHULTAN" type="file"
                        @change="handleFileUpload('keanggotaan_SIMHULTAN', $event)"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="Daftar_anggota_dan_ktp_anggota" class="mb-2 text-lg font-semibold">Daftar Anggota dan
                        KTP Anggota</label>
                    <input id="Daftar_anggota_dan_ktp_anggota" type="file"
                        @change="handleFileUpload('Daftar_anggota_dan_ktp_anggota', $event)"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>

                <div class="flex flex-col w-full">
                    <label for="Rincian_proposal" class="mb-2 text-lg font-semibold">Rincian Proposal (Luas lahan,
                        komoditas, geo, rincian permohonan)</label>
                    <input id="Rincian_proposal" type="file" @change="handleFileUpload('Rincian_proposal', $event)"
                        class="rounded-lg bg-gray-50 border-2 border-gray-400" />
                </div>
            </div>
        </div>

        <div class="py-6">
            <button class="bg-green-500 text-white border rounded-xl px-10 py-2" @click="submitRevisi">Reupload
                Dokumen</button>
        </div>

    </section>
</template>

<script setup>
import Header2 from '~/components/user/header_2.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useDashboardDinasStore } from '~/stores/adminDinas/dashboardDinas';
import axios from "../plugins/axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const $axios = axios().provide.axios;

const router = useRouter();
const dashboardStore = useDashboardDinasStore();

const documentData = ref({
    judul_proposal: '',
    catatan_revisi: '',
    tanggal: '',
    files: {
        lembar_persetujuan_kepala_desa: null,
        lembar_persetujuan_PPL_Mantri: null,
        lembar_persetujuan_BPP: null,
        lembar_persetujuan_kecamatan: null,
        sk_pembentukan_kelompok: null,
        keanggotaan_SIMHULTAN: null,
        Daftar_anggota_dan_ktp_anggota: null,
        Rincian_proposal: null
    }
});

let idDokumen = null;

const fetchDocuments = async (page = 1) => {
    const id_users = localStorage.getItem('id_users'); // Retrieve id_users from local storage
    if (!id_users) {
        console.error('User ID not found in local storage');
        return;
    }

    try {
        await dashboardStore.getAllDocuments(page, 5, null, null); // Fetch all documents
        const fetchedData = dashboardStore.data?.find(doc => doc.id_users === parseInt(id_users)); // Find document by id_users
        if (fetchedData) {
            idDokumen = fetchedData.id_docs;
            documentData.value.judul_proposal = fetchedData.title || '';
            documentData.value.catatan_revisi = fetchedData.catatan_revisi || '';
            documentData.value.tanggal = dashboardStore.formatDate(fetchedData.createdAt) || '';
        }
    } catch (error) {
        console.error('Failed to fetch documents:', error);
    }
};

const submitRevisi = async () => {
    if (!idDokumen) {
        console.error('Document ID not found');
        return;
    }

    const formData = new FormData();
    formData.append('title', documentData.value.judul_proposal);
    formData.append('catatan_revisi', documentData.value.catatan_revisi);
    formData.append('tanggal', documentData.value.tanggal);
    formData.append('id_docs', idDokumen);

    for (const [key, file] of Object.entries(documentData.value.files)) {
        if (file) {
            formData.append(key, file);
        }
    }

    try {
        await $axios.put(`/doc/${idDokumen}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        toast.success('Dokumen updated successfully');
        router.push('/user/dashboard');
    } catch (error) {
        console.error('Error updating document:', error);
        toast.error('Failed to update document');
    }
};

const handleFileUpload = (key, event) => {
    documentData.value.files[key] = event.target.files[0];
};

onMounted(() => {
    fetchDocuments();
});
</script>
