<!-- <template>
    <MainLayoutBPP>
        <div class="w-full mt-20 text-black px-8">

            <div class="flex justify-end mb-4 space-x-4">
                <div class="mb-4">
                    <select v-model="selectedRegion" @change="filterDocuments" id="region"
                        class="w-max border-2 border-[#D1D5DB] rounded-lg text-center">
                        <option disabled selected>Wilayah</option>
                        <option value="">All Regions</option>
                        <option v-for="region in regions" :value="region" :key="region">{{ region }}</option>
                    </select>
                </div>

                <div class="mb-4">
                    <flat-pickr v-model="dateRange" :config="dateConfig" placeholder="Pilih Periode"
                        class="w-max border-2 border-[#D1D5DB] rounded-lg text-center"></flat-pickr>
                </div>
            </div>

            <table class="min-w-full bg-white-800 rounded-xl overflow-hidden">
                <thead class="bg-gray-100 border-2 border-gray-200 text-gray-500">
                    <tr>
                        <th class="py-2 px-4 text-center">No Dokumen</th>
                        <th class="py-2 px-4 text-center">Uraian</th>
                        <th class="py-2 px-4 text-center">Status</th>
                        <th class="py-2 px-4 text-center">Aksi</th>
                    </tr>
                </thead>
                <tbody class="border-2 border-gray-300">
                    <tr v-for="document in filteredDocuments" :key="document.id">
                        <td class="py-2 px-4 text-center text-black font-bold">{{ document.no }}</td>
                        <td class="py-2 px-4 text-center">{{ document.uraian }}</td>
                        <td class="py-2 px-4 text-center">
                            <span
                                :class="{ 'bg-green-100 text-green-700': document.status === 'Valid BPP', 'bg-red-100 text-red-700': document.status !== 'Valid BPP' }"
                                class="font-semibold px-4 py-1 rounded">
                                {{ document.status }}
                            </span>
                        </td>
                        <td class="py-2 px-4 text-center">
                            <button
                                class="bg-[#0E9F6E] hover:bg-green-700 text-white py-1 px-4 rounded">Lihat Rincian</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="flex justify-end mt-8">
                <button
                    class="bg-white hover:bg-[#DEF7EC] text-[#6B7280] hover:text-[#0E9F6E] font-bold py-2 px-3 rounded-l border-2 border-gray-300">Previous</button>
                <button
                    class="bg-white hover:bg-[#DEF7EC] text-[#6B7280] hover:text-[#0E9F6E] font-bold py-2 px-6 rounded-r border-2 border-gray-300">Next</button>
            </div>

            <ModalComponent :isOpen="isModalOpen" :formData="formData" @close="closeModal" />
        </div>
    </MainLayoutBPP>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayoutBPP.vue';
import { ref, watch } from 'vue';
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import MainLayoutBPP from '~/layouts/MainLayoutBPP.vue';
import ModalComponent from '~/pages/adminBPP/arsip-data/detail.vue';

const isModalOpen = ref(false);
const formData = ref({});

const openModal = (row) => {
    const formattedDate = row.createdAt.split('T')[0];

    formData.value = {
        no_doc: row.no_doc,
        title: row.title,
        status: row.status,
        createdAt: formattedDate,
        jenis_bantuan: row.jenis_bantuan,
        deskripsi: row.deskripsi || "-",
    };
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};

const documents = ref([
    { id: 1, no: '#9012', uraian: 'Dokumen Contoh 1', status: 'Valid BPP', date: '2023-05-15' },
    { id: 2, no: '#9013', uraian: 'Dokumen Contoh 2', status: 'Invalid BPP', date: '2023-06-20' },
    { id: 3, no: '#9014', uraian: 'Dokumen Contoh 3', status: 'Valid BPP', date: '2023-07-25' },
    
]);

const dateRange = ref([]);
const dateConfig = {
    mode: 'range',
    dateFormat: 'Y-m-d',
};

const filteredDocuments = ref(documents.value);

const filterByDate = () => {
    if (dateRange.value.length === 2) {
        const [startDate, endDate] = dateRange.value;
        filteredDocuments.value = documents.value.filter(doc => {
            const docDate = new Date(doc.date);
            return docDate >= new Date(startDate) && docDate <= new Date(endDate);
        });
    } else {
        filteredDocuments.value = documents.value;
    }
};

watch(dateRange, filterByDate);
</script>

<style>

</style> -->








<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useDashboardBPPStore } from '~/stores/adminBPP/dashboardBPP';
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import MainLayoutBPP from '~/layouts/MainLayoutBPP.vue';
import Table from "~/components/global/table.vue";
import ModalComponent from "~/pages/adminBPP/arsip-data/detail.vue";

