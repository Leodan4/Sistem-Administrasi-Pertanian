<!-- <template>
    <section class="h-screen flex flex-col justify-center items-center bg-white">
        <AdminTopNav></AdminTopNav>
        <div class="text-2xl font-bold mb-10">Progress Dokumen</div>

        <div class="flex flex-col justify-center items-center space-y-10">
            <div class="flex flex-col w-[500px]">
                <label for="judul_proposal_1" class="mb-4 text-xl font-semibold">Judul Proposal</label>
                <input id="judul_proposal_1" type="text" name="judul_proposal" placeholder="Input Judul Proposal"
                    class="rounded-lg bg-gray-50 border-2 border-gray-300" />
            </div>

            <div class="flex flex-col w-[500px]">
                <label for="judul_proposal_2" class="mb-4 text-xl font-semibold">Catatan BPP</label>
                <input id="judul_proposal_2" type="text" name="judul_proposal" placeholder="Input Catatan BPP"
                    class="rounded-lg bg-gray-50 h-20 border-2 border-gray-300" />
            </div>

            <div class="flex flex-col w-[500px]">
                <label for="judul_proposal_3" class="mb-4 text-xl font-semibold">Catatan Dinas</label>
                <input id="judul_proposal_3" type="text" name="judul_proposal" placeholder="Input Catatan Dinas"
                    class="rounded-lg bg-gray-50 h-20 border-2 border-gray-300" />
            </div>

            <div class="flex flex-col w-[500px]">
                <label for="judul_proposal_3" class="mb-4 text-xl font-semibold">Tanggal</label>
                <input id="judul_proposal_3" type="date" name="judul_proposal" placeholder="Input Judul Proposal"
                    class="rounded-lg bg-gray-50 border-2 border-gray-300" />
            </div>

            <div>
                <button class="bg-green-500 text-white border rounded-xl px-10 py-2">Revisi</button>
            </div>

        </div>
    </section>
</template>

<script>
import AdminTopNav from '~/components/admin/TopNav.vue';

export default {
    components: {
        AdminTopNav
    },
    methods: {
        navigateTo(path) {
            this.$router.push(path);
        }
    }
};
</script>

<style scoped>
.shadow-xl {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style> -->




<template>
    <section class="h-screen flex flex-col justify-center items-center bg-white">
        <AdminTopNav></AdminTopNav>
        <div class="text-2xl font-bold mb-10">Progress Dokumen</div>

        <div class="flex flex-col justify-center items-center space-y-10">
            <div class="flex flex-col w-[500px]">
                <label for="judul_proposal_1" class="mb-4 text-xl font-semibold">Judul Proposal</label>
                <input id="judul_proposal_1" type="text" name="judul_proposal" placeholder="Input Judul Proposal"
                    class="rounded-lg bg-gray-50 border-2 border-gray-300" v-model="documentData.title" />
            </div>

            <div class="flex flex-col w-[500px]">
                <label for="judul_proposal_2" class="mb-4 text-xl font-semibold">Catatan BPP</label>
                <input id="judul_proposal_2" type="text" name="judul_proposal" placeholder="Input Catatan BPP"
                    class="rounded-lg bg-gray-50 h-20 border-2 border-gray-300" v-model="documentData.catatan_bpp" />
            </div>

            <div class="flex flex-col w-[500px]">
                <label for="judul_proposal_3" class="mb-4 text-xl font-semibold">Catatan Dinas</label>
                <input id="judul_proposal_3" type="text" name="judul_proposal" placeholder="Input Catatan Dinas"
                    class="rounded-lg bg-gray-50 h-20 border-2 border-gray-300" v-model="documentData.catatan_dinas" />
            </div>

            <div class="flex flex-col w-[500px]">
                <label for="judul_proposal_3" class="mb-4 text-xl font-semibold">Tanggal</label>
                <input id="judul_proposal_3" type="date" name="judul_proposal" placeholder="Input Judul Proposal"
                    class="rounded-lg bg-gray-50 border-2 border-gray-300" v-model="documentData.tanggal" />
            </div>

            <div>
                <button class="bg-green-500 text-white border rounded-xl px-10 py-2">Revisi</button>
            </div>

        </div>
    </section>
</template>

<script>
import AdminTopNav from '~/components/admin/TopNav.vue';
import { useDashboardBPPStore } from '~/stores/adminBPP/dashboardBPP';

export default {
    components: {
        AdminTopNav
    },
    data() {
        return {
            documents: {
                title: "",
                catatan_bpp: "",
                catatan_dinas: "",
                createdAt: "",
            }
        };
    },
    async mounted() {
        const dashboardBPPStore = useDashboardBPPStore();
        try {
            const userId = localStorage.getItem('userID');
            await dashboardBPPStore.getAllDocuments();

            if (userId) {
                const response = await dashboardBPPStore.getAllDocuments();

                // Pastikan response.data adalah array
                if (Array.isArray(response.data)) {
                    // Filter documents based on id_users
                    const filteredDocuments = response.data.filter(doc => doc.id_users === parseInt(userId));

                    if (filteredDocuments.length > 0) {
                        // Assign filtered documents to this.documents
                        this.documents = filteredDocuments[0]; // Ambil dokumen pertama jika sesuai
                    } else {
                        this.$message.info('Tidak ada data baru');
                    }
                } else {
                    console.error('Expected an array but got:', response.data);
                    this.$message.error('Data yang diterima dari API tidak sesuai format yang diharapkan.');
                }
            } else {
                this.$message.error('User ID tidak ditemukan di localStorage');
            }
        } catch (error) {
            console.error("Error fetching document data:", error);
        }
    }
};
</script>

<style scoped>
.shadow-xl {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>
