<template>
    <section class="h-screen flex flex-col justify-center items-center bg-white mt-0 md:mt-0 sm:mt-0">
        <Header></Header>

        <div class="flex flex-col justify-center items-center w-full px-12 sm:px-8 md:px-16 lg:px-32 xl:px-64 gap-6">
            <div 
                v-for="item in navigation" 
                :key="item.url"
                @click="navigateTo(item.url)" 
                class="flex flex-row items-center justify-between gap-6 py-4 px-6 w-full bg-white rounded-xl shadow-xl border-4 cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out">
                <div class="flex flex-row items-center gap-6">
                    <Icon :icon="item.icon" color="#0E9F6E" :height="32" />
                    <p class="font-semibold text-lg">{{ item.title }}</p>
                </div>
                <div>
                    <Icon :icon="item.icons" color="#0E9F6E" :height="32" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "../plugins/axios";
import { ref, onMounted } from "vue";
import Header from "~/components/user/header.vue";
import { Icon } from '@iconify/vue';
// import { color } from "html2canvas/dist/types/css/types/color";

const $axios = axios().provide.axios;

export default {
    components: {
        Header,
        Icon,
    },

    setup() {
        const loginData = ref(null);
        const id_users = ref(localStorage.getItem("id_users"));
        console.log(id_users.value);

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
                    icons: "flowbite:chevron-right-outline",
                },
                {
                    url: "/user/progress_dokumen/",
                    icon: "octicon:hourglass-16",
                    title: "Progres Dokumen",
                    icons: "flowbite:chevron-right-outline",
                },
                {
                    url: "/user/revisi_dokumen/",
                    icon: "flowbite:file-pen-outline",
                    title: "Revisi Dokumen",
                    icons: "flowbite:chevron-right-outline",
                },
                {
                    url: "/user/pengumuman_hasil/",
                    icon: "flowbite:file-copy-outline",
                    title: "Pengumuman Hasil",
                    icons: "flowbite:chevron-right-outline",
                },
                {
                    url: "/user/verifikasi/",
                    icon: "flowbite:clipboard-check-outline",
                    title: "Verifikasi Lapangan",
                    icons: "flowbite:chevron-right-outline",
                },
                {
                    url: "/user/dokumentasi/",
                    icon: "entypo:image",
                    title: "Dokumentasi",
                    icons: "flowbite:chevron-right-outline",
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