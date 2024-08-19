<template>
    <section class="h-screen flex flex-col justify-start items-center bg-white mt-40 md:mt-32">
        <Header2 />
        <div class="text-2xl font-bold mb-10">Verifikasi Lapangan</div>

        <div class="flex flex-col justify-center gap-10">

            <div class=" grid md:grid-cols-2 gap-6">
                <div class="flex flex-col w-[500px] ">
                    <label for="judul_proposal" class="mb-2 text-lg font-semibold">Judul Proposal</label>
                    <input id="judul_proposal" type="text" name="judul_proposal" placeholder="Input Judul Proposal"
                        class="rounded-lg bg-gray-50  border-2   border-gray-300" />
                </div>

                <div class="flex flex-col w-[500px] ">
                    <label for="tanggal" class="mb-2 text-lg font-semibold">Tanggal</label>
                    <input id="tanggal" type="date" name="tanggal" placeholder=""
                        class="rounded-lg bg-gray-50 w-full  border-2   border-gray-300" />
                </div>

                <div class="flex flex-col w-[500px] ">
                    <label for="nama_petugas_1" class="mb-2 text-lg font-semibold">Nama Petugas 1</label>
                    <input id="nama_petugas_1" type="text" name="nama_petugas_1" placeholder="Input Nama Petugas 1"
                        class="rounded-lg bg-gray-50  border-2   border-gray-300" />
                </div>

                <div class="flex flex-col w-[500px] ">
                    <label for="nama_petugas_2" class="mb-2 text-lg font-semibold">Nama Petugas 2</label>
                    <input id="nama_petugas_2" type="text" name="nama_petugas_2" placeholder="Input Nama Petugas 2"
                        class="rounded-lg bg-gray-50  border-2   border-gray-300" />
                </div>

                <div class="flex flex-col w-[500px] ">
                    <label for="nama_petugas_3" class="mb-2 text-lg font-semibold">Nama Petugas 3</label>
                    <input id="nama_petugas_3" type="text" name="nama_petugas_3" placeholder="Input Nama Petugas 3"
                        class="rounded-lg bg-gray-50  border-2   border-gray-300" />
                </div>

                <div class="flex flex-col w-[500px] ">
                    <label for="nama_petugas_4" class="mb-2 text-lg font-semibold">Nama Petugas 4</label>
                    <input id="nama_petugas_4" type="text" name="nama_petugas_4" placeholder="Input Nama Petugas 4"
                        class="rounded-lg bg-gray-50  border-2   border-gray-300" />
                </div>
            </div>

            <div>
                <div class="flex flex-col w-full ">
                    <label for="catatan_verifikasi" class="mb-2 text-lg font-semibold">Catatan Verifikasi</label>
                    <textarea id="catatan_verifikasi" name="catatan_verifikasi" placeholder="Input Catatan Verifikasi"
                        class="rounded-lg bg-gray-50 w-full h-20 resize-none"></textarea>
                </div>
            </div>

        </div>


        <div class="py-6">
            <button class="bg-green-500 text-white border-2 rounded-xl px-10 py-2">Download Surat Tugas</button>
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
