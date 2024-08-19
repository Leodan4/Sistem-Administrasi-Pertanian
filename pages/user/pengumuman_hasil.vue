<template>
    <section class="h-screen flex flex-col justify-center items-center bg-white">
        <Header2></Header2>
        <div class="text-2xl font-bold mb-10">Verifikasi Lapangan</div>

        <div class="flex flex-row justify-center items-center gap-10 ">
            <div class="">
                <div class="flex flex-col w-[500px] py-4">
                    <label for="no_doc" class="mb-2 text-lg font-semibold">No Dokumen</label>
                    <input id="no_doc" type="text" name="no_doc" placeholder="Input No Dokumen"
                        class="rounded-lg bg-gray-50  border-2   border-gray-300" />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="penerima" class="mb-2 text-lg font-semibold">Nama Penerima</label>
                    <input id="penerima" type="text" name="penerima" placeholder="Input Nama Penerima"
                        class="rounded-lg bg-gray-50  border-2   border-gray-300" />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="bantuan" class="mb-2 text-lg font-semibold">Jenis Bantuan</label>
                    <input id="bantuan" type="text" name="bantuan" placeholder="Input Jenis Bantuan"
                        class="rounded-lg bg-gray-50  border-2   border-gray-300" />
                </div>
            </div>

            <div class="">
                <div class="flex flex-col w-[500px] py-4">
                    <label for="judul_doc" class="mb-2 text-lg font-semibold">Judul Dokumen</label>
                    <input id="judul_doc" type="text" name="judul_doc" placeholder="Input Judul Dokumen"
                        class="rounded-lg bg-gray-50 w-full  border-2   border-gray-300" />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="penanggung_jawab" class="mb-2 text-lg font-semibold">Nama Penanggung Jawab</label>
                    <input id="penanggung_jawab" type="text" name="penanggung_jawab" placeholder="Input Nama Penanggung Jawab"
                        class="rounded-lg bg-gray-50  border-2   border-gray-300" />
                </div>

                <div class="flex flex-col w-[500px] py-4">
                    <label for="sumber_daya" class="mb-2 text-lg font-semibold">Sumber Daya</label>
                    <input id="sumber_daya" type="text" name="sumber_daya" placeholder="Input Sumber DayaN"
                        class="rounded-lg bg-gray-50  border-2   border-gray-300" />
                </div>
            </div>
        </div>

        <div class="py-6">
            <button class="bg-green-500 text-white border-2 rounded-xl px-10 py-2">Download Surat Serah Terima</button>
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
