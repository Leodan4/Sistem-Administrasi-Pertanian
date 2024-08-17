<template>
    <MainLayoutDinas>
        <div class="w-full mt-20 text-black px-8">
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

            <div class="flex flex-col w-full pt-10">
                <label for="status text-black font-semibold">Pilih Status</label>
                <select name="status" id="status" class="bg-gray-100 border border-gray-300 rounded-lg">
                    <option value="" disabled selected>Pilih Jenis Bantuan</option>
                    <option value="gabang">Baru</option>
                    <option value="gudang">Valid BPP</option>
                    <option value="sumur_bor">Revisi</option>
                    <option value="saluran_irigasi">Tidak Valid</option>
                </select>

            </div>

            <div class="my-5 w-full border rounded-lg bg-white shadow-sm">
                <div class="bg-gray-100 border-b-2 border-gray-200 p-3">
                    <h3 class="text-md font-semibold text-gray-600">Catatan</h3>
                </div>
                <div class="p-4">
                    <textarea
                        class="w-full h-24 bg-gray-50 border border-gray-300 rounded-lg p-2 text-sm text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Input text"></textarea>
                </div>
            </div>

            <div class="flex gap-4 justify-end">
                <button class="border-2 border-green-500 text-green-500 rounded-xl px-6 py-2">Revisi</button>
                <button class="bg-green-500 text-white border rounded-xl px-6 py-2">Lanjutkan</button>
            </div>

        </div>
    </MainLayoutDinas>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useDashboardDinasStore } from '~/stores/adminDinas/dashboardDinas';
import MainLayoutDinas from '~/layouts/MainLayoutDinas.vue';
import Table from "~/components/global/table.vue";

const route = useRoute();
const router = useRouter();
const dashboardStore = useDashboardDinasStore();

const tableHeader = ref([
    "Kelengkapan Dokumen",
    "Info",
    "Aksi"
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