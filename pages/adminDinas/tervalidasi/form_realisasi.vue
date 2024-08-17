<template>
            <MainLayoutDInas>
                <section class="h-screen flex flex-col justify-center items-center bg-white">



<div class="flex flex-row justify-center items-center gap-10 ">
    <div class="">
        <div class="flex flex-col w-[500px] py-4">
            <label for="no_doc" class="mb-2 text-lg font-semibold">No Dokumen</label>
            <input id="no_doc" type="text" name="no_doc" placeholder="Input No Dokumen"
                class="rounded-lg bg-gray-50  border-2   border-gray-300" />
        </div>
                <div class="flex flex-col w-[500px] py-4">
                    <label for="tanggal" class="mb-2 text-lg font-semibold">Tanggal</label>
                    <input id="tanggal" type="date" name="tanggal" placeholder=""
                        class="rounded-lg bg-gray-50 w-full  border-2   border-gray-300" />
                </div>

        <div class="flex flex-col w-[500px] py-4">
            <label for="nama_petugas_2" class="mb-2 text-lg font-semibold">Nama Petugas 2</label>
            <input id="nama_petugas_2" type="text" name="nama_petugas_2" placeholder="Input Nama Petugas 2"
                class="rounded-lg bg-gray-50  border-2   border-gray-300" />
        </div>

        <div class="flex flex-col w-[500px] py-4">
            <label for="nama_petugas_4" class="mb-2 text-lg font-semibold">Nama Petugas 4</label>
            <input id="nama_petugas_4" type="text" name="nama_petugas_4" placeholder="Input Nama Petugas 2"
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
            <label for="nama_petugas_1" class="mb-2 text-lg font-semibold">Nama Petugas 1</label>
            <input id="nama_petugas_1" type="text" name="nama_petugas_1" placeholder="Input Nama Petugas"
                class="rounded-lg bg-gray-50  border-2   border-gray-300" />
        </div>

        <div class="flex flex-col w-[500px] py-4">
            <label for="nama_petugas_3" class="mb-2 text-lg font-semibold">Nama Petugas 3</label>
            <input id="nama_petugas_3" type="text" name="nama_petugas_3" placeholder="Input Nama Petugas"
                class="rounded-lg bg-gray-50  border-2   border-gray-300" />
        </div>

        <div class="flex flex-col w-[500px] py-4">
            <label for="surat_tugas" class="mb-2 text-lg font-semibold">Surat Tugas</label>
            <input id="nama_petugas_3" type="file" name="nama_petugas_3" placeholder="Input Nama Petugas"
                class="rounded-lg bg-gray-50  border-2   border-gray-300" />
        </div>
    </div>
</div>

<div class="py-6">
    <button class="bg-green-500 text-white border-2 rounded-xl px-10 py-2">Simpan</button>
</div>
</section>
</MainLayoutDInas>
</template>

<script setup>
    import AdminTopNav from '~/components/admin/TopNav.vue';
    import MainLayoutDInas from '~/layouts/MainLayoutDinas.vue';
    import { useTervalidasiDinasStore } from '/stores/adminDinas/tervalidasiDinas';
    </script>

    <style scoped>
    .shadow-xl {
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    }
    </style>
