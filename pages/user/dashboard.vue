<template>
    <section class="h-screen flex flex-col justify-center items-center bg-white ">
        <Header></Header>

        <div class="flex justify-center items-center space-x-4">
            <div @click.prevent="navigateTo('/user/upload_dokumen/')"
                class="flex flex-col items-center justify-center w-60 h-60 bg-white rounded-xl shadow-xl border-4">
                <img src="/public/user/upload-outline.svg" class="mb-8 w-20"></img>
                <p class="font-semibold text-center">Upload Dokumen</p>
            </div>

            <div @click.prevent="navigateTo('/user/progress_dokumen/')"
                class="flex flex-col items-center justify-center w-60 h-60 bg-white rounded-xl shadow-xl border-4">
                <img src="/public/user/hourglass-outline.svg" class="mb-8 w-20"></img>
                <p class="font-semibold text-center">Progres Dokumen</p>
            </div>

            <div @click.prevent="navigateTo('/user/revisi_dokumen/')"
                class="flex flex-col items-center justify-center w-60 h-60 bg-white rounded-xl shadow-xl border-4">
                <img src="/public/user/file-pen-outline.svg" class="mb-8 w-20"></img>
                <p class="font-semibold text-center">Revisi Dokumen</p>
            </div>
        </div>

        <div class="flex justify-center items-center my-10 space-x-4">
            <div @click.prevent="navigateTo('/user/pengumuman_hasil/')"
                class="flex flex-col items-center justify-center w-60 h-60  bg-white rounded-xl shadow-xl border-4">
                <img src="public/user/copy-outline.svg" class="mb-8 w-20"></img>
                <p class="font-semibold text-center">Pengumuman Hasil</p>
            </div>

            <div @click.prevent="navigateTo('/user/verifikasi/')"
                class="flex flex-col items-center justify-center w-60 h-60 bg-white rounded-xl shadow-xl border-4">
                <<img src="public/user/clipboard-check-outline.svg" class="mb-8 w-20"></img>
                    <p class="font-semibold text-center">Verifikasi Lapangan</p>
            </div>

            <div @click.prevent="navigateTo('/user/dokumentasi/')"
                class="flex flex-col items-center justify-center w-60 h-60 bg-white rounded-xl shadow-xl border-4">
                <img src="public/user/image-outline.svg" class="mb-8 w-20"></img>
                <p class="font-semibold text-center">Dokumentasi</p>
            </div>
        </div>

    </section>
</template>

<script>
import axios from "../plugins/axios";
import { ref, onMounted } from "vue";
import Header from "~/components/user/header.vue";

const $axios = axios().provide.axios;

export default {
    components: {
        Header,
    },

    setup() {
        const loginData = ref(null);
        const userID = ref(localStorage.getItem("userID"));
        console.log(userID.value); 

        // const getLoginData = async () => {
        //     try {
        //         const token = localStorage.getItem("token");

        //         if (token) {
        //             const response = await $axios.get("/user/login", {
        //                 headers: {
        //                     Authorization: `Bearer ${token}`,
        //                 },
        //             });
        //             loginData.value = response.data;
        //         } else {
        //             console.error("Token tidak ditemukan di localStorage");
        //         }
        //     } catch (error) {
        //         console.error("Terjadi kesalahan saat mengambil data login:", error);
        //     }
        // };

        // onMounted(() => {
        //     getLoginData();
        // });

        // return {
        //     loginData,
        //     getLoginData,
        // };
    },

    methods: {
        navigateTo(path) {
            this.$router.push(path);
        },
    },
};
</script>

<style scoped>
.shadow-xl {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>