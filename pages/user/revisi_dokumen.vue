<template>
    <section class="h-screen flex flex-col justify-start items-center bg-white mt-32 md:mt-32">
        <Header2></Header2>
        <div class="text-2xl font-bold mb-10">Revisi Dokumen</div>

        <div class="flex flex-col justify-center items-center gap-5 md:gap-10">

            <div class="flex flex-col w-screen px-8 md:px-96">
                <label for="judul_proposal_1" class="mb-4 text-xl font-semibold">Judul Proposal</label>
                <input id="judul_proposal_1" type="text" name="judul_proposal" placeholder="Input Judul Proposal"
                    class="rounded-lg bg-gray-50 border-2 border-gray-300" v-model="documentData.judul_proposal" />
            </div>

            <div class="flex flex-col w-screen px-8 md:px-96">
                <label for="judul_proposal_2" class="mb-4 text-xl font-semibold">Catatan Revisi</label>
                <input id="judul_proposal_2" type="text" name="judul_proposal" placeholder="Input Catatan Revisi"
                    class="rounded-lg bg-gray-50 h-20 border-2 border-gray-300" v-model="documentData.catatan_revisi" />
            </div>

            <div class="flex flex-col w-screen px-8 md:px-96">
                <label for="judul_proposal_3" class="mb-4 text-xl font-semibold">Tanggal</label>
                <input id="judul_proposal_3" type="date" name="judul_proposal" placeholder="Input Judul Proposal"
                    class="rounded-lg bg-gray-50 border-2 border-gray-300" v-model="documentData.tanggal" />
            </div>

            <div>
                <button class="bg-green-500 text-white border rounded-xl px-10 py-2">Reupload Dokumen</button>
            </div>

        </div>
    </section>
</template>

<script setup>
import Header2 from '~/components/user/header_2.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useDashboardDinasStore } from '~/stores/adminDinas/dashboardDinas';

const router = useRouter();

// Store instance
const dashboardStore = useDashboardDinasStore();

const documentData = ref({
    judul_proposal: '',
    catatan_revisi: '',
    tanggal: ''
});

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
            documentData.value.catatan_revisi = fetchedData.catatan_revisi || '';
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
