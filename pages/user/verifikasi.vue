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
            <button @click="printPDF" class="bg-green-500 text-white border-2 rounded-xl px-10 py-2">Download Surat Tugas</button>
        </div>
    </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from "../plugins/axios";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
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

        const formateDate = (date) => {
            if (!date) return '';

            const d = new Date(date);
            return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
        }

        const getData = async () => {
            try {
                const id_users = localStorage.getItem('id_users');

                if (id_users) {
                    const response = await $axios.get(`/form/form/?id_users=${id_users}`);
                    const data = response.data.data;

                    const latestData = data[data.length - 1];

                    formData.value = {
                        title: latestData.title || "",
                        tanggal: formateDate(latestData.tanggal) || "",
                        petugas1: latestData.petugas1 || "",
                        petugas2: latestData.petugas2 || "",
                        petugas3: latestData.petugas3 || "",
                        petugas4: latestData.petugas4 || "",
                        catatan_revisi: latestData.note || ""
                    };
                } else {
                    console.error('User ID not found in local storage');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const printPDF = () => {
            const pdf = new jsPDF('p', 'mm', 'a4');
            const kopImage = '/KOPPTabalong.png'; // Ganti dengan path atau URL gambar kop surat
            pdf.addImage(kopImage, 'PNG', -10.5, 5, 230, 30); 
            const startY = 40;

            const tableData = [
                ['Judul Proposal', formData.value.title],
                ['Tanggal', formData.value.tanggal],
                ['Nama Petugas 1', formData.value.petugas1],
                ['Nama Petugas 2', formData.value.petugas2],
                ['Nama Petugas 3', formData.value.petugas3],
                ['Nama Petugas 4', formData.value.petugas4],
                ['Catatan Verifikasi', formData.value.catatan_revisi],
            ];

            pdf.autoTable({
                head: [['Kolom', 'Data yang Diperoleh']],
                body: tableData,
                startY: startY,
                theme: 'grid',
                margin: { top: 10, right: 10, bottom: 10, left: 10 },
                headStyles: {
                    fillColor: [0, 100, 0],
                    textColor: [255, 255, 255],
                    fontSize: 12,
                }
            });

            const fileName = `Verifikasi Lapangan - ${formData.value.title}.pdf`;
            pdf.save(fileName);
        };

        onMounted(() => {
            getData();
        });

        return {
            formData,
            printPDF,
        };
    }
};
</script>
