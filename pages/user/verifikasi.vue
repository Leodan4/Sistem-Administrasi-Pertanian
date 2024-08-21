<template>
    <section class="h-screen flex flex-col justify-start items-center bg-white mt-32 md:mt-32">
        <Header2 />
        <div class="text-2xl font-bold mb-10">Verifikasi Lapangan</div>

        <div class="flex flex-col justify-center items-center gap-5 md:gap-10">

            <div class="grid md:grid-cols-2 gap-6 px-4 md:px-32">
                <div class="flex flex-col w-[350px] md:w-[500px] ">
                    <label for="judul_proposal" class="mb-2 text-lg font-semibold">Judul Proposal</label>
                    <div id="no_doc" class="rounded-lg bg-gray-50 border-2 border-gray-400 p-2 h-11">
                        {{ formData.title }}
                    </div>
                </div>

                <div class="flex flex-col w-[350px] md:w-[500px] ">
                    <label for="tanggal" class="mb-2 text-lg font-semibold">Tanggal</label>
                    <div id="no_doc" class="rounded-lg bg-gray-50 border-2 border-gray-400 p-2 h-11">
                        {{ formData.tanggal }}
                    </div>
                </div>

                <div class="flex flex-col w-[350px] md:w-[500px] ">
                    <label for="nama_petugas_1" class="mb-2 text-lg font-semibold">Nama Petugas 1</label>
                    <div id="no_doc" class="rounded-lg bg-gray-50 border-2 border-gray-400 p-2 h-11">
                        {{ formData.petugas1 }}
                    </div>
                </div>

                <div class="flex flex-col w-[350px] md:w-[500px] ">
                    <label for="nama_petugas_2" class="mb-2 text-lg font-semibold">Nama Petugas 2</label>
                    <div id="no_doc" class="rounded-lg bg-gray-50 border-2 border-gray-400 p-2 h-11">
                        {{ formData.petugas2 }}
                    </div>
                </div>

                <div class="flex flex-col w-[350px] md:w-[500px] ">
                    <label for="nama_petugas_3" class="mb-2 text-lg font-semibold">Nama Petugas 3</label>
                    <div id="no_doc" class="rounded-lg bg-gray-50 border-2 border-gray-400 p-2 h-11">
                        {{ formData.petugas3 }}
                    </div>
                </div>

                <div class="flex flex-col w-[350px] md:w-[500px] ">
                    <label for="nama_petugas_4" class="mb-2 text-lg font-semibold">Nama Petugas 4</label>
                    <div id="no_doc" class="rounded-lg bg-gray-50 border-2 border-gray-400 p-2 h-11">
                        {{ formData.petugas4 }}
                    </div>
                </div>
            </div>

            <div class="w-full px-4 md:px-32">
                <div class="flex flex-col w-full ">
                    <label for="catatan_verifikasi" class="mb-2 text-lg font-semibold">Catatan Verifikasi</label>
                    <div id="no_doc" class="rounded-lg bg-gray-50 border-2 border-gray-400 p-2 h-11">
                        {{ formData.catatan_revisi }}
                    </div>
                </div>
            </div>

        </div>


        <div class="py-6">
            <button class="bg-green-500 text-white border-2 rounded-xl px-10 py-2">Download Surat Tugas</button>
        </div>
    </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from "../plugins/axios";
import Header2 from '~/components/user/header_2.vue';
import { useRouter } from 'vue-router';

const $axios = axios().provide.axios;

export default {
    components: {
        Header2
    },
    setup() {
        const router = useRouter();
        const formData = ref({
            title: "",
            tanggal: "",
            petugas1: "",
            petugas2: "",
            petugas3: "",
            petugas4: "",
            catatan_revisi: "",
        });

        const getData = async () => {
            try {
                const id_users = localStorage.getItem('userID');

                if (id_users) {
                    const response = await $axios.get(`/form/form/?id_users=${id_users}`);
                    const data = response.data.data[0];

                    formData.value = {
                        title: data.title || "",
                        tanggal: data.tanggal || "",
                        petugas1: data.petugas1 || "",
                        petugas2: data.petugas2 || "",
                        petugas3: data.petugas3 || "",
                        petugas4: data.petugas4 || "",
                        catatan_revisi: data.catatan_revisi || ""
                    };
                } else {
                    console.error('User ID not found in local storage');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        onMounted(() => {
            getData();
        });

        const navigateTo = (path) => {
            router.push(path);
        };

        return {
            formData,
            navigateTo
        };
    }
};
</script>

<style scoped>
.shadow-xl {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>
