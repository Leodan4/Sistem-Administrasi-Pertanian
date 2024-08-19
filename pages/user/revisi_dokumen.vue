<template>
    <section class="h-screen flex flex-col justify-start items-center bg-white mt-0 md:mt-32">
        <Header2></Header2>
        <div class="text-2xl font-bold mb-10">Revisi Dokumen</div>

        <div class="flex flex-col justify-center items-center gap-10">

            <div class="flex flex-col w-[500px]">
                <label for="judul_proposal_1" class="mb-4 text-xl font-semibold">Judul Proposal</label>
                <input id="judul_proposal_1" type="text" name="judul_proposal" placeholder="Input Judul Proposal"
                    class="rounded-lg bg-gray-50 border-2 border-gray-300" />
            </div>

            <div class="flex flex-col w-[500px]">
                <label for="judul_proposal_2" class="mb-4 text-xl font-semibold">Catatan Revisi</label>
                <input id="judul_proposal_2" type="text" name="judul_proposal" placeholder="Input Catatan Revisi"
                    class="rounded-lg bg-gray-50 h-20 border-2 border-gray-300" />
            </div>

            <div class="flex flex-col w-[500px]">
                <label for="judul_proposal_3" class="mb-4 text-xl font-semibold">Tanggal</label>
                <input id="judul_proposal_3" type="date" name="judul_proposal" placeholder="Input Judul Proposal"
                    class="rounded-lg bg-gray-50 border-2 border-gray-300" />
            </div>

            <div>
                <button class="bg-green-500 text-white border rounded-xl px-10 py-2">Reupload Dokumen</button>
            </div>

        </div>
    </section>
</template>

<script>
import Header2 from '~/components/user/header_2.vue';

export default {
    components: {
        Header2
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
</style>