const dashboardStore = useDashboardBPPStore();

const tableHeader = ref([
    "No Dokumen",
    "Uraian",
    "Status",
    "Aksi",
]);

const isModalOpen = ref(false);
const formData = ref({});

const openModal = (row) => {
    const formattedDate = row.createdAt.split('T')[0];

    formData.value = {
        no_doc: row.no_doc,
        title: row.title,
        deskripsi: row.deskripsi || "-",
        status: row.status,
        createdAt: formattedDate,
        jenis_bantuan: row.jenis_bantuan,
        deskripsi: row.deskripsi || "-",
    };
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};

const fetchDocuments = async (page = 1) => {
    try {
        await dashboardStore.getAllDocuments(page);
        console.log("Documents after fetch:", documents.value);
    } catch (error) {
        console.error('Failed to fetch documents:', error);
    }
};


/// Filter
const dateRange = ref([]);
const dateConfig = {
    mode: 'range',
    dateFormat: 'Y-m-d',
};

const filteredDocuments = ref(fetchDocuments.value);

const filterByDate = () => {
    if (dateRange.value.length === 2) {
        const [startDate, endDate] = dateRange.value;
        filteredDocuments.value = documents.value.filter(doc => {
            const docDate = new Date(doc.date);
            return docDate >= new Date(startDate) && docDate <= new Date(endDate);
        });
    } else {
        filteredDocuments.value = documents.value;
    }
};

watch(dateRange, filterByDate);

onMounted(() => {
    fetchDocuments();
});

const documents = computed(() => dashboardStore.data);

const pagination = computed(() => dashboardStore.pagination);
const hasDocuments = computed(() => documents.value.length > 0);
</script>



<template>
    <MainLayoutBPP>
        <div class="w-full mt-20 text-black px-8">
            <div class="flex justify-end mb-4 space-x-4">
                <!-- Region Filter  -->
                <div class="mb-4">
                    <select v-model="selectedRegion" @change="filterDocuments" id="region"
                        class="w-max border-2 border-[#D1D5DB] rounded-lg text-center">
                        <option disabled selected>Wilayah</option>
                        <option value="">All Regions</option>
                        <option v-for="region in regions" :value="region" :key="region">{{ region }}</option>
                    </select>
                </div>

                <!-- Date range filter -->
                <div class="mb-4">
                    <flat-pickr v-model="dateRange" :config="dateConfig" placeholder="Pilih Periode"
                        class="w-max border-2 border-[#D1D5DB] rounded-lg text-center"></flat-pickr>
                </div>
            </div>
            <Table :headers="tableHeader" :rows="documents">
                <template #rows="{ rows }">
                    <tr v-for="(row, index) in rows" :key="index" class="text-sm text-gray-500 border">
                        <td class="py-2 px-6 text-left text-black font-bold">{{ row?.no_doc }}</td>
                        <td class="py-2 px-4 text-left">{{ row?.deskripsi }}</td>
                        <td class="py-2 px-4 text-left">
                            <span :class="{
                                'bg-green-100 text-green-700 font-semibold px-4 py-1 rounded-md capitalize': row?.type_doc === 'validBPP',
                                'bg-purple-100 text-purple-700 font-semibold px-4 py-1 rounded-md capitalize': row?.type_doc === 'baru',
                                'bg-red-100 text-red-800 font-semibold px-4 py-1 rounded-md capitalize': row?.type_doc === 'tidakvalid',
                                'bg-red-100 text-blue-800 font-semibold px-4 py-1 rounded-md capitalize': row?.type_doc === 'revisi',
                            }">
                                {{ row?.type_doc }}
                            </span>
                        </td>
                        <td class="py-2 px-4 text-left">
                            <button @click="openModal(row)"
                                class="bg-[#0E9F6E] hover:bg-green-700 text-white py-1 px-4 rounded-lg">Tinjau
                                Ulang</button>
                        </td>
                    </tr>
                </template>
            </Table>

            <div class="flex justify-end mt-8">
                <button
                    class="bg-white hover:bg-[#DEF7EC] text-[#6B7280] hover:text-[#0E9F6E] font-bold py-2 px-3 rounded-l border-2 border-gray-300">Previous</button>
                <button
                    class="bg-white hover:bg-[#DEF7EC] text-[#6B7280] hover:text-[#0E9F6E] font-bold py-2 px-6 rounded-r border-2 border-gray-300">Next</button>
            </div>

            <ModalComponent :isOpen="isModalOpen" :formData="formData" @close="closeModal" />

        </div>
    </MainLayoutBPP>
</template>
