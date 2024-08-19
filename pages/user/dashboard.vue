<template>
    <section class="h-screen flex flex-col justify-center items-center bg-white mt-64 md:mt-0 sm:mt-0">
        <Header > </Header>

        <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-4">
            <div @click="navigateTo(item.url)" v-for="item in navigation"
                class="flex flex-col items-center justify-center gap-2 p-8 h-full bg-white rounded-xl shadow-xl border-4">
                <Icon :icon="item.icon" color="#0E9F6E" :height="64" />
                <p class="font-semibold text-center">{{ item.title }}</p>
            </div>
        </div>



    </section>
</template>

<script>
import axios from "../plugins/axios";
import { ref, onMounted } from "vue";
import Header from "~/components/user/header.vue";
import { Icon } from '@iconify/vue';

const $axios = axios().provide.axios;

export default {
    components: {
        Header,
        Icon,
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

    data() {
        return {
            navigation: [
                {
                    url: "/user/upload_dokumen/",
                    icon: "ph:upload-bold",
                    title: "Upload Dokumen",
                },
                {
                    url: "/user/progress_dokumen/",
                    icon: "octicon:hourglass-16",
                    title: "Progres Dokumen",
                },
                {
                    url: "/user/revisi_dokumen/",
                    icon: "flowbite:file-pen-outline",
                    title: "Revisi Dokumen",
                },
                {
                    url: "/user/pengumuman_hasil/",
                    icon: "flowbite:file-copy-outline",
                    title: "Pengumuman Hasil",
                },
                {
                    url: "/user/verifikasi/",
                    icon: "flowbite:clipboard-check-outline",
                    title: "Verifikasi Lapangan",
                },
                {
                    url: "/user/dokumentasi/",
                    icon: "entypo:image",
                    title: "Dokumentasi",
                }
            ]
        };
    },
};
</script>

<style scoped>
.shadow-xl {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>