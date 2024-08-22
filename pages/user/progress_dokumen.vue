<!-- <template>
    <section class="h-screen flex flex-col justify-start items-center bg-white mt-32 md:mt-32">
        <Header2 />
        <div class="text-2xl font-bold mb-10">Progress Dokumen</div>

        <div class="flex flex-col justify-center items-center gap-5 md:gap-10">

            <div class="flex flex-col w-screen px-8 md:px-96">
                <label for="judul_proposal_1" class="mb-2 md:mb-4 text-xl font-semibold">Judul Proposal</label>
                <input id="judul_proposal_1" type="text" name="judul_proposal" placeholder="Input Judul Proposal"
                    class="rounded-lg bg-gray-50 border-2 border-gray-300" v-model="documentData" />
            </div>

            <div class="flex flex-col w-screen px-8 md:px-96">
                <label for="judul_proposal_2" class="mb-2 md:mb-4 text-xl font-semibold">Catatan BPP</label>
                <textarea id="judul_proposal_2" type="text" name="judul_proposal" placeholder="Input Catatan BPP"
                    class="rounded-lg bg-gray-50 border-2 border-gray-300" v-model="documentData">
                </textarea>
            </div>

            <div class="flex flex-col w-screen px-8 md:px-96">
                <label for="judul_proposal_3" class="mb-2 md:mb-4 text-xl font-semibold">Catatan Dinas</label>
                <textarea id="judul_proposal_3" type="text" name="judul_proposal" placeholder="Input Catatan Dinas"
                    class="rounded-lg bg-gray-50 border-2 border-gray-300" v-model="documentData">
                </textarea>
            </div>

            <div class="flex flex-col w-screen px-8 md:px-96">
                <label for="judul_proposal_3" class="mb-2 md:mb-4 text-xl font-semibold">Tanggal</label>
                <input id="judul_proposal_3" type="date" name="judul_proposal" placeholder="Input Judul Proposal"
                    class="rounded-lg bg-gray-50 border-2 border-gray-300" v-model="documentData" />
            </div>

            <div>
                <button class="bg-green-500 text-white border rounded-xl px-10 py-2">Revisi</button>
            </div>

        </div>
    </section>
</template>

<script setup>
import Header2 from '~/components/user/header_2.vue';
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useDashboardDinasStore } from '~/stores/adminDinas/dashboardDinas';

const router = useRouter(); 
const dashboardStore = useDashboardDinasStore();

const fetchDocuments = async (page = 1) => {
    try {
        await dashboardStore.getAllDocuments(page);
        console.log("Documents after fetch:", documents.value);  // Log the documents after fetch
    } catch (error) {
        console.error('Failed to fetch documents:', error);
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
</style> -->



<template>
    <section class="h-screen flex flex-col justify-start items-center bg-white mt-32 md:mt-32">
        <Header2 />
        <div class="text-2xl font-bold mb-10">Progress Dokumen</div>

        <div class="flex flex-col justify-center items-center gap-5 md:gap-10">
            <div class="flex flex-col w-screen px-8 md:px-96">
                <label for="judul_proposal_1" class="mb-2 md:mb-4 text-xl font-semibold">Judul Proposal</label>
                <input id="judul_proposal_1" type="text" name="judul_proposal" placeholder="Input Judul Proposal"
                    class="rounded-lg bg-gray-50 border-2 border-gray-300" v-model="documentData.judul_proposal" />
            </div>

            <div class="flex flex-col w-screen px-8 md:px-96">
                <label for="catatan_bpp" class="mb-2 md:mb-4 text-xl font-semibold">Catatan BPP</label>
                <textarea id="catatan_bpp" name="catatan_bpp" placeholder="Input Catatan BPP"
                    class="rounded-lg bg-gray-50 border-2 border-gray-300"
                    v-model="documentData.catatan_bpp"></textarea>
            </div>

            <div class="flex flex-col w-screen px-8 md:px-96">
                <label for="catatan_dinas" class="mb-2 md:mb-4 text-xl font-semibold">Catatan Dinas</label>
                <textarea id="catatan_dinas" name="catatan_dinas" placeholder="Input Catatan Dinas"
                    class="rounded-lg bg-gray-50 border-2 border-gray-300"
                    v-model="documentData.catatan_dinas"></textarea>
            </div>

            <div class="flex flex-col w-screen px-8 md:px-96">
                <label for="tanggal" class="mb-2 md:mb-4 text-xl font-semibold">Tanggal</label>
                <input id="tanggal" type="date" name="tanggal" placeholder="Input Tanggal"
                    class="rounded-lg bg-gray-50 border-2 border-gray-300" v-model="documentData.tanggal" />
            </div>

            <div>
                <button class="bg-green-500 text-white border rounded-xl px-10 py-2">Revisi</button>
            </div>
        </div>
    </section>
</template>

<script setup>
import Header2 from '~/components/user/header_2.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useDashboardDinasStore } from '~/stores/adminDinas/dashboardDinas';    

// Router instance
const router = useRouter();

// Store instance
const dashboardStore = useDashboardDinasStore();

// Reactive object to hold the document data
const documentData = ref({
    judul_proposal: '',
    catatan_bpp: '',
    catatan_dinas: '',
    tanggal: ''
});

// Function to fetch documents based on user ID and populate input fields
const fetchDocuments = async (page = 1) => {
    const userId = localStorage.getItem('userID'); // Retrieve userID from local storage
    if (!userId) {
        console.error('User ID not found in local storage');
        return;
    }

    try {
        await dashboardStore.getAllDocuments(page, 5, null, null); // Fetch all documents
        const fetchedData = dashboardStore.data?.find(doc => doc.id_users === parseInt(userId)); // Find document by userID
        if (fetchedData) {
            documentData.value.judul_proposal = fetchedData.title || '';
            documentData.value.catatan_bpp = fetchedData.note || '';
            documentData.value.catatan_dinas = fetchedData.catatan_revisi || '';
            documentData.value.tanggal = dashboardStore.formatDate(fetchedData.createdAt) || '';
        }
    } catch (error) {
        console.error('Failed to fetch documents:', error);
    }
};

// Fetch the documents when the component is mounted
onMounted(() => {
    fetchDocuments();
});
</script>

<style scoped>
.shadow-xl {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>